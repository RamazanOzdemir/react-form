import { useEffect, useState } from "react";

export const Component = ({
  methods: { register },
  inputProps,
  name,
  label,
  placeholder = "select",
  registerOptions = {},
  getOptions = async () => [],
  ...props
}) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedOptions = await getOptions();
      setOptions(fetchedOptions);
    };
    fetchOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="input-container">
      {label ? (
        <label htmlFor={name} className="label">
          {label}
        </label>
      ) : null}

      <select
        id={name}
        {...inputProps}
        {...props}
        {...register(name, registerOptions)}
      >
        <option value="">{placeholder}</option>
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
