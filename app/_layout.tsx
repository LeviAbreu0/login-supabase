import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: "#6495ed"
    },
    headerTintColor: "#fff",
  }}
  />;
}
