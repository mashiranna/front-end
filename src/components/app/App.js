import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import MainPage from '../pages/MainPage';
import NoMatch from '../pages/404';
const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='app-wrapper'>
          <div className='container'>
            <AppHeader />
          </div>
        </div>
        <main>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
