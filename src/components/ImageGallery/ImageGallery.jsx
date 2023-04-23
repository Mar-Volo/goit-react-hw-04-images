import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { ListItem } from '../ImageGalleryItem/GalleryItem.jsx';

export const GalleryList = ({ items }) => {
  return (
    <Gallery>
      {items.map(item => {
        const { id } = item;
        return <ListItem key={id} item={item} />;
      })}
    </Gallery>
  );
};

GalleryList.propTypes = {
  items: PropTypes.array.isRequired,
};
