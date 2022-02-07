import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './components/LoginScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: 'LOGIN', user: authUser });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    }
    );
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <Routes>
          {
            !useSelector((store) => store.isLoggedIn) ?
              <Route path='/' element={<LoginScreen />} /> :
              <Route path='/' element={<HomeScreen />} />
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;