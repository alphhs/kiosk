'use client';
import React, { useEffect, useMemo, useState } from 'react';

// import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
// import { Progress } from 'antd';
import css from './index.module.scss';

export const PlaylistBlock = ({ items = [], isMobile }: PlaylistBlockProps) => {
  const [_current, setCurrent] = useState<null | number>(null);
  // const { isMobile } = useUI();

  useEffect(
    () => () => {
      players.forEach((p) => p.pause());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const players: Array<HTMLAudioElement> = useMemo(
    () =>
      items.reduce(function (pV, cV) {
        pV.push(new Audio(cV.audioUrl));
        return pV;
      }, [] as HTMLAudioElement[]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length],
  );

  if (items.length === 0 || !players) return null;

  const togglePlay = (index: number) => {
    if (players[index]!.paused) {
      players.forEach((p, idx) => {
        if (idx === index) {
          p.play();
          setCurrent(idx);
        } else {
          p.pause();
        }
      });
    } else {
      players[index]!.pause();
      setCurrent(null);
    }
  };

  return (
    <div className={css.playlist}>
      {items.map((item, idx) => (
        <button key={idx} type="button" className={css.singlePlayer} onClick={() => togglePlay(idx)}>
          <h4 className={css.number}>{idx + 1}</h4>
          <div className={css.number}>
            <h5 className={css.name}>{item.title}</h5>
            {item.subTitle && <h6 className={css.subtitle}>{item.subTitle}</h6>}
            {/*{isMobile && <AudioPlayer player={players[idx]} />}*/}
          </div>
          {!isMobile && <div className={css.player}>{/*<AudioPlayer player={players[idx]} />*/}</div>}
          {/*<div className={css.iconPlay}>{current === idx ? <PauseCircleOutlined /> : <PlayCircleOutlined />}</div>*/}
        </button>
      ))}
    </div>
  );
};

// const AudioPlayer = ({ player }: { player: HTMLAudioElement }) => {
//   const [timer, setTimer] = useState(0);
//   const { duration } = player;
//
//   useEffect(() => {
//     const onPlayerUpdate = () => {
//       const { currentTime } = player;
//       setTimer(currentTime);
//     };
//     player.addEventListener('timeupdate', onPlayerUpdate);
//     return () => player.removeEventListener('timeupdate', onPlayerUpdate);
//   }, [player]);
//
//   return <Progress showInfo={false} percent={(timer * 100) / duration} size="default" status="active" />;
// };

export type PlaylistBlockProps = {
  items: Array<ItemsType>;
  isMobile: boolean;
};

export type ItemsType = {
  title?: string;
  subTitle?: string;
  audioUrl?: string;
};
