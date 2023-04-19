import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "../utils/PrivateRoute";
import UserTable from "../components/UserTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<PrivateRoute />}>
          <Route path="" exact element={<UserTable />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
