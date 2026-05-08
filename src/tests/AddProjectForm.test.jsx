import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProjectForm from "../components/AddProjectForm";

test("should call addProject when form is submitted with valid data", async () =>{
    const user = userEvent.setup();
    const mockAddProject = jest.fn();

    render (<AddProjectForm addProject={mockAddProject} />);

    await user.type(screen.getByLabelText(/title/i), "My Project");

    await user.type(screen.getByLabelText(/description/i), "This is a test project");

    await user.click(screen.getByRole("button", { name: /add/i }));

    expect (mockAddProject).toHaveBeenCalledTimes(1);

    expect(mockAddProject).toHaveBeenCalledWith(
        expect.objectContaining({
            title: "My Project",
            description: "This is a test project",
        })
    );
});
