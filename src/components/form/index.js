import React from "react";
import { Link } from "react-router-dom";
const MusiciansForm = () => {
  return (
    <div className="grid justify-center align-middle mt-20">
      <h2 className="text-center text-2xl font-bold">
        Te quieres registrar como:
      </h2>
      <div className="grid sm:flex gap-8 justify-center mt-5">
        <Link
          to="/bandForm"
          className="w-64 py-2 bg-primary rounded-md text-white text-center"
        >
          Agrupación musical
        </Link>
        <Link
          to="/personalForm"
          className="w-64 py-2 bg-primary rounded-md text-white text-center"
        >
          Persona/Solista
        </Link>
      </div>
    </div>
  );
};

export default MusiciansForm;
