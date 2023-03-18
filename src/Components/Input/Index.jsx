const Input = ({ name, title, type, register, errors }) => {
  return (
    <>
      <label htmlFor={name} className="texto">
        {title}
      </label>
      <input
        className="texto input__geral"
        type={type}
        {...register(`${name}`)}
        onWheel={(e) => e.target.blur()}
      />
      <p className="texto">{errors[name]?.message}</p>
    </>
  );
};

export default Input;
