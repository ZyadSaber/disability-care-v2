import { memo, useState, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom"
import { slider1, slider2, slider3, slider4, p2 } from "../../images";
import { servicesItems } from "./constants"
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
            <div className="h-full">
                d
            </div>
            {/* <SliderContainer>
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

            <h4 className="w-full text-center pt-5 px-5 md:px-32 text-5xl font-normal">Our Services</h4>

            <div className=" flex gap-2 py-5 px-5 md:px-32 flex-col md:flex-row">
                {servicesItems.map(({ imageSrc, title, body, link }) => (
                    <div className=" w-full md:w-4/12 flex flex-col justify-start items-center p-5 gap-3">
                        <img src={imageSrc} alt="" className="max-h-52" />
                        <h4 className="text-2xl font-semibold">{title}</h4>
                        <p className="font-light">{body}</p>
                        <Link to={link} className="px-6 py-2 mt-5 bg-blue-700 hover:bg-blue-400 transition-all border rounded-md text-1xl font-medium text-white">Read More</Link>
                    </div>
                ))}
            </div>

            <div className="flex flex-col pt-5 px-5 md:px-32 justify-center items-center">
                <h4 className="w-full text-center pt-5 py-5 md:px-32 text-5xl font-normal">Our patient transport services include trips to/from</h4>
                <div className="flex justify-center items-center gap-10">
                    <div className="shadow-xl">
                        dd
                    </div>
                </div>
            </div>

            <div className="flex flex-col pt-5 px-5 md:px-32 justify-center items-center">
                <h4 className="w-full text-center pt-5 py-5 md:px-32 text-5xl font-normal">WHO DO WE SERVE</h4>
                <div className="flex justify-center items-center gap-10">
                    <img src={p2} alt="" className="w-1/3 rounded shadow-md" />
                    <p className="w-2/3 text-lg"> Max Care Transportation provides non-emergency medical transportation for patients, family members, and caregivers throughout Northeast Florida. Our patient transportation answering service is available 24/7 to cater to your needs.</p>
                </div>
            </div> */}
        </>
    );
});

export default HomePage;