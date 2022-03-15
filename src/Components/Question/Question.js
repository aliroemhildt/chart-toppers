import { func, objectOf, shape, number, string } from 'prop-types';
import './Question.scss';

const Question = ({ songs, year, handleClick }) => {
  const shuffle = (list) => {
    return list.sort(() => Math.random() - 0.5);
  }

  const answerOptions = [
    songs[year].song1,
    songs[year].song2,
    songs[year].song3,
    songs[year].song4,
    songs[year].song5
  ];

  const shuffledAnswers = shuffle(answerOptions);

  const songCards =
    shuffledAnswers.map(song => {
      return (
        <div className='question-song-card' id={song.id} key={song.id} onClick={() => handleClick(song)} >
          <img src={song.image_url} />
          <div className='question-card-text'>
            <p className='title'>{song.title}</p>
            <p className='artist'>{song.artist}</p>
          </div>
        </div>
      );
    });

  return (
    <div className='question-container'>
      <div className='question-text-container'>
        <p className='question-text'>Which song was the Billboard #1 hit in {year}?</p>
      </div>
      <div className='question-cards-container'>
        { songCards }
      </div>
    </div>
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
