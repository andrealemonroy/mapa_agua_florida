import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LogoMapa from "../../assets/SVG/logoMapa.svg";
import logoFacebook from "../../assets/SVG/logoFacebook.svg";
import logoInstagram from "../../assets/SVG/logoInstagram.svg";
import logoSpotify from "../../assets/SVG/logoSpotify.svg";
import logoYoutube from "../../assets/SVG/logoYoutube.svg";
function MusicianInfo() {
  axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
  const instance = axios.create({
    baseURL: "https://api-agua-florida.vercel.app/api",
    headers: { "Content-Type": "application/json" },
  });

  // const { id } = useParams();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const test = useQuery();
  const it = test.get("id");
  const [userInfo, setUserInfo] = useState({});


  useEffect(() => {
    //   fetch(`https://api.twitter.com/user/${id}`)
    //     .then(setUser)
    if (it) {
      instance.get(`/users/${it}`).then(({ data }) => {
        setUserInfo(data.data);
        console.log(data.data);
      });
    }
  }, []);

  return (
    <div>
      {userInfo !== {} ? (
        <>
          <div className="flex flex-col align-middle h-full">
            <div className="w-screen h-full my-5">
              <h2 className="text-center text-2xl font-bold">
                 {userInfo.artisticName}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row align-middle h-full justify-around">
              <div className="mx-auto">
                <img
                  className="w-60 sm:w-96 sm:max-h-96 object-cover max-h-56 rounded-full shadow-lg"
                  src={userInfo.photo ? userInfo.photo : LogoMapa}
                  alt="User avatar"
                />
              </div>
              <div className="flex flex-col basis-2/3 mx-auto">
                <div className="flex flex-col sm:flex-row justify-center">
                  <div className="bg-white text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary sm:w-96 w-72 pb-10 sm:mr-10">
                    <div className="my-4">
                      <span className="text-base font-semibold"> Información personal</span>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left font-medium">Nombre: </p>
                      <span className="mx-2">{userInfo.fullName}</span>
                    </div>
                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left font-medium">Correo: </p>
                      <span className="mx-2">{userInfo.email}</span>
                    </div>
                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left font-medium">Ubicación: </p>
                      <span className="mx-2">{userInfo.location?.value}</span>
                    </div>
                  </div>
                  <div className="bg-white text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary sm:w-96 w-72 pb-10 sm:ml-10">
                    <div className="my-4">
                      <span className="text-base font-semibold"> Información artística</span>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left font-medium">Proyecto(s):</p>
                      <div className="flex flex-col mx-2">
                        {userInfo.projects?.map((project) => (
                          <div className="text-left">{project}</div>
                        ))}
                      </div>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left font-medium">Rol(es): </p>
                      <div className="flex flex-col mx-2">
                        {userInfo.role?.map((rol) => (
                          <div className="text-left">{rol}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 font-medium">
                  <div>Redes sociales:</div>

                  <div className="flex justify-evenly mt-5 pb-5">
                    {userInfo.socialNetworks?.map(
                      (socialNetwork) => {
                        if (socialNetwork[0]?.facebook) {
                          return (
                            <a target="_blank" href={socialNetwork[0].facebook}>
                              <img src={logoFacebook} />
                            </a>
                          );
                        } else if (socialNetwork[0]?.instagram) {
                          return (
                          <a target="_blank" href={socialNetwork[0].instagram}>
                            <img src={logoInstagram} />
                          </a>)
                        } else if (socialNetwork[0]?.spotify) {
                          return (
                          <a target="_blank" href={socialNetwork[0].spotify}>
                            <img src={logoSpotify} />
                          </a>)
                        } else if (socialNetwork[0]?.youtube) {
                          return (
                          <a target="_blank" href={socialNetwork[0].youtube}>
                            <img src={logoYoutube} />
                          </a>)
                        }
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default MusicianInfo;
