import './App.css';
import FoodList from './components/food-list/FoodList';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Footer, Loading } from './components/home-login';
import { Home, Profile } from './components/home-login/views';
import AuthNav from './components/home-login/auth-nav';
import './App.css';

const App = () => {
  const { user, isLoading } = useAuth0();
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {user ? (
        <>
            <NavBar />
            <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
            </div>
            <Footer />
          </>
         ) :
          (
          <>
            <div className="container flex-grow-1">
              <AuthNav />
            </div>
        </>
        )
      }
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
