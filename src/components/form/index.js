import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import axios from 'axios';
import FormikPlacesAutocomplete from './FormikPlacesAutocomplete.jsx';
import { useHistory } from "react-router-dom";

const initialValues = {
  fullName: '',
  artisticName: '',
  location: '',
  role: [],
  email: '',
  projects: [],
  socialNetworks: {
    facebook: '',
    spotify: '',
    instagram: '',
    youtube: '',
    bandcamp: '',
  },
  photo: '',
  termsAndConditions: false,
};

const savedValues = {
  fullName: '',
  artisticName: '',
  email: '',
  socialNetworks: {
    facebook: '',
    twitter: '',
  },
};
let photoSelected;

// const formValues = {}

const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

export const MusiciansForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(null);
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleFileUpload = (e) => {
    let reader = new FileReader();
    photoSelected = e.target.files[0];
    reader.onloadend = () => {
      photoSelected = reader.result
    };
    console.log(photoSelected)
    reader.readAsDataURL(photoSelected);
  };
  const handleOnSubmit = (values, actions) => {
    values.photo = photoSelected;
    axios({
      method: 'POST',
      url: 'https://api.aguaflorida.pe/api/users',
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        console.log(response);
        history.push("/map");
        // handleServerResponse(true, 'Thanks!');
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.log(error);
        // handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      // initialValues={formValues || initialValues}
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
      // enableReinitialize
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Nombre completo</label>
          <Field type='text' id='name' name='fullName' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='artisticName'>Nombre artístico</label>
          <Field type='text' id='artisticName' name='artisticName' />
          {/* <ErrorMessage name='artisticName' component={TextError} /> */}
        </div>
        <div className='form-control'>
          <label htmlFor='location'>
            Dirección
            <Field name='location' component={FormikPlacesAutocomplete} />
          </label>
        </div>

        <div className='form-control'>
          <div id='checkbox-group'>Rol</div>
          <div role='group' aria-labelledby='checkbox-group'>
            <label>
              <Field type='checkbox' name='role' value='Cantante' />
              Cantante
            </label>
            <label>
              <Field type='checkbox' name='role' value='Productora' />
              Productora
            </label>
            <label>
              <Field type='checkbox' name='role' value='Compositora' />
              Compositora
            </label>
          </div>
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Correo electrónico</label>
          <Field type='email' id='email' name='email' />
        </div>

        <div className='form-control'>
          <label htmlFor='projects'>Proyectos</label>
          <Field type='text' id='projects' name='projects' />
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>Facebook</label>
          <Field type='text' id='facebook' name='socialNetworks.facebook' />
        </div>

        <div className='form-control'>
          <label htmlFor='spotify'>Spotify</label>
          <Field type='text' id='spotify' name='socialNetworks.spotify' />
        </div>

        <div className='form-control'>
          <label htmlFor='instagram'>Instagram</label>
          <Field type='text' id='instagram' name='socialNetworks.instagram' />
        </div>

        <div className='form-control'>
          <label htmlFor='youtube'>Youtube</label>
          <Field type='text' id='youtube' name='socialNetworks.youtube' />
        </div>

        <div className='form-control'>
          <label htmlFor='bandcamp'>Bandcamp</label>
          <Field type='text' id='bandcamp' name='socialNetworks.bandcamp' />
        </div>

        <div className='form-control'>
          <label htmlFor='file'>Foto</label>
          <Field type='file' id='file' name='photo' onChange={handleFileUpload}/>
        </div>
        <div className='form-control'>
          <label>
            <Field type='checkbox' name='termsAndConditions' />
            Acepto los términos y condiciones
          </label>
        </div>

        {/* <button type='reset'>Limpiar</button> */}
        <div className='form-control'>
          <button
            type='submit'
            // onClick={() => setFormValues(savedValues)}
            // disabled={!formik.isValid || formik.isSubmitting}
          >
            Enviar
          </button>
        </div>
      </Form>
    </Formik>
  );
};
