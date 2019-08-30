import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';
import * as Colours from '../constants/Colours';
import {ParagraphText} from './TextStyles';
import { setFontSizeAndLineHeight } from './StylingUtils';


export type ButtonProps = {
  colour?: string,
  onPress(event: GestureResponderEvent): void,
};

export const ButtonText = styled(ParagraphText)<{colour?: string, thinFont?: boolean}>`
  color: ${props => props.colour ? props.colour : Colours.white};
  text-align: center;
  ${setFontSizeAndLineHeight(16)};
  font-family: ${props => props.thinFont ? 'GothamRounded-Book' : 'GothamRounded-Bold'};
`;
