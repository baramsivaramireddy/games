import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Games ',
  description: 'Games created by me',
}
import Link from 'next/link';
export default function RootLayout({ children }) {

  const navigationLink = [
    { title:"concentration " ,href:"/concentration"} ,{ title:"sharpness " ,href:"/sharpness" }
  ];
  return (
    <html lang="en">
      <body className={inter.className}>


        <div className='flex w-screen h-screen overflow-hidden bg-blue-200'>


          <aside className='w-1/5 bg-blue-300 overflow-y-auto'>
          <div className='flex justify-center items-center text-2xl font-bold tracking-widest mt-5  '>
            {/* logo */}
            <p> GAMES</p>
          </div>
          <nav >

            <ul className='p-3 flex flex-col gap-y-4'>
              
              {navigationLink.map((navbutton, index) => (<li key={index} className='p-3 border-2  rounded text-center uppercase font-medium ' > 
              <Link href={navbutton.href}  >  {navbutton.title}  </Link>
             
              
              </li>))}
            </ul>
          </nav>
          </aside>
          {children}
        </div>


      </body>
    </html>
  )
}
