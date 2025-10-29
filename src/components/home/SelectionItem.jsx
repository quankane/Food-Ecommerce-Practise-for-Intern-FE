const SelectionItem = ({ product }) => {
    return (
        <div
            className="bg-white p-4 pt-10 pb-6 rounded-xl shadow-lg w-[240px] text-center cursor-pointer 
                        transition-transform duration-300 hover:scale-[1.03]"
        >
            <div className="relative w-full flex flex-col items-center group">
                <div className="relative mx-auto mb-4 w-[160px] h-[160px] flex items-center justify-center">
                    <div className="animate-slowSpin transform absolute inset-0 border-2 border-dashed group-hover:border-orange-500 rounded-full opacity-70"></div>

                    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center p-2">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <h3 className="text-xl font-bold group-hover:text-orange-600">
                    {product.name}
                </h3>
            </div>
        </div>
    );
};

export default SelectionItem;
