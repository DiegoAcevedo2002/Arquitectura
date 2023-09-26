import { Link } from "react-router-dom";

export default function RevistaPost ({}) {
    return (
        <Link
        to={"/revista/444"}
      >
    <div className="cursor-pointer mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
        <div className="mt-2 text-base leading-7 text-rose-800">
            <h5>rose maria | 17/05/2022</h5>
        </div>
        <p className="mt-2 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
            repellendus etur quidem assumenda.
        </p>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl overflow-hidden bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
            
                <img src="https://cms.ar-racking.com/uploads/2021/03/STOCK-2023.jpg" />
           
        </div>
        </div>
    </div></Link>
    )
}