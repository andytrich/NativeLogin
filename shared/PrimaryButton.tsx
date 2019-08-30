import React, {Component} from 'react';
import {View, ActivityIndicator, GestureResponderEvent, ViewProps, TouchableOpacity, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import * as Colours from '../constants/Colours';
import {ButtonProps, ButtonText} from './Buttons';
import {iosBoxShadowStyles} from './BoxShadows';

type PrimaryButtonProps = ButtonProps & {
  title: string,
  isLoading?: boolean,
  withShadow?: boolean,
};

export class PrimaryButton extends Component<PrimaryButtonProps> {
  onPress = (event: GestureResponderEvent) => {
    Keyboard.dismiss();
    if (!this.props.isLoading) {
      this.props.onPress(event);
    }
  }

  render() {
    return (
      <Container onPress={this.onPress} {...this.props}>
        <ButtonContainer style={this.props.withShadow ? iosBoxShadowStyles({ opacity: 0.25 }) : {}}>
          <ButtonBackground>
            <View>
              {this.props.isLoading ?
                <ActivityIndicator size="small" color={Colours.white}/>
                :
                <ButtonText colour={this.props.colour}>{this.props.title}</ButtonText>
              }
            </View>
          </ButtonBackground>
        </ButtonContainer>
        {this.props.withShadow && <ShadowUnderlay />}
      </Container>
    );
  }
}

const buttonHeight = 52;

const Container = styled(TouchableOpacity)`
  width: 100%;
`;

const ButtonBackground = styled.View`
  background-color: ${Colours.primary};
  height: ${buttonHeight}px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const shadowElevation = 6;

const ButtonContainer = styled.View<ViewProps>`
  elevation: ${shadowElevation + 1};
  background-color: transparent;
  width: 100%;
`;

const ShadowUnderlay = styled.View`
  width: 100%;
  height: ${buttonHeight - 2}px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 10px;
  elevation: ${shadowElevation};
  border-radius: ${buttonHeight / 2}px;
`;
