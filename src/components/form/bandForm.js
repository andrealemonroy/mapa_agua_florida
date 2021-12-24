import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import axios from "axios";
import FormikPlacesAutoComplete from "./FormikPlacesAutocomplete.jsx";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { Link } from "react-router-dom";

import { roleOptions } from "../../utils/roleOptions";

const initialValues = {
  fullName: "",
  artisticName: "",
  location: "",
  role: [],
  email: "",
  projects: [],
  socialNetworks: {
    facebook: "",
    spotify: "",
    instagram: "",
    youtube: "",
    bandcamp: "",
  },
  photo: "",
  termsAndConditions: false,
};

const BandForm = () => {
  const [formValues, handleInputChange] = useForm({
    fullName: "",
    artisticName: "",
    role: [],
    email: "",
    projects: [],
    socialNetworks: {
      facebook: "",
      spotify: "",
      instagram: "",
      youtube: "",
      bandcamp: "",
    },
    photo: "",
    termsAndConditions: false,
  });
  let photoSelected;
  const [address, setAddress] = useState("");
  const {
    fullName,
    artisticName,
    email,
    facebook,
    spotify,
    instagram,
    youtube,
    bandcamp,
  } = formValues;
  const [checkbox, setCheckbox] = useState(false);
  let location = {
    lat: 0,
    lng: 0,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAddress(address);
        location = latLng;
        console.log(location);
      })
      .catch((error) => console.error("Error", error));
  };
  const handleChange = (address) => {
    setAddress(address);
  };
  const handleFileUpload = (e) => {
    let reader = new FileReader();
    photoSelected = e.target.files[0];
    reader.onloadend = () => {
      photoSelected = reader.result;
    };
    console.log(photoSelected);
    reader.readAsDataURL(photoSelected);
  };

  // const handleCheckboxChange = (roleName) => {
  //   setCheckbox(!checkbox);
  // };
  //handle state multiple checkbox
  const [checkedState, setCheckedState] = useState(
    new Array(roleOptions.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Cuál es el nombre del proyecto musical?
              </label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
                autoComplete="off"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Distrito, Provincia, Departamento
                <PlacesAutocomplete
                  value={address}
                  onChange={handleChange}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: "Busca aquí tu ciudad",
                          className: "w-full",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </label>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                name="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Quiénes conforman el proyecto musical?
              </label>
              <input
                type="text"
                value={spotify}
                onChange={handleInputChange}
                name="spotify"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="lg:col-span-6 col-span-12">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Cuál es el género musical?
              </label>
              <input
                type="text"
                value={facebook}
                onChange={handleInputChange}
                name="facebook"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="lg:col-span-6 col-span-12">
              <label className="block text-sm font-medium text-gray-700">
                Agregar tu foto
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Subir archivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">o arrastrálo aquí</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF max 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 col-span-12 flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Acepto los{" "}
                  <Link to="/termsAndConditions" className="underline">
                    Términos y condiciones
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default BandForm;
