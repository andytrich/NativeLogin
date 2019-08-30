import React from 'react';
import {Text, TextProps} from 'react-native';
import styled from 'styled-components/native';
import * as Colours from '../constants/Colours';
import { setFontSizeAndLineHeight } from './StylingUtils';

type BaseTextProps = TextProps & {
  children: React.ReactNode,
};

class BaseText extends React.Component<BaseTextProps> {
  render() {
    return (
      <Text textBreakStrategy="simple" {...this.props} />
    );
  }
}

export const Form = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Field = styled.View`
  width: 100%;
  margin-bottom: 2px;
`;

export const TopErrorBox = styled.View`
  padding: 10px;
  background-color: ${Colours.error};
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const EmailField = styled(Field)`
  margin-bottom: 10px;
`;

export const PasswordField = styled(Field)`
  margin-bottom: 5px;
`;

export const Title = styled(BaseText)`
  ${setFontSizeAndLineHeight(20)};
  text-align: center;
  margin: 10px;
  font-family: GothamRounded-Bold;
  color: ${Colours.black};
`;


export const LightTitle = styled(Title)`
  color: ${Colours.white};
`;

export const FormLabelTextLight = styled(LightTitle)<{colour?: string}>`
  ${setFontSizeAndLineHeight(14)};
  text-align: left;
  margin: 0 0 5px;

  ${({colour}) => colour && `
    color: ${colour};
  `}
`;
export const FormLabelTextDark = styled(FormLabelTextLight)`
  color: ${props => props.colour || Colours.black};
`;

