import tokens from './styleTokens';

export const globalStyles = `
  body {
    background-color: ${tokens.colorGray3};
    color: ${tokens.colorBlack};
    font-family: ${tokens.fontFamily2};
    font-size: ${tokens.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;
