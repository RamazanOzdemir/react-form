import {
  AsyncSelectInput,
  ImageInput,
  SelectInput,
  TextInput,
  TextareaInput,
  WatchedSelectInput,
} from "../../components";

export const getInputs = () => {
  return [
    new TextInput("text1", "Text Label"),
    new TextInput("text1", "Text 2 Label "),

    new SelectInput("simpleSelect", "Simple Select", {
      options: [
        { value: "value1", label: "Value 1" },
        { value: "value2", label: "Value 2" },
      ],
    }),
    new AsyncSelectInput("asyncSelect", "Async Select", {
      placeholder: "Select",
      getOptions: async () =>
        new Promise(async (resolve) => {
          setTimeout(() => {
            resolve([
              { value: "asyncValue1", label: "Async Value 1" },
              { value: "asyncValue2", label: "Async Value 2" },
              { value: "asyncValue3", label: "Async Value 2" },
            ]);
          }, 3 * 1000);
        }),
    }),
    new WatchedSelectInput("watchedSelect", "Watched Select Input", {
      placeholder: "Select",
      // this function is invoked whenever [watchedInput] change
      // for this input, watchedInput is asyncSelect
      getOptions: async (watchedValue) =>
        new Promise(async (resolve) => {
          console.log({ watchedValue });

          setTimeout(() => {
            resolve([
              { value: "watchedValue1", label: "Watched Async Value 1" },
              { value: "watchedValue2", label: "Watched Async Value 2" },
              { value: "watchedValue3", label: "Watched Async Value 2" },
            ]);
          }, 3 * 1000);
        }),
      watchedInput: "asyncSelect",
    }),
    new TextareaInput("textArea", "TextArea"),
    new ImageInput("image", "Image"),
  ];
};
