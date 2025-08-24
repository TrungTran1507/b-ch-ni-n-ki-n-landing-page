
import React from 'react';

const ingredients = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    name: 'Cao Hy Thiêm',
    description: '"Khắc tinh" của bệnh khớp, giúp giảm đau, kháng viêm hiệu quả.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    name: 'Chiết xuất Vỏ Liễu',
    description: 'Được ví như "Aspirin tự nhiên", giúp giảm đau nhanh chóng và an toàn.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    name: 'Chiết xuất Móng Quỷ',
    description: 'Giúp ức chế các yếu tố gây viêm, bảo vệ sụn khớp.',
  },
];

const IngredientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-12">
          Sức Mạnh Từ Các Thảo Dược Quý Giá
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((item, index) => (
            <div key={index} className="bg-[#0D47A1] text-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4 bg-blue-800 rounded-full w-24 h-24 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
              <p className="text-lg text-blue-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
