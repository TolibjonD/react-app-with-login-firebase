import { Link } from "react-router-dom"
import { images } from "../constants"
import { Button } from "@mui/material"
import { useSelector } from "react-redux"
import { PersonOutlineTwoTone } from "@mui/icons-material"


const Navbar = () => {
  const {isLoggedIn, user} = useSelector(state => state.auth)
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
      <Link to={'/'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={images.logo} alt="" width={"40px"} />
        <span className="fs-4">Redux</span>
      </Link>

      <ul className="nav">
        <li className="nav-item">
          { isLoggedIn ? (
         <div className="dropdown">
         <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         { user.email.slice(0,12) }...
         </button>
         <ul className="dropdown-menu">
           <li><span className="dropdown-item">Logout</span></li>
         </ul>
       </div>

          ) : (
            <Link to={'/login'}>
          <Button><PersonOutlineTwoTone fontSize="large" /></Button>
          </Link>
          ) }
        </li>
      </ul>
    </header>
  </div>
  )
}

export default Navbar