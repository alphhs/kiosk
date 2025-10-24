// Simple Link component to replace @cody-mn/lingui-config/link
import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  prefetch?: boolean; // Next.js specific prop, we'll ignore it
  itemProp?: string; // Schema.org microdata prop
  [key: string]: any; // Allow any additional props
}

export default function Link({ href, children, className, target, rel, onClick, prefetch, itemProp, ...rest }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      itemProp={itemProp}
      {...rest}
    >
      {children}
    </a>
  );
}
