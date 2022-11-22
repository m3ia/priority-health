import { render, screen } from '@testing-library/react';
import App from './App';
import { foodStatusToColor } from '../src/components/food-list/FoodItem';

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: false,
    user: null,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
    getAccessTokenWithPopup: jest.fn(),
    getAccessTokenSilently: jest.fn(),
    getIdTokenClaims: jest.fn(),
    loginWithPopup: jest.fn(),
    isLoading: false,
  }),
  withAuthenticationRequired: (component) => component
}));

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

test("renders logo", async () => {
  
  render(<App />);
  const logo = screen.getByText(/priorityHealth/i);
  
  // eslint-disable-next-line jest/valid-expect
  expect(logo);
})

describe('foodStatusToColor returns correct color', () => {
  expect(foodStatusToColor('ok')).toBe('#829566');
})