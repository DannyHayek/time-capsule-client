import './App.css';
import TitleLogo from '../../components/landing/TitleLogo';
import LandingIntro from '../../components/landing/LandingIntro';
import LandingShoreButton from '../../components/landing/LandingShoreButton';
import LandingAuthButtons from '../../components/landing/LandingAuthButtons';
import HorizontalRule from '../../components/landing/HorizontalRule';

function App() {
  return (
    <div className="App">
      <TitleLogo />
      <LandingIntro />
      <LandingShoreButton />
      <HorizontalRule />
      <LandingAuthButtons />
    </div>
  );
}

export default App;
