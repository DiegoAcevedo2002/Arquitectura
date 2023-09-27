import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";
import SlideOver from "../modals/SlideOver";
import FormArticle from "@/data/FormArticle";
import FormAutor from "@/data/FormAutor";

export function Navbar({ brandName, routes, action, auth }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [openNewArticle, setOpenNewArticle] = React.useState(false);
  const [openNewAutor, setOpenNewAutor] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.filter((item) => item.view).map(({ name, path, icon, href, target, view }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <div className="flex">
            <img src="/img/logo_circular.png" className="h-10 w-10" />
            <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
              {brandName}
            </Typography>
          </div>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
       
          <>
            <Button onClick={() => setOpenNewAutor(!openNewAutor)} className={auth ? 'visible' : 'invisible'} variant="text" size="sm" color="white" fullWidth>
              Crear Autor
            </Button>
          
            <Button onClick={() => setOpenNewArticle(!openNewArticle)} variant="text" size="sm" color="white" fullWidt className={classNames('bg-blue-600 text-center', auth ? 'visible' : 'invisible')}>
              Crear Articulo
            </Button>
            </>
   
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
        >
        <div className="container mx-auto">
          {navList}
          {auth &&
          <>
            <Button onClick={() => setOpenNewAutor(!openNewAutor)} variant="text" size="sm" fullWidth>
            Crear Autor
            </Button>

            <Button onClick={() => setOpenNewArticle(!openNewArticle)} variant="text" size="sm" color="white" fullWidth className="bg-blue-600 text-center">
            Craer Articulo
            </Button>
          </>
          }
        </div>
      </MobileNav>
    </MTNavbar>
    <SlideOver title="Crear un articulo" description="En esta seccion podras crear un articulo" open={openNewArticle} setOpen={setOpenNewArticle} >
      <div className="bg-white w-full rounded-xl shadow-2xl">
        <FormArticle open={openNewArticle} setOpen={setOpenNewArticle} />
      </div>
    </SlideOver>

    <SlideOver title="Crear un autor" description="En esta seccion podras crear un autor" open={openNewAutor} setOpen={setOpenNewAutor} >
      <div className="bg-white w-full rounded-xl shadow-2xl">
        <FormAutor open={openNewAutor} setOpen={setOpenNewAutor} />
      </div>
    </SlideOver>
          </>
  );
}

Navbar.defaultProps = {
  brandName: "ScientiaNexus",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        Descargar Articulo
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
