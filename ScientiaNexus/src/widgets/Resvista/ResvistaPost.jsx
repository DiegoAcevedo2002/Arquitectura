import { getOneAutor } from "@/api/Autor/autor";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function truncateText(text) {
    if (text.length > 500) {
      return text.substring(0, 500) + '...';
    } else {
      return text;
    }
  }

export default function RevistaPost ({ revista }) {
    const [autor, setAutor] = useState(null)
    useEffect(() => {
        getOneAutor(revista.autor).then((res) => {
            setAutor(res)
        }).catch((err) => {alert(err)});
    }, [])
    return (
    <Link
        to={`/revista/${revista._id}`}
      >
    <div className="cursor-pointer bg-white mx-auto mt-8 w-2xl shadow-md hover:shadow-xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto w-4/5">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{revista.name}</h3>
            <div className="mt-2 text-base leading-7 text-rose-800">
                <h5>{autor && autor.name + ' '} | {' ' + revista.date}</h5>
            </div>
            <p className="mt-2 text-base leading-7 text-gray-600">
                {truncateText(revista.content)} 
            </p>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl overflow-hidden bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
                <img src={revista.image} />
           
        </div>
        </div>
    </div></Link>
    )
}