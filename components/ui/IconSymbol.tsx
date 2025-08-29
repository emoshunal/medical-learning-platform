// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.fill': 'person',
  'gear': 'settings',
  'star.fill': 'star',
  'xmark' : 'close',
  'checkmark' : 'check',
  'chevron.left': 'chevron-left',
  'plus': 'add',
  'minus': 'remove',
  'trash': 'delete',
  'pencil': 'edit',
  'magnifyingglass': 'search',
  'bell': 'notifications',
  'heart.fill': 'favorite',
  'bookmark.fill': 'bookmark',
  'camera.fill': 'photo-camera',
  'video.fill': 'video-call',
  'phone.fill': 'phone',
  'envelope.fill': 'email',
  'location.fill': 'location-on',
  'lock.fill': 'lock',
  'globe': 'public',
  'cart.fill': 'shopping-cart',
  'tag.fill': 'label',
  'chart.bar.fill': 'bar-chart',
  'calendar': 'calendar-today',
  'clock.fill': 'access-time',
  'cloud.fill': 'cloud',
  'bubble.left.fill': 'chat',
  'video': 'videocam',
  'square.fill': 'square',
  'circle.fill': 'circle',
  'triangle.fill': 'change-history',
  'list.bullet': 'format-list-bulleted',
  'book.fill': 'book',

} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
