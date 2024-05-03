import FilmModules from "@/modules/FilmModules/components/FilmModules"
import QueryClientContextProvider from "@/modules/FilmModules/helpers/QueryClientContextProvider"

const Home = () => {
  return (
    <QueryClientContextProvider>
      <FilmModules />
    </QueryClientContextProvider>
  )
}

export default Home