import { RiImageAddFill } from "react-icons/ri";
import { useInput } from "./useInput";

export const Component = ({
  methods: { register, watch, setValue },
  inputProps,
  name,
  label,
  registerOptions = {},
  ...props
}) => {
  const [source, resetImage] = useInput(name, watch, setValue);

  return (
    <div className="input-container">
      {label ? <label className="label">{label}</label> : null}

      {source ? (
        <div className="image-container">
          <img alt={`${name}-logo`} src={source} />
          <span
            onClick={() => {
              resetImage();
            }}
          >
            <i className="fas fa-close"></i>
          </span>
        </div>
      ) : (
        <div className="image-input-section">
          <RiImageAddFill className="folder-icon" />
          <div className="image-input-container">
            <div className="image-input">
              <input
                type="file"
                {...inputProps}
                {...props}
                accept="image/*"
                {...register(name, registerOptions)}
              />
            </div>
            <p>Bir resim yükleyin veya sürükleyip bırakın.</p>
          </div>
          <p>PNG, JPG, JPEG, WEBP</p>
        </div>
      )}
    </div>
  );
};
