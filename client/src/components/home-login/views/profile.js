import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../loading';

const Profile = ({siteUser, foods}) => {
  // const { name, picture, email } = user;
  return (
    <div>
      <div className="row align-items-center profile-header">
        {siteUser.id ? (
              <div style={{ border: '2px solid black' }}>
                <>
                  <p>id: {siteUser.id}</p>
                  <p>first name: {siteUser.first_name}</p>
                  <p>last name: {siteUser.last_name}</p>
                  <p>email: {siteUser.email}</p>
                  <p>foods: 
                    <ul>
                      {foods.map((foodItem, ind) => {
                        return (
                          <li key={ind}>{foodItem.food}</li>
                        )
                      })}
                    </ul>
                  </p>
                </>
              </div>
            ) : (<p>user not found</p>)} 
        {/* <div className="col-md-2 mb-3">
          {picture && 
          (<img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />)}
        </div> */}
        {/* <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});