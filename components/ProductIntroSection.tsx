
import React from 'react';
import { CheckCircleIcon } from './icons';

const ProductIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/bachnienkien-product/600/600" 
              alt="Hộp sản phẩm Bách Niên Kiện" 
              className="rounded-lg shadow-2xl max-w-sm w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-6 leading-snug">
              Bách Niên Kiện - Đánh Bay Đau Nhức, Tìm Lại Niềm Vui Vận Động
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Bách Niên Kiện là sự kết hợp hoàn hảo giữa y học cổ truyền và công nghệ hiện đại, mang đến giải pháp toàn diện giúp:
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <CheckCircleIcon className="w-7 h-7 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Hỗ trợ giảm nguy cơ viêm khớp, thoái hóa khớp.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-7 h-7 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Hỗ trợ làm chậm quá trình thoái hóa xương khớp.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-7 h-7 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Hỗ trợ tăng cường vận động cho người bị bệnh xương khớp.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroSection;
