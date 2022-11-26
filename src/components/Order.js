import { useTheme } from '@react-navigation/native';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import MyIcon from './MyIcon';

export default function Order({
  name,
  image,
  description,
  quantity,
  price,
  changable,
}) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <View
        style={{ backgroundColor: colors.card, padding: 10, borderRadius: 10 }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', marginStart: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{name}</Text>
          <Text style={{ fontSize: 13, color: '#777' }}>{description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: colors.primary, fontWeight: '500' }}>
            {price + ' đ'}
          </Text>
          {changable ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}
              >
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple(
                    colors.primary,
                    true
                  )}
                >
                  <View style={{ padding: 5 }}>
                    <MyIcon name='remove' size={20} />
                  </View>
                </TouchableNativeFeedback>
              </View>
              <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
              <View
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}
              >
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple(
                    colors.primary,
                    true
                  )}
                >
                  <View style={{ padding: 5 }}>
                    <MyIcon name='add' size={20} />
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          ) : (
            <Text>x{quantity}</Text>
          )}
        </View>
      </View>
    </View>
  );
}
