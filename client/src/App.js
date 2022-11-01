import './App.css';
import FoodList from './components/food-list/FoodList';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { NavBar, Footer, Loading } from './components';
import { Home, Profile, ExternalApi } from './views';
import './App.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external-api" element={<ExternalApi />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
// function App() {
//   return (
//     <div className="App">
//       <FoodList />
//       hiasdf;lkjasdfasdflaksdf';lkaf
//     </div>
//   );
// }

// export default App;
