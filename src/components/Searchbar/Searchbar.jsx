import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return toast.error('Please enter value');
    }
    onSubmit(value);
    setValue('');
  };
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchFormBtn>

        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          value={value}
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </SearchForm>
    </Header>
  );
}
