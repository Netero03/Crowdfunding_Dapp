import React, { useEffect, useRef } from 'react';

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <button
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #68c6ff, #687aff)",
          "--bg-color": "linear-gradient(#265073, #265073)",
        }
      }
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)] ${styles} transition duration-300 ease-in-out hover:shadow-md hover:shadow-[#429fa0]/80`}
      type={btnType}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
