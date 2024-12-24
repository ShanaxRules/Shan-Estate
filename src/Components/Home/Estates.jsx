import { useEffect, useState } from "react";
import Card from "./Card";
import Review from "./Review";
import Marquee from "react-fast-marquee";

const Estates = () => {

    const [estates, setEstates] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/estateData.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, []);
    useEffect(() => {
        fetch('/ReviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // console.log(estates);
    console.log(reviews);
    return (
        <div>
            <div className='mt-20 text-center mb-18'>
                <h2 className='text-black font-semibold lg:text-4xl md:text-3xl text-2xl'>Our Estates</h2>

            </div>

            <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-20">
                {
                    estates.map(estate => <Card key={estate.id} estate={estate}></Card>)
                }
            </div>

            <div className='mt-20 text-center mb-18'>
                <h2 className='text-black font-semibold lg:text-4xl md:text-3xl text-2xl'>Our Reviews</h2>

            </div>

            <div className="mt-20">
                <Marquee autoFill={true} speed={100} gradient={true}>
                    {
                        reviews.map(reviewer => <Review key={reviewer.id} reviewer={reviewer}></Review>)
                    }

                </Marquee>


            </div>

            







        </div>

    );
};

export default Estates;