import { productCarts } from "@/utils/constants/SelectionProducts";
import SelectionItem from "@/components/home/SelectionItem";

const Selection = () => {
    return (
        <div className="w-full px-[120px] bg-[#F4F1EA] pt-[20px]">
            <div className="flex flex-col gap-5">
                <p className="text-4xl text-center font-medium">
                    Lựa chọn thực đơn
                </p>
                <div className="flex items-center gap-3">
                    {productCarts.map((product, index) => (
                        <SelectionItem key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Selection;
