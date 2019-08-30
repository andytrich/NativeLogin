import * as Font from "expo-font";
import { Asset } from 'expo-asset';

export const cacheAssets = Asset.loadAsync;
export const cacheFonts = Font.loadAsync;
