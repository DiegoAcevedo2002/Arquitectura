import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import InputList from './InputList'
import { useState, useEffect, useRef } from 'react'
import { getAutors } from '@/api/Autor/autor';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from '@/api/firebase/credentials';
import { Avatar } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { insertArticle } from '@/api/Article/article';

function hashFunction(key) {
  const splittedWord = key.toLowerCase().split("");
  const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
  return codes.join("");
}

export default function FormArticle({ open, setOpen }) {
  const [selectAutor, setSelectedAutor] = useState({});
  const [autors, setAutors] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [data, setData] = useState({
    name: "",
    content: "",
    image: "",
    desertRef: "",
  });

  const handleUploadDocument = (e, doc) => {
    console.log(e);
    const file = e.target.files[0];


    if(!file){
      window.alert('No se ha seleccionado ninguna imagen o alt');
    }else{
      const desertRef = `/Article/${Math.floor(Math.random() * 10000000) + hashFunction(file.name)}`;
      const storageRef = ref(storage, desertRef);
      const task = uploadBytes(storageRef, file);

      task.then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            alert('se ha subido exitosamente')
            // setGalery([...galery, {alt, url: downloadURL}]);
            doc && setDocuments([...documents, downloadURL]);
            !doc && setData({ ...data, image: downloadURL, desertRef })
          });  
      });
    }
    
};


const handleSubmit = () => {
  if (selectAutor?._id) insertArticle({ ...data, documents, autor: selectAutor?._id })
  .then((res) => {alert('creacion exitosa'); setOpen(!open);})
  .catch((err) => alert(err));
}

  useEffect(() => {
    getAutors().then((res) => {setAutors(res)}).catch((err) => alert(err));
  }, [])
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
              <InputList text="Autor" selected={selectAutor} setSelected={setSelectedAutor} items={autors} />
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Contenido
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  onChange={(e) => setData({ ...data, content: e.target.value})}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Escríbeme unas cuantas frases acerca del articulo.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Imagen principal
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              {!data.image ? <PhotoIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                :
                <Avatar
                        src={data.image}
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

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Documentos
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Cargar un archivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onClick={(e) => handleUploadDocument(e, true)} />
                    </label>
                    <p className="pl-1">o arrastar</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">Sube cualquier documento que quieras adjuntar</p>
                </div>
              </div>
            </div>
          </div>
          <ul role="list" className="divide-y mt-5 divide-gray-800 rounded-md border border-gray-900">
          {documents.map((document) => <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                    <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                    </svg>
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate text-gray-900 font-medium">{document}</span>
                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                    <a href={document} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">Descargar</a>
                </div>
                </li>)}
                </ul>

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
