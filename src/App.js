import './App.css';
import { Comment } from './components/Comment';

const comment = {
  date: new Date(),
  text: "Байлык, үй-жай, ден соолуктан ардактуу,Мага берсе, эки сабак ыр берсин." ,
  author: {
    name: "Alykul Osmonov",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvyzAguo9DSuHEjeJ-RTPYZQp9aQ7hQ9vBw&usqp=CAU",
  },
};

function App() {
  return (
    <div className="App">
     <Comment 
      data = {comment}/>
    </div>
  );
}

export default App;
