import styled from 'styled-components/native';
import {TextInput as RNTextInput, TextInputProps, View} from 'react-native';
import * as Colours from '../constants/Colours';
import React from 'react';
import {iosBoxShadowStyles} from './BoxShadows';

export const TextInput = (props: TextInputProps & { isValid: boolean, noShadow?: boolean }) => (
  <View>
    {props.noShadow ? null : <ShadowUnderlay />}
    <InputContainer>
      <BaseTextInput {...props} style={props.noShadow ? {} : iosBoxShadowStyles({})} />
    </InputContainer>
  </View>
);

export const textInputHeight = 40;

const BaseTextInput = styled(RNTextInput)<{isValid: boolean}>`
  background-color: ${props => props.isValid ? Colours.white : Colours.paleRed};
  width: 100%;
  border-radius: ${textInputHeight / 2}px;
  font-size: 16px;
  font-family: GothamRounded-Book;
  padding: 0 15px;
  height: ${textInputHeight}px;
  margin-bottom: 2px;
  border: 1px solid ${props => props.isValid ? Colours.lightGrey : Colours.error};
`;

export const shadowElevation = 5;

const InputContainer = styled.View`
  elevation: ${shadowElevation + 1};
  background-color: transparent;
`;

const ShadowUnderlay = styled.View`
  width: 100%;
  height: ${textInputHeight - 2}px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 2px;
  elevation: ${shadowElevation};
  border-radius: ${textInputHeight / 2}px;
  opacity: 0.4;
`;
