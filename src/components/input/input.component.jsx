const CustomInput = ({ ...props }) => {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                className={props.className}
            />
        </>
    )
}

export default CustomInput
