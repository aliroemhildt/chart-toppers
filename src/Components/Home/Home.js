import { useEffect } from "react";

const Home = (props) => {
  console.log(props);

  useEffect(() => {
    
  })
  const songCovers = props.allSongs.map((song, index) => {
    return <img key={index} src={song.image_url} />
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