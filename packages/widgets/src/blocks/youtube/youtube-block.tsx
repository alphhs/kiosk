// TODO: Handle SCSS module import properly for Vite/tsup build
// import css from './index.module.scss';

export const YoutubeBlock = ({ slug }: { slug?: string }) => {
  let embed = slug;
  if (!embed) return null;
  if (slug && slug.includes('https://www.youtube.com/watch')) embed = slug.replace('/watch?v=', '/embed/');
  if (!embed.includes('youtube')) embed = `https://www.youtube.com/embed/${embed}`;

  return (
    <div 
      className="youtube-embed" 
      style={{
        width: '100%',
        padding: 0,
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '56.25%' // 16:9 aspect ratio
      }}
    >
      <iframe 
        src={embed} 
        frameBorder="0" 
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};
