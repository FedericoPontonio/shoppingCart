import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';
import Shop from '../src/components/Shop.jsx';
import Home from '../src/components/Home.jsx';

describe("Shop component", () => {
  it("renders correct heading", () => {
    render(<Shop />);
    expect(screen.getByRole("heading").textContent).toMatch('Shop');
  });
});

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch('Home page');
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch('Home page');
  });
});