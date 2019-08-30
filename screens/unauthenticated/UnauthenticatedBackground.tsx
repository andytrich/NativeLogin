import * as React from 'react';
import * as Colours from '../../constants/Colours'
import styled from 'styled-components/native';
import {Text, StatusBar, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




const unauthenticatedBackgroundColour = Colours.backgroundLightGrey;


const UnauthenticatedBackgroundWrapper = styled.View`
  background-color:${unauthenticatedBackgroundColour};
  height: 100%;
  width: 100%;
`;

const SafeBackground = styled.SafeAreaView<{colour?: string}>`
  background-color: ${props => props.colour ? props.colour : unauthenticatedBackgroundColour};
  height: 100%;
  width: 100%;
`;


const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 30,
  },
  background: {
    color: Colours.white,
    flex: 1,
  },
});

type UnauthenticatedBackgroundProps = {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode,
  colour?: string,
}

export const UnauthenticatedBackground = (props: UnauthenticatedBackgroundProps) => (
<UnauthenticatedBackgroundWrapper>
  <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor={props.colour ? props.colour : unauthenticatedBackgroundColour}/>
  <SafeBackground colour={props.colour}>
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.backgroundContainer}
      >
      {props.children}
    </KeyboardAwareScrollView>
  </SafeBackground>
</UnauthenticatedBackgroundWrapper>
);
