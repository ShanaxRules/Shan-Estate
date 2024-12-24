import { useNavigate } from "react-router-dom";

const Slider = () => {

    const navigate = useNavigate();

    function navigateCarousel(slideNumber) {
        const carousel = document.querySelector('.carousel');
        const targetSlide = document.getElementById(`slide${slideNumber}`);
        carousel.scrollTo({
            top: 0,
            left: targetSlide.offsetLeft,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div className="carousel w-full rounded-xl">
                <div id="slide1" className="carousel-item relative w-full h-[650px]">
                    <img
                        src="https://i.ibb.co.com/4W8YLSN/625b10a58137b364b18df2ea-i-Stock-94179607.jpg"
                        className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a onClick={()=>navigateCarousel(3)} className="btn btn-circle">❮</a>
                        <div className="flex flex-col lg:gap-y-8 md:gap-y-6 gap-y-2 text-center">
                            <h2 className="text-white lg:text-5xl md:text-3xl text-3xl font-bold">Welcome to the Shan&apos;s Estate</h2>
                            <h2 className="text-white lg:text-4xl md:text-2xl text-2xl font-bold">Where your dream <span className="text-blue-600">land</span> begins</h2>
                            <div>
                            <button onClick={()=>navigate('/about')} className="bg-blue-800 text-white font-semibold border-2 border-white rounded-xl px-3 py-2 hover:bg-blue-300">Learn more</button>
                            </div>

                        </div>
                        <a onClick={()=>navigateCarousel(2)} className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[650px]">
                    <img
                        src="https://i.ibb.co.com/nDvVhmg/istockphoto-899471458-612x612.jpg"
                        className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-start">
                        <a onClick={()=>navigateCarousel(1)}  className="btn btn-circle mr-3">❮</a>
                        <div className="flex flex-col lg:gap-y-8 md:gap-y-6 gap-y-2 text-left flex-1">
                            <h2 className="text-white lg:text-5xl md:text-3xl text-3xl font-bold">We are professional at our fields</h2>
                            <h2 className="text-white lg:text-4xl md:text-2xl text-2xl font-bold">Meet our <span className="text-blue-800">brokers</span> for more</h2>
                            <div>
                            <button onClick={()=>navigate('/about')} className="bg-blue-800 text-white font-semibold border-2 border-white rounded-xl px-3 py-2 hover:bg-blue-300">Learn more</button>
                            </div>

                        </div>

                        <a onClick={()=>navigateCarousel(3)}  className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[650px]">
                    <img
                        src="https://i.ibb.co.com/gmdXDNj/depositphotos-21515189-stock-photo-agent-with-house-model-and.webp"
                        className="w-full" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end">
                        <a onClick={()=>navigateCarousel(2)}  className="btn btn-circle">❮</a>
                        <div className="flex flex-col lg:gap-y-8 md:gap-y-6 gap-y-2 text-right flex-1">
                            <h2 className="text-white lg:text-5xl md:text-3xl text-3xl font-bold">We provide security <span className="text-blue-600">for you</span></h2>
                            <h2 className="text-white lg:text-4xl md:text-2xl text-2xl font-bold">With our <span className="text-blue-800">expertise</span></h2>
                            <div>
                            <button onClick={()=>navigate('/about')} className="bg-blue-800 text-white font-semibold border-2 border-white rounded-xl px-3 py-2 hover:bg-blue-300">Learn more</button>
                            </div>

                        </div>
                        <a onClick={()=>navigateCarousel(1)}  className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Slider;