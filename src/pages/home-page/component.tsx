import { memo, useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom"
import { slider1, slider2, slider3, slider4, van, wheelChair, arrows, services } from "../../images";
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

            <h4 className="w-full text-center pt-5 px-5 md:px-32 text-3xl font-normal">Our Services</h4>

            <div className=" flex gap-2 py-5 px-5 md:px-32 flex-col md:flex-row">
                <div className=" w-full md:w-4/12 flex flex-col justify-center items-center p-5 gap-3">
                    <img src={van} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">Ambulatory Transportation</h4>
                    <p className="font-light">With our ambulatory transportation, you can confidently move toward your desired destinations. Our reliable and courteous drivers offer assistance and support, ensuring a seamless journey for those who can walk independently but require transportation to medical facilities, events, or any essential appointments. </p>
                    <Link to="" className="px-6 py-2 bg-blue-700 hover:bg-blue-400 transition-all border rounded-md text-1xl font-medium text-white">Read More</Link>
                </div>
                <div className=" w-full md:w-4/12 flex flex-col justify-center items-center p-5 gap-3">
                    <img src={wheelChair} alt="" className="max-h-52" />
                    <h4 className="text-2xl font-semibold">Ambulatory Transportation</h4>
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

        </>
    );
});

export default HomePage;