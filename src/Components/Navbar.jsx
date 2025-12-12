import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Link to="/a">
                <Button variant="contained">SIGN UP</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar