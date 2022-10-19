import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { formOnSubmit } from "../Redux/action";
import * as CommonConstants from "../common/commonConstants";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css"
function FormElements() {
  const [dummyState, updateDummyState] = useState(
    CommonConstants.INITIAL_STATE
  );
  const dispatch = useDispatch();

  function validateFieldData(data) {
    if (data["firstName"].match(/[a-zA-Z]/g)) {
      if (data["middleName"].match(/[a-zA-Z]/g)) {
        if (data["lastName"].match(/[a-zA-Z]/g)) {
          if (data["age"].match(/[0-9]/g)) {
            return true;
          }
        }
      }
    }
    return false
  }

  const updateLocalState = (e) => {
    var nextState = { ...dummyState, [e.target.name]: e.target.value };
    var validationStatus = false;
    validationStatus = validateFieldData(nextState);

    if (validationStatus)
      nextState = { ...nextState, formValidation: true }
    else
      nextState = { ...nextState, formValidation: false }
    updateDummyState(nextState);
  };
  return (
    <div data-test-id="registration-form">
      <Table striped bordered hover>
        <thead>
          <tr>
            <td colSpan="2">
              <h1>{CommonConstants.USER_REGISTER}</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>First Name </label>
            </td>

            <td>
              <input
                name="firstName"
                className="firstName"
                data-testid="firstName"
                type="text"

                onChange={updateLocalState}
                value={dummyState.firstName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Middle Name</label>
            </td>

            <td>
              <input
                name="middleName"
                className="middleName"
                data-testid="middleName"
                type="text"

                onChange={updateLocalState}
                value={dummyState.middleName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Last Name</label>
            </td>

            <td>
              <input
                name="lastName"
                className="lastName"
                data-testid="lastName"
                type="text"

                onChange={updateLocalState}
                value={dummyState.lastName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Age</label>
            </td>

            <td>
              <input
                name="age"
                className="age"
                data-testid="age"
                type="number"

                onChange={updateLocalState}
                value={dummyState.age}
              />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              < Link to="/registersuccess" className={dummyState.formValidation ? '' : 'disabled-link'}>
                <Button
                  variant="primary"
                  disabled={!dummyState.formValidation}
                  onClick={() => dispatch(formOnSubmit(dummyState))}
                >
                  Sign up
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table >
    </div>
  );
}
export default FormElements;
