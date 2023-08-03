export const Component = ({
  methods: { register },
  inputProps,
  name,
  label,
  registerOptions = {},
  ...props
}) => {
  return (
    <div className="input-container">
      <input
        id={name}
        type="checkbox"
        {...inputProps}
        {...props}
        {...register(name, registerOptions)}
      />
      {label ? (
        <label htmlFor={name} className="label">
          {label}
        </label>
      ) : null}
    </div>
  );
};
