import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { Header } from './SearchBar.styled';
import { SearchContainer } from './SearchBar.styled';
import { SearchForm } from './SearchBar.styled';
import { SearchInput } from './SearchBar.styled';
import { SearchButton } from './SearchBar.styled';
import { Container } from '../Layout/Container';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    const { searchQuery } = this.state;
    e.preventDefault();
    this.props.submitForm(searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ searchQuery: value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Header>
        <Container>
          <SearchContainer>
            <SearchForm onSubmit={this.handleSubmit}>
              <SearchButton type="submit">
                <ImSearch size={20} />
              </SearchButton>
              <SearchInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={searchQuery}
              />
            </SearchForm>
          </SearchContainer>
        </Container>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
