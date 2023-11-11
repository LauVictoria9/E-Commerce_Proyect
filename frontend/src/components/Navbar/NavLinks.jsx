import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {menu.map((menuPrincipal) => (
        <div key={menuPrincipal.id} className="">
          <div className=" group ">
            <h1
              className="py-7 flex justify-between items-center  md:pr-0 pr-5 "
              onClick={() => {
                heading !== menuPrincipal.icono
                  ? setHeading(menuPrincipal.icono)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {menuPrincipal.icono}
            </h1>
            <div className="group">
              <div className="absolute top-[32px] left-full z-30  px-1 hidden group-hover:block hover:block ">
                <div className="py-3 bg-black"></div>
                <div className="bg-white border-2 border-black  px-4 pt-3 pb-6">
                  {menuPrincipal.datos.map((datoMenu) => (
                    <div key={datoMenu.id} className="flex flex-col gap-y-3">
                      <h3 className="text-xl text-clr-one font-semibold mb-2">
                        {datoMenu.Head}
                      </h3>
                      {datoMenu.links.map((link) => (
                        <li
                          key={link.id}
                          className="bg-gray-100 text-clr-one font-medium pl-4  text-sm  border-l-4 border-clr-one "
                        >
                          <Link
                            to={link.link}
                            className="hover:text-primary flex justify-between gap-x-16 relative group/submenu"
                          >
                            {link.name}
                            <p>&gt;</p>
                            {link.submenu && (
                              <div className="absolute left-[100%] hidden  group-hover/submenu:block pl-4">
                                <div className="bg-white border-2 border-black  px-4 pt-3 pb-6">
                                  {link.subdatos.map((subDato) => (
                                    <div
                                      key={subDato.id}
                                      className="flex flex-col gap-y-3"
                                    >
                                      <h3 className="text-xl text-clr-one font-semibold mb-2">
                                        {subDato.Head}
                                      </h3>
                                      {subDato.sublinks.map((sublinks) => (
                                        <li
                                          key={sublinks.id}
                                          className="bg-gray-100 text-clr-one font-medium pl-4  text-sm  border-l-4 border-clr-one"
                                        >
                                          {console.log(link.link)}
                                          <Link
                                            to={sublinks.link}
                                            className="hover:text-primary flex justify-between gap-x-10 relative"
                                          >
                                            {sublinks.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menus */}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
