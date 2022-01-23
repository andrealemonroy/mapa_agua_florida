import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Location = (props) => {
  const [address, setAddress] = useState("");
  let location = {
    lat: 0,
    lng: 0,
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAddress(address);
        location = latLng;
        props.setState({location: location})
      })
      .catch((error) => console.error("Error", error));
  };
  const handleChange = (address) => {
    setAddress(address);
  };
  return (
    <div className="grid justify-center mt-40">
      <label
        htmlFor="location"
        className="block text-xl font-medium text-gray-700 font-extrabold text-center w-72 sm:w-full"
      >
        ¿Dónde te encuentras?
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
                  name: "location",
                  placeholder: "¿Dónde te encuentras?",
                  className:
                    "mt-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-full m-auto sm:w-full",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Cargando...</div>}
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
      <div className="flex space-around gap-0 sm:gap-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default Location;
