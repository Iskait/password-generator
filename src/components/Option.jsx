import { useDispatch, useSelector } from "react-redux";
import { toggleSettings } from "../redux/slices/generateSlice";

function Option({ name }) {
  const { checked, disabled } = useSelector((state) => state.generate[name]);
  const dispatch = useDispatch();

  return (
    <div className="settings__item">
      <input
        type="checkbox"
        id={name}
        defaultChecked={checked}
        disabled={disabled}
        onChange={(e) => {
          dispatch(
            toggleSettings({
              set: name,
              checked: e.target.checked,
            })
          );
        }}
      />
      <label htmlFor={name}>Include {name}</label>
    </div>
  );
}

export default Option;
