import React from 'react';

interface RegisterLoginButtonProps {
  selectedButton: string;
  onButtonClick: (button: string) => void;
}

const RegisterLoginButton: React.FC<RegisterLoginButtonProps> = ({ selectedButton, onButtonClick }) => {
const getButtonStyle = (button: string) => ({
    backgroundColor: selectedButton === button ? '#68CFFF' : '#E4F6FF',
    padding: '15px 25px',
    margin: '0',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
});

  return (
    <div className="flex justify-end top-96 ">
      <button
        style={getButtonStyle('Register')}
        onClick={() => onButtonClick('Register')}
      >
        Register
      </button>
      <button
        style={getButtonStyle('Masuk')}
        onClick={() => onButtonClick('Masuk')}
      >
        Masuk
      </button>
    </div>
  );
};

export default RegisterLoginButton;