/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/SVG/LOGO_MM.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Nav(props) {
  let location = useLocation();
  let navigation = [];
  if (props.route === "map") {
    navigation = [
      { name: "EL FESTIVAL", to: "/map", current: false },
      { name: "REGÍSTRATE", to: "/form", current: false },
    ];
  } else if(props.route === "form" || props.route === "musician"){
    navigation = [
      { name: "EL FESTIVAL", to: "/map", current: false },
      { name: "VER MAPA", to: "/map", current: false },
    ];
  } else {
    navigation = []
  }

  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={classNames(
                    props.route === "personalForm" || props.route === "bandForm"
                      ? "justify-center"
                      : "justify-between",
                    "flex-1 flex sm:items-stretch "
                  )}>
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="rounded-md text-sm font-medium"
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="bg-mmPurple px-6 py-2 text-white font-black font-franklin text-lg">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              {navigation.length > 0 ? navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.to === location.pathname
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )): <></>}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
