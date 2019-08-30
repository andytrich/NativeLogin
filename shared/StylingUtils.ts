import {isIos} from './PlatformUtils';

export const getLineHeightForFontSize = (fontSize: number) => {
  return isIos() ? fontSize + 4 : fontSize + 6;
};

export const setFontSizeAndLineHeight = (fontSize: number) => {
  const lineHeight = getLineHeightForFontSize(fontSize);
  return 'font-size: ' + fontSize + 'px; line-height: ' + lineHeight + 'px;';
};
