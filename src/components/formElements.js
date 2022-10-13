import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { formOnSubmit } from "../Redux/action";
import * as CommonConstants from "../common/commonConstants";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
function FormElements() {
  const [dummyState, updateDummyState] = useState(
    CommonConstants.INITIAL_STATE
  );
  const dispatch = useDispatch();
  const updateLocalState = (e) => {
    const nextState = { ...dummyState, [e.target.name]: e.target.value };
    updateDummyState(nextState);
  };
  return (
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
              type="text"
              required={true}
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
              type="text"
              required={true}
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
              type="text"
              required={true}
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
              type="text"
              required={true}
              onChange={updateLocalState}
              value={dummyState.age}
            />
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            {" "}
            <Link to="/registersuccess">
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(formOnSubmit(dummyState));
                }}
              >
                Sign up
              </Button>
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
export default FormElements;
