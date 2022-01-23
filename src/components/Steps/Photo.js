import React, { useState } from "react";
import { Button } from "../Button/Button";
const Photo = (props) => {
  const [name, setName] = useState("");
  let photoSelected;
  const handleFileUpload = (e) => {
    let reader = new FileReader();
    photoSelected = e.target.files[0];
    reader.onloadend = () => {
      photoSelected = reader.result;
    };

    // reader.readAsDataURL(photoSelected);
    console.log(photoSelected);
    setName(photoSelected.name);
  };
  return (
    <div className="grid justify-center mt-40">
      <label className="block text-xl font-medium text-gray-700 font-extrabold text-center">
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
          <p className="text-xs text-gray-500">PNG, JPG, GIF max 10MB</p>
        </div>
      </div>
      <div>Archivo  {name} agregado</div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Finalizar" />
      </div>
    </div>
  );
};

export default Photo;
