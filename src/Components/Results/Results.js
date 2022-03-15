import { objectOf, shape, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Results.scss';

const Results = ({ score, correctAnswers, playerAnswers }) => {
  const renderPlayerCards = () => {
    const keys = Object.keys(playerAnswers);
    return keys.map(key => {
      if (playerAnswers[key].id === correctAnswers[key].id) {
        return (
          <div className='single-card-container' key={playerAnswers[key].id}>
            <div className='results-song-card correct'>
              <img src={playerAnswers[key].image_url} />
              <div className='result-card-text'>
                <p className='title'>{playerAnswers[key].title}</p>
                <p className='artist'>{playerAnswers[key].artist}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className='single-card-container' key={playerAnswers[key].id}>
            <div className='results-song-card'>
              <img src={playerAnswers[key].image_url} />
              <div className='result-card-text'>
                <p className='title'>{playerAnswers[key].title}</p>
                <p className='artist'>{playerAnswers[key].artist}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  const renderAnswerCards = () => {
    const keys = Object.keys(correctAnswers);
    return keys.map(key => {
      return (
        <div className='single-card-container' key={correctAnswers[key].id}>
          <div className='results-song-card answer'>
            <img src={correctAnswers[key].image_url} />
            <div className='result-card-text'>
              <p className='title'>{correctAnswers[key].title}</p>
              <p className='artist'>{correctAnswers[key].artist}</p>
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
  const playerCards = renderPlayerCards();
  const answerCards = renderAnswerCards();

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