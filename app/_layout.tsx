import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: "#007500"
    },
    headerTintColor: "#fff",
  }}
  />;
}
