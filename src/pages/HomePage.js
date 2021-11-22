import Banner from "../Banner/Banner";
import Movies from "../components/Movies/Movies";
import requests from "../components/Movies/requests";
import Nav from "../components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Banner fetchUrl={requests.fetchRomanceMovies} />
      <Movies
        title="Trending now"
        isLargeRow="true"
        fetchUrl={requests.fetchTrending}
      />
      <Movies title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
      <Movies title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Movies title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Movies title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Movies title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </>
  );
};
export default HomePage;
