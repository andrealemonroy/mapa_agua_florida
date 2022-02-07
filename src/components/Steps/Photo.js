import React, { useState } from "react";
import { Button } from "../Button/Button";

const Photo = (props) => {
  const [file, setFile] = useState("");
  const [show, setShow] = useState(false);
  const [base64URL, setBase64URL] = useState();
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({});

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);
      console.log(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        console.log("baseurl", baseURL);
        setBase64URL(baseURL);
        resolve(baseURL);
      };
    });
  };
  const handleFileInputChange = (e) => {
    console.log(e.target.files[0].size);
    debugger;
    if (e.target.files[0].size > 1000000) {
      setValue("La foto no puede superar 1MB de tamaño");
      setDisabled(true);
    } else {
      setValue("");
      setDisabled(false);
      setFile(e.target.files[0]);

      getBase64(e.target.files[0])
        .then((result) => {
          file["base64"] = result;
        })
        .catch((err) => {
          console.log(err);
        });
      setFile(e.target.files[0]);
      setUploadedFile(e.target.files[0]);
      setShow(true);
    }
  };

  const onSubmit = async () => {
    console.log(base64URL);
    props.setState({ photo: base64URL });
    props.nextStep();
  };
  return (
    <div className="grid justify-center mt-28">
      <label className="block text-xl font-medium text-gray-700 font-extrabold text-center">
        Agregar tu foto
      </label>
      <form className="grid justify-center mt-5">
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
                <span>Seleccionar archivo</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileInputChange}
                  accept=".jpg, .jpeg, .png"
                />
              </label>
              <p className="pl-1">o arrastrálo aquí</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, JPEG max 1MB</p>
          </div>
        </div>
        {show ? <div>Subió el archivo {file.name}</div> : null}
        {value !== "" ? (
          <div>
            <p className="text-red-600">{value}</p>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex space-around mt-2 gap-0 sm:gap-2">
          <Button click={props.prevStep} text="Anterior" />
          <Button disabled={disabled} click={onSubmit} text="Siguiente" />
        </div>
      </form>
    </div>
  );
};

export default Photo;
