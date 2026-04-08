import { useState } from "react";
import "./App.css";
const App = () => {
  const [num, setNum] = useState(0);
  const date1 = new Date();
  const name = "Vu Thi Phuong Anh";

  const students = [
    {
      id: 1,
      name: "Nguyen Van A",
    },
    {
      id: 2,
      name: "Nguyen Van B",
    },
    {
      id: 3,
      name: "Nguyen Van C",
    },
    {
      id: 4,
      name: "Nguyen Van D",
    },
    {
      id: 5,
      name: "Nguyen Van E",
    },
  ];

  const onClick = () => {
    setNum(num + 1);
  };

  const renderStudent = () => {
    return students.map((student) => {
      return <li key={student.id}>{student.name}</li>;
    });
  };

  return (
    <>
      {renderStudent()}
      <h1>Hello {name}!</h1>
      <h1>Date: {date1.toLocaleDateString()}</h1>
      <h2>{num}</h2>
      <button className="btn" onClick={onClick}>
        Click me
      </button>
    </>
  );
};

export default App;
