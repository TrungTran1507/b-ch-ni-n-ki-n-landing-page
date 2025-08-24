
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">CÔNG TY TNHH DƯỢC PHẨM ABC</h3>
          <p className="text-gray-300">Địa chỉ: Số 123, Đường XYZ, Quận Hoàng Mai, Hà Nội</p>
          <p className="text-gray-300">Hotline: <strong>1800-xxxx</strong> | Email: <strong>info@duocphamabc.vn</strong></p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            Lưu ý: Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Hiệu quả tùy thuộc vào cơ địa mỗi người.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
