import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catatan from "../pages/Catatan";
import Favorit from "../pages/Favorit";
import TentangKami from "../pages/TentangKami";
import DetailCatatan from "../pages/DetailCatatan";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

import CreateUser from "../components/CreateUser";
import TableUser from "../pages/TableUser";
import UpdateUser from "../components/UpdateUser";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catatan" element={<Catatan />} />
      <Route path="/favorit" element={<Favorit />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/catatan/detail" element={<DetailCatatan />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/user" element={<TableUser />} />
      <Route path="/updateUser/:id" element={<UpdateUser />} />
      <Route path="/createUser" element={<CreateUser />} />
    </Routes>
  );
}

export default Routing;
