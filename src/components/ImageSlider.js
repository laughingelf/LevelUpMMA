import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="bg-gray-200 rounded-full p-2 shadow-md mr-4"
                onClick={goToPreviousImage}
            >
                &lt;
            </button>
            <div className="image-container flex justify-center items-center ">
                <img
                    id='img-slider-img'
                    className="max-w-full h-auto object-cover rounded-lg shadow-xl"
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex}`}
                />
            </div>
            <button
                className="bg-gray-200 rounded-full p-2 shadow-md ml-4"
                onClick={goToNextImage}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;
