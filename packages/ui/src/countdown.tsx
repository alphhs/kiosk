import * as React from 'react';

export type CountDownProps = {
  duration?: number;
  callback?: () => void;
  date?: string | number | Date;
  component?: React.ComponentType<CountDownComponentProps>;
  endComponent?: React.ComponentType<{ date?: string | number | Date; reCount?(): void }>;
};

export interface CountDownComponentProps {
  days: number;
  hours: number;
  min: number;
  sec: number;
  end?: boolean;
  date?: string | number | Date;
  leadingZeros: (val: number | string) => string;
  callback?(): void;
  reCount?(): void;
}

function getEndDate(props: CountDownProps) {
  const endDate = props.date ? new Date(props.date) : new Date();
  endDate.setTime(endDate.getTime() + (props.duration || 0) * 1000);
  return endDate;
}

export class CountDown extends React.Component<CountDownProps> {
  interval?: ReturnType<typeof setInterval>;

  state: {
    days: number;
    hours: number;
    min: number;
    sec: number;
    end?: boolean;
  };

  constructor(props: CountDownProps) {
    super(props);
    const endDate = getEndDate(props);
    const date = calculateCountdown(endDate);
    this.reCount = this.reCount.bind(this);
    this.startCount = this.startCount.bind(this);
    if (date) this.state = { ...date, end: false };
    else this.state = { days: 0, hours: 0, min: 0, sec: 0, end: false };
    if (endDate < new Date() && props.callback) props.callback();
  }

  componentDidMount() {
    // update every second
    this.startCount();
  }

  startCount = () => {
    const endDate = getEndDate(this.props);
    this.interval = setInterval(() => {
      const date = calculateCountdown(endDate);
      const sum = Object.keys(date).reduce((acc, cur) => {
        acc += date[cur as keyof typeof date];
        return acc;
      }, 0);

      if (sum > 0) this.setState({ ...date, end: false });
      else {
        this.callback();
        this.setState({ days: 0, hours: 0, min: 0, sec: 0, end: true });
        this.stop();
      }
    }, 1000);
  };

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    if (!this.interval) return;
    clearInterval(this.interval);
  }

  callback = () => {
    if (!this.props.callback) return;
    this.props.callback();
  };

  reCount = () => this.startCount();

  render() {
    const { days, hours, min, sec, end } = this.state;
    const isEnd = getEndDate(this.props) < new Date();

    if (!this.props.date && !this.props.duration) return null;
    if (isEnd && !!this.props.endComponent)
      return React.createElement(this.props.endComponent, { date: this.props.date, reCount: this.reCount });
    if (isEnd) return null;

    if (this.props.component) {
      return React.createElement(this.props.component, {
        days,
        hours,
        min,
        sec,
        end,
        date: this.props.date,
        leadingZeros: addLeadingZeros,
        callback: this.props.callback,
        reCount: this.reCount,
      });
    }

    return (
      <div className="grid auto-cols-max grid-flow-col items-center justify-center gap-2 text-center">
        <div className="bg-base-200 text-neutral flex flex-col rounded-md p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ ['--value' as string]: addLeadingZeros(min) }} />
          </span>
          мин
        </div>
        <div className="bg-base-200 text-neutral flex flex-col rounded-md p-2">
          <span className="countdown font-mono text-5xl">
            <span style={{ ['--value' as string]: addLeadingZeros(sec) }} />
          </span>
          сек
        </div>
      </div>
    );
  }

  static defaultProps = {
    duration: 0,
    callback: Function.prototype,
  };
}

export type TimeLeftType = {
  years: number;
  days: number;
  hours: number;
  min: number;
  sec: number;
  millisec: number;
};

export const calculateCountdown = (endDate: number | string | Date) => {
  let diff = (new Date(endDate).getTime() - new Date().getTime()) / 1000;

  const timeLeft: TimeLeftType = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  };
  if (diff <= 0) return timeLeft;

  if (diff >= 365.25 * 86400) {
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
};

export const addLeadingZeros = (value?: number | string) => {
  if (!value) return '00';
  let v = String(parseInt(value.toString(), 10));
  while (v.length < 2) {
    v = `0${v}`;
  }
  return v;
};
