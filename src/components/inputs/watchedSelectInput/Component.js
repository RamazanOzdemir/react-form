import { useInput } from "./useInput";

export const Component = ({
  methods: { register, watch, setValue },
  inputProps,
  name,
  label,
  placeholder,
  registerOptions = {},
  watchedInput = "",
  getOptions = async (value) => [],
  ...props
}) => {
  const [options] = useInput(name, watchedInput, getOptions, watch, setValue);

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
