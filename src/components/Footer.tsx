import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/vision-home';
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className={`mx-auto px-6 md:px-12 ${isHome ? 'max-w-7xl text-center' : 'max-w-[960px]'}`}>
        <div className={`flex flex-col ${isHome ? 'items-center' : 'items-start md:flex-row md:justify-between'} gap-8`}>
          
          <div className={`flex flex-col ${isHome ? 'items-center' : 'items-start'} gap-4`}>
            <Link to="/" className="font-oswald font-bold text-xl tracking-tight text-gray-900">
              VISION AI
            </Link>
            <div className={`text-xs text-gray-400 leading-relaxed ${isHome ? 'text-center' : 'text-left'}`}>
              <p>서울특별시 강남구 테헤란로 123, 비전빌딩 10층</p>
              <p>T. 02-1234-5678 | E. contact@visionai.com</p>
            </div>
          </div>

          <div className={`flex flex-col ${isHome ? 'items-center' : 'items-end'} gap-4`}>
            <div className="flex space-x-6 text-xs font-bold text-gray-600">
              <Link to="/" className="hover:text-brand transition-colors">HOME</Link>
              <Link to="/service-copy" className="hover:text-brand transition-colors">WHAT WE DO</Link>
              <Link to="/contact" className="hover:text-brand transition-colors">CONTACT</Link>
            </div>
            <p className="text-[11px] text-gray-300">
              © 2026 VisionAI. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
