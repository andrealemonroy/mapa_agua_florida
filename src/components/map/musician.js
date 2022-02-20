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
    baseURL: "https://api.aguaflorida.pe/api",
    headers: { "Content-Type": "application/json" },
  });

  // const { id } = useParams();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const test = useQuery();
  const it = test.get("id");
  const [userInfo, setUserInfo] = useState({});
  const [bandInfo, setBandInfo] = useState(null);

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
              <h2 className="text-center text-lg">
                Información de {userInfo.artisticName}
              </h2>
            </div>
            <div className="flex flex-row align-middle h-full justify-around">
              <div className="mx-auto">
                <img
                  className="w-96 object-cover rounded-lg shadow-lg"
                  src={userInfo.photo ? userInfo.photo : LogoMapa}
                  alt="User avatar"
                />
              </div>
              <div className="flex flex-col basis-2/3 mx-auto">
                <div className="flex flex-row">
                  <div className="bg-white text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary w-96 pb-10 mr-10">
                    <div className="my-4">
                      <span className="text-lg"> Información personal</span>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left">Nombre: </p>
                      <span className="mx-2">{userInfo.fullName}</span>
                    </div>
                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left">Correo: </p>
                      <span className="mx-2">{userInfo.email}</span>
                    </div>
                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left">Ubicación: </p>
                      <span className="mx-2">{userInfo.location?.value}</span>
                    </div>
                  </div>
                  <div className="bg-white text-center rounded-lg shadow-lg transform mx-auto my-2 border-2 border-primary w-96 pb-10 ml-10">
                    <div className="my-4">
                      <span className="text-lg"> Información artística</span>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left">Proyecto(s):</p>
                      <div className="flex flex-col mx-2">
                        {userInfo.projects?.map((project) => (
                          <div className="text-left">{project}</div>
                        ))}
                      </div>
                    </div>

                    <div className="flex mx-4 my-2">
                      <p className="w-24 text-left">Rol(es): </p>
                      <div className="flex flex-col mx-2">
                        {userInfo.role?.map((rol) => (
                          <div className="text-left">{rol}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div>Redes sociales:</div>

                  <div className="flex justify-evenly mt-5">
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
