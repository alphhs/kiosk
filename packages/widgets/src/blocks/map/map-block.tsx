'use client';
import { calculateLink } from '@cody-mn/utils';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import cn from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// TODO: Handle SCSS module import properly for Vite/tsup build
// import style from './index.module.scss';
import { CustomMarkerProp, MapBlockProps } from './map-block-type';

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

const centerDefault = { lat: 47.916823, lng: 106.916165 };

export const MapBlock: React.FC<MapBlockProps> = ({ markers, center, height = 500, locations = 'hidden', zoom }) => {
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey });
  const [selected, setSelected] = useState<CustomMarkerProp | null>(null);
  const [markerMap, setMarkerMap] = useState<Record<string, google.maps.Marker>>({});
  const [infoOpen, setInfoOpen] = useState(false);
  const [tab, setTab] = useState<'list' | 'map'>('map');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSelectMarker = ({ id, marker, info }: CustomMarkerProp) => {
    setInfoOpen(false);
    setTimeout(() => setInfoOpen(true), 100);
    setSelected({ id, marker, info });
    const selectedMarker = markerMap[id];
    if (selectedMarker) {
      selectedMarker.setPosition(marker.position);
    }
  };
  useEffect(() => {
    if (markers && markers?.length > 0 && markers[0]) {
      const firstMarker = markers[0];
      onSelectMarker(firstMarker);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  const onLoad = useCallback(
    (mapInstance: google.maps.Map) => {
      fitBounds(mapInstance);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [markers],
  );

  const onLoadMarker = useCallback(
    (marker: google.maps.Marker, placeId: string) => setMarkerMap((prevState) => ({ ...prevState, [placeId]: marker })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [markers, selected],
  );

  const fitBounds = (map: google.maps.Map) => {
    if (!map) return null;
    const bounds = new window.google.maps.LatLngBounds(center);
    markers
      ?.filter((marker) => Object.entries(marker.marker.position).length)
      .map(({ marker, id }: CustomMarkerProp) => {
        bounds.extend(marker.position);
        return id;
      });
  };

  const containerClass = useMemo(
    () =>
      cn('flex flex-col', {
        'lg:flex-row-reverse': locations === 'left',
        'lg:flex-row': locations === 'right',
        'lg:flex-col-reverse': locations === 'top',
        'lg:flex-col': locations === 'bottom',
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const listContainerClass = useMemo(
    () =>
      cn({
        'block overflow-y-auto lg:block lg:max-w-[450px] lg:pr-6': locations === 'left',
        'block overflow-y-auto lg:block lg:max-w-[450px] lg:pl-6': locations === 'right',
        'mb-4 gap-4 overflow-x-auto lg:flex': locations === 'top',
        'mt-4 gap-4 overflow-x-auto lg:flex': locations === 'bottom',
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const listItemClass = useMemo(
    () =>
      cn({
        'min-w-40 lg:flex-col': locations === 'top' || locations === 'bottom',
        'border-b border-dashed': locations === 'right' || locations === 'left',
        'border-dashed lg:border-r lg:pr-2': locations === 'top' || locations === 'bottom',
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  if (loadError) return null;
  if (!isLoaded) return <div className="bg-base-content/10 w-full animate-pulse rounded" style={{ height: height }} />;

  const tabs: { label: string; value: 'list' | 'map' }[] = [
    { label: 'Жагсаалтаар', value: 'list' },
    { label: 'Газрын зургаар', value: 'map' },
  ];
  return (
    <div data-component="map-block" className={`map-container ${containerClass} `}>
      <div className={`${locations === 'hidden' ? locations : 'flex'} bg-base-content/5 my-2 gap-2 rounded-lg p-2 lg:hidden`}>
        {tabs.map((item) => (
          <button
            type="button"
            key={item.value}
            className={cn('text-md flex-1 rounded-lg py-2 transition duration-200 ease-in-out', {
              'bg-primary text-base-100 site-primeat:text-base-content': tab === item.value,
            })}
            onClick={() => setTab(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`flex-1 lg:block ${tab === 'map' ? 'block' : 'hidden'}`}>
        {isMounted && (
          <GoogleMap
            onLoad={onLoad}
            mapContainerStyle={{ width: '100%', height: height }}
            center={center || centerDefault}
            zoom={zoom}
          >
            {markers?.length > 0 &&
              markers.map(({ id, marker, info }: CustomMarkerProp) => (
                <Marker
                  key={id}
                  onClick={() => onSelectMarker({ id, marker, info })}
                  onLoad={(m: google.maps.Marker) => onLoadMarker(m, id)}
                  {...marker}
                />
              ))}
            {infoOpen && selected && (
              <InfoWindow anchor={markerMap[selected.id]} onCloseClick={() => setInfoOpen(false)}>
                <div className="flex h-full w-full p-2 lg:p-4">
                  <div className="flex items-center justify-center">
                    {selected.info?.image ? (
                      <img
                        src={calculateLink(selected.info.image.id, selected.info.image.file_name, 400, 0)}
                        className="mr-2 h-20 w-20 object-cover"
                        alt="icon"
                      />
                    ) : (
                      <img
                        alt="placeholder image"
                        className="mr-2 h-20 w-20 object-cover"
                        src={`https://via.placeholder.com/100?text=${selected.info?.title || ''}`}
                      />
                    )}
                  </div>
                  {selected.info && (
                    <div className="space-y-0.5 pl-1 text-sm lg:space-y-2 lg:text-sm">
                      {selected.info.title && <h4 className="mb-0 font-bold uppercase">{selected.info.title}</h4>}
                      {selected.info.description && (
                        <div className="flex flex-wrap gap-1 text-xs lg:text-sm">
                          <div className="font-bold">Хаяг:</div>
                          <div className="mb-0">{selected.info.description}</div>
                        </div>
                      )}
                      {selected.info.phone && (
                        <div className="space-x-1 text-xs lg:text-sm">
                          <span className="font-bold">Утас:</span>
                          <span className="mb-0">{selected.info.phone}</span>
                        </div>
                      )}
                      {selected.info.time && (
                        <div className="text-error space-x-1 text-xs lg:text-sm">
                          <span className="font-bold">Цагийн хуваарь:</span>
                          <span className="mb-0">{selected.info.time}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
      <div
        className={` ${listContainerClass} ${tab === 'list' ? 'block' : 'hidden'} thin-scrollbar mr-4 min-w-72`}
        style={{ maxHeight: height }}
      >
        {markers?.length > 0 &&
          markers.map(({ id, info, marker }) => (
            <div key={id} className="w-full flex-1">
              <button
                type="button"
                title="map"
                className={`flex w-full justify-between gap-4 py-2 focus:outline-none ${selected?.info === info ? 'font-bold' : 'font-light'} ${listItemClass}`}
                onClick={() => {
                  onSelectMarker({ id, marker, info });
                  setTab('map');
                }}
              >
                {info.image ? (
                  <img
                    src={calculateLink(info.image.id, info.image.file_name, 400, 0)}
                    className="aspect-1 mr-2 h-20 object-cover md:h-24 lg:h-24 xl:h-36"
                    alt="icon"
                  />
                ) : (
                  <img
                    alt="placeholder image"
                    className="aspect-1 mr-2 h-20 object-cover md:h-24 lg:h-24 xl:h-36"
                    src={`https://via.placeholder.com/100?text=${info?.title || ''}`}
                  />
                )}
                {info && (
                  <div className="flex-[50%] text-start text-sm md:space-y-1">
                    <p className="mb-1 w-full text-sm font-bold whitespace-nowrap uppercase md:text-base">{info.title}</p>
                    <div className="space-x-1">
                      <span className="font-bold">Хаяг:</span>
                      <span>{info.description}</span>
                    </div>
                    <div className="space-x-1">
                      <span className="font-bold">Утас:</span>
                      <span>{info.phone}</span>
                    </div>
                    <div className="text-error space-x-1">
                      <span className="font-bold">Цагийн хуваарь:</span>
                      <span>{info.time}</span>
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
