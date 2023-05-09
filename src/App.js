import "./App.css";
import Box1 from "./component/Box1";
import { useState } from "react";
/*
1. 박스 2개(타이틀, 사진, 결과)
2. 가위 바위 보 버튼 3개
3. 버튼을 클릭하면 클릭한 값 내 박스에 보임
4. 컴퓨터 박스는 랜덤 값 보임
5. 3번 4번 결과로 승패 따짐
6. 박스 테두리 색깔 승무패따라 바뀜
*/
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOoGn4VnRixOwDwYYFUgo4zBi4c5EnQrQgA&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZFIMbGVlX51s7KSOsLmAa8YMYt8m_evZRA&usqp=CAU",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };
  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "Win" : "Lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "Win" : "Lose";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose";
    }
  };
  return (
    <div>
      <div className="main">
        <Box1 title="You" item={userSelect} result={result} />
        <Box1 title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
