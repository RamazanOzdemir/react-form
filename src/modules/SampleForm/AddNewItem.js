import { ItemForm } from "./ItemForm";

export const AddNewItem = () => {
  const values = {};

  const onSubmit = (values, reset = () => {}) => {
    console.log({ values });
    reset();
  };

  return <ItemForm values={values} onSubmit={onSubmit} />;
};
