import "styled-components";


export interface DefaultTheme {
    color: {
        grayscale100: string;
        grayscale200: string;
        grayscale300: string;
        grayscale400: string;
        grayscale500: string;
        grayscale600: string;
        grayscale700: string;
        grayscale800: string;
        grayscale900: string;
        grayscale1000: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        primary1000: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        salmonBlue: string;
        salmonLightRed: string;

    };
    fontSize: {
        Title1: string;
        Title2: string;
        Title3: string;
        Title4: string;
        Title5: string;
        Title6: string;
        Title7: string;
        Title8: string;
        Title9: string;
        Title10: string;
        Title11: string;
        Title12: string;
    },
    fontWeight: {
        Regular: number,
        Medium: number,
        Bold: number,
    },
    spacing: {
        spacing1: string,
        spacing2: string,
        spacing3: string,
        spacing4: string,
        spacing5: string,
        spacing6: string,
        spacing7: string,
        spacing8: string,
        spacing9: string,
        spacing10: string
    },
    radius: {
        radius1: string,
        radius2: string,
        radius3: string,
        radius4: string,
    }
    device: {
        mobile: string,
        tablet: string,
        pc: string,
    }
}
