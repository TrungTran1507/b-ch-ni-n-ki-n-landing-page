
import React from 'react';

const ExpertOpinionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F6F8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-lg shadow-xl">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://picsum.photos/seed/doctor-expert/400/400"
              alt="Ảnh Bác sĩ Nguyễn Văn A"
              className="rounded-full w-60 h-60 object-cover border-4 border-[#0D47A1]"
            />
          </div>
          <div className="md:w-2/3">
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#F57C00] pl-6 mb-4">
              "Tôi đánh giá cao công thức của Bách Niên Kiện. Sản phẩm không chỉ giúp giảm triệu chứng đau mà còn hỗ trợ vào căn nguyên của bệnh, an toàn cho người bệnh sử dụng lâu dài."
            </blockquote>
            <p className="text-lg font-bold text-[#0D47A1]">Ths.Bs. Nguyễn Văn A</p>
            <p className="text-md text-gray-600">Nguyên Trưởng khoa Cơ Xương Khớp, Bệnh viện Y học Cổ truyền TƯ.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertOpinionSection;
