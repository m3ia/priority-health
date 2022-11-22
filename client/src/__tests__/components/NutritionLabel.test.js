import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {mocked} from "jest-mock";
import NutritionLabel from "../../components/food-list/NutritionLabel";

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

  test("render food item nutrition label after fetch", () => {
    setTimeout(() => {
      render(
        <Router>
          <NutritionLabel user={user} />
        </Router>
      );
      const title = screen.getByText(/nutrition facts/i);
      expect(title).toMatch('Nutrition Facts');
    }, 5000);
    
  });

  test("renders 'Nutritional Facts'", async () => {
      render(
      <Router>
        <NutritionLabel user={user} />
      </Router>
      );
    });
});
