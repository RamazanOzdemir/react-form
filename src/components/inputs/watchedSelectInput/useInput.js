import { useEffect, useState } from "react";

export const useInput = (
  fieldName,
  watchedInput,
  getOptions,
  watch,
  setValue
) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async (value) => {
      const fetchedOptions = await getOptions(value);

      setOptions(fetchedOptions || []);
    };

    const subscription = watch((value, { name }) => {
      if (name === watchedInput) {
        const watchedValue = value[watchedInput];

        if (!watchedValue) {
          setValue(fieldName, null);
        }
        fetchOptions(watchedValue);
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedInput]);
  return [options];
};
