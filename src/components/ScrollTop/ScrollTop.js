import React, { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { scrollToTop } from "../../hook/hookScrollTop";

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed w-[40px] h-[40px] md:w-[55px] md:h-[55px] bottom-16 md:bottom-10 right-4 md:right-7 
                    bg-orange-400 dark:border dark:border-white dark:bg-gray-600 
                    text-white p-2 md:p-3 rounded-[15px] shadow-xl hover:bg-orange-500 dark:hover:bg-slate-600 transition duration-300 z-50"
                >
                    <IoMdArrowRoundUp className="w-full h-full font-light dark:hover:text-white" />
                </button>
            )}
        </div>
    );
};