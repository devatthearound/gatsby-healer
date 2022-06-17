import { DefaultTheme } from "./styled.d";
const rem = (value: number) => { return value + "rem" };
const px = (value: number) => { return value + "px" };

const theme: DefaultTheme = {
    color: {
        grayscale100: "#FFFFFF",
        grayscale200: "#FAFAFA",
        grayscale300: "#F0F0F0",
        grayscale400: "#D9D9D9",
        grayscale500: "#BFBFBF",
        grayscale600: "#8C8C8C",
        grayscale700: "#595959",
        grayscale800: "#434343",
        grayscale900: "#262626",
        grayscale1000: "#181818",
        primary100: "#e6e7f3",
        primary200: "#bfc2e2",
        primary300: "#969ccf",
        primary400: "#6d76bc",
        primary500: "#4e59af",
        primary600: "#2d3ca1",
        primary700: "#283598",
        primary800: "#1e2c8c",
        primary900: "#142281",
        primary1000: "#000f6c",
        secondary100: "#fff0f1",
        secondary200: "#ffd9d9",
        secondary300: "#ffafa6",
        secondary400: "#fc9082",
        secondary500: "#ff795e",
        salmonBlue: "",
        salmonLightRed: ""
    },
    fontSize: {
        Title1: rem(6.4),
        Title2: rem(4.0),
        Title3: rem(3.6),
        Title4: rem(3.2),
        Title5: rem(2.8),
        Title6: rem(2.4),
        Title7: rem(2.0),
        Title8: rem(1.8),
        Title9: rem(1.6),
        Title10: rem(1.4),
        Title11: rem(1.2),
        Title12: rem(1.0)
    },
    spacing: {
        spacing1: px(4),
        spacing2: px(8),
        spacing3: px(12),
        spacing4: px(16),
        spacing5: px(24),
        spacing6: px(32),
        spacing7: px(40),
        spacing8: px(48),
        spacing9: px(56),
        spacing10: px(64)
    },
    radius:{
        radius1: px(4),
        radius2: px(8),
        radius3: px(12),
        radius4: px(16)
    },
    fontWeight: {
        Bold: 700,
        Medium: 500,
        Regular: 400,
    },
    device: {
        mobile: `screen and (max-width:767px)`,
        tablet: `screen and (min-width:768px) and (max-width: 1023px)`,
        pc: `screen and (min-width:1024px)`,
    },

};

export { theme };