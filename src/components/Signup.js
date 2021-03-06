import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function Signup() {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [data, setdata] = useState("")
    const navigate = useNavigate()


    const handleSignup = async () => {

        let payload = user
        // console.log(payload);
        await axios(`http://localhost:8080/sign-up`, {

            method: "POST",
            data: payload,
            
        })
            .then((res) => {
                if (res.status) {
                    setdata(res.data)
                    alert(res.data.message);
                    console.log(res);
                    navigate("/")
                }
            })
            .catch((err) => {
                console.log(data)
                alert(err.response.data.message);

            })

    }


    return (
        <Container width="100vh" sx={{ textAlign: "center" }}>
            <Grid
                container
                xs={12}
                component="main"
                sx={{ width: "130vh", height: "70vh", marginLeft: "auto", marginRight: "auto", border: "1px solid black" }}
            >

                <Grid item xs={12} >
                    <label style={{ fontSize: "40px", alignItems: "center" }} >AM Social Feed</label>
                </Grid>

                <Grid item xs={9} style={{ paddingLeft: "0px", marginTop: "20px", marginLeft: "100px" }}>
                    <TextField
                        error={false}
                        type='text'
                        id="outlined-error"
                        label="First Name"
                        placeholder='Enter First Name'
                        value={user.firstname}
                        onChange={(e) => setuser({ ...user, firstname: e.target.value })}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={9} style={{ paddingLeft: "0px", marginTop: "20px", marginLeft: "100px" }}>
                    <TextField
                        error={false}
                        type='text'
                        id="outlined-error"
                        label="Last Name"
                        placeholder='Enter Last name'
                        value={user.lastname}
                        onChange={(e) => setuser({ ...user, lastname: e.target.value })}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={9} style={{ paddingLeft: "0px", marginTop: "20px", marginLeft: "100px" }}>
                    <TextField
                        error={false}
                        type='email'
                        id="outlined-error"
                        label="Email"
                        placeholder='Enter your email'
                        value={user.email}
                        onChange={(e) => setuser({ ...user, email: e.target.value })}
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={9} style={{ paddingLeft: "0px", marginTop: "20px", marginLeft: "100px" }}>
                    <TextField
                        size="small"
                        required
                        name="password"
                        placeholder="password"
                        type="password"
                        id="password"
                        value={user.password}
                        autoComplete="current-password"
                        onChange={(e) => setuser({ ...user, password: e.target.value })}
                        error={false}
                        autoFocus
                        sx={{ minWidth: "100%" }}
                    />
                </Grid>




                {/* <Grid item xs={12} style={{ paddingLeft: "0px", marginTop: "20px" }}>
                        <TextField
                            required
                            size="small"
                            id="email"
                            type="email"
                            error={false}
                            placeholder="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        //   value={signInForm.email}
                        //   onChange={(value) =>
                        // setSignInForm({
                        //   email: value.target.value,
                        //   password: signInForm.password,
                        // })
                        //   }
                        //   sx={{ minWidth: "100%" }}
                        />
                    </Grid> */}

                <Grid item xs={12} sm={6} sx={{ marginTop: "30px" }}>
                    <Button type='submit' variant='contained' color='primary' sx={{ marginRight: "20px" }} onClick={() => handleSignup()} >Sign up</Button>
                    <Button type='submit' variant='contained' color='primary' onClick={() => navigate('/')}>Cancle</Button>


                </Grid>

            </Grid>

        </Container >

    )
}

export default Signup