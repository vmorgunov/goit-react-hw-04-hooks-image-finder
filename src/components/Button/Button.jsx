import React from 'react';
import { LoadMoreBtn } from './Button.styled';

export default function Button({ handleBtnClick, title }) {
  return (
    <LoadMoreBtn type="button" onClick={handleBtnClick}>
      {title}
    </LoadMoreBtn>
  );
}
