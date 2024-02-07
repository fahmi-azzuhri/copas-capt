import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-blue-500"
      >
        Star me at
      </Typography>

      <a href="https://github.com/fahmi-azzuhri/copas-capt">
        <FaGithub className="w-6 h-6 text-blue-500 hover:text-blue-800" />
      </a>
    </ul>
  );
}

export function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-50 bg-transparent">
        <div className="flex items-center justify-between text-blue-900">
          <div className="flex flex-row items-center">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 text-blue-500"
            >
              Copas Capt 😎🙌🔥
            </Typography>
          </div>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
