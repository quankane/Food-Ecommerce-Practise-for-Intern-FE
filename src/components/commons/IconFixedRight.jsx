import { FaAngleUp } from "react-icons/fa";

const IconFixedRight = () => {
    return (
        <div className="flex flex-col p-[10px] gap-[12px] fixed bottom-[100px] right-[30px] bg-transparent z-20">
            <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#dc3545] text-[#fff] shadow-md z-10 rounded-full cursor-pointer hover:bg-red-700 transition-colors duration-300">
                <FaAngleUp className="text-[30px]" />
            </div>
            <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#dc3545] text-[#fff] shadow-md z-10 rounded-full cursor-pointer hover:bg-red-700 transition-colors duration-300">
                <img
                    src="https://bizweb.dktcdn.net/100/559/903/themes/1004156/assets/call-center.png?1758547585919"
                    alt=""
                />
            </div>
        </div>
    );
};

export default IconFixedRight;
