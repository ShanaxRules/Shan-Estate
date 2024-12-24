import Marquee from "react-fast-marquee";

const Ticker = () => {
    return (
        <div className="mt-6">
            <Marquee pauseOnHover={true} speed={120} className="bg-blue-500">
                
                <h2 className="text-xl font-semibold text-white flex-nowrap">Exciting estate awaits you tonight . Join us in this professional world.</h2>
               
            </Marquee>
            
        </div>
    );
};

export default Ticker;