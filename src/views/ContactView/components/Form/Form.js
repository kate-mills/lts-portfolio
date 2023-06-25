/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import {handleSubmitContactForm} from 'utils/form-helper'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup.string().trim().email('Please enter a valid email address').required('Email is required.'),
  message: yup.string().trim().required('Please specify your message')
})

const Contact = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }

  const formik = useFormik({initialValues, validationSchema: validationSchema, onSubmit: handleSubmitContactForm})
  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography variant={'h3'} sx={{fontWeight: 700}} align={'center'} gutterBottom>
          Contact me
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          Please don't hesitate to contact me to discuss how I can contribute to your organization—looking forward to
          hearing from you soon!
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit} data-netlify={'true'} name={'contact-form'} method="POST">
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{height: 54}}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{height: 54}}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{height: 54}}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button sx={{height: 54, minWidth: 150}} variant="contained" color="primary" size="medium" type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Typography color="text.secondary"></Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  I'll get back to you in 1-2 business days.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default Contact
