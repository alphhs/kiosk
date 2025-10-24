import type { MarkerProps } from '@react-google-maps/api';

export interface CustomMarkerProp {
  id: string;
  marker: MarkerProps;
  info: {
    image?: {
      width: number;
      height: number;
      id: string;
      file_name: string;
    };
    title?: string;
    description?: string;
    time?: string;
    phone?: string;
  };
}

export interface MapBlockProps {
  height?: number;
  locations?: 'hidden' | 'left' | 'top' | 'right' | 'bottom';
  markers: CustomMarkerProp[];
  isCenter?: boolean;
  zoom: number;
  center?: {
    lat: number;
    lng: number;
  };
}
