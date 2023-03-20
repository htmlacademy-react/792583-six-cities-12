import { Offer } from '../../types/offers';

type GalleryProps = Pick<Offer, 'images' | 'type'>

export default function Gallery({ images, type }: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, 5).map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt={type} />
          </div>
        ))}
      </div>
    </div>
  );
}
