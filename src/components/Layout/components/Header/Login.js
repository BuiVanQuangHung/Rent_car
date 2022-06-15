import * as React from 'react';
import { Button, TextField, InputAdornment, Typography, Divider, Stack } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import './login.scss';
import { useState } from 'react';

export default function Login() {
    const initialValues = {
        user: '',
        password: '',
    };
    const validationSchema = Yup.object({
        user: Yup.string()
            .min(3, 'At least 5 characters')
            .max(15, 'Max 15 characters or less')
            .required('Invalid username'),
        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password invalid'),
    });
    //! Database Login
    const database = [
        {
            username: 'quanghung',
            password: '123456',
        },
        {
            username: 'admin',
            password: 'pass2',
        },
    ];
    const onSubmit = (values, { resetForm }) => {
        const userData = database.find((e) => e.username === values.value);
        console.log(userData);
        // if (userData) {
        //     if (userData.password !== password.value) {
        //         // Invalid password
        //         setErrorMessages({ name: 'pass', message: errors.pass });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: 'uname', message: errors.uname });
        // }
        resetForm();
    };

    //! Render
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <div className="container_login">
                        <h1 className="title">Đăng Nhập</h1>
                        <Form className="form_signup">
                            <TextField
                                className="text_field"
                                fullWidth
                                name="user"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.user}
                                placeholder="Tên đăng nhập"
                                type="text"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon fontSize="large" sx={{ color: '#00a550' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {props.touched.user && props.errors.user ? (
                                <div id="errors">{props.errors.user}</div>
                            ) : null}
                            <TextField
                                className="text_field"
                                fullWidth
                                name="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                placeholder="Mật khẩu"
                                type="password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon fontSize="large" sx={{ color: '#00a550' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {props.touched.password && props.errors.password ? (
                                <div id="errors">{props.errors.password}</div>
                            ) : null}
                            <Button className="btn_signin" type="submit" variant="contained" color="success">
                                Đăng nhập
                            </Button>
                            <Divider sx={{ margin: '1rem' }} />
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                align="center"
                                sx={{ fontSize: 'medium', mt: 2, mb: 2 }}
                            >
                                Hoặc đăng nhập bằng tài khoản
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<FacebookIcon />}
                                    sx={{ padding: '1rem 3rem', fontSize: 'medium', width: '40%' }}
                                >
                                    Facebook
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    startIcon={<GoogleIcon />}
                                    sx={{ padding: '1rem 3rem', fontSize: 'larger', width: '40%' }}
                                >
                                    Google
                                </Button>
                            </Stack>
                        </Form>
                    </div>
                )}
            </Formik>
        </Formik>
    );
}
