import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('Please enter value');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchFormBtn>

          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            value={value}
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
