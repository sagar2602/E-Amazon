
import React, { useState } from 'react';
import SignupForm from './Signup';
import Login from './Login';
import styled, { keyframes } from 'styled-components';



interface FormContainerProps {
  animate: boolean;
  direction : string
}

const ToggleButton = styled.button`
  padding: 10px 20px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



const flipForward = keyframes`
  0% {
    transform: perspective(600px) rotateY(0);
  }
  25% {
    transform: perspective(600px) rotateY(72);
}
  50% {
        transform: perspective(600px) rotateY(140);
  }
  100% {
    transform: perspective(600px) rotateY(180deg);
  }
`;

//commenting as this isn't working smoothly : shuld be (direction === 'forward' ? flipForward : flipBackward)
// const flipBackward = keyframes`
//   0% {
//     transform: perspective(600px) rotateY(180deg);
//   }
//   25% {
//     transform: perspective(600px) rotateY(140);
//   }
//   50% {
//     transform: perspective(600px) rotateY(72);
//   }
//   100% {
//     transform: perspective(600px) rotateY(0);
//   }
// `;
const FormContainer = styled.div<FormContainerProps>`
  display: inline-block;
  animation: ${({ animate, direction }) => animate && (direction === 'forward' ? flipForward : flipForward)} 0.9s forwards;
  backface-visibility: hidden;
  perspective: 1000px;
  width: 100%;
`;


function AuthPage() {
  const [showSignup, setShowSignup] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleToggle = () => {
    setAnimate(true);
    setTimeout(() => {
      setShowSignup(!showSignup);
      setAnimate(false);
    }, 200); // Match this duration to the animation duration
  };

  return (
    <div>
      <ToggleButton onClick={handleToggle}>
        {showSignup ? 'Switch to Login' : 'Switch to Signup'}
      </ToggleButton>
      <FormContainer animate={animate} direction={showSignup ? 'forward' : 'backward'}>
        {showSignup ? <SignupForm /> : <Login />}
      </FormContainer>
    </div>
  );
}

export default AuthPage;
