import { useEffect, useRef } from 'react';
export default function Memories() {
    const LifeRef = useRef(null);
    useEffect(() => {
        const lifeVideo = LifeRef.current;
        const handelTabPlayPause = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    lifeVideo.play().catch((error) => {
                        console.error('Error attempting to play the video:', error);
                    });
                } else {
                    lifeVideo.pause();
                }
            });
        };
        const observer = new IntersectionObserver(handelTabPlayPause, {
            threshold: 0.5,
        });
        if (lifeVideo) {
            observer.observe(lifeVideo);
        }
        return () => {
            if (lifeVideo) {
                observer.unobserve(lifeVideo);
            }
        };
    }, []);
    return (
        <div>
            <div className="py-20 container mx-auto 2xl:px-10 xl:px-7 lg:px-0 lge:px-7 md:px-4 mdsm:px-4 sm:px-5">
                <p className="2xl:text-[56px] xl:text-[56px] lg:text-[56px] lge:text-[56px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] text-iphone font-semibold sm:px-1 leading-tight pb-16">
                    Memories through time
                </p>
                {/* <div className="2xl:block xl:block lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                    <video controls src="https://rvscas.ac.in/videos/Memories%20through%20time%20L.mp4" className="rounded-3xl"></video>
                </div> */}
                <div>
                    <video ref={LifeRef} controls src="https://rvscas.ac.in/videos/Memories%20through%20time%20L.mp4" className="rounded-3xl"></video>
                </div>
                {/* <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:block mdsm:block sm:block">
                    <video controls src="https://rvscas.ac.in/videos/Memories%20through%20time%20-%20P.mp4" className="rounded-3xl md:h-72"></video>
                </div> */}
                {/* <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:hidden mdsm:hidden sm:block">
                    <img src={Small} alt="Relax it's iPhone" className="rounded-3xl" />
                </div> */}
            </div>
        </div>
    );
}
