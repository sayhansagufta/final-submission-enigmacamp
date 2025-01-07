import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Routes>
      <Route element={<SignUp />} path="/" />
      <Route element={<SignIn />} path="/login" />
    </Routes>
  );
}
export default App;
