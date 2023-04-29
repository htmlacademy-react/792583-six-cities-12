import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { getSelectedOfferId } from '../../store/main-process/selectors';
import leaflet, { Icon, Marker } from 'leaflet';

type MapProps = {
  offers: Offer[];
};

const DEFAULT_COORDINATE = {
  latitude: 48.85661,
  longitude: 2.351499,
  zoom: 11,
};

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps): JSX.Element {
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const { offers } = props;
  const cityLocation = offers[0]?.city.location ?? DEFAULT_COORDINATE;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = cityLocation;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId !== undefined &&
              offer.id === Number(selectedOfferId)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, selectedOfferId, cityLocation]);

  return <div style={{ height: '700px' }} ref={mapRef}></div>;
}
