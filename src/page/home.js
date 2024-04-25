import React from 'react';
import Footer from '../component/footer';
const Home = () => {

    const marginTopValue = `calc(14vh + 14px)`;

    return (
        <div className='flex flex-col'>
            <div
                className='flex flex-col items-center h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/1-screen.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Model Y</strong>
                    <p className='text-black font-tesla' style={{ fontWeight: '200', fontSize: '20px' }}>From $29,490*</p>
                    <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>After Federal Tax Credit & Est. Gas Savings</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '72px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Demo Drive
                        </button>
                    </div>
                    <br />
                    <div>
                        <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>*Price before incentives is $42,990, excluding taxes and fees. Subject to change.</p>
                        <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px', textDecoration: 'underline', }}>Learn about est. gas savings.</p>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/2.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Model 3</strong>
                    <p className='text-black font-tesla' style={{ fontWeight: '200', fontSize: '20px' }}>From $299/mo*</p>
                    <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>Est. Lease Price Before Gas Savings</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '72px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Demo Drive
                        </button>
                    </div>
                    <br />
                    <div className='flex flex-row'>
                        <p className='text-white font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>*Excludes taxes and fees with price subject to change. Available in select states. </p>
                        <p className='text-white font-tesla-book' style={{ fontWeight: '200', fontSize: '12px', textDecoration: 'underline', }}> See Details</p>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/3.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Model X</strong>
                    <p className='text-black font-tesla' style={{ fontWeight: '200', fontSize: '20px' }}>From $63,990*</p>
                    <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>After Federal Tax Credit & Est. Gas Savings</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '72px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Demo Drive
                        </button>
                    </div>
                    <br />
                    <div>
                        <p className='text-white font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>*Price before incentives and savings is $77,990, excluding taxes and fees. Subject to change.</p>
                        <p className='text-white font-tesla-book' style={{ fontWeight: '200', fontSize: '12px', textDecoration: 'underline', }}> Learn about est. gas savings.</p>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/4.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Model S</strong>
                    <p className='text-black font-tesla' style={{ fontWeight: '200', fontSize: '20px' }}>From $66,490*</p>
                    <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>After Est. Gas Savings</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '72px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Demo Drive
                        </button>
                    </div>
                    <br />
                    <div>
                        <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px' }}>*Price before savings is $72,990, excluding taxes and fees. Subject to change.</p>
                        <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '12px', textDecoration: 'underline', }}>Learn about est. gas savings.</p>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/5.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '110px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/6.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-white font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Solar Panels</strong>
                    <p className='text-white font-tesla-book' style={{ fontWeight: '200', fontSize: '15px', textDecoration: 'underline' }}>Schedule a Virtual Consultation</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '110px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/7.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Solar Roof</strong>
                    <p className='text-black font-tesla-book' style={{ fontWeight: '200', fontSize: '15px' }}>Produce Clean Energy From Your Roof</p>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '110px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left relative'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/8.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Power Wall</strong>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '110px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Order Now
                        </p>
                        <button
                            className='h-10 flex text-white justify-center items-center font-tesla mx-5'
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                marginTop: '20px',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col h-screen w-screen bg-cover bg-left relative'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/9.png)`,
                    backgroundSize: '99%',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col' style={{ marginTop: marginTopValue }}>
                    <strong className='text-black font-tesla' style={{ fontWeight: '400', fontSize: '40px' }}>Accessories</strong>
                </div>
                <div className='h-screen flex flex-col justify-end items-center' style={{ marginBottom: '132px' }}>
                    <div className=' flex flex-row'>
                        <p
                            className='h-10 flex text-black justify-center items-center font-tesla'
                            style={{
                                backgroundColor: 'white',
                                backdropFilter: 'blur(6px)',
                                opacity: '0.8',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                width: '264px',
                                fontSize: '15px',
                            }}
                        >
                            Shop Now
                        </p>
                    </div>
                </div>
                <Footer />
                <div
                    className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black"
                    style={{ mixBlendMode: 'multiply', opacity: '0.5' }}
                />
            </div>
        </div>
    );
};

export default Home;
