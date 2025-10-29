import { FaBell } from "react-icons/fa";
import React from "react";

const IconFixedLeft = () => {
    return (
        <div className="fixed left-[20px] bottom-[30px] z-20 p-3 bg-[#dc3545] rounded-full border-white border-4 shadow-lg cursor-pointer hover:bg-red-700 transition-colors">
            <div className="flex items-center justify-center text-white">
                <FaBell className="text-[25px] animate-spin" />
            </div>
        </div>
    );
};

export default IconFixedLeft;
