import './App.css';
import FoodList from './components/food-list/FoodList';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Footer, Loading } from './components/home-login';
import { Home, Profile } from './components/home-login/views';
import AuthNav from './components/home-login/auth-nav';
import './App.css';

const App = () => {
  const { user, isLoading } = useAuth0();
  const [siteUser, setSiteUser] = useState({});
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {user ? (
        <>
          <NavBar setSiteUser={setSiteUser} />
            <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
          </div>
          <div>
            hi
            {siteUser.id ? (
              <div>
                <p>id: {siteUser.id}</p>
                <p>first name: {siteUser.first_name}</p>
                <p>last name: {siteUser.last_name}</p>
                <p>email: {siteUser.email}</p>
              </div>
            ) : (<p>user not found</p>)} 
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
