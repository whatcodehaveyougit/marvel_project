const CustomInput = ({ ...props }): JSX.Element => {
  return (
    <>
      <input {...props} type="text" data-testid="custom-input" />
    </>
  );
};

export default CustomInput;
