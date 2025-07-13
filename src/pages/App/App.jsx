import './App.css';
import '../global.css';
import Landing from '../Landing/Landing';
import PageRoutes from '../../components/routes/PageRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../../components/shared/Nav';
import BottleMessageButton from '../../components/shared/BottleMessageButton';

function App() {
  const location = useLocation();

  const discluded = ["/", "/authPage"];

  return (
    <div className="App">
      {discluded.every((route) => route !== location.pathname) && <Nav />}
      <PageRoutes />
      {discluded.every((route) => route !== location.pathname) && <BottleMessageButton />}
    </div>
  );
}

export default App;
