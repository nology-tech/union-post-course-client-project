import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  });

  it("renders navigation links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check if the navigation links are present
    expect(getByText("Book Appointment")).toBeInTheDocument();
    expect(getByText("New Booking")).toBeInTheDocument();
    expect(getByText("Staff")).toBeInTheDocument();
    expect(getByText("Staff Details")).toBeInTheDocument();
  });
});
