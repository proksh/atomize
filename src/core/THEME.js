const THEME = {
  colors: {
    black900: "#0A1F44",
    black800: "#14284B",
    black700: "#283A5B",
    black600: "#364766",
    black500: "#455571",
    black400: "#4E5D78",
    black300: "#596780",
    black200: "#627088",
    black100: "#717D92",

    gray900: "#8A94A6",
    gray800: "#98A1B1",
    gray700: "#A7AEBB",
    gray600: "#B0B7C3",
    gray500: "#C9CED6",
    gray400: "#E1E4E8",
    gray300: "#F1F2F4",
    gray200: "#F7F8F9",
    gray100: "#FAFBFB",

    brand900: "#FF584A",
    brand800: "#FE6C61",
    brand700: "#FF867E",
    brand600: "#FFA29B",
    brand500: "#FFBDB8",
    brand400: "#FFCAC6",
    brand300: "#FFD7D4",
    brand200: "#FFE4E3",
    brand100: "#FFEEED",

    success900: "#136A4A",
    success800: "#23825F",
    success700: "#36AB80",
    success600: "#6FCAA8",
    success500: "#A9DCC9",
    success400: "#D0EDDF",
    success300: "#EAF7F1",
    success200: "#F5FBF8",
    success100: "#FAFDFC",

    warning900: "#EF8511",
    warning800: "#F69D2C",
    warning700: "#F7AF22",
    warning600: "#FBC050",
    warning500: "#FBE0A1",
    warning400: "#FDEECB",
    warning300: "#FEF7E6",
    warning200: "#FEFAF1",
    warning100: "#FFFDF8",

    danger900: "#A32801",
    danger800: "#D13A06",
    danger700: "#F4541D",
    danger600: "#F7926F",
    danger500: "#FABEAA",
    danger400: "#FCD7CA",
    danger300: "#FDE8E1",
    danger200: "#FEF6F3",
    danger100: "#FFFBFA",

    info900: "#01408F",
    info800: "#026DD6",
    info700: "#0284FE",
    info600: "#4BA7FE",
    info500: "#83C3FE",
    info400: "#B3DAFF",
    info300: "#DCEEFF",
    info200: "#EEF7FF",
    info100: "#F8FBFF",

    white: "#FFFFFF",
    black: "#000000",
    transparent: "rgba(0,0,0,0)",

    disabled: "#B0B7C3",
    light: "#A7AAB0",
    medium: "#505256",
    dark: "#000000"
  },
  grid: {
    containerMaxWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1156px",
      xl: "1200px"
    },
    gutterWidth: "16px",
    colCount: 12
  },

  shadows: {
    "0": "none",
    "1": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 1px 1px 0 rgba(8, 11, 14, 0.1)",
    "2": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 3px 3px -1px rgba(8, 11, 14, 0.1)",
    "3": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1)",
    "4":
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
    "5":
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 32px 40px -1px rgba(8, 11, 14, 0.1)"
  },

  fontFamily: {
    primary:
      '"SF Pro Text", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary: "SF Pro Text",
    code: "monospace"
  },

  rounded: {
    "0": "0px",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    circle: "1000rem"
  },

  transition: {
    true: "all 0.4s ease-in-out"
  },

  textSize: {
    size: {
      tiny: "10px",
      caption: "12px",
      body: "14px",
      paragraph: "14px",
      subheader: "17px",
      title: "22px",
      heading: "26px",
      display1: "32px",
      display2: "40px",
      display3: "56px"
    },
    height: {
      tiny: "16px",
      caption: "20px",
      body: "24px",
      paragraph: "26px",
      subheader: "30px",
      title: "32px",
      heading: "40px",
      display1: "48px",
      display2: "48px",
      display3: "64px"
    }
  }
};

export default THEME;
