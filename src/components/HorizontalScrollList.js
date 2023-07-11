
const HorizontalScrollList = ({ images, speed }) => {


    return (
        <div className="inner border-2 rounded-lg my-4 bg-gray-600 bg-opacity-20 shadow-xl">
            <div className="wrapper">
                <section id='img-section' style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image }) => (
                        <div id='img-div' className="image" key={id}>
                            <img id='img-scroll' className='my-12' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section id='img-section' style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image }) => (
                        <div id='img-div' className="image" key={id}>
                            <img id='img-scroll' className='my-12' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section id='img-section' style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image }) => (
                        <div id='img-div' className="image" key={id}>
                            <img id='img-scroll' className='my-12' src={image} alt={id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default HorizontalScrollList;
