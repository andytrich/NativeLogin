import * as React from 'react';
import styled from 'styled-components/native';
import * as Colours from '../constants/Colours';
import {StatusBar, StyleSheet} from 'react-native';
import {BoldText} from './TextStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {LinkButton} from './LinkButton';
import Logo from '../svg/my-family-pet-logo-coloured.svg';
import {isAndroid} from './PlatformUtils';
import { setFontSizeAndLineHeight } from './StylingUtils';

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

const unauthenticatedBackgroundColour = Colours.backgroundLightGrey;

const UnauthenticatedBackgroundWrapper = styled.View`
  background-color: ${unauthenticatedBackgroundColour};
  height: 100%;
  width: 100%;
`;

const SafeBackground = styled.SafeAreaView<{colour?: string}>`
  background-color: ${props => props.colour ? props.colour : unauthenticatedBackgroundColour};
  height: 100%;
  width: 100%;
`;

type Props = {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode,
  colour?: string,
};

export const UnauthenticatedBackground = (props: Props) => (
  <UnauthenticatedBackgroundWrapper>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={props.colour ? props.colour : unauthenticatedBackgroundColour}
    />
    <SafeBackground colour={props.colour}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.backgroundContainer}
        style={styles.background}
      >
        {props.children}
      </KeyboardAwareScrollView>
    </SafeBackground>
  </UnauthenticatedBackgroundWrapper>
);

export const ImageContainer = styled.View`
  width: 100px;
  height: 45px;
  margin-bottom: 10px;
`;

const ErrorBox = styled.View`
  padding: 15px;
  background-color: ${Colours.error};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ErrorText = styled(BoldText)`
  ${setFontSizeAndLineHeight(12)};
  font-family: GothamRounded-BoldItalic;
  color: ${Colours.white};
`;

type ErrorProps = {
  errorMessage?: string | null,
};

export const UnauthenticatedFormError = (props: ErrorProps) => (
    <ErrorBox>
      <ErrorText>{props.errorMessage}</ErrorText>
    </ErrorBox>
);

type UnauthenticatedScreenBottomLinkProps = {
  title: string,
  onPress: () => void,
};

export const UnauthenticatedScreenBottomLink = (props: UnauthenticatedScreenBottomLinkProps) => (
  <UnauthenticatedScreenBottomLinkContainer>
    <LinkButton
      title={props.title}
      onPress={props.onPress}
      colour={Colours.darkerGrey}
    />
  </UnauthenticatedScreenBottomLinkContainer>
);

const UnauthenticatedScreenBottomLinkContainer = styled.View`
  align-self: stretch;
  justify-content: center;
  margin-bottom: ${isAndroid() ? 20 : 0}px;
`;

type UnauthenticatedScreenThinLinkProps = {
  title: string,
  onPress: () => void,
};

export const UnauthenticatedScreenThinLink = (props: UnauthenticatedScreenThinLinkProps) => (
  <UnauthenticatedScreenThinLinkContainer>
    <LinkButton
      title={props.title}
      onPress={props.onPress}
      colour={Colours.darkGrey}
      thinFont={true}
    />
  </UnauthenticatedScreenThinLinkContainer>
);

const UnauthenticatedScreenThinLinkContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const UnauthenticatedScreenTopLogo = () => (
  <ImageContainer>
    <Logo width={100} height={45} />
  </ImageContainer>
);
