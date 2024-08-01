import React, { useState } from 'react';
import {Head} from '@/components/shared/detailsBed'

const SlipLids = ({ defaultText, buttonTexts, buttonStyles }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [displayText, setDisplayText] = useState(defaultText);

  const handleSlipLidsBtnClick = (buttonIndex, text) => {
    console.log("Button clicked:", buttonIndex, text);
    setActiveButton(buttonIndex);
    setDisplayText(text);
  };

  // Ensure buttonStyles has the same length as buttonTexts or provide default styles
  const styles = buttonStyles ? buttonStyles : Array(buttonTexts.length).fill({});

  return (
    <div className='bg-[#f1feff] pt-7 pb-7 px-4 mt-3 flex flex-col rounded-xl'>
      <div className="flex flex-col justify-center rounded-2xl items-center gap-5 bg-[#f1feff]">
      <Head title={displayText} />

  <div className="flex gap-2 text-[0.75rem] w-[100%] justify-center text-center">
    {buttonTexts.map((text, index) => (
      <div 
        key={index}
        className={`border-black border-[2px] w-1/2 px-1 py-2 cursor-pointer rounded-2xl text-center ${activeButton === index ? 'bg-black  text-white' : ''}`}
        onClick={() => handleSlipLidsBtnClick(index, text)}
        style={styles[index]} // Use styles array instead of buttonStyles directly
      >
        {text}
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default SlipLids;
