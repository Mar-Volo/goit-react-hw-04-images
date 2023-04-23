import PropTypes from 'prop-types';
import { Button } from './Button.styled';
import { Container } from '../Layout/Container';

export const LoadBtn = ({ onClick }) => {
  return (
    <Container>
      <Button type="button" onClick={onClick} style={{ margin: '30px auto' }}>
        Load more
      </Button>
    </Container>
  );
};

LoadBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
///////