import React from 'react';

const MapBlock = React.lazy(() => import('./map-block').then((mod) => ({ default: mod.MapBlock })));
export { MapBlock };
