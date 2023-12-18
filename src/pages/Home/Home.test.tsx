import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import Home from "./Home";

it("should render the Nav component", () => {
  customRender(<Home />);

  const navContainer = screen.getByTestId("nav-container");

  expect(navContainer).toBeInTheDocument();
});
