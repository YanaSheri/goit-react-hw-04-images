import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <>
      <ul className={s['gallery']}>
        <ImageGalleryItem images={images} modalOpen={modalOpen} />
      </ul>
    </>
  );
};

export default ImageGallery;