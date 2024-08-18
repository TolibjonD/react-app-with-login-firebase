import { Route, Routes } from "react-router-dom"
import { Login, Main, Navbar, Register } from "./components"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
    <Navbar />
    <ToastContainer />
    <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
    </div>
  )
}

export default App