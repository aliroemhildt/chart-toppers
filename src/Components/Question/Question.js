import { func, objectOf, shape, number, string } from 'prop-types';
import './Question.scss';

const Question = ({ songs, year, handleClick }) => {
  const shuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  }

  const answers = [
    songs[year].song1,
    songs[year].song2,
    songs[year].song3,
    songs[year].song4,
    songs[year].song5
  ];

  const shuffledAnswers = shuffle(answers);

  const songCards =
    shuffledAnswers.map(song => {
      return (
        <div className='song-card' id={song.id} key={song.id} onClick={() => handleClick(song)} >
          <img src={song.image_url} />
          <p className='title'>{song.title}</p>
          <p className='artist'>{song.artist}</p>
        </div>
      );
    });

  return (
    <>
      <p className='question-text'>Which song was the Billboard #1 hit in {year}?</p>
      <div className='answers-container'>
        { songCards }
      </div>
    </>
  );
}

Question.propTypes = {
  songs: objectOf(objectOf(shape({
    song1: shape({
      id: number,
      artis: string,
      title: string,
      image_url: string
    }),
    song2: shape({
      id: number,
      artis: string,
      title: string,
      image_url: string
    }),
    song3: shape({
      id: number,
      artis: string,
      title: string,
      image_url: string
    }),
    song4: shape({
      id: number,
      artis: string,
      title: string,
      image_url: string
    }),
    song5: shape({
      id: number,
      artis: string,
      title: string,
      image_url: string
    })
  }))).isRequired,
  year: string.isRequired,
  handleClick: func.isRequired
}

export default Question;
