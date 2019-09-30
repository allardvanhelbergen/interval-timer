import tokens from './styleTokens';

export const globalStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${tokens.ColorGray3};
    color: ${tokens.ColorBlack};
    font-family: ${tokens.FontFamilySystem};
    font-size: ${tokens.FontSizeMedium}rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;
