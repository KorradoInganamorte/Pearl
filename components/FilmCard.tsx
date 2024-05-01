import { nunitoMedium } from "@/public/fonts"

const FilmCard = () => {
  return (
    <div className="w-[44.7rem]">
      <img className="w-full h-[26.4rem] rounded-[.4rem] mb-[1.2rem]" src="/images/test.jpg" alt="film preview image" />

      <div className="flex justify-between mb-[3rem]">
        <div className="inline-block">
          <h3 className={`${nunitoMedium} text-4xl text-white mb-[1rem]`}>Initial D</h3>
          <p className="text-2xl text-gray">Legend 1, 2021</p>
        </div>
        <button className="h-min"><img className="w-[2rem] h-[1.8rem]" src="/icons/favourites.svg" alt="favourites icon" /></button>
      </div>

      <div className="mb-[1.2rem]">
        <button className="h-min mr-[1.6rem]"><img className="w-[2.1rem] h-[2rem]" src="/icons/like.svg" alt="like icon" /></button>
        <button className="h-min"><img className="w-[2.1rem] h-[2rem] hover:border-white" src="/icons/dislike.svg" alt="dislike icon" /></button>
      </div>

      <p className={`${nunitoMedium} text-xl text-white`}>98% положительно</p>
    </div>
  )
}

export default FilmCard