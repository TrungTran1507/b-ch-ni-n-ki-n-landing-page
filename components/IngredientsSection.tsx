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
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-4">
              Sức Mạnh Từ Các Thảo Dược Quý Giá
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bách Niên Kiện được bào chế từ 100% thảo dược thiên nhiên, tuyển chọn kỹ lưỡng và kết hợp theo một công thức độc đáo để mang lại hiệu quả tối ưu và an toàn cho người sử dụng.
            </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 flex justify-center">
                 <img 
                    src="/ingredients-image.png"
                    alt="Thảo dược thiên nhiên dưới ánh nắng mặt trời"
                    className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
                    style={{aspectRatio: '1/1'}}
                  />
            </div>
            <div className="md:w-3/5">
                <div className="space-y-6">
                  {ingredients.map((item, index) => (
                    <div key={index} className="bg-[#0D47A1] text-white p-6 rounded-lg shadow-lg flex items-center transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex-shrink-0 flex items-center justify-center mr-5 bg-blue-800 rounded-full w-16 h-16">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                        <p className="text-md text-blue-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default IngredientsSection;