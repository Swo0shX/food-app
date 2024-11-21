import { Pressable, Text, View } from 'react-native';
import { Link, Redirect } from 'expo-router';
export default function Index() {
  const user = true;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <Link href={'/login'}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>
          Go to Login!
        </Text>
      </Link> */}

      {user ? <Redirect href={'/(tabs)/home'} /> : <Redirect href={'/login'} />}
    </View>
  );
}
