import './Question.scss';
// import { useState, useEffect } from 'react';

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
    <div>
      <p>Which song was number 1 in {year}?</p>
      <div className='answers-container'>
        { songCards }
      </div>
    </div>
  );
}

export default Question;
