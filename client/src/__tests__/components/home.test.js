import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {mocked} from "jest-mock";
import Home from "../../components/home/home";

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

  test("greeting appears", () => {
    setTimeout(() => {
      render(
        <Router>
          <home user={user} />
        </Router>
      );
      const greeting = screen.getByText(/welcome, mmm/i);
      expect(greeting).toMatch('Welcome, mmm');
    }, 5000);
    
  });

  test("renders home component", async () => {
      render(
      <Router>
        <Home user={user} />
      </Router>
      );
    });
});
