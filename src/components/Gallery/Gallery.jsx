import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import photos from './photos';
const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div className="Gallery" style={{ marginTop: '20px' }}>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
        spacing={2}
      />

      <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </div>
  );
};

export default Gallery;
