import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, toggleDarkMode } from '../apollo';

const WrgToggle = styled.div`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const ToggleLayout = styled.div<{ check: boolean }>`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;

  span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
  }
`;

const ToggleContainer = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: ${(props) => props.theme.borderColor};
  transition: all 0.2s ease;
`;

const ToggleCheck = styled(ToggleLayout)`
  left: 8px;
  opacity: ${(props) => (props.check ? '1' : '0')};
`;
const ToggleUncheck = styled(ToggleLayout)`
  right: 10px;
  opacity: ${(props) => (props.check ? '0' : '1')};
`;

const Circle = styled.div<{ check: boolean }>`
  position: absolute;
  top: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.25s ease;
  left: ${(props) => (props.check ? '27px' : '1px')};
`;

const ToggleButton: FunctionComponent = () => {
  const isDarkMode = useReactiveVar(darkModeVar);

  return (
    <WrgToggle onClick={toggleDarkMode}>
      <ToggleContainer>
        <ToggleCheck check={isDarkMode}>
          <span>🌜</span>
        </ToggleCheck>
        <ToggleUncheck check={isDarkMode}>
          <span>🌞</span>
        </ToggleUncheck>
      </ToggleContainer>
      <Circle check={isDarkMode} />
      <Input type="checkbox" aria-label="Toggle Button" />
    </WrgToggle>
  );
};

export default ToggleButton;
