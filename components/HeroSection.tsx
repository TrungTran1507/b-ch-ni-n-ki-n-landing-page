import React from 'react';
import { PhoneIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-700 text-white h-[70vh] min-h-[500px] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/active-seniors-nature/1920/1080"
          alt="Người lớn tuổi khỏe mạnh đi bộ trong công viên"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Bách Niên Kiện: Giải Pháp Khoa Học Giúp Giảm Đau Nhức Xương Khớp, Vận Động Dễ Dàng
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          Công thức đột phá từ Vỏ Cây Liễu và các thảo dược thiên nhiên, được hàng ngàn người tin dùng.
        </p>
        <a 
          href="#form-dang-ky"
          className="bg-[#F57C00] hover:bg-orange-600 text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg uppercase transition-transform transform hover:scale-105 duration-300 inline-block"
        >
          Tìm Hiểu Ngay & Nhận Tư Vấn
        </a>
        <p className="mt-6 flex items-center justify-center text-lg">
          <PhoneIcon className="w-5 h-5 mr-2" />
          Hoặc gọi hotline tư vấn miễn phí: <strong>1800-xxxx</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;