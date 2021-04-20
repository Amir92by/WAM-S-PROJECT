import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import{Navbar,Nav,Form,FormControl}from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


import './NavBar.css'
import { logout } from '../../JS/actions/user'

 import logo from "../../assets/logo.png"


const NavBar = ({setInputSearch}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.userReducer.isAuth)
    const user = useSelector((state) => state.userReducer.user)

    
    return (
    <div>

  {/* // nv navbar */}
  <Navbar bg="dark" expand="lg" variant="dark"  className='nabbar'>
  {/* <Navbar.Brand href="#home"> <img src={logo} alt="wams" className="logo" /> </Navbar.Brand> */}
  <Navbar.Brand href="#home"  > <img src={logo}  alt='logo'  className='logo'/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

        <Link to="/"className="Btn" >
              <Nav href="/">Home</Nav>
        </Link>

        <Link to="/profile" className="Btn" >
              <Nav href="/">Profil</Nav>
        </Link>


       { user && user.role ===1 ?
       <Link to="/admin" className="Btn" >
              <Nav href="/">Admin</Nav>
        </Link>
        :
        null
        }
    
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>

    <Form inline>
        <Nav className="mr-auto "  className='searchInput'>
            

            { isAuth?(
                  <NavLink to="/" className="Btn" activeClassName='active-link'>
                    <Nav href="/" onClick={()=>dispatch(logout() )} >LogOut</Nav>
                </NavLink>)
                :
                (
                    <div className="sign">
                        <Link to="/signin" className="Btn">
                            <Nav href="/">Sign In</Nav>
                        </Link>
                        <Link to="/signup" className="Btn">
                            <Nav href="/" >Sign Up</Nav>
                        </Link>
                    </div>
                )

            }
          
            
        </Nav>
            <FormControl type="text" placeholder="Search.." className="mr-sm-1 " 
            style={{height:'32px'}} 
            onChange={(e)=>setInputSearch(e.target.value)}
            />
            {/* <Button variant="outline-success">Search</Button>  */}
      </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
    )
}

export default NavBar


