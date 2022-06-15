import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { TextField, Switch, InputAdornment, Button, Stack, Typography, Divider, Alert, Snackbar } from '@mui/material';
import * as Yup from 'yup';
import './signup.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export const Signup = () => {
    //! State
    const [open, setOpen] = React.useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const initialValues = {
        phone: '',
        user: '',
        password: '',
        confirmPassword: '',
        card: '',
    };

    //! Function
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleChange = () => {
        setIsTouch(!isTouch);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const validationSchema = Yup.object({
        user: Yup.string().min(3, 'At least 5 characters').max(15, 'Max 15 characters or less').required('Required'),
        phone: Yup.string().required('Is required'),
        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
        card: Yup.string().required('Failed to add card'),
    });
    const onSubmit = (values, { resetForm }) => {
        if (values) {
            setFormSuccess(true);
        }
        resetForm();
    };

    //! Render
    return (
        <>
            {formSuccess && (
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize: 'medium' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            )}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <div className="container_signup">
                        <h1 className="title">Đăng kí tài khoản</h1>
                        <Form className="form_signup">
                            <TextField
                                className="text_field"
                                fullWidth
                                name="phone"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.phone}
                                placeholder="Điện thoại hoặc email"
                                type="text"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CallIcon fontSize="large" sx={{ color: '#00a550' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {props.touched.phone && props.errors.phone ? (
                                <div id="errors">{props.errors.phone}</div>
                            ) : null}
                            <TextField
                                className="text_field"
                                fullWidth
                                name="user"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.user}
                                placeholder="Tên hiển thị"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlineIcon fontSize="large" sx={{ color: '#00a550' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {props.touched.user && props.errors.user ? (
                                <div id="errors">{props.errors.user}</div>
                            ) : null}
                            <div className="text_field" style={{ display: 'flex' }}>
                                <div className="text_pass">
                                    <TextField
                                        placeholder="Mật khẩu"
                                        name="password"
                                        type="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                    />
                                    {props.touched.password && props.errors.password ? (
                                        <div id="errors_password">{props.errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="text_pass">
                                    <TextField
                                        placeholder="Xác nhận mật khẩu"
                                        name="confirmPassword"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.confirmPassword}
                                        type="password"
                                    />
                                    {props.touched.confirmPassword && props.errors.confirmPassword ? (
                                        <div id="errors_password">{props.errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                            </div>
                            <TextField
                                placeholder="Nhập mã giới thiệu nếu có"
                                name="card"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.card}
                                type="text"
                                fullWidth
                                className="text_field"
                            />
                            {props.touched.card && props.errors.card ? (
                                <div id="errors">{props.errors.card}</div>
                            ) : null}
                            <div className="open">
                                <Switch
                                    checked={isTouch}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <span>Khách hàng</span>
                            </div>
                            {isTouch && (
                                <>
                                    <TextField
                                        label="Khách hàng cá nhân"
                                        placeholder="CMND hoặc Mã số thế"
                                        name="customer"
                                        type="text"
                                        fullWidth
                                        className="text_field"
                                    />
                                    <div className="text_field" sx={{ display: 'flex' }}>
                                        <TextField
                                            placeholder="Ngày cấp"
                                            name="start_date"
                                            type="date"
                                            sx={{ width: '49%', marginRight: '2%' }}
                                        />
                                        <TextField
                                            placeholder="Nơi cấp"
                                            name="place"
                                            id="place"
                                            type="text"
                                            sx={{ width: '49%' }}
                                        />
                                    </div>
                                    <TextField
                                        label="Chứng nhận ĐKKD"
                                        placeholder="Khách hàng doanh nghiệp"
                                        name="customer"
                                        type="text"
                                        fullWidth
                                        className="text_field"
                                    />
                                </>
                            )}
                            <Button onClick={handleClick} className="btn_signup" type="submit" variant="contained">
                                Đăng Kí
                            </Button>
                            <Divider sx={{ margin: '1rem' }} />
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                align="center"
                                sx={{ fontSize: 'larger', mt: 2, mb: 2 }}
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
                                    sx={{ padding: '1rem 3rem', fontSize: 'larger', width: '40%' }}
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
        </>
    );
};
