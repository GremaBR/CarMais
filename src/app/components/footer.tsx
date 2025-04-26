// components/Footer.tsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image 
              src="/Logo.png" 
              alt="Logo" 
              width={100} 
              height={50} 
              className="h-10 w-auto"
            />
            <p className="mt-2 text-sm">Soluções matemáticas avançadas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
                <li><a href="/sobre" className="hover:text-blue-200 transition-colors">Sobre</a></li>
                <li><a href="/servicos" className="hover:text-blue-200 transition-colors">Serviços</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>contato@empresa.com</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200 transition-colors">Facebook</a>
                <a href="#" className="hover:text-blue-200 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} [Nome da Empresa]. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}