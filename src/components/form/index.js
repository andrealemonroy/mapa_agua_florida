import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  fullName: '',
  artisticName: '',
  email: '',
  social: {
    facebook: '',
    twitter: ''
  }
}

const savedValues = {
  fullName: 'Andrea Monroy',
  artisticName: '',
  email: 'andreale17@icloud.com',
  social: {
    facebook: 'https://www.facebook.com/andream1705/',
    twitter: 'https://twitter.com/andrealemonroy'
  }
}

const onSubmit = (values, submitProps) => {
  console.log('Form data', values)
  console.log('submitProps', submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required')
})

export const MusiciansForm = () => {
  const [formValues, setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formik => {
        console.log('Formik props', formik)
        return (
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Nombre completo</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='artisticName'>Nombre artístico</label>
              <Field type='text' id='artisticName' name='artisticName' />
              {/* <ErrorMessage name='artisticName' component={TextError} /> */}
            </div>

            <div className='form-control'>
              <label htmlFor='facebook'>Facebook</label>
              <Field type='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
              <label htmlFor='twitter'>Youtube</label>
              <Field type='text' id='youtube' name='social.youtube' />
            </div>

            <button type='reset'>Limpiar</button>
            <button
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Enviar
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
