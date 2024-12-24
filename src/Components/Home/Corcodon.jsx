import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Corcodon = () => {
    return (

        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center mb-20">

            <div className="flex-1">
                <DotLottieReact
                    src="https://lottie.host/9b045865-da31-473e-8ecf-9e4a9f407563/3H1dqJm4Vl.lottie"
                    loop
                    autoplay
                />

            </div>
            <div className="flex flex-col gap-y-2 flex-1">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Are we available 24/7 in services?</div>
                    <div className="collapse-content">
                        <p>Yes we are available anytime , just contact us in our contact forums.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is their any discounts available?</div>
                    <div className="collapse-content">
                        <p>We offer discounts at various estates from time to time.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Are the brokers qualified enough?</div>
                    <div className="collapse-content">
                        <p>Yes , the brokers have qualified via rigorous training at the central hub</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I cancel my appointments?</div>
                    <div className="collapse-content">
                        <p>Yes you can cancel your appointment at any time if services do not meet your needs.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How to book?</div>
                    <div className="collapse-content">
                        <p>Contact us in our hotmail for a booking.</p>
                    </div>
                </div>

            </div>




        </div>

    );
};

export default Corcodon;