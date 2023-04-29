import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet, { Icon, Marker } from 'leaflet';
import { Offer } from '../../../types/offers';
import useMap from '../../../hooks/useMap';

type MapOfferProps = {
  offers: Offer[];
  currentOffer: Offer;
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

export default function MapOffer(props: MapOfferProps): JSX.Element {
  const { offers, currentOffer } = props;
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
        marker.setIcon(defaultCustomIcon).addTo(markerGroup);
      });
      const currentMark = new Marker({
        lat: currentOffer.location.latitude,
        lng: currentOffer.location.longitude,
      });

      currentMark.setIcon(currentCustomIcon).addTo(markerGroup);
      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, currentOffer, cityLocation]);

  return <div style={{ height: '500px', maxWidth: '900px', margin: '0 auto' }} ref={mapRef}></div>;
}
