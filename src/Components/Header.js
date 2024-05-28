import { useEffect, useRef, useState } from 'react';
// import xlarge from '../Assets/videos/xlarge.mp4';
// import medium from '../Assets/videos/medium.mp4';
// import small from '../Assets/videos/small.mp4';
import { IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';
// import { FaPlay, FaPause } from 'react-icons/fa';
export default function Header() {
    const [videoWidth, setVideoWidth] = useState(100);
    // const [isPlaying, setIsPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);
    const mobRef = useRef(null);
    const handleScroll = () => {
        const maxScroll = 200;
        const scrollY = window.scrollY;
        if (scrollY <= maxScroll) {
            const newWidth = 100 - (scrollY / maxScroll) * 10;
            setVideoWidth(newWidth);
        }
    };
    const toggleMute = () => {
        if (videoRef.current) {
            const videoElement = videoRef.current;
            videoElement.muted = !videoElement.muted;
            setMuted(!muted);
        }
    };
    const toggleMobMute = () => {
        if (mobRef.current) {
            const videoElement = mobRef.current;
            videoElement.muted = !videoElement.muted;
            setMuted(!muted);
        }
    };
    // const handlePlayPause = () => {
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };
    useEffect(() => {
        // const video = videoRef.current;
        // const handlePlayPause = (entries) => {
        //     entries.forEach((entry) => {
        //         if (entry.isIntersecting) {
        //             video.play().catch((error) => {
        //                 console.error('Error attempting to play the video:', error);
        //             });
        //         } else {
        //             video.pause();
        //         }
        //     });
        // };
        // const observer = new IntersectionObserver(handlePlayPause, {
        //     threshold: 0.5,
        // });

        // if (video) {
        //     observer.observe(video);
        // }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // if (video) {
            //     observer.unobserve(video);
            // }
        };
    }, []);
    return (
        <div>
            <div className="bg-white">
                {/* <div className="flex justify-between sm:flex-wrap items-end container mx-auto px-10 pb-20 sm:pt-5">
                    <p className="2xl:text-[80px] xl:text-[80px] lg:text-[80px] lge:text-[80px] md:text-[60px] mdsm:text-[60px] sm:text-[50px] text-iphone font-Sfprobold font-bold leading-tight">
                        iPhone
                    </p>
                    <p className="2xl:text-h1 xl:text-h1 lg:text-h1 lge:text-h1 md:text-h2 mdsm:text-h2 sm:text-h3 text-iphone font-sfprosemibold">
                        Designed to be loved.
                    </p>
                </div> */}
                {/* Desktop view start */}
                <div className="">
                    <div className="2xl:flex xl:flex lg:flex lge:flex md:flex mdsm:hidden sm:hidden justify-center relative">
                        <video
                            width={`${videoWidth}%`}
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            className={`${videoWidth ? 'rounded-3xl duration-500' : 'rounded-none'} `}
                        >
                            <source src="https://rvscas.ac.in/videos/Googal%20-%20L.mp4" />
                        </video>
                        <div className="absolute bottom-20 right-10">
                            <button
                                onClick={() => {
                                    toggleMute();
                                }}
                                className="p-3 rounded-full bg-[#454546]"
                            >
                                {muted ? <IoMdVolumeOff className="text-h5 text-white" /> : <IoMdVolumeHigh className="text-h5 text-white" />}
                            </button>
                        </div>
                        {/* <div className="absolute bottom-24 right-24">
                            <button
                                onClick={() => {
                                    handlePlayPause();
                                }}
                                className="rounded-full bg-[#ececf0] p-3 text-[#7e7d7d]"
                            >
                                {isPlaying ? (
                                    <>
                                        <FaPause />
                                    </>
                                ) : (
                                    <>
                                        <FaPlay />
                                    </>
                                )}
                            </button>
                        </div> */}
                    </div>
                    {/* Desktop view End */}
                    {/* Medium view start */}
                    {/* <div className="">
                        <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:flex mdsm:flex sm:hidden justify-center relative">
                            <video
                                width={`${videoWidth}%`}
                                
                                autoPlay
                                muted
                                loop
                                className={`${videoWidth ? 'rounded-3xl duration-500' : 'rounded-none'} `}
                            >
                                <source src="https://rvscas.ac.in/videos/Googal%20-%20L.mp4" />
                            </video>
                            <div className="absolute bottom-24 right-24">
                                <button
                                    onClick={() => {
                                        handlePlayPause();
                                    }}
                                    className="rounded-full bg-[#ececf0] p-3 text-[#7e7d7d]"
                                >
                                    {isPlaying ? (
                                        <>
                                            <FaPause />
                                        </>
                                    ) : (
                                        <>
                                            <FaPlay />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {/* Medium view End */}
                    {/* Small view Start */}
                    <div className="">
                        <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:hidden mdsm:flex sm:flex justify-center relative px-5">
                            <video ref={mobRef} autoPlay muted loop className={`${videoWidth ? 'rounded-3xl duration-500' : 'rounded-none'} `}>
                                <source src="https://rvscas.ac.in/videos/Googal%20-%20P.mp4" />
                            </video>
                            <div className="absolute bottom-20 right-10">
                                <button
                                    onClick={() => {
                                        toggleMobMute();
                                    }}
                                    className="p-3 rounded-full bg-[#454546]"
                                >
                                    {muted ? <IoMdVolumeOff className="text-h5 text-white" /> : <IoMdVolumeHigh className="text-h5 text-white" />}
                                </button>
                            </div>
                            {/* <div className="absolute bottom-24 right-24">
                                <button
                                    onClick={() => {
                                        handlePlayPause();
                                    }}
                                    className="rounded-full bg-[#ececf0] p-3 text-[#7e7d7d]"
                                >
                                    {isPlaying ? (
                                        <>
                                            <FaPause />
                                        </>
                                    ) : (
                                        <>
                                            <FaPlay />
                                        </>
                                    )}
                                </button>
                            </div> */}
                        </div>
                    </div>
                    {/* Samll view End */}
                </div>
            </div>
        </div>
    );
}
