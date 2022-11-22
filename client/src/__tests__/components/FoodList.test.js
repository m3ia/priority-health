import {render} from "@testing-library/react";
import FoodList from "../../components/food-list/FoodList";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {mocked} from "jest-mock";
import App from "../../App";

const user = {
  email: "mtestetestitestatest@gmail.com",
  email_verified: true,
  family_name: "nnn",
  given_name: "mmm",
  locale: "en",
  name: "mmm nnn",
  nickname: "mtestetestitestatest",
  picture:
    "https://lh3.googleusercontent.com/a/ALm5wu0S2L9ZCTT9dR0PCxZ07zQG2DWTobVuER0Ixh-q=s96-c",
  sub: "google-oauth2|115651070678202847504",
};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, false);

describe("Login page displays if not logged in", () => {
  beforeEach(() => {
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenWithPopup: jest.fn(),
      getAccessTokenSilently: jest.fn(),
      getIdTokenClaims: jest.fn(),
      loginWithPopup: jest.fn(),
      isLoading: false,
    });
  });
  test("Login renders", () => {
    render(
      <Router>
        <App user={user} />
      </Router>
    );
  });

  test("render the button to add a food", () => {
    render(
      <Router>
        <FoodList user={user} />
      </Router>
    );
  });
});
