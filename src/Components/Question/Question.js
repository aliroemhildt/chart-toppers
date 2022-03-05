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
