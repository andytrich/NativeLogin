import * as React from 'react';
import { View} from 'react-native';
import { cacheFonts } from './AssetsCaching';

export interface AppProps {
    fontLoaded  () : void
}

export default class LoadFontsComponent extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }

  async componentDidMount() {
    await cacheFonts({
    'GothamRounded-Bold': require('./assets/fonts/GothamRounded-Bold.ttf'),
     'GothamRounded-Book': require('./assets/fonts/GothamRounded-Book.ttf'),
     'GothamRounded-BookItalic': require('./assets/fonts/GothamRounded-BookItalic.otf'),
     'GothamRounded-BoldItalic': require('./assets/fonts/GothamRounded-BoldItalic.otf')
   });      
   this.props.fontLoaded();      
 }

  public render() {
    return (
        <View></View>
    );
  }
}
