import { objectOf, shape, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Results.scss';

const Results = ({ score, correctAnswers, playerAnswers }) => {
  const renderCards = (songs) => {
    const keys = Object.keys(songs);
    return keys.map(key => {
      return (
        <div className='single-card-container' key={songs[key].id}>
          <div className='results-song-card'>
            <img src={songs[key].image_url} />
            <div className='result-card-text'>
              <p className='title'>{songs[key].title}</p>
              <p className='artist'>{songs[key].artist}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  const renderYears = () => {
    const years = Object.keys(correctAnswers);
    return years.map(year => {
      return (
        <div className='single-year-container' key={year}>
          <p>{year}</p>
        </div>
      )
    })
  }

  const total = Object.keys(correctAnswers).length;
  const years = renderYears();
  const playerCards = renderCards(playerAnswers);
  const answerCards = renderCards(correctAnswers);

  return (
    <div className='results-container'>
      <p className='score'>SCORE: { score }/{ total }</p>
      <div className='answer-cards-container'>
        <div className='years-container'>
          <p className='column-title'>YEAR:</p>
          { years }
        </div>
        <div className='guesses-container'>
          <p className='column-title'>YOUR GUESS:</p>
          { playerCards }
        </div>
        <div className='correct-container'>
          <p className='column-title'>ANSWER:</p>
          { answerCards }
        </div>
      </div>
      <Link className='home-link' to='/'>
        <button className='home-button'>HOME</button>
      </Link>
    </div>
  );
}

Results.propTypes = {
  score: number,
  correctAnswers: objectOf(shape({
    id: number,
    artis: string,
    title: string,
    image_url: string
  })),
  playerAnswers: objectOf(shape({
    id: number,
    artis: string,
    title: string,
    image_url: string
  }))
}

export default Results;