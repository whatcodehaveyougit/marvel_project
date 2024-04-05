import React from "react";

const CustomInput = ({ ...props }): JSX.Element => {
  return (
    <>
      <input {...props} />
    </>
  );
};

export default CustomInput;
