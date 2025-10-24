import { CSSProperties, ElementType, FC, ReactNode } from 'react';

interface BackgroundRenderProps {
  as?: ElementType;
  background?: Partial<{
    color: string;
    size: string;
    url: string;
    repeat: string;
    position: string;
    override_position: string;
    scroll: '' | 'fixed';
  }>;
  children?: ReactNode;
}

const BackgroundRender: FC<BackgroundRenderProps> = ({ as: Component = 'div', background = {}, children }) => {
  if (!background || Object.keys(background).length === 0) return <Component>{children}</Component>;

  const { color, size, url, repeat, position, override_position, scroll } = background;

  const backgroundStyles: CSSProperties = {
    backgroundColor: color,
    backgroundSize: size,
    backgroundImage: url && `url(${url})`,
    backgroundRepeat: repeat,
    backgroundPosition: override_position || position,
    backgroundAttachment: scroll || undefined,
  };

  return <Component style={backgroundStyles}>{children}</Component>;
};

export default BackgroundRender;
