import { fileToDataUri } from "./utils";
import { useEffect, useState } from "react";

export const useInput = (name, watch, setValue) => {
  const [source, setSource] = useState(null);

  const resetImage = () => {
    setValue(name, null);
  };

  useEffect(() => {
    const subscription = watch((data, { name: inputName }) => {
      if (name === inputName) {
        const filedData = data[name];
        if (filedData) {
          fileToDataUri(filedData[0]).then((d) => {
            setSource(d);
          });
        } else {
          setSource(null);
        }
      }
      if (inputName === undefined) {
        setSource(null);
      }
    });
    return () => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [source, resetImage];
};
