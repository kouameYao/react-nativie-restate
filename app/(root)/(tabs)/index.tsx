import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="px-5 mt-5">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <Image source={images.avatar} className="size-12" />
              <View>
                <Text className="text-xs font-rubik text-black-100">
                  Good Morning
                </Text>
                <Text className="text-base font-rubik-medium">
                  Adrian Hajdin
                </Text>
              </View>
            </View>
            <View className="relative h-10 w-10 flex justify-center items-center">
              <Image source={icons.bell} className="size-7" />
              <View className="absolute top-2 right-2 h-3 w-3 rounded-full bg-primary-300" />
            </View>
          </View>
          <Search />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
