import { useDispatch } from "react-redux";
import { toggleSettings } from "../redux/slices/generateSlice";

function Settings() {
  const dispatch = useDispatch();
  const settings = [
    "Include Uppercase",
    "Include Lowercase",
    "Include Numbers",
    "Include Symbols",
  ];
  return (
    <div className="settings">
      <div className="settings__container _container">
        <div className="settings__title field-title">SETTINGS</div>
        <div className="settings__column">
          {settings.map((item, idx) => {
            const id = item.split` `.slice(1).join``.toLowerCase();
            const checked = idx !== settings.length - 1;
            return (
              <div key={item + idx} className="settings__item">
                <input
                  type="checkbox"
                  id={id}
                  defaultChecked={checked}
                  onChange={(e) => {
                    dispatch(
                      toggleSettings({
                        set: e.target.id,
                        checked: e.target.checked,
                      })
                    );
                  }}
                />
                <label htmlFor={id}>{item}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Settings;
