import React from 'react';
import {Text, TextProps} from 'react-native';
import styled from 'styled-components/native';
import * as Colours from '../constants/Colours';
import {setFontSizeAndLineHeight} from './StylingUtils';

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

export const Title = styled(BaseText)`
  ${setFontSizeAndLineHeight(20)};
  text-align: center;
  margin: 10px;
  font-family: GothamRounded-Bold;
  color: ${Colours.black};
`;

export const Subtitle = styled(Title)`
  ${setFontSizeAndLineHeight(16)}
`;

export const LightTitle = styled(Title)`
  color: ${Colours.white};
`;

export const LightSubtitle = styled(Subtitle)`
  color: ${Colours.white};
`;

export const BoldText = styled(BaseText)`
  font-family: GothamRounded-Bold;
  color: ${Colours.black};
  ${setFontSizeAndLineHeight(16)};
`;

export const ParagraphText = styled(BaseText)`
  font-family: GothamRounded-Book;
  ${setFontSizeAndLineHeight(14)};
  color: ${Colours.black};
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

export const formHelpTextFontSize = 12;

export const FormHelpText = styled(ParagraphText)<{colour?: string}>`
  color: ${props => props.colour ? props.colour : Colours.white};
  font-family: GothamRounded-BoldItalic;
  ${setFontSizeAndLineHeight(formHelpTextFontSize)};
  margin-top: 1px;
`;
