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
import ProfilePage from './components/ProfilePage/ProfilePage';

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
        {
          !useSelector((store) => store.isLoggedIn) ?
            <LoginScreen /> :
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        }
      </Router>
    </div>
  );
}

export default App;