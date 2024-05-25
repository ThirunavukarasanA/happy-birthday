import { useEffect, useRef, useState } from 'react';
import xlarge from '../Assets/videos/xlarge.mp4';
import { FaPlay, FaPause } from 'react-icons/fa';
export default function Header() {
    const [videoWidth, setVideoWidth] = useState(100);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const handleScroll = () => {
        const maxScroll = 200;
        const scrollY = window.scrollY;
        if (scrollY <= maxScroll) {
            const newWidth = 100 - (scrollY / maxScroll) * 10;
            setVideoWidth(newWidth);
        }
    };
    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        const video = videoRef.current;
        const handlePlayPause = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play().catch((error) => {
                        console.error('Error attempting to play the video:', error);
                    });
                } else {
                    video.pause();
                }
            });
        };
        const observer = new IntersectionObserver(handlePlayPause, {
            threshold: 0.5,
        });

        if (video) {
            observer.observe(video);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);
    return (
        <div>
            <div className="bg-white">
                <div className="flex justify-between items-center container mx-auto px-20 pb-20">
                    <p className="text-[80px] text-iphone font-SFPro font-bold">iPhone</p>
                    <p className="text-h1 text-iphone font-semibold">Designed to be loved.</p>
                </div>
                <div className="">
                    <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden justify-center relative">
                        <video
                            width={`${videoWidth}%`}
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            className={`${videoWidth ? 'rounded-3xl duration-500' : 'rounded-none'} `}
                        >
                            <source src={xlarge} />
                        </video>
                        <div className="absolute bottom-24 right-24">
                            {/* <div className="sticky top-0 "> */}
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
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
