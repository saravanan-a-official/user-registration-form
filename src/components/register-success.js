import { useSelector } from "react-redux";
import * as CommonConstants from "../common/commonConstants";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
const RegisterSuccess = () => {
  const formStateData = useSelector((state) => state);
  return (
    <div className="App">
      <h1>{CommonConstants.REGISTER_SUCCESS}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td colSpan={2}>
              <h2>{CommonConstants.REGISTERATION_DETAILS}</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>First Name</b>
            </td>
            <td>{formStateData.firstName}</td>
          </tr>
          <tr>
            <td>
              <b>Middle Name</b>
            </td>
            <td>{formStateData.middleName}</td>
          </tr>
          <tr>
            <td>
              <b>Last Name</b>
            </td>
            <td>{formStateData.lastName}</td>
          </tr>
          <tr>
            <td>
              <b>Age</b>
            </td>
            <td>{formStateData.age}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default RegisterSuccess;
