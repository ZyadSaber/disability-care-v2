import { useState, useEffect, useCallback, useMemo } from 'react';
import { slider1, slider2, slider3 } from "../../../images"
import { StyledSliderContainer } from "../styled"

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = useMemo(() => [
        slider1, slider2, slider3
    ], [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        const newIndex = currentImage === 0 ? images.length - 1 : currentImage - 1;
        setCurrentImage(newIndex);
    }, [currentImage, images.length]);

    const handleSelectImage = useCallback((index: number) => {
        setCurrentImage(index);
    }, []);

    return (
        <StyledSliderContainer className="relative w-full mb-5 h-40 md:h-[700px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex w-full justify-between px-5  z-20 transition-all duration-300 text-4xl opacity-0">
                <button onClick={handlePrev} className='hover:bg-gray-300 px-3.5 py-1.5 rounded transition-colors duration-150'>
                    &#10094;
                </button>
                <button onClick={handleNext} className='hover:bg-gray-300 px-3.5 py-1.5 rounded transition-colors duration-150' >
                    &#10095;
                </button>
            </div>
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 opacity-0 transition-opacity ease-in-out duration-700 ${currentImage === index ? 'opacity-100 z-10' : ''
                            }`}
                    >
                        <div className='p-3 md:p-20 z-10 bg-blue-800/70 flex justify-center items-start flex-col text-white absolute top-1/3 left-3 md:left-20 md:w-96 rounded'>
                            <h2 className='font-semibold text-lg md:text-2xl'>Cover for the image</h2>
                            <p>test</p>
                        </div>
                        <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`mr-2 focus:outline-none rounded-full w-4 h-4 bg-gray-200 hover:bg-gray-400 ${currentImage === index ? 'bg-gray-500' : ''
                            }`}
                        onClick={() => handleSelectImage(index)}
                    />
                ))}
            </div>
        </StyledSliderContainer>
    );
};

export default ImageSlider;