import Relax from '../Assets/image/Relax.jpg';
import Small from '../Assets/image/small.png';
export default function Memories() {
    return (
        <div>
            <div className="py-20 container mx-auto 2xl:px-10 xl:px-7 lg:px-0 lge:px-7 md:px-4 mdsm:px-4 sm:px-5">
                <p className="2xl:text-[56px] xl:text-[56px] lg:text-[56px] lge:text-[56px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] text-iphone font-semibold sm:px-1 leading-tight pb-16">
                    Memories Througt Time
                </p>
                <div className="2xl:block xl:block lg:block lge:block md:hidden mdsm:hidden sm:hidden">
                    <img src={Relax} alt="Relax it's iPhone" className="rounded-3xl" />
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:block mdsm:block sm:hidden">
                    <img src={Relax} alt="Relax it's iPhone" className="rounded-3xl" />
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden lge:hidden md:hidden mdsm:hidden sm:block">
                    <img src={Small} alt="Relax it's iPhone" className="rounded-3xl" />
                </div>
            </div>
        </div>
    );
}
