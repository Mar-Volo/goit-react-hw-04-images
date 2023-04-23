import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { Item, Img } from './GalleryItem.styled';

export const ListItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  const { webformatURL, tags, largeImageURL } = item;
  return (
    <Item>
      <Img onClick={toggleModal} src={webformatURL} alt={tags} />
      {isVisible && (
        <Modal handleClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </Item>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
