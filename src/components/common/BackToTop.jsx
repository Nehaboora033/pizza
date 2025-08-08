import React, { useEffect, useState } from 'react'
import { LearnArrow } from '../../utils/icon'

const BackToTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!show) return null;
    return (
        <div>
            <button
                onClick={handleBackToTop}
                aria-label="Back to top"
                className="!fixed flex justify-center items-center rotate-[-90deg] bottom-8 pizza-cheese right-8 size-[50px] text-xl z-[9] bg-prime text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-linear">
            <LearnArrow/>
            </button>
        </div>
    )
}

export default BackToTop