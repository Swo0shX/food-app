import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  useFonts({
    outfit: require('./../assets/fonts/Arimo-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Arimo-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Arimo-Bold.ttf'),
  });
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='login/index'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
