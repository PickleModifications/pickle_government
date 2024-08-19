import { createTheme, rem } from '@mantine/core';

const theme = createTheme({
    // colors: {
    //     dark: [
    //         "#fff",
    //         "#fff",
    //         "#466386",
    //         "#3F5978",
    //         "#384F6B",
    //         "#31455E",
    //         "#2A3B50",
    //         "#233143",
    //         "#1C2735",
    //         "#151D28",
    //     ],
    // },
    // shadows: {
    //     md: '1px 1px 3px rgba(0, 0, 0, .25)',
    //     xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    // },
    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
        h1: { fontSize: rem(36) },
        },
    },
});

export default theme;