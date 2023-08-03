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
        type="date"
        {...inputProps}
        {...props}
        {...register(name, {
          valueAsDate: true,
        })}
      />
    </div>
  );
};
