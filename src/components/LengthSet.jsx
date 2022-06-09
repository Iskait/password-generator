import { useSelector, useDispatch } from "react-redux";
import { setLength } from '../redux/slices/generateSlice';

function LengthSet() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.generate.length);

  return (
    <div className="length">
      <div className="length__container _container">
        <div className="length__column">
          <div className="length__title">
            <span className="length__text field-title">Length:</span>
            {length}
          </div>
          <div className="length__slider">
            <span className="length__number min">4</span>
            <input 
            type="range" 
            min={4} max={30} 
            step="any"
            value={length} 
            onChange={(e) => dispatch(setLength({value: ~~e.target.value}))} />
            <span className="length__number max">30</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LengthSet;
