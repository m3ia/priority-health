import React from "react";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../loading";

const Profile = ({siteUser}) => {
  console.log("siteuser: ", siteUser);
  // const { name, picture, email } = user;
  return (
    <div>
      <div className="row align-items-center profile-header">
        {siteUser.userId ? (
          <div style={{border: "2px solid black"}}>
            <>
              <p>
                <img src={siteUser.picture} alt="profile" />
              </p>
              <p>id: {siteUser.userId}</p>
              <p>Name: {siteUser.name}</p>
            </>
          </div>
        ) : (
          <p>user not found</p>
        )}
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
