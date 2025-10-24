import * as React from 'react';
import { Marker, MarkerProps } from '@react-google-maps/api';

const MarkerComponent: React.FC<MarkerComponentProps> = ({ position, marker, onLoad, id }) => {
  if (!position) return null;

  return <Marker onLoad={(m) => onLoad && onLoad(m, id)} position={position} {...marker} />;
};

export default MarkerComponent;

export interface Position {
  lat: number;
  lng: number;
}

export interface MarkerComponentProps {
  id: string;
  position: Position;
  marker?: Omit<MarkerProps, 'position'>;
  selected?: Selected;
  setSelected?: (value: Selected) => void;
  onLoad?: (m: google.maps.Marker, id: string) => void;
}

export type Selected = string | null;
