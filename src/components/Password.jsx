import { useSelector, useDispatch } from "react-redux";
import { toggleCopied } from "../redux/slices/copySlice";
import classNames from "classnames";

function Password() {
  const dispatch = useDispatch();
  const pass = useSelector((state) => state.generate.pass);
  const { showButtons, copied } = useSelector((state) => state.copy);

  const handleCopy = () => {
    dispatch(toggleCopied({ visible: true }));
    navigator.clipboard.writeText(pass);
  };

  return (
    <div className="password">
      <div className="password__container _container">
        <div className="password__row">
          <div className="password__field">
            <div className="password__generate">{pass}</div>
            <button
              className={classNames("password__btn copied", {
                active: showButtons && copied,
              })}
            >
              copied
            </button>
            <button
              onClick={handleCopy}
              className={classNames("password__btn copy", {
                active: showButtons && !copied,
              })}
            >
              click to copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
