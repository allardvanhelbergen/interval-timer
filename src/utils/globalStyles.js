import tokens from './styleTokens';

export const globalStyles = `
  body {
    background-color: gray;
    color: #333;
    font-family: ${tokens.fontFamily2};
    font-size: ${tokens.fontSize};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`;
