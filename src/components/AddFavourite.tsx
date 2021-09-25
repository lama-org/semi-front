import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 95%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 15px;
  padding: 15px;
  text-align: center;
`;

const Span = styled.span`
  color: white;
`;

const AddFavourite: FunctionComponent = () => {
  return (
    <Container className="overlay d-flex align-items-center justify-content-center'>">
      <Span className="mr-2">Add to Favourites</Span>
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg>
    </Container>
  );
};

export default AddFavourite;
