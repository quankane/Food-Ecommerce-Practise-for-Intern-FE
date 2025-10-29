import Logo from "@/assets/icons/Logo";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full px-[120px] bg-[#fff] pt-[20px] text-[15px]">
            <div class="flex items-start gap-3">
                <div className="w-1/4 flex flex-col gap-2">
                    <div onClick={() => navigate("/")}>
                        <Logo width={120} height={35}></Logo>
                    </div>
                    <h3 className="font-medium">EGA Food</h3>
                    <p>
                        Chuỗi cửa hàng đồ ăn nhanh với thực đơn đa dạng, phục vụ
                        nhanh chóng, tiện lợi, phù hợp cho mọi lứa tuổi.
                    </p>
                    <p>Mã số thuế: 12345678901</p>
                    <div>
                        <span className="flex items-center">
                            <FaMapMarkerAlt size={15} />
                            <p className="font-normal">Địa chỉ</p>
                        </span>
                        <p className="font-medium">
                            70 Lu Gia, District 11, Ho Chi Minh City
                        </p>
                    </div>
                    <div class="flex items-center justify-between">
                        <div className="font-medium">
                            <span className="flex items-center">
                                <FaPhoneAlt size={15} />
                                <p className="font-normal">Hotline</p>
                            </span>
                            <p className="text-[#EB0029]">19006507</p>
                        </div>
                        <div>
                            <span className="flex items-center">
                                <MdOutlineEmail size={15} />
                                <p>Email</p>
                            </span>
                            <p className="font-medium">
                                quanducbui2017@gmail.com
                            </p>
                        </div>
                    </div>
                    <p className="font-medium">Mạng xã hội</p>
                    <div className="flex flex-items gap-2">
                        <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-center">
                            <SiFacebook size={18} color="#3785E7" />
                        </div>
                        <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-center">
                            <FaYoutube size={18} color="#FE0000" />
                        </div>
                        <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-center">
                            <FaTiktok size={18} color="#010000"></FaTiktok>
                        </div>
                        <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-center">
                            <AiFillInstagram
                                size={18}
                                color="#DF4369"
                            ></AiFillInstagram>
                        </div>
                        <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-center">
                            <SiZalo size={18} color="#0180C7"></SiZalo>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-2">
                    <p className="font-bold">Hỗ trợ khách hàng</p>
                    <ul className="list-disc pl-4 flex flex-col gap-3">
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Câu hỏi thường gặp
                        </li>
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Hệ thống cửa hàng
                        </li>
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Tìm kiếm
                        </li>
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Giới thiệu
                        </li>
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Liên hệ
                        </li>
                        <li className="hover:text-[#fc791a] cursor-pointer">
                            Chương trình cộng tác viên
                        </li>
                    </ul>
                </div>
                <div className="w-1/4 flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold">Chính sách</p>
                        <ul className="list-disc pl-4 flex flex-col gap-3">
                            <li className="hover:text-[#fc791a] cursor-pointer">
                                Chính sách đổi trả
                            </li>
                            <li className="hover:text-[#fc791a] cursor-pointer">
                                Chính sách bảo mật
                            </li>
                            <li className="hover:text-[#fc791a] cursor-pointer">
                                Điều khoản dịch vụ
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold">Tổng đài hỗ trợ</p>
                        <ul className="list-disc pl-4 flex flex-col gap-3">
                            <li className="hover:text-[#fc791a] cursor-pointer">
                                Gọi mua hàng: 0999999999 (8h-20h)
                            </li>
                            <li className="hover:text-[#fc791a] cursor-pointer">
                                Gọi bảo hành: 19009999 (8h-20h)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-4">
                    <p className="font-bold">Đăng ký nhận ưu đãi</p>
                    <p>
                        Bạn muốn nhận khuyến mãi đặc biệt? Đăng kí tham gia ngay
                        cộng động hơn 68.000+ người theo dõi của chúng tôi để
                        cập nhật khuyến mãi ngay lập tức
                    </p>
                    <div class="flex items-center rounded-full w-full gap-2">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email của bạn"
                            color="#eee"
                            className="outline-none w-2/3 border border-gray-200 rounded-full py-3 px-5 focus:border-[#fc791a]"
                        />
                        <button
                            type="submit"
                            className="p-3 rounded-full bg-[#EB0029] w-1/3"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <p className="font-bold opacity-70 text-[18px]">
                        PHƯƠNG THỨC THANH TOÁN
                    </p>
                    <div className="cursor-pointer">
                        <img
                            src="https://bizweb.dktcdn.net/thumb/grande/100/559/903/themes/1004156/assets/footer-trustbadge.png?1758547585919"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
