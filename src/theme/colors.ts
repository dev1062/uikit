import { Colors } from "./types";

export const baseColors = {
  failure: "#5a493b",
  primary: "#7a614c",
  primaryBright: "#5a493b",
  primaryDark: "#5a493b",
  secondary: "#7a614c",
  success: "#7a614c",
  warning: "#7a614c",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F9F7F4",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#5a493b",
  textDisabled: "#BDC2C4",
  textSubtle: "#5a493b",
  borderColor: "#5a493b",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e2e9f0",
  background: "#363535",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#363535",
  primaryDark: "#5a493b",
  tertiary: "#353547",
  text: "#d5c9bb",
  textDisabled: "#666171",
  textSubtle: "#d5c9bb",
  borderColor: "#d5c9bb",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
