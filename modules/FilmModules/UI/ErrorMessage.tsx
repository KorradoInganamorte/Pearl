import { nunitoMedium } from "@/public/fonts"

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center">
      <p className={`${nunitoMedium} text-6xl text-white mb-[3.4rem]`}>Oops</p>
      <p className="text-5xl text-white text-center">Something went wrong <br /> Please try again later</p>
    </div>
  )
}

export default ErrorMessage