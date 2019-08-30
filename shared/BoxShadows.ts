type IosBoxShadowOptions = {
  opacity?: number,
  offsetX?: number,
  offsetY?: number,
  radius?: number,
  colour?: number,
};

export const iosBoxShadowStyles = ({ opacity, offsetX, offsetY, radius }: IosBoxShadowOptions) => ({
  shadowColor: `rgba(0, 0, 0, ${opacity == null ? 0.16 : opacity})`,
  shadowOffset: { width: offsetX == null ? 2 : offsetX, height: offsetY == null ? 4 : offsetY },
  shadowOpacity: 1,
  shadowRadius: radius == null ? 6 : radius,
});

export const defaultElevation = 5;
