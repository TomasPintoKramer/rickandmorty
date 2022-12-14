import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const fonts = {
    ...chakraTheme.fonts,
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}
const  background= "black"

const breakpoints = {
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
}

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    background,
    fontWeights: {
        normal: 400,
        medium: 700,
        bold: 900
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    },
}

const customTheme = extendTheme(overrides)

export default customTheme