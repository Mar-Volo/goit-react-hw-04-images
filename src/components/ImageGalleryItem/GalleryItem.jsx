import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import { Item, Img } from './GalleryItem.styled';

export class ListItem extends Component {
  state = {
    isVisible: false,
  };

  // toggleModal = () => {
  //   this.setState(({ isVisible }) => ({
  //     isVisible: !isVisible,
  //   }));
  // };

  toggleModal = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const { item } = this.props;
    const { webformatURL, tags, largeImageURL } = item;
    return (
      <Item>
        <Img onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {isVisible && (
          <Modal handleClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </Item>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
