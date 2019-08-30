/* tslint:disable:max-classes-per-file */
import React, {Component} from 'react';
import {View, TouchableOpacity, ActivityIndicator, GestureResponderEvent, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonProps, ButtonText} from './Buttons';
import { isIos } from './PlatformUtils';

type LinkButtonProps = ButtonProps & {
  title: string,
  isLoading?: boolean,
  rightIconName?: string,
  leftIconName?: string,
  thinFont?: boolean,
};

export class LinkButton extends Component<LinkButtonProps> {
  onPress = (event: GestureResponderEvent) => {
    Keyboard.dismiss();
    if (!this.props.isLoading) {
      this.props.onPress(event);
    }
  }

  render() {
    const { leftIconName, colour, rightIconName } = this.props;

    return (
      <LinkButtonBackground onPress={this.onPress} {...this.props}>
        <View>
          {this.props.isLoading
            ? <ActivityIndicator size="small" color={this.props.colour}/>
            : (
              <LinkButtonContent>
                {leftIconName && <LinkButtonLeftIcon name={leftIconName} size={linkButtonIconSize} color={colour} />}
                <ButtonText colour={this.props.colour} thinFont={this.props.thinFont}>
                  {this.props.title}
                </ButtonText>
                {rightIconName && <LinkButtonRightIcon name={rightIconName} size={linkButtonIconSize} color={colour} />}
              </LinkButtonContent>
            )
          }
        </View>
      </LinkButtonBackground>
    );
  }
}

const linkButtonIconSize = 15;

export const LinkButtonBackground = styled(TouchableOpacity)`
  padding: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkButtonContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkButtonIcon = styled(Icon)`
  top: ${() => isIos() ? -1 : 1}px;
`;

const LinkButtonLeftIcon = styled(LinkButtonIcon)`
  margin-right: 10px;
`;

const LinkButtonRightIcon = styled(LinkButtonIcon)`
  margin-left: 10px;
`;

type IconLinkButtonProps = ButtonProps & {
  iconSize: number,
  iconName: string,
};

export class IconLinkButton extends Component<IconLinkButtonProps> {
  onPress = (event: GestureResponderEvent) => {
    Keyboard.dismiss();
    this.props.onPress(event);
  }

  render() {
    return (
      <LinkButtonBackground onPress={this.props.onPress} {...this.props}>
        <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.colour}/>
      </LinkButtonBackground>
    );
  }
}
