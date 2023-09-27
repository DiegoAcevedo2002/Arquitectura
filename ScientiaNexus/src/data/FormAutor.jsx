import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { insertAutor } from '@/api/Autor/autor';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '@/api/firebase/credentials';
import { Avatar } from '@material-tailwind/react';

function hashFunction(key) {
  const splittedWord = key.toLowerCase().split("");
  const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
  return codes.join("");
}

export default function FormAutor({ open, setOpen }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    img: "",
    desertRef: "",
  });

  const handleUploadDocument = (e) => {
    console.log(e);
    const file = e.target.files[0];


    if(!file){
      window.alert('No se ha seleccionado ninguna imagen o alt');
    }else{
      const desertRef = `/Autor/${Math.floor(Math.random() * 10000000) + hashFunction(file.name)}`;
      const storageRef = ref(storage, desertRef);
      const task = uploadBytes(storageRef, file);

      task.then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            alert('se ha subido exitosamente')
            // setGalery([...galery, {alt, url: downloadURL}]);
            setData({ ...data, img: downloadURL, desertRef })
          });  
      });
    }
    
};


const handleSubmit = () => {
  if (data?.name && data.email) insertAutor(data)
  .then((res) => {alert('creacion exitosa'); setOpen(!open);})
  .catch((err) => alert(err));
}

  return (
    <form className='p-4'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Crea un articulo</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Completa el formulario para crear un articulo</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  onChange={(e) => setData({ ...data, name: e.target.value})}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setData({ ...data, email: e.target.value})}
                  id="email"
                  autoComplete="given-email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Imagen principal
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              {!data.img ? <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                :
                <Avatar
                        src={data.img}
                        alt="Profile picture"
                        variant="circular"
                        className="h-10 w-10 shadow-xl"
                      />}
                <label
                      htmlFor="file-upload2.0"
                      className="relative p-1 cursor-pointer rounded-md bg-indigo-600 font-semibold text-white focus-within:outline-none focus-within:ring-2"
                    >
                      <span>Agregar imagen</span>
                      <input id="file-upload2.0" name="file-upload2.0" type="file" className="sr-only" onClick={(e) => handleUploadDocument(e, false)} />
                    </label>
              </div>
            </div>

          </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
       
        <button type="button" onClick={() => setOpen(!open)} className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Crear
        </button>
      </div>
    </form>
  )
}
