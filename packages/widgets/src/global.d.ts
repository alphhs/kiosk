declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.po';
declare module '*.scss';
declare module '*.svg?url' {
  const src: {
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  };
  export default src;
}
