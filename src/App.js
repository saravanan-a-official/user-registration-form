import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RegistrationForm from "./components/registration-form";
import RegisterSuccess from "./components/register-success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegistrationForm />} />
        <Route path="/registersuccess" element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
