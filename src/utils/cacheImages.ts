import { Image } from "react-native";
import { Asset } from "expo";

export const cacheImages = (images: any) => {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
