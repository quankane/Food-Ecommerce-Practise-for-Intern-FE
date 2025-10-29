import React, { useRef, useState, useEffect } from "react"; // 👈 Sửa lỗi: THÊM useState và useEffect
import { useNavigate, useLocation } from "react-router-dom";
import {
    FaAngleDown,
    FaAngleUp,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
// Đảm bảo đường dẫn này là chính xác
import { menuListProduct, menuProjects } from "@/utils/constants/Menu";

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const SCROLL_DISTANCE = 350;

    // 1. TẠO REF VÀ TRẠNG THÁI NÚT
    const menuRef = useRef(null);
    // 👈 Đã sửa lỗi thiếu khai báo 'useState'
    const [isAtStart, setIsAtStart] = useState(true); // Mặc định ở đầu
    const [isAtEnd, setIsAtEnd] = useState(false); // Mặc định không ở cuối

    // --- HÀM KIỂM TRA VÀ CẬP NHẬT TRẠNG THÁI CUỘN ---
    const checkScrollPosition = () => {
        if (!menuRef.current) return;

        const { scrollLeft, clientWidth, scrollWidth } = menuRef.current;
        // Vị trí cuộn tối đa (tổng nội dung - vùng hiển thị)
        const maxScroll = scrollWidth - clientWidth;

        // Cập nhật trạng thái nút Trái ( <= 1 để tránh lỗi làm tròn)
        setIsAtStart(scrollLeft <= 1);

        // Cập nhật trạng thái nút Phải ( >= maxScroll - 1 để tránh lỗi làm tròn)
        setIsAtEnd(scrollLeft >= maxScroll - 1);
    };

    // --- 2. LOGIC CUỘN SANG PHẢI (Không cuộn vòng) ---
    const scrollRight = () => {
        if (!menuRef.current || isAtEnd) return;

        const { scrollLeft, clientWidth, scrollWidth } = menuRef.current;
        const maxScroll = scrollWidth - clientWidth;

        const newScrollPosition = scrollLeft + SCROLL_DISTANCE;

        // Đảm bảo không cuộn quá maxScroll
        if (newScrollPosition >= maxScroll) {
            menuRef.current.scrollLeft = maxScroll; // Cuộn đến đúng vị trí cuối
        } else {
            menuRef.current.scrollLeft = newScrollPosition;
        }

        // Cập nhật trạng thái sau khi cuộn
        setTimeout(checkScrollPosition, 50);
    };

    // --- 3. LOGIC CUỘN SANG TRÁI (Không cuộn vòng) ---
    const scrollLeft = () => {
        if (!menuRef.current || isAtStart) return;

        const currentScroll = menuRef.current.scrollLeft;

        const newScrollPosition = currentScroll - SCROLL_DISTANCE;

        // Đảm bảo không cuộn quá 0
        if (newScrollPosition <= 0) {
            menuRef.current.scrollLeft = 0; // Cuộn về đầu
        } else {
            menuRef.current.scrollLeft = newScrollPosition;
        }

        // Cập nhật trạng thái sau khi cuộn
        setTimeout(checkScrollPosition, 50);
    };

    // --- 4. USE EFFECT ĐỂ LẮNG NGHE SỰ KIỆN CUỘN ---
    // 👈 Đã sửa lỗi thiếu khai báo 'useEffect'
    useEffect(() => {
        const ref = menuRef.current;
        if (ref) {
            checkScrollPosition();

            ref.addEventListener("scroll", checkScrollPosition);

            return () => ref.removeEventListener("scroll", checkScrollPosition);
        }
        // Thêm [menuRef] vào dependency array nếu bạn muốn re-run khi ref thay đổi,
        // nhưng thường là không cần thiết cho component này.
    }, []);

    return (
        <div className="hidden lg:flex items-center w-[750px]">
            {/* CONTAINER DÀNH CHO VÙNG HIỂN THỊ MENU */}
            <div className="flex-grow overflow-x-hidden">
                <ul
                    ref={menuRef} // 👈 GẮN REF VÀO UL
                    className="flex flex-nowrap gap-8 items-center list-none px-[20px] scroll-smooth"
                    style={{
                        scrollbarWidth: "none", // Ẩn scrollbar cho Firefox
                        msOverflowStyle: "none", // Ẩn scrollbar cho IE/Edge
                        overflowX: "scroll", // Kích hoạt tính năng cuộn
                    }}
                >
                    {/* 1. Đặt hàng nhanh */}
                    <li
                        className={`${
                            location.pathname === "/quick-order"
                                ? "text-[#fc791a]"
                                : ""
                        } hover:text-[#fc791a] font-medium cursor-pointer flex-shrink-0`}
                    >
                        <span onClick={() => navigate("/")} className="">
                            Đặt hàng nhanh
                        </span>
                    </li>

                    {/* 2. Menu (Dropdown) */}
                    <li
                        className={`relative flex-shrink-0 ${
                            location.pathname === "/products"
                                ? "text-[#fc791a]"
                                : "font-medium "
                        } cursor-pointer flex items-center gap-1 group transition-all`}
                    >
                        {/* ... (Menu content) ... */}
                        <span className="flex items-center gap-1 group-hover:text-[#fc791a]">
                            Menu
                            <FaAngleDown className="block text-[15px] group-hover:hidden" />
                            <FaAngleUp className="hidden text-[15px] group-hover:block" />
                        </span>
                        {/* ... (Dropdown Content) ... */}
                    </li>

                    {/* 3. Chương trình khuyến mãi */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer group flex-shrink-0">
                        <span
                            className={`${
                                location.pathname === "/promotions"
                                    ? "text-[#fc791a]"
                                    : ""
                            } flex items-center gap-1 group-hover:text-[#fc791a]`}
                        >
                            Chương trình khuyến mãi
                            <FaAngleDown className="block group-hover:hidden" />
                            <FaAngleUp className="hidden group-hover:block" />
                        </span>
                    </li>

                    {/* 4. Đặt bàn */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer flex-shrink-0">
                        Đặt bàn
                    </li>

                    {/* 5. Tin tức */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer flex-shrink-0">
                        Tin tức
                    </li>

                    {/* 6. Giới thiệu/Giới */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer group flex-shrink-0">
                        <span
                            className={` ${
                                location.pathname === "introductions"
                                    ? "text-[#fc79a]"
                                    : ""
                            } flex items-center gap-1 group-hover:text-[#fc791a]`}
                        >
                            Giới thiệu
                            <FaAngleDown className="block group-hover:hidden" />
                            <FaAngleUp className="hidden group-hover:block" />
                        </span>
                    </li>

                    {/* 7. Liên hệ */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer group flex-shrink-0">
                        <span
                            className={` ${
                                location.pathname === "contacts"
                                    ? "text-[#fc79a]"
                                    : ""
                            } flex items-center gap-1 group-hover:text-[#fc791a]`}
                        >
                            Liên hệ
                            <FaAngleDown className="block group-hover:hidden" />
                            <FaAngleUp className="hidden group-hover:block" />
                        </span>
                    </li>

                    {/* 8. Hướng dẫn thiết lập */}
                    <li className="font-medium hover:text-[#fc791a] cursor-pointer group flex-shrink-0">
                        <span
                            className={` ${
                                location.pathname === "instructions"
                                    ? "text-[#fc79a]"
                                    : ""
                            } flex items-center gap-1 group-hover:text-[#fc791a]`}
                        >
                            Hướng dẫn thiết lập
                            <FaAngleDown className="block group-hover:hidden" />
                            <FaAngleUp className="hidden group-hover:block" />
                        </span>
                    </li>
                </ul>
            </div>

            {/* PHẦN ĐỊNH NGHĨA SWIPER CONTROLS */}
            <div className="flex items-center text-gray-400 gap-1 ml-4 flex-shrink-0">
                <FaAngleLeft
                    // 👈 ÁP DỤNG TRẠNG THÁI isAtStart
                    size={20}
                    className={`transition-colors ${
                        isAtStart
                            ? "text-gray-300 cursor-not-allowed"
                            : "hover:text-[#fc791a] cursor-pointer"
                    }`}
                    onClick={scrollLeft}
                />
                <FaAngleRight
                    // 👈 ÁP DỤNG TRẠNG THÁI isAtEnd
                    size={20}
                    className={`transition-colors ${
                        isAtEnd
                            ? "text-gray-300 cursor-not-allowed"
                            : "hover:text-[#fc791a] cursor-pointer"
                    }`}
                    onClick={scrollRight}
                />
            </div>
        </div>
    );
};

export default Menu;
