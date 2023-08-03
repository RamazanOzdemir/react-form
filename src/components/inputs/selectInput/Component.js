export const Component = ({
  methods: { register },
  inputProps,
  name,
  label,
  placeholder = null,
  registerOptions = {},
  options,
  ...props
}) => {
  return (
    <div className="input-container">
      {label ? <label className="label">{label}</label> : null}

      <select {...inputProps} {...props} {...register(name, registerOptions)}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => {
          const { label, value, ...rest } = option;
          return (
            <option {...rest} key={label} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
