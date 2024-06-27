import { memo } from "react";
import { QualityAndSafety, servicesItems } from "./constants"
import ImageSlider from "./partials/ImageSlider";
import ServiceSlider from "./partials/ServiceSlider"

const HomePage = memo(() => (
    <>

        <ImageSlider />

        <div className="pt-10 px-5 md:px-32">
            <div className="flex justify-center items-center py-20 px-5 md:px-32 rounded bg-yellow-400 text-2xl">
                Trip Estimate coming soon
            </div>
        </div>

        <h4 className="w-full text-center pt-10 px-5 md:px-32 text-5xl font-normal">Our Services</h4>

        <div className=" flex gap-2 py-5 px-5 md:px-32 flex-col md:flex-row">
            {servicesItems.map(({ imageSrc, title, body, }) => (
                <div className=" w-full md:w-4/12 flex flex-col justify-start items-center p-5 gap-3 hover:shadow-xl rounded transition">
                    <img src={imageSrc} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">{title}</h4>
                    <p className="font-light">{body}</p>
                </div>
            ))}
        </div>

        <div className=" pt-5 px-5 md:px-32 justify-center items-center">
            <h4 className="w-full text-center pt-5 py-5 md:px-32 text-5xl font-normal">Our patient transport services include trips to/from</h4>
            <ServiceSlider />
        </div>

        <div className="flex flex-col pt-5 px-5 md:px-32 justify-center items-center">
            <h4 className="w-full text-center pt-5 py-5 md:px-32 text-5xl font-normal">About Us</h4>
            <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
                {QualityAndSafety.map((text, index) => (
                    <div className="flex h-[250px] justify-center items-center w-full md:w-2/3">
                        <p className="text-lg text-center hover:shadow-lg rounded transition items-center px-20 py-10" key={index}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
));

export default HomePage;