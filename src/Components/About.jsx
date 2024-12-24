
import useDocumentTitle from "../TitleChange/useTitleChange";

const About = () => {
    useDocumentTitle('Shan Estate : About us')

    return (

        <div className="mt-20 mb-20">
            <div className="flex justify-between items-center lg:flex-row md:flex-col flex-col-reverse gap-y-6 gap-x-3">
                <div className="flex-1">
                    <h1 className="text-3xl text-blue-600">About Us</h1>

                    <p className="text-gray-700">
                        Welcome to Shan&apos;s estate, your trusted partner in finding the perfect place to call home. We specialize in providing a seamless and stress-free experience for individuals and families looking to buy, rent, or invest in residential real estate. With a strong commitment to excellence, we have built a reputation for delivering top-notch services tailored to the unique needs of our clients.

                        Our team of experienced professionals understands that every property has a story, and every client has a dream. We work diligently to connect you with properties that not only meet your expectations but exceed them. From luxury apartments and beachfront villas to cozy suburban homes and urban studios, we offer a diverse range of properties to suit every lifestyle and budget.

                        At Shan&apos;s estate, customer satisfaction is at the heart of everything we do. Our knowledgeable agents provide personalized guidance and support throughout the entire process, ensuring that you feel confident and informed at every step. Whether you&apos;re searching for your dream home, a lucrative investment opportunity, or a temporary rental, we are here to make your vision a reality.

                        We also take pride in our innovative approach to real estate, leveraging the latest technology to provide accurate listings, virtual tours, and real-time updates. Our dedication to transparency, efficiency, and attention to detail sets us apart in a competitive market.

                        Discover a new standard of real estate service with Shan&apos;s estate. Let us help you find the perfect place to live, grow, and thrive. Your journey begins with us, and we are excited to be a part of your story.
                    </p>
                </div>

                <div className="flex-1 rounded-2xl">
                    <img className="rounded-2xl" src="https://i.ibb.co.com/2hw6S9V/real-estate.webp" alt="" />


                </div>



            </div>

            <div className="mt-16">


            </div>

        </div>
    );
};

export default About;