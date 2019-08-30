import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputProps} from 'react-native';
import {shadowElevation, TextInput, textInputHeight} from './TextInput';
import * as Colours from '../constants/Colours';
import styled from 'styled-components/native';

const IconSize = 16;

const IconContainer = styled.View`
  position: absolute;
  height: ${textInputHeight}px;
  top: 0;
  bottom: 0;
  right: 5px;
  justifyContent: center;
`;

const InputIcon = styled(Icon)`
  padding: 5px;
  elevation: ${shadowElevation + 1};
`;

const PasswordTextInput = styled(TextInput)`
  padding-right: ${15 + IconSize}px;
`;

const FullWidthView = styled.View`
  width: 100%;
 `;

type PasswordInputState = {
  isVisible: boolean;
};

export class PasswordInput extends React.Component<TextInputProps & {isValid: boolean, noShadow?: boolean}> {
  state: PasswordInputState = {
    isVisible: false,
};

  changePwdType = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <FullWidthView>
        <PasswordTextInput
          {...this.props}
          secureTextEntry={!this.state.isVisible}
          autoCapitalize="none"
        />
        <IconContainer>
          <InputIcon
            name={this.state.isVisible ? 'eye-slash' : 'eye'}
            size={IconSize}
            color={Colours.primary}
            onPress={this.changePwdType}
          />
        </IconContainer>
      </FullWidthView>
    );
  }
}
