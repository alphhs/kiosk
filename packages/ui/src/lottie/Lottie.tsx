'use client';
// import lottieApi from 'lottie-api/dist/lottie_api';
import React, { Component, createRef } from 'react';
import type { AnimationEventCallback, AnimationEventName } from 'lottie-web';
import { AnimationEvents } from 'lottie-web';
import type {
  AnimationConfigWithData,
  AnimationDirection,
  AnimationItem,
  AnimationSegment,
} from 'lottie-web/build/player/lottie_light';

export interface LottieProps {
  eventListeners?: Array<AnimationEvent>;
  options?: Partial<AnimationConfigWithData>;
  height?: string | number;
  width?: string | number;
  isStopped?: boolean;
  isPaused?: boolean;
  speed?: number;
  segments?: Array<AnimationSegment>;
  forceSegments?: boolean;
  direction?: AnimationDirection;
  ariaRole?: string;
  ariaLabel?: string;
  title?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
}

type AnimationEvent<T extends AnimationEventName = 'drawnFrame'> = {
  eventName: T;
  callback: AnimationEventCallback<AnimationEvents[T]>;
};

export class Lottie extends Component<LottieProps, unknown> {
  options!: AnimationConfigWithData;
  ref = createRef<HTMLDivElement>();
  anim?: AnimationItem;
  // animApi?: AnimationItem;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lottie: any;

  componentDidMount() {
    const { options, eventListeners } = this.props;

    const { loop, autoplay, animationData, renderer = 'svg', rendererSettings, assetsPath } = options!;

    this.options = {
      container: this.ref.current as Element,
      // path,
      renderer,
      loop: loop !== false,
      autoplay: autoplay !== false,
      animationData,
      rendererSettings,
      assetsPath,
    };

    this.options = { ...this.options, ...options };

    import('lottie-web/build/player/lottie_light').then(({ default: lottie }) => {
      this.lottie = lottie;
      this.anim = lottie.loadAnimation(this.options);
      this.setSpeed();
      this.setDirection();
      // this.animApi = lottieApi.createAnimationApi(this.anim);
      this.registerEvents(eventListeners);
      // this.setAnimationControl();

      if (this.props.isStopped) {
        this.stop();
      } else if (this.props.segments) {
        this.playSegments(true);
      } else {
        this.play();
      }
    });
  }

  UNSAFE_componentWillUpdate(nextProps: LottieProps /* , nextState */) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== nextProps.options!.animationData) {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options = { ...this.options, ...nextProps.options };
      if (this.lottie) {
        this.anim = this.lottie.loadAnimation(this.options);
      }
      // this.animApi = lottieApi.createAnimationApi(this.anim);
      this.registerEvents(nextProps.eventListeners);
    }
  }

  componentDidUpdate(prevProps: LottieProps) {
    if (this.props.options!.loop !== undefined && this.anim) {
      this.anim.loop = this.props.options!.loop;
    }

    if (this.props.isStopped) {
      this.stop();
    } else if (this.props.segments) {
      if (JSON.stringify(this.props.segments) === JSON.stringify(prevProps.segments)) {
        return;
      }
      this.playSegments(!!this.props.forceSegments);
    } else {
      this.play();
    }

    // this.setAnimationControl();
    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;

    this.anim = undefined;
  }

  setSpeed() {
    if (this.props.speed) this.anim?.setSpeed(this.props.speed);
  }

  setDirection() {
    if (this.props.direction) this.anim?.setDirection(this.props.direction);
  }

  // setAnimationControl() {
  //   const { animationControl } = this.props;
  //   if (animationControl) {
  //     const properties = Object.keys(animationControl);
  //
  //     properties.forEach((property) => {
  //       const propertyPath = this.animApi.getKeyPath(property);
  //       const value = animationControl[property];
  //       this.animApi.addValueCallback(propertyPath, () => value);
  //     });
  //   }
  // }

  play() {
    this.anim?.play();
  }

  playSegments(shouldForce: boolean) {
    if (this.props.segments) this.anim?.playSegments(this.props.segments, shouldForce);
  }

  stop() {
    this.anim?.stop();
  }

  pause() {
    if (this.props.isPaused && !this.anim?.isPaused) {
      this.anim?.pause();
    } else if (!this.props.isPaused && this.anim?.isPaused) {
      this.anim?.pause();
    }
  }

  destroy() {
    this.anim?.destroy();
  }

  registerEvents(eventListeners?: Array<AnimationEvent>) {
    eventListeners?.forEach((eventListener) => {
      this.anim?.addEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  deRegisterEvents(eventListeners?: Array<AnimationEvent>) {
    eventListeners?.forEach((eventListener) => {
      this.anim?.removeEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  render() {
    const { width, height, ariaRole, ariaLabel, title, tabIndex } = this.props;

    const getSize = (initial?: string | number) => {
      let size;

      if (typeof initial === 'number') {
        size = `${initial}px`;
      } else {
        size = initial || '100%';
      }

      return size;
    };

    const lottieStyles = {
      width: getSize(width),
      height: getSize(height),
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none',
      ...this.props.style,
    };

    return (
      <div
        ref={this.ref}
        id="lottie-wrap"
        style={lottieStyles}
        title={title}
        role={ariaRole}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      />
    );
  }

  static defaultProps = {
    eventListeners: [],
    isStopped: false,
    isPaused: false,
    speed: 1,
    ariaRole: 'button',
    ariaLabel: 'animation',
    title: '',
    tabIndex: 0,
  };
}
