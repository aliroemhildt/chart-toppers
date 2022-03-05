import './Question.scss';

const Question = ({ songs, score, setScore }) => {
  const year = Object.keys(songs)[0];
  console.log(songs[year])

  const shuffleSongs = () => {
    let unshuffled = [
      songs[year].song1,
      songs[year].song2,
      songs[year].song3,
      songs[year].song4,
      songs[year].song5
    ];
    
    return unshuffled.sort(() => Math.random() - 0.5);
  }

  const songList =
    shuffleSongs().map(song => {
      return (
        <div key={song.id}>
          <img src={song.image_url} />
          <p>{song.title}</p>
          <p>{song.artist}</p>
        </div>
      )
    });

  return (
    <div>
      <p>Which song was number 1 in {year}?</p>
      <div className='answers-container'>
        { songList }
      </div>
    </div>
  );
}

export default Question;
