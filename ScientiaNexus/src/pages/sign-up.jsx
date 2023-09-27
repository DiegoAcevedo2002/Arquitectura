import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { createUser } from "@/api/users/users";
import { useState } from "react";

export function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    createUser(data).then((result) => {
      navigate('/home');
    }).catch((err) => {
      alert(err)
    });
  }
  return (
    <>
      <img
        src="/img/image_logo.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
            Crear usuario
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e) => setData({ ...data, name: e.target.value })} variant="standard" label="Nombre" size="lg" />
            <Input onChange={(e) => setData({ ...data, email: e.target.value })} variant="standard" type="email" label="Correo" size="lg" />
            <Input
            onChange={(e) => setData({ ...data, password: e.target.value })}
              variant="standard"
              type="password"
              label="Contraseña"
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => handleSubmit()} variant="gradient" fullWidth>
            Crear usuario
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              ¿Incia sesion?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Iniciar sesión
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
