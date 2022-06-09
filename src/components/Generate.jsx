import { useDispatch } from 'react-redux';
import { toggleButtons, toggleCopied } from '../redux/slices/copySlice';
import { generatePass } from '../redux/slices/generateSlice';


function Generate() {
  const dispatch = useDispatch();
  const handleGenerate = () => {
    dispatch(toggleButtons())
    dispatch(toggleCopied({visible: false}))
    dispatch(generatePass());
  }
  return (
    <footer className="generate">
        <div className="generate__container _container">
            <div className="generate__row">
                <button 
                onClick={handleGenerate}
                className="generate__button">
                    GENERATE PASSWORD
                </button>
            </div>
        </div>
    </footer>
  )
}

export default Generate