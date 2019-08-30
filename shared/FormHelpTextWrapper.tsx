import * as React from 'react';
import styled from 'styled-components/native';
import { getLineHeightForFontSize } from './StylingUtils';
import {formHelpTextFontSize} from './TextStyles';

const minHeight: number = getLineHeightForFontSize(formHelpTextFontSize);

const Wrapper = styled.View`
  min-height: ${minHeight}px;
`;

type Props = {
  children?: React.ReactNode,
};

export const FormHelpTextWrapper = (props: Props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);
