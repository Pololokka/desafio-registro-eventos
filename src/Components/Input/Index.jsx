const Input = ({ name, title, type, required, value, setState }) => {
  return (
    <>
      <label htmlFor={name} className="texto">
        {title}
      </label>
      <input
        className="texto input__geral"
        type={type}
        name={name}
        required={required}
        value={value || ""}
        onChange={console.log("setState")}
      />
    </>
  );
};

export default Input;
