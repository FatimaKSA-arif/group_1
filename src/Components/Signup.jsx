import React from 'react'
import { Button, TextField } from '@mui/material'

const Signup = () => {
  return (
    <div>
        <h1>Sign up</h1>
        <TextField label="Username" variant="outlined" /> <br /> <br />
        <TextField label="Email" variant="outlined" /> <br /> <br />
        <TextField label="Password" variant="outlined" /> <br /> <br />
        <TextField label="Confirm Password" variant="outlined" /> <br /> <br />
        <Button variant="contained">SIGN UP</Button>
    </div>
  )
}

export default Signup