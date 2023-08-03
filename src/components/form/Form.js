import React from "react";
import {useForm} from "react-hook-form";

// eslint-disable-next-line react/display-name
export const Form = React.forwardRef(
  (
    {
      values,
      defaultValues = {},
      children,
      onSubmit,
      inputProps = {},
      ...formProps
    },
    ref,
  ) => {
    const methods = useForm({values, defaultValues});
    const {handleSubmit} = methods;

    return (
      <form
        ref={ref}
        {...formProps}
        onSubmit={handleSubmit((data) => onSubmit(data, methods.reset))}>
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...inputProps,
                  ...child.props,
                  methods: {
                    register: methods.register,
                    watch: methods.watch,
                    setValue: methods.setValue,
                  },
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    );
  },
);
