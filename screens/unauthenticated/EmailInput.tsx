import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInput} from '../../shared/TextInput';

export const EmailInput = (props: TextInputProps & { isValid: boolean, noShadow?: boolean }) => (
  <TextInput
    {...props}
    autoCapitalize="none"
    keyboardType={'email-address'}
  />
);
