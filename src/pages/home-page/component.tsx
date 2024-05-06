import { memo, useState, useLayoutEffect, useRef, useCallback } from "react";
import { slider1, slider2, slider3, slider4 } from "../../images";
import {
    SliderContainer,
    SliderWrapper,
    ButtonsWrapper,
    StyledSliderButton,
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
        <SliderContainer>
            <SliderWrapper className="flex" ref={SliderContainerRef} translateX={currentTransition}>
                {images.map((image, index) => (
                    <img key={index} src={image} className="min-w-full" />
                ))}
            </SliderWrapper>
            <ButtonsWrapper>
                <StyledSliderButton onClick={handleArrowClick("back")}>
                    &#10094;
                </StyledSliderButton>
                <StyledSliderButton onClick={handleArrowClick("next")}>
                    &#10095;
                </StyledSliderButton>
            </ButtonsWrapper>
        </SliderContainer>
    );
});

export default HomePage;