import * as React from 'react';
import styled from 'styled-components/native';
import Logo from '../../svg/my-family-pet-logo-coloured.svg';


export const ImageContainer = styled.View`
  width: 100px;
  height: 45px;
  margin-bottom: 10px;
`;

export const UnauthenticatedScreenTopLogo = () => (
    <ImageContainer>
      <Logo width={100} height={45} />
    </ImageContainer>
  );