// TODO: Handle SCSS module import properly for Vite/tsup build
// import css from './index.module.scss';

export const HTMLBlock = ({ content }: HTMLBlockProps) => {
  if (!content || content.length === 0) return <div />;
  return (
    <div 
      data-component="html-block" 
      className="html-block" 
      style={{ 
        img: { maxWidth: '100%', display: 'inline-block' } 
      } as any}
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};

export type HTMLBlockProps = {
  content: string;
};
