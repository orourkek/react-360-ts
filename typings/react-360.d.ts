declare module 'react-360' {
  import {
    View as RNView,
    ViewProps as RNViewProps,
    Image as RNImage,
    Text as RNText,
    Event
  } from 'react-native';

  interface EventHandlerProps {
    onEnter?: (event: any) => void;
    onExit?: (event: any) => void;
    onInput?: (event: any) => void;
    onChange?: (event: any) => void;
    onHeadPose?: (event: any) => void;
    onChangeCaptured?: (event: any) => void;
    onInputCaptured?: (event: any) => void;
    onHeadPoseCaptured?: (event: any) => void;
    onMove?: (event: any) => void;
  }

  // React Native overrides
  export class View extends React.Component<RNViewProps & EventHandlerProps> {}
  export class Image extends RNImage {}
  export class Text extends RNText {}

  // // VR Components and modules
  // AmbientLight
  // Box
  // LiveEnvCamera
  // Cylinder
  // CylindricalPanel
  // QuadPanel
  // Plane
  // Sphere
  // DirectionalLight
  // PointLight
  // SpotLight
  // Model
  // Pano
  // Prefetch
  // Scene
  // Sound
  // Video
  // VideoPano
  // VideoControl
  // MediaPlayerState
  // VrAnimated
  // VrButton
  // VrHeadModel
  // VrSoundEffects
  // Environment

  // // React VR-specific utilities
  // staticAssetURL
  // texture

  // Direct access to RN properties
  export {
    Animated,
    AppRegistry,
    AsyncStorage,
    NativeModules,
    StyleSheet
  } from 'react-native';

}
