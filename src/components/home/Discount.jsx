import { discounts } from "@/utils/constants/Discount";
import DiscountItem from "@/components/home/DiscountItem";
import React from "react";

const Discount = () => {
    return (
        <div className="w-full px-[120px] bg-[#F4F1EA] pt-[20px] flex items-center gap-2">
            {discounts.map((discount, index) => (
                <DiscountItem key={index} discount={discount} />
            ))}
        </div>
    );
};

export default Discount;
