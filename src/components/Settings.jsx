import Option from "./Option";

function Settings() {
  const settings = ["uppercase", "lowercase", "numbers", "symbols"];

  return (
    <div className="settings">
      <div className="settings__container _container">
        <div className="settings__title field-title">SETTINGS</div>
        <div className="settings__column">
          {settings.map((item, idx) => {
            return <Option key={idx} name={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Settings;
