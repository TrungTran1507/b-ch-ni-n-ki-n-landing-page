
import React, { useState } from 'react';

const CtaFormSection: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !phone) {
            alert('Vui lòng nhập đầy đủ Họ và Tên và Số điện thoại.');
            return;
        }
        alert(`Cảm ơn ${name}! Chúng tôi sẽ sớm liên hệ với bạn qua SĐT: ${phone} để tư vấn.`);
        setName('');
        setPhone('');
    };

    return (
        <section id="form-dang-ky" className="py-20 bg-[#0D47A1] text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ưu Đãi Đặc Biệt <span className="text-yellow-400">DUY NHẤT HÔM NAY</span></h2>
                        <div className="space-y-4 text-xl my-8">
                            <p className="bg-white/10 p-4 rounded-lg"><strong className="text-yellow-400">LIỆU TRÌNH TỐI ƯU:</strong> MUA 3 TẶNG 1</p>
                            <p className="bg-white/10 p-4 rounded-lg"><strong className="text-yellow-400">COMBO DÙNG THỬ:</strong> MUA 2 GIẢM 15%</p>
                        </div>
                        <p className="text-xl font-bold">✓ Miễn phí vận chuyển toàn quốc.</p>
                        <p className="text-xl font-bold">✓ Nhận hàng kiểm tra rồi mới thanh toán.</p>
                    </div>

                    <div className="lg:w-1/2 w-full max-w-md bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
                        <h3 className="text-2xl font-bold text-center mb-6 text-[#0D47A1]">ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN!</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Họ và Tên</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nhập Họ và Tên"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Số điện thoại</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Nhập Số điện thoại"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#F57C00] hover:bg-orange-600 text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg uppercase transition-transform transform hover:scale-105 duration-300"
                            >
                                Gửi thông tin ngay
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaFormSection;
