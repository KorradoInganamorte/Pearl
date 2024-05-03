"use client"

import { useQuery } from "@tanstack/react-query"
import getFilm from "../api/getFilms"

import FilmCard from "./FilmCard"
import ErrorMessage from "../UI/ErrorMessage"

const FilmModules = () => {
  const { data, isPending, isSuccess, error } = useQuery({
    queryFn: getFilm,
    queryKey: ["film"]
  })

  return (
    <div className="flex justify-center">
      {
        isPending 
        ? <p className="text-4xl text-white">Loading...</p> 
        : isSuccess ? 
        data?.data.map(film => <FilmCard key={film.id} name={film.attributes.name} series={film.attributes.series} date={film.attributes.date} like={film.attributes.like} dislike={film.attributes.dislike} /> )
        : <ErrorMessage />
      }
    </div>
  )
}

export default FilmModules