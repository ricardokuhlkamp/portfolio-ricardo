import { useEffect, useState } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(()=> {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-emerald-500 p-3 text-center font-bold">
      <p className="text-sm">
          <span className="text-white hover:text-indigo-900 transition-colors duration-200 delay-300">Ricardo Kühlkamp da Silva</span> &copy; {currentYear}
        </p>
    </footer>
  )
};

export default Footer;
