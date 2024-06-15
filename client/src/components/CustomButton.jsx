import React from 'react';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: '#EFBD48',
        color: '#000',
      };
    } else if (type === 'outline') {
      return { borderWidth: '1px', borderColor: '#EFBD48', color: '#000' };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
