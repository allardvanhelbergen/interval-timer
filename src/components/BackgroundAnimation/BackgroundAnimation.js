import React from 'react';
import styled from '@emotion/styled'
import tokens from '../../utils/styleTokens';


const particleSize = 10; // vmin
const animationDuration = 6;
const particleCount = 10;
const colors = [ tokens.colorGray1, tokens.colorGray2, tokens.colorGray4 ];

let randomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * This background is inspired by https://codepen.io/Mamboleoo/pen/BxMQYQ.
 */
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${tokens.colorGray3};
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  & span {
    width: ${particleSize}vmin;
    height: ${particleSize}vmin;
    border-radius: ${particleSize}vmin;
    backface-visibility: hidden;
    position: absolute;
    animation-name: move;
    animation-duration: ${animationDuration};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    
    ${() => {
      let result = '';
      let bgColor;

      for (let i = 0; i < particleCount; i += 1) {
        bgColor = colors[randomInt(colors.length - 1)];

        result += `
          &:nth-of-type(${i}) {
            color: ${bgColor};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation-duration: ${(Math.random() * animationDuration) + 10}s;
            animation-delay: ${(Math.random() * (animationDuration + 5)) * -1}s;
            transform-origin: ${(randomInt(50) - 25)}vw ${(randomInt(50) - 25)}vh;
            box-shadow: 
              ${particleSize * 2 * ((Math.random() > 0.5) ? 1 : -1)}vmin 
              0 
              ${(Math.random() + 0.5) * particleSize * 0.5}vmin 
              ${bgColor};
          }
        `
      }

      return result;
    }}
  }

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
`;

function BackgroundAnimation(props) {
  let particles = [];

  for (let i = 0; i < particleCount; i += 1) {
    particles.push(<span key={i}></span>);
  }

  return (
    <Background>
      {particles}
    </Background>
  );
}

export default BackgroundAnimation;
