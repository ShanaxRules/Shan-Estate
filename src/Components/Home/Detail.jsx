import { useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";


const Detail = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { data } = location.state || {};
    console.log(data.image);
    return (
        <div className="mb-16">
            <button className="btn btn-accent mt-6 mb-6" onClick={()=>navigate(-1)}>Go back</button>
            <div className="flex lg:flex-row md:flex-row flex-col gap-x-3 gap-y-3">
                <div className="flex-1 h-[600px]">
                    <img className="lg:h-[600px] md:h-[480px] h-[400px] rounded-2xl" src={data.image} alt="" />
                </div>
                <div className=" flex-1  p-5">
                    <h1 className="text-black font-semibold lg:text-4xl md:text-3xl text-3xl mb-6">{data.estate_title}</h1>
                    <div className="flex flex-row items-center justify-between mb-6">
                        <h1 className="text-gray-600 lg:text-3xl md:text-2xl text-2xl">{data.segment_name}</h1>
                        <h1 className="text-black lg:text-3xl md:text-2xl text-2xl">{data.price}</h1>
                    </div>
                    <div>
                        <p className="text-gray-800 mb-6">{data.description}</p>
                    </div>
                    <div className="flex flex-row items-center gap-x-3 mb-18">
                        <h1 className="px-5 py-3 bg-green-100 text-green-800 rounded-3xl ">Status: {data.status}</h1>
                        <h1 className="px-5 py-3 bg-red-100 text-red-800 rounded-3xl ">Area: {data.area}</h1>
                    </div>

                    <div className="flex flex-row gap-x-3 items-center mt-8">
                        <CiLocationOn />
                        <h1 className="text-gray-700">{data.location}</h1>

                    </div>

                    <div className="flex lg:flex-row md:flex-row flex-col items-center gap-x-3 gap-y-3 mt-12">
                        <h1 className="text-black font-semibold text-lg">Facilities</h1>
                        <div className="flex lg:flex-row md:flex-row flex-col gap-x-3 gap-y-3">
                        {
                            data.facilities.map(fac => <h1 className="px-5 py-3 bg-blue-100 text-blue-800 rounded-3xl " key={data.id}>{fac}</h1>)
                        }

                        </div>
                        


                    </div>










                </div>















            </div>

        </div>
    );
};

export default Detail;