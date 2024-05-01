import Link from "next/link"
import { Montserrat } from 'next/font/google'

const montserratGoogle = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '300'
})

const NotFound = () => {
  return (
    <div className={`h-[100vh] flex flex-col items-center justify-center bg-black ${montserratGoogle.variable} text-xl text-white`}>
      <p className="mb-[1.2rem]">
        404 <span className="text-[#FF153F]">ERROR</span> PAGE NOT FOUND
      </p>
      <div className="group">
        <Link href="https://github.com/KorradoInganamorte">
          <span className="text-[#FF153F]">K</span>orrado
          <span className="text-[#FF153F]"> I</span>nagan
          <span className="text-[#FF153F]">a</span>mo
          <span className="text-[#FF153F]">rt</span>e
        </Link>
        <div className="bg-[#FF153F] w-0 h-[.1rem] group-hover:w-[100%] transition-all ease-in duration-250"></div>
      </div>
    </div>
  )
}

export default NotFound
