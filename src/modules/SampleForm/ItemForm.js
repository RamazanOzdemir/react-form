import { Form } from "../../components";
import { useMemo } from "react";
import { getInputs } from "./inputs";

export const ItemForm = ({ values, onSubmit }) => {
  const inputs = useMemo(() => getInputs(), []);

  return (
    <Form
      className="form"
      id="item-form"
      onSubmit={onSubmit}
      values={values}
      inputProps={{
        className: "input",
      }}
    >
      {inputs.map((input) => input.render())}
      <button type="submit" className="submit">
        Save
      </button>
    </Form>
  );
};

ItemForm.defaultValues = {
  values: {},
  onSubmit: () => {},
};
