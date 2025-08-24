
import React from 'react';

const testimonials = [
  {
    name: 'Cô Lan',
    age: '62 tuổi, Hà Nội',
    image: 'https://picsum.photos/seed/customer-lan/200/200',
    quote: 'Từ ngày dùng Bách Niên Kiện, tôi ngủ ngon hơn hẳn. Giờ leo mấy tầng cầu thang cũng không còn là vấn đề nữa, lại còn bế cháu đi chơi được.',
  },
  {
    name: 'Chú Hùng',
    age: '67 tuổi, TP.HCM',
    image: 'https://picsum.photos/seed/customer-hung/200/200',
    quote: 'Vai gáy tôi trước cứng đờ, quay đi quay lại khó khăn. Dùng hết 2 hộp thấy nhẹ nhàng hẳn, tay chân cũng đỡ tê bì. Sản phẩm tốt thật!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-12">
          Hàng Ngàn Người Đã Lấy Lại Sự Dẻo Dai Cho Xương Khớp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg text-left">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={`Ảnh ${testimonial.name}`} className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-[#F57C00]" />
                <div>
                  <p className="text-xl font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-md text-gray-600">{testimonial.age}</p>
                </div>
              </div>
              <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
