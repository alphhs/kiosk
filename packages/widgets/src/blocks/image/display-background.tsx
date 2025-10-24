import { calculateLink } from '@cody-mn/utils';

import { ImageBlockItemProps, ImageBlockProps } from './image-block-type';

function DisplayBackground({ items, backgroundColor }: DisplayBackgroundProps) {
  return (
    <div className="relative size-full">
      {items
        .filter((item) => item.img)
        .map((item, idx) => (
          <div
            key={idx}
            className="absolute inset-0 size-full"
            style={{
              backgroundColor: backgroundColor || 'unset',
              backgroundImage: `url(${item.img ? calculateLink(item.img.id, item.img.file_name, 0, 0, true) : ''})`,
            }}
          />
        ))}
    </div>
  );
}

export default DisplayBackground;

export interface DisplayBackgroundProps {
  items: ImageBlockItemProps[];
  backgroundColor: ImageBlockProps['backgroundColor'];
}
