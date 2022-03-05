import './Question.scss';
import { useState, useEffect } from 'react';

const Question = ({ songs, year, score, setScore, handleClick }) => {
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

  // const [year, setYear] = useState(Object.keys(songs)[0]);
  // const [unshuffledAnswers, setUnshuffledAnswers] = useState([
  //   songs[year].song1,
  //   songs[year].song2,
  //   songs[year].song3,
  //   songs[year].song4,
  //   songs[year].song5
  // ]);
  // const [shuffledAnswers, setShuffledAnswers] = useState(shuffleAnswers(unshuffledAnswers));

  // useEffect(() => {
  //   let newYear = Object.keys(songs)[0];
  //   console.log(newYear)
  //   console.log(songs[newYear].song1);
  //   let newAnswers = [
  //     songs[newYear].song1,
  //     songs[newYear].song2,
  //     songs[newYear].song3,
  //     songs[newYear].song4,
  //     songs[newYear].song5
  //   ];

  //   if (year != newYear) {
  //     setYear(newYear);
  //   }

  //   if (unshuffledAnswers != newAnswers) {
  //     setUnshuffledAnswers(newAnswers);
  //     setShuffledAnswers(shuffleAnswers(newAnswers));
  //   }
  // }, []);

  const answerList =
    shuffledAnswers.map(song => {
      return (
        <div onClick={() => handleClick(song.id)} key={song.id}>
          <img src={song.image_url} />
          <p>{song.title}</p>
          <p>{song.artist}</p>
        </div>
      );
    });

  return (
    <div>
      <p>Which song was number 1 in {year}?</p>
      <div className='answers-container'>
        { answerList }
      </div>
    </div>
  );
}

export default Question;
