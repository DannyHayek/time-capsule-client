import './App.css';
import '../global.css';
import Landing from '../Landing/Landing';
import PageRoutes from '../../components/routes/PageRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
