module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        { jsxImportSource: "nativewind" },
        "module:metro-react-native-babel-preset",
      ],
      "nativewind/babel",
    ],
    plugin: ["nativewind/babel", "react-native-reanimated/plugin"],
  };
};
