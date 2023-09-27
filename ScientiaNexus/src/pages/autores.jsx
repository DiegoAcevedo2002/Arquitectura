import { getAutors } from "@/api/Autor/autor";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 export default function Autores() {
    const [autors, setAutors] = useState([]);

    useEffect(() => {
        getAutors().then((res) => {setAutors(res)}).catch((err) => alert(err));
      }, [])
    return (
      <ul role="list" className="divide-y divide-gray-700 bg-gray-900 h-screen w-screen pt-20 px-10">
        {autors.map((autor) => (
          <li key={autor.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={autor.img} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-100">{autor.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{autor.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
             <Link to={`/autor/${autor._id}`} ><p className="text-sm leading-6 text-gray-100">ver</p></Link>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  