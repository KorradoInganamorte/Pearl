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
      {isPending ? <p className="text-4xl text-white">Loading...</p> : isSuccess ? <FilmCard name={data?.data[0].attributes.name} series={data?.data[0].attributes.series} date={data?.data[0].attributes.date} like={data?.data[0].attributes.like} dislike={data?.data[0].attributes.dislike} /> : <ErrorMessage />}
    </div>
  )
}

export default FilmModules