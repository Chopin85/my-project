import { Platform, StatusBar, Dimensions } from "react-native";

export const WIN = Dimensions.get("window");
export const ASPECT_RATIO = WIN.height / WIN.width;

export const PADDING_SIDES = Math.round((WIN.width / 100) * 4);
export const PADDING_SCROLLVIEW = 2.5;

export const HEIGHT_STATUSBAR = () => {
  if (Platform.OS === "ios") {
    // if (DeviceInfo.hasNotch()) {
    //   return 35;
    // }
    return 20;
  }

  if (StatusBar.currentHeight) {
    return StatusBar.currentHeight;
  }

  return PADDING_SIDES;
};

export const HEIGHT_HEADER = 50 + HEIGHT_STATUSBAR();
export const HEIGHT_BUTTON = 48;

export const RADIUS_BUTTON = 4;
export const RADIUS_BANNER = 10;

export const SQUARE_HEIGHT_WIDTH = 18;

export const FONTSIZE_11 = 11;
export const FONTSIZE_12 = ASPECT_RATIO >= 2 ? 12 : 10;
export const FONTSIZE_16_14 = ASPECT_RATIO >= 2 ? 14 : 12;
export const FONTSIZE_16 = ASPECT_RATIO >= 2 ? 16 : 14;
export const FONTSIZE_18 = ASPECT_RATIO >= 2 ? 18 : 16;
export const FONTSIZE_20 = ASPECT_RATIO >= 2 ? 20 : 15;
export const FONTSIZE_22 = ASPECT_RATIO >= 2 ? 22 : 18;
export const FONTSIZE_24 = ASPECT_RATIO >= 2 ? 24 : 20;
export const FONTSIZE_26 = ASPECT_RATIO >= 2 ? 26 : 22;
export const FONTSIZE_28 = ASPECT_RATIO >= 2 ? 28 : 24;
export const FONTSIZE_30 = ASPECT_RATIO >= 2 ? 30 : 26;
export const FONTSIZE_32 = ASPECT_RATIO >= 2 ? 32 : 28;
export const FONTSIZE_40 = ASPECT_RATIO >= 2 ? 40 : 36;
export const FONTSIZE_50 = ASPECT_RATIO >= 2 ? 50 : 46;
export const FONTSIZE_80 = ASPECT_RATIO >= 2 ? 80 : 76;
export const FONTSIZE_90 = ASPECT_RATIO >= 2 ? 90 : 86;
export const FONTSIZE_BUTTON = FONTSIZE_16_14;

export const IMAGE_PROFIL_SIZE = 54;

export const INPUT_HEIGHT = 50;
export const INPUT_PADDING = 10;

export const BORDER_CAPTION_RADIUS = 4;
export const BORDER_CAPTION_SIZE = 2;

export const FONT_POPPINS_REGULAR = "Poppins-Regular";
export const FONT_POPPINS_SEMIBOLD = "Poppins-SemiBold";
export const FONT_POPPINS_LIGHT = "Poppins-Light";
export const FONT_POPPINS_EXTRA_LIGHT = "Poppins-ExtraLight";
export const FONT_POPPINS_LIGHT_ITALIC = "Poppins-LightItalic";
export const FONT_POPPINS_BOLD = "Poppins-Bold";
export const FONT_POPPINS_MEDIUM = "Poppins-Medium";
export const FONT_POPPINS_MEDIUM_ITALIC = "Poppins-MediumItalic";

export const KEY_LANGAGE_FR = "FR";
export const KEY_LANGAGE_EN = "EN";
