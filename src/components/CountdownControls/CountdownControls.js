import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tokens from '../../utils/styleTokens';


const ControlContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Control = styled.button`
  background-color: transparent;
  border-radius: ${tokens.BorderRadiusDefault}rem;
  border-color: transparent;
  color: ${tokens.ColorWhite};
  cursor: pointer;
  font-size: ${tokens.FontSizeMedium}rem;
  font-weight: bold;
  width: 12rem;
  min-height: ${tokens.grid * 6}px;
  min-width: ${tokens.grid * 6}px;

  &:hover {
    border: 1px solid ${tokens.ColorGray4};
  }

  &:active {
    background-color: ${tokens.ColorBlack};
  }
`;


function CountdownControls(props) {
  return (
    <ControlContainer>
      <Control onClick={props.startStop}>
        {(props.isRunning) ? 'Stop' : 'Start'}
      </Control>
      <Control onClick={props.reset}>
        Reset
      </Control>
    </ControlContainer>
  );
}


CountdownControls.propTypes = {
  startStop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
}


export default CountdownControls
