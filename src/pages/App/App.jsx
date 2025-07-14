import './App.css';
import '../global.css';
import PageRoutes from '../../components/routes/PageRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../../components/shared/Nav';
import BottleMessageButton from '../../components/shared/BottleMessageButton';

function App() {
  const location = useLocation();

  const discludedNav = ["/", "/authPage"];
  const discludedButton = ["/", "/authPage", "/bottleMessage"]


  return (
    <div className="App">
      {discludedNav.every((route) => route !== location.pathname) && <Nav />}
      <PageRoutes />
      {discludedButton.every((route) => route !== location.pathname) && <BottleMessageButton />}
    </div>
  );
}

export default App;
