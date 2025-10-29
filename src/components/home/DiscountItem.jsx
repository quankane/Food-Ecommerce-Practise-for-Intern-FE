import { FaInfoCircle } from "react-icons/fa";
import React from "react";

const DiscountItem = ({ discount }) => {
    return (
        <div className="w-1/4 flex items-center gap-0 h-auto pt-[30px] pb-[30px] cursor-pointer">
            <div className="bg-[#F3D8D6] border-r-red-500 border-1 h-[130px] rounded-xl flex items-center justify-center w-1/3">
                <p className="font-medium text-[18px] ">{discount.code}</p>
            </div>
            <div className="bg-[#F3D8D6] rounded-xl flex flex-col w-2/3 h-full p-2">
                <p className="font-medium text-[15px] opacity-70">
                    {discount.description}
                </p>
                <span className="flex items-center text-[#EB0029] gap-2 text-[13px] font-medium">
                    <FaInfoCircle
                        className="flex-shrink-0 translate-y-[-1px]"
                        size={15}
                    />
                    <span>Điều kiện</span>
                </span>
                <div class="flex items-center justify-between">
                    <p class="text-[14px] opacity-70">{discount.expiredDate}</p>
                    <div
                        className={`rounded-xl ${
                            discount.isExpired
                                ? "text-[15px] font-medium px-4 py-2 bg-[#EBEBEB] cursor-not-allowed hover:bg-opacity-70"
                                : "text-[15px] font-medium px-4 py-2 bg-[#EB0029] hover:bg-opacity-70"
                        }`}
                    >
                        {discount.isExpired ? "Hết hạn" : "Sao chép"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountItem;
