import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Card = ({estate}) => {

    const {estate_title , segment_name , price , status , area , location , image} = estate;

    const navigate = useNavigate();
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl shadow-blue-100  p-5">

                <div>
                    <img
                        src={image}
                        alt="Shoes" className="w-full h-[250px] rounded-2xl" />
                </div>

                <div className="mt-6">
                    <h1 className="text-black font-semibold text-2xl mb-6 ">{estate_title}</h1>
                    <div className="flex items-center justify-between gap-x-2 mb-4">
                        <h1 className="text-gray-600 font-semibold text-xl ">{segment_name}</h1>
                        <h1 className="text-xl text-black font-semibold">{price}</h1>
                    </div>
                    <div className="flex items-center gap-x-3 mb-4">
                        <h1 className="px-5 py-2 rounded-3xl bg-green-100 text-green-600">{status}</h1>
                        <h1 className="px-5 py-2 rounded-3xl bg-red-100 text-red-600">{area}</h1>
                    </div>
                    <div className="flex items-center gap-x-1">
                    <CiLocationOn />
                    <h1 className="text-gray-800">{location}</h1>
                    </div>
                    <div className="mt-4">
                        <button className="btn bg-blue-500 rounded-xl px-3 py-2 text-white" onClick={()=>navigate('/details' , {state: {data : estate}})}>View Details</button>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Card;