import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-xl text-gray-600 font-bold mb-5">
        {" "}
        Welcome to our app{" "}
      </Text>
      <Link href="/sign-in">Sigin-In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/8990">Property 1</Link>
    </View>
  );
}
