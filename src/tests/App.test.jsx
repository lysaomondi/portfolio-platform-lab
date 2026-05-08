import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders home page content on default route", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
    );

    expect(
        screen.getByText(/personal project showcase app/i)
    ).toBeInTheDocument();
});