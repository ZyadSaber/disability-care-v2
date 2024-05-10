import { memo, useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom"
import { slider1, slider2, slider3, slider4, van, wheelChair, arrows, services, p1, p2, p3, step1, step2 } from "../../images";
import {
    SliderContainer,
    SliderWrapper,
    ButtonsWrapper,
} from "./styled";

const images = [slider1, slider2, slider3, slider4];
const HomePage = memo(() => {
    const SliderContainerRef = useRef<HTMLDivElement>(null);
    const [{ currentIndex, currentTransition }, setRootSlider] = useState({
        currentIndex: 0,
        currentTransition: 0,
    });

    useLayoutEffect(() => {
        const timeoutId = setTimeout(() => {
            if (SliderContainerRef.current) {
                const { clientWidth } = SliderContainerRef.current;
                const newIndex = (currentIndex + 1) % images.length;
                setRootSlider({
                    currentIndex: newIndex,
                    currentTransition: -clientWidth * newIndex,
                });
            }
        }, 7000);

        return () => clearTimeout(timeoutId);
    }, [currentIndex]);

    const handleArrowClick = useCallback(
        (type: string) => () => {
            if (SliderContainerRef.current) {
                const newIndex = (currentIndex + 1) % images.length;
                const { clientWidth } = SliderContainerRef.current;

                const prevIndex = (currentIndex - 1) % images.length;
                const computedBackIndex = prevIndex < 0 ? images.length - 1 : prevIndex;

                switch (type) {
                    case "back":
                        setRootSlider({
                            currentIndex: computedBackIndex,
                            currentTransition: -clientWidth * computedBackIndex,
                        });
                        break;

                    case "next":
                        setRootSlider({
                            currentIndex: newIndex,
                            currentTransition: -clientWidth * newIndex,
                        });
                        break;

                    default:
                        break;
                }
            }
        },
        [currentIndex]
    );

    return (
        <>
            <SliderContainer>
                <SliderWrapper className="flex" ref={SliderContainerRef} translateX={currentTransition}>
                    {images.map((image, index) => (
                        <img key={index} src={image} className="min-w-full" />
                    ))}
                </SliderWrapper>
                <ButtonsWrapper>
                    <div className="cursor-pointer text-black content-center text-5xl w-16 text-center transition not-italic" onClick={handleArrowClick("back")}>
                        &#10094;
                    </div>
                    <div className="cursor-pointer text-black content-center text-5xl w-16 text-center transition not-italic" onClick={handleArrowClick("next")}>
                        &#10095;
                    </div>
                </ButtonsWrapper>
            </SliderContainer>

            <img src={services} alt="" className="bg-blue-800" />

            <h4 className="w-full text-center pt-5 px-5 md:px-32 text-5xl font-normal">Our Services</h4>

            <div className=" flex gap-2 py-5 px-5 md:px-32 flex-col md:flex-row">
                <div className=" w-full md:w-4/12 flex flex-col justify-center items-center p-5 gap-3">
                    <img src={van} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">Wheelchair Transport</h4>
                    <p className="font-light">With our ambulatory transportation, you can confidently move toward your desired destinations. Our reliable and courteous drivers offer assistance and support, ensuring a seamless journey for those who can walk independently but require transportation to medical facilities, events, or any essential appointments. </p>
                    <Link to="" className="px-6 py-2 bg-blue-700 hover:bg-blue-400 transition-all border rounded-md text-1xl font-medium text-white">Read More</Link>
                </div>
                <div className=" w-full md:w-4/12 flex flex-col justify-center items-center p-5 gap-3">
                    <img src={wheelChair} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">Stretcher Transport</h4>
                    <p className="font-light">With our ambulatory transportation, you can confidently move toward your desired destinations. Our reliable and courteous drivers offer assistance and support, ensuring a seamless journey for those who can walk independently but require transportation to medical facilities, events, or any essential appointments. </p>
                    <Link to="" className="px-6 py-2 bg-blue-700 hover:bg-blue-400 transition-all border rounded-md text-1xl font-medium text-white">Read More</Link>
                </div>
                <div className=" w-full md:w-4/12 flex flex-col justify-center items-center p-5 gap-3">
                    <img src={arrows} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">Ambulatory Transportation</h4>
                    <p className="font-light">With our ambulatory transportation, you can confidently move toward your desired destinations. Our reliable and courteous drivers offer assistance and support, ensuring a seamless journey for those who can walk independently but require transportation to medical facilities, events, or any essential appointments. </p>
                    <Link to="" className="px-6 py-2 bg-blue-700 hover:bg-blue-400 transition-all border rounded-md text-1xl font-medium text-white">Read More</Link>
                </div>
            </div>

            <h4 className="w-full text-center pt-5 px-5 md:px-32 text-5xl font-normal">WHO DO WE SERVE</h4>

            <div className="py-5 px-5 md:px-32">
                <div className="flex my-10 flex-col md:flex-row">
                    <img src={p1} alt="" className="w-full md:w-6/12" />
                    <div className="w-full md:w-6/12 flex flex-col items-center justify-center gap-3 p-10">
                        <h4 className="text-2xl font-normal text-center">THE COMMUNITY OF JACKSONVILLE, FLORIDA</h4>
                        <p className="text-center">At TruCare N.E.M.T. of Jax, our mission is to provide safe and reliable transportation to those who need it most. We cover =Duval, St. Johns, and clay counties in northeast Florida.</p>
                        <p className="text-center">We are committed to being a caring and dedicated partner for our community, always on schedule, and focused on delivering exceptional services to empower lives. </p>
                    </div>
                </div>
                <div className="flex my-10 flex-col md:flex-row-reverse">
                    <img src={p2} alt="" className="w-full md:w-6/12" />
                    <div className="w-full md:w-6/12 flex flex-col items-center justify-center gap-3 p-10">
                        <h4 className="text-2xl font-normal text-center">AMBULATORY AND WHEELCHAIR CUSTOMERS</h4>
                        <p className="text-center"> At TruCare N.E.M.T. of Jax we take pride in being the trusted partner for both ambulatory and wheelchair customers, empowering them to lead fulfilling lives and access the opportunities and services they need.</p>
                        <p className="text-center">We strive to make transportation a worry-free and enjoyable experience for everyone we serve.</p>
                    </div>
                </div>
                <div className="flex my-10 flex-col md:flex-row">
                    <img src={p3} alt="" className="w-full md:w-6/12" />
                    <div className="w-full md:w-6/12 flex flex-col items-center justify-center gap-3 p-10">
                        <h4 className="text-2xl font-normal text-center">HEALTH CARE FACILITIES</h4>
                        <p className="text-center"> Our specialized services cater to a wide range of health care facilities, including nursing homes, assisted living centers, rehabilitation centers, hospices, and medical clinics.</p>
                        <p className="text-center">Whether it's transporting elderly residents, patients with medical conditions, or individuals with mobility challenges, our team of skilled drivers is trained to handle diverse situations with the utmost care and professionalism. </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-blue-500 text-white justify-center items-center py-5 px-5 md:px-32">
                <h4 className="w-full text-center pt-5 px-5 md:px-32 text-5xl font-semibold text-white">Let’s get started!</h4>
                <p className="text-slate-200 m-5 text-xl">Simply click the Trip Charge Estimator and put in the address – go anywhere. If you agree to the price, simply Request A Trip.</p>
                <div className="flex justify-evenly items-center w-full flex-col md:flex-row gap-2">
                    <img src={step1} alt="" />
                    <img src={step2} alt="" />
                </div>
            </div>

        </>
    );
});

export default HomePage;