'use client';
import { lazy } from 'react';
const MapBlock = lazy(() => import('./map-block').then((mod) => ({ default: mod.MapBlock })));
export { MapBlock };
