import './Question.scss';
// import { useParams, Navigate } from 'react-router-dom';

const Question = ({ songs }) => {
  const year = Object.keys(songs)[0];
  console.log(songs[year])

  // need to figure out how to randomize answers

  return (
    <div>
      <p>Which song was number 1 in {year}?</p>
      <div className='answers-container'>
        <div>
          <img src={songs[year].song1.image_url} />
          <p>{songs[year].song1.title}</p>
          <p>{songs[year].song1.artist}</p>
        </div>
        <div>
          <img src={songs[year].song2.image_url} />
          <p>{songs[year].song2.title}</p>
          <p>{songs[year].song2.artist}</p>
        </div>
        <div>
          <img src={songs[year].song3.image_url} />
          <p>{songs[year].song3.title}</p>
          <p>{songs[year].song3.artist}</p>
        </div>
        <div>
          <img src={songs[year].song4.image_url} />
          <p>{songs[year].song4.title}</p>
          <p>{songs[year].song4.artist}</p>
        </div>
        <div>
          <img src={songs[year].song5.image_url} />
          <p>{songs[year].song5.title}</p>
          <p>{songs[year].song5.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Question;

  // how do you error handle for dynamic routes? 

  // pass in urlMatches={Object.keys(songData)} in app

  // const { decade } = useParams();
  // return urlMatches.includes(decade) ? (
  //   <div>
  //     <p>This will be the question page</p>
  //   </div>
  // ) : (
  //   <Navigate to='/*' />
  // )