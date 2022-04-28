import { Container, Grid } from '@mui/material'
import React from 'react'

function Login() {
    return (


        <Container width="100vh" sx={{ textAlign: "center" }}>
            <Grid
                container
                xs={12}
                component="main"
                sx={{ width: "130vh", height: "500px", marginLeft: "auto", marginRight: "auto", border: "1px solid black" }}
            ></Grid>

        </Container >

    )
}

export default Login