import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import Autores from "./pages/autores";
import RevistasCientificas from "./pages/revista-cientifica";
import RevistaCientifica from "./pages/revista-cientifica";
import Revista from "./pages/revista";
import Autor from "./pages/autor";

export const routes = (auth, setAuth) => {
  
  return ([
  {
    icon: HomeIcon,
    name: "Inicio",
    path: "/home",
    element: <Home />,
    view: true,
  },
  {
    icon: UserCircleIcon,
    name: "Perfil",
    path: "/profile",
    element: <Profile auth={auth} setAuth={setAuth} />,
    view: auth,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Inicio de Sesion",
    path: "/sign-in",
    element: <SignIn auth={auth} setAuth={setAuth} />,
    view: !auth,
  },
  {
    
    name: "Crear usuario",
    path: "/sign-up",
    element: <SignUp />,
    view: auth,
  },
  {
    icon: BookOpenIcon,
    name: "Autores",
    path: "/autores",
    element: <Autores />,
    view: true,
  },
  {
    icon: ClipboardDocumentListIcon,
    name: "Autor",
    path: "/autor/:id",
    element: <Autor />,
    view: false,
  },
  {
    icon: ClipboardDocumentListIcon,
    name: "Revista Cientifica",
    path: "/revista-cientifica",
    element: <RevistaCientifica/>,
    view: true,
  },
  {
    icon: ClipboardDocumentListIcon,
    name: "Revista",
    path: "/revista/:id",
    element: <Revista />,
    view: false,
  },
])};


export default routes;
