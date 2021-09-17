import React, { Component } from 'react';
import { LoadMoreBtn } from './Button.styled';

export default class Button extends Component {
  render() {
    const { handleBtnClick, title } = this.props;
    return (
      <LoadMoreBtn type="button" onClick={handleBtnClick}>
        {title}
      </LoadMoreBtn>
    );
  }
}
