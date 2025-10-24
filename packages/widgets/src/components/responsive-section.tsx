

import React, { useEffect, useState } from 'react';

const BREAKPOINT = 1024;

interface ResponsiveSectionProps {
  children: React.ReactNode;
  desktopStyle?: React.CSSProperties;
  description?: string;
  hideDesktop: boolean;
  hideMobile: boolean;
  mobileStyle?: React.CSSProperties;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  desktopStyle,
  hideMobile,
  hideDesktop,
  description,
  mobileStyle,
}) => {
  const [visible, setVisible] = useState<boolean | null>(null); // Start with null to indicate SSR mismatch

  useEffect(() => {
    // Ensure this only runs on the client side
    const calculateInitialVisibility = () => {
      if (typeof window === 'undefined') return true; // Assume visible in SSR
      const isDesktop = window.innerWidth >= BREAKPOINT;
      return !(isDesktop && hideDesktop) && !(!isDesktop && hideMobile);
    };

    setVisible(calculateInitialVisibility());

    const handleResize = () => {
      const isDesktop = window.innerWidth >= BREAKPOINT;
      setVisible(!(isDesktop && hideDesktop) && !(!isDesktop && hideMobile));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [hideDesktop, hideMobile]);

  // If visible is null, it means the component hasn't finished client-side render yet
  if (visible === null) return null;

  if (!visible) return null;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < BREAKPOINT;
  const styles = isMobile ? mobileStyle : desktopStyle;

  return (
    <section style={styles} className="relative overflow-hidden">
      {description && <h2 className="sr-only">{description}</h2>}
      {children}
    </section>
  );
};

export default ResponsiveSection;
