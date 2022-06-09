import './scss/all.scss';
import Header from './components/Header';
import Password from './components/Password';
import LengthSet from './components/LengthSet';
import Settings from './components/Settings';
import Generate from './components/Generate';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <main className="page">
          <Password/>
          <LengthSet />
          <Settings/>
        </main>
        <Generate/>
    </div>
  );
}

export default App;
