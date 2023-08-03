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
      {label ? <label className="label">{label}</label> : null}

      <input
        type="number"
        {...inputProps}
        {...props}
        {...register(name, registerOptions)}
      />
    </div>
  );
};
