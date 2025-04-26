// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className=" text-white p-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="/Logo.png" 
              alt="Logo" 
              width={120} 
              height={60} 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-bold hidden md:inline-block">[Nome da Empresa]</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/sobre" className="hover:text-blue-200 transition-colors">Sobre</Link>
          <Link href="/servicos" className="hover:text-blue-200 transition-colors">Serviços</Link>
          <Link href="/contato" className="hover:text-blue-200 transition-colors">Contato</Link>
        </nav>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}