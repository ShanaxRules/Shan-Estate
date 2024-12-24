import moment from "moment/moment";
import useDocumentTitle from "../TitleChange/useTitleChange";
import Ticker from "./Ticker";
import Slider from "./Home/Slider";
import Estates from "./Home/Estates";
import Corcodon from "./Home/Corcodon";

const Home = () => {

    useDocumentTitle('Shan Estate : Home');
    return (
        <div>
            <Ticker></Ticker>
            <div>
            
                <p className="text-blue-400">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            
            </div>
            <div className="mt-8">
                <Slider></Slider>
            </div>
            <div>
                <Estates></Estates> 
            </div>
            
            <div className="mt-20">
                <Corcodon></Corcodon>
            </div>
            
        </div>
    );
};

export default Home;