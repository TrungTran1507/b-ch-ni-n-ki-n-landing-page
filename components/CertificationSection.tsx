import React from 'react';

const commitments = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    text: '100% Thảo dược tự nhiên',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    text: 'Sản xuất tại nhà máy đạt chuẩn GMP',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    text: 'Tem chống hàng giả, kiểm tra bằng mã QR',
  },
];

const CertificationSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D47A1] mb-12">
          An Tâm Về Chất Lượng Và Nguồn Gốc
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/4">
                <img 
                    src="/certification-gmp.png" 
                    alt="Nhà máy sản xuất đạt chuẩn GMP"
                    className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-200"
                />
            </div>
            <div className="w-full md:w-1/2 order-first md:order-none">
                <img 
                    src="/certification-document.png" 
                    alt="Giấy chứng nhận của Bộ Y Tế"
                    className="w-full h-auto rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="w-full md:w-1/4">
                <img 
                    src="/certification-qr.png" 
                    alt="Sản phẩm có tem chống hàng giả và mã QR"
                    className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-200"
                />
            </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, index) => (
                <div key={index} className="flex items-center justify-center bg-sky-50 p-4 rounded-lg shadow-md transition-colors hover:bg-sky-100">
                    {item.icon}
                    <span className="text-lg font-bold text-[#0D47A1]">{item.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;