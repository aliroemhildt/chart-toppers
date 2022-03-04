import { useEffect } from "react";

const Home = (props) => {
  console.log(props);

  useEffect(() => {

  })
  const songCovers = props.songData.decade10.map((year, index) => {
    const songs = Object.keys(year);
    return songs.map(song => {
      return <img key={index} src={year[song].image_url} />
    })
  });

  return (
    <main>
      <p>Home</p>
      <div>
        { songCovers }
      </div>
    </main>
  );
}

export default Home;