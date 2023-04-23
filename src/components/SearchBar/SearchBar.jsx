import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { Header } from './SearchBar.styled';
import { SearchContainer } from './SearchBar.styled';
import { SearchForm } from './SearchBar.styled';
import { SearchInput } from './SearchBar.styled';
import { SearchButton } from './SearchBar.styled';
import { Container } from '../Layout/Container';

export const SearchBar = ({ submitForm }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    submitForm(searchQuery);
    setSearchQuery('');
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
  };

  return (
    <Header>
      <Container>
        <SearchContainer>
          <SearchForm onSubmit={handleSubmit}>
            <SearchButton type="submit">
              <ImSearch size={20} />
            </SearchButton>
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange}
              value={searchQuery}
            />
          </SearchForm>
        </SearchContainer>
      </Container>
    </Header>
  );
};

SearchBar.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
