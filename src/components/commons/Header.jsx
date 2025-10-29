import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaAngleDown } from "react-icons/fa"; // 👈 THÊM ICONS THIẾU
import Logo from "@/assets/icons/Logo";
import Menu from "@/components/commons/Menu";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[85px] bg-white shadow-md fixed top-0 z-50 px-[120px] border-b border-gray-100">
            {/* THAY ĐỔI QUAN TRỌNG: justify-between để căn Logo/Menu và Controls ra hai bên */}
            <div className="flex items-center justify-between h-full">
                {/* PHẦN TRUNG TÂM/BÊN TRÁI: Logo và Menu */}
                {/* Chúng ta cần wrap Logo và Menu vào một div để chúng ở bên trái */}
                <div className="flex items-center h-full gap-4">
                    <div
                        onClick={() => navigate("/")}
                        className="cursor-pointer"
                    >
                        <Logo />
                    </div>

                    {/* Component Menu cuộn ngang đã được tích hợp */}
                    <Menu />
                </div>

                {/* PHẦN BÊN PHẢI: Language, Live, Icons */}
                <div className="flex items-center gap-6 text-sm">
                    {/* Language/Country Selector (Cờ + Mũi tên) */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>
                            <img
                                src="data:image/gif;base64,R0lGODlhEAALANUAAPU8POwAAPQAAP96euUAAPdLS/QsHPk8Pf5dXf52dvZERPvMRPx3SvITE/1STvIuLvhSUvj4NflUVf5xcv1ubvQgIPUlJfENDfdDLfpAQPthYftFRfoAAPYqKv5ZWfn5PPr6QfxqavxmZvpdXfMZGfxLS/tKSfc3NvMzM/1UVOAAAPQfH/cxMfxPT/k6OvlzOvYzK/f3MPrAP/f3L/dgL/Z3KvlYWPYsLPzVS/fSMPg+NPX1JPZOKt0AAP0AAP8AACH5BAAAAAAALAAAAAAQAAsAAAaPwJ/w5yv6OByBUhAI/AbQRGJCCYk0Ixuk4BwgEJ6Ug8HIHE6sG/cJFpdkizOrY1EQfImwA7cAfWQ5MBYVAHcTKS0lDh8fETEYFiskhT4ULSYbGS8RMzWRJA0nBBwhmBkuETQ8O5INDSgqHCKZLjoYdAYGDRcXDyoCWDYSWwoKACcoKA8PPUtNzwTRKio91UEAOw=="
                                width={18}
                                height={12}
                                alt="Vietnamese Flag"
                                className="object-cover"
                            />
                        </span>
                        <span className="text-sm font-medium">VN</span>
                        <FaAngleDown size={10} className="text-gray-500" />
                    </div>

                    {/* LIVE Button */}
                    <button className="flex items-center justify-center h-8 px-3 text-white font-bold text-xs bg-red-600 border border-red-600 rounded-md shadow-sm transition-colors hover:bg-red-700 whitespace-nowrap">
                        <span className="w-2 h-2 mr-1 bg-white rounded-full animate-pulse"></span>
                        LIVE
                    </button>

                    {/* Thanh Controls (Search, User, Cart) */}
                    <div className="flex items-center gap-6 text-gray-700">
                        {/* Search Icon */}
                        <FaSearch
                            size={20}
                            className="cursor-pointer hover:text-red-600"
                        />

                        {/* User Icon */}
                        <FaUser
                            size={20}
                            className="cursor-pointer hover:text-red-600"
                        />

                        {/* Cart Icon */}
                        <div
                            className="relative flex items-center p-3 rounded-sm gap-1 cursor-pointer hover:bg-[#eee]"
                            onClick={() => navigate("/cart")}
                        >
                            <FaShoppingBag
                                size={20}
                                className="hover:text-red-600"
                            />
                            {/* Badge cho số lượng item */}
                            <span className="absolute top-1 left-5 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                                2
                            </span>
                            <span className="ml-1 text-sm font-medium text-black">
                                Giỏ hàng
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
