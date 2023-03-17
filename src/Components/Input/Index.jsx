const Input = ({ name, title, type, required, register }) => {
  return (
    <>
      <label htmlFor={name} className="texto">
        {title}
      </label>
      <input
        className="texto input__geral"
        type={type}
        {...register({ name })}
        required={required}
      />
    </>
  );
};

export default Input;
