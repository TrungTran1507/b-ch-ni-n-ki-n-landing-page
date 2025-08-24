
import React from 'react';

const painPoints = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0D47A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'ĐAU LƯNG, CỘT SỐNG',
    description: 'Cứng khớp, khó cúi người vào mỗi buổi sáng.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0D47A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'ĐAU MỎI VAI GÁY',
    description: 'Tê bì tay chân, ảnh hưởng đến giấc ngủ.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0D47A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'KHỚP GỐI KÊU LỤC CỤC',
    description: 'Khó khăn khi đứng lên, ngồi xuống, đi lại.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0D47A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'SƯNG, NÓNG, ĐỎ ĐAU',
    description: 'Tại các khớp ngón tay, ngón chân.',
  },
];

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-12">
          Bạn Có Đang Bị Những Cơn Đau Này Hành Hạ Mỗi Ngày?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {painPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
              <p className="text-lg text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
