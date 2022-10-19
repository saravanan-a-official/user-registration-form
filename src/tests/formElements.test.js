import React from "react"
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from "react-redux";
import store from "../Redux/store"
import FormElements from "../components/formElements"
import RegisterSuccess from "../components/register-success";
import * as CommonConstants from "../common/commonConstants"
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() })


describe('FormElements', () => {

    it("Confirm form is available in HTML", () => {
        render(<Provider store={store}><FormElements /></Provider>, { wrapper: MemoryRouter })
        const divElement = screen.queryByTestId("registration-form");
        expect(divElement).toBeDefined()
    })

    it("Sign up button is disabled when form is loaded", () => {
        render(<Provider store={store}><FormElements /></Provider>, { wrapper: MemoryRouter })
        const buttonElement = screen.getByText("Sign up");
        expect(buttonElement.closest('button')).toBeDisabled();
    })

    it("Form fields are available", () => {
        const { container } = render(<Provider store={store}><FormElements /></Provider>, { wrapper: MemoryRouter })
        var firstNameField = container.getElementsByClassName("firstName");
        expect(firstNameField.length).toBe(1)
        firstNameField = container.getElementsByClassName("middleName");
        expect(firstNameField.length).toBe(1)
        firstNameField = container.getElementsByClassName("lastName");
        expect(firstNameField.length).toBe(1)
        firstNameField = container.getElementsByClassName("age");
        expect(firstNameField.length).toBe(1)
    })

    it("Sign up button is enabled after valid data in form fields", () => {
        const { container } = render(<Provider store={store}><FormElements /></Provider>, { wrapper: MemoryRouter })
        const firstName = screen.queryByTestId("firstName");
        fireEvent.change(firstName, { "target": { "value": "Saravanan" } })
        const middleName = screen.queryByTestId("middleName");
        fireEvent.change(middleName, { "target": { "value": "Anantha" } })
        const lastName = screen.queryByTestId("lastName");
        fireEvent.change(lastName, { "target": { "value": "Krishnan" } })
        const age = screen.queryByTestId("age");
        fireEvent.change(age, { "target": { "value": 1 } })
        const buttonElement = screen.getByText("Sign up");
        expect(buttonElement.closest('button')).toBeEnabled();
    })

    it("Sign up Success scenario", () => {
        var { container } = render(<Provider store={store}><FormElements /></Provider>, { wrapper: MemoryRouter })
        const firstName = screen.queryByTestId("firstName");
        fireEvent.change(firstName, { "target": { "value": "Saravanan" } })
        const middleName = screen.queryByTestId("middleName");
        fireEvent.change(middleName, { "target": { "value": "Anantha" } })
        const lastName = screen.queryByTestId("lastName");
        fireEvent.change(lastName, { "target": { "value": "Krishnan" } })
        const age = screen.queryByTestId("age");
        fireEvent.change(age, { "target": { "value": 1 } })
        const buttonElement = screen.getByText("Sign up");
        expect(buttonElement.closest('button')).toBeEnabled();
        fireEvent.click(buttonElement);
        var { container } = render(<Provider store={store}><RegisterSuccess /></Provider>, { wrapper: MemoryRouter })
        const successPageDiv = container.getElementsByClassName("App")
        expect(successPageDiv.length).toBe(1)
        expect(screen.getByText("Saravanan")).toBeInTheDocument();
        expect(screen.getByText("Anantha")).toBeInTheDocument();
        expect(screen.getByText("Krishnan")).toBeInTheDocument();
    })
})