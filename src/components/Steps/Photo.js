import React, { useState } from "react";
import { Button } from "../Button/Button";

const Photo = (props) => {
  const [file, setFile] = useState("");
  const [base64URL, setBase64URL] = useState();
  // let base64URL = null;
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [name, setName] = useState("");

  let photoSelected;
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
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
        setBase64URL(baseURL)
        resolve(baseURL);
        
      };
    });
  };
  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);

    getBase64(e.target.files[0])
      .then((result) => {
        file["base64"] = result;
        console.log("File Is", file);
      })
      .catch((err) => {
        console.log(err);
      });
    setFile(e.target.files[0]);
  };
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);
  // };
  const onSubmit = async () => {
    console.log(base64URL);
    props.setState({ photo: base64URL });
    props.nextStep();
    // try {
    //   const res = await axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     onUploadProgress: progressEvent => {
    //       setUploadPercentage(
    //         parseInt(
    //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         )
    //       );
    //     }
    //   });

    //   // Clear percentage
    //   setTimeout(() => setUploadPercentage(0), 10000);

    //   const { fileName, filePath } = res.data;

    //   setUploadedFile({ fileName, filePath });

    //   setMessage('File Uploaded');
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage('There was a problem with the server');
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    //   setUploadPercentage(0)
    // }
  };
  return (
    <div className="grid justify-center mt-40">
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
            <p className="text-xs text-gray-500">PNG, JPG, JPEG max 10MB</p>
          </div>
        </div>
        <div className="flex space-around mt-2 gap-0 sm:gap-2">
          <Button click={props.prevStep} text="Anterior" />
          <Button click={onSubmit} text="Siguiente" />
        </div>
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Photo;
