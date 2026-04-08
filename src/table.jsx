import { useState } from "react";

export default () => {
  const columns = [
    {
      value: "id",
      text: "ID",
      style: {
        textAlign: "center",
        fontWeight: "600",
      },
    },
    {
      value: "name",
      text: "Tên",
    },
    {
      value: "age",
      text: "Tuổi",
      style: {
        color: "#0099CC",
        fontWeight: "600",
      },
    },
    {
      value: "class",
      text: "Lớp",
    },
    {
      value: "address",
      text: "Địa chỉ",
    },
    {
      value: "action",
      text: "",
      style: {
        with: "100px",
      },
    },
  ];

  const [students, setStudents] = useState([
    { id: 1, name: "Nguyen Van A", age: 15, class: "10A1", address: "Ha Noi" },
    { id: 2, name: "Tran Thi B", age: 16, class: "10A2", address: "Hai Phong" },
    { id: 3, name: "Le Van C", age: 15, class: "10A1", address: "Da Nang" },
    { id: 4, name: "Pham Thi D", age: 17, class: "11A1", address: "Ha Noi" },
    { id: 5, name: "Hoang Van E", age: 16, class: "10A3", address: "Nam Dinh" },
    { id: 6, name: "Do Thi F", age: 15, class: "10A2", address: "Thai Binh" },
    { id: 7, name: "Bui Van G", age: 17, class: "11A2", address: "Hai Duong" },
    { id: 8, name: "Vu Thi H", age: 16, class: "10A3", address: "Ha Noi" },
    { id: 9, name: "Dang Van I", age: 15, class: "10A1", address: "Bac Ninh" },
    { id: 10, name: "Ngo Thi K", age: 17, class: "11A1", address: "Ha Nam" },
  ]);

  const onDelete = (id) => {
    let newStudents = students.filter((student) => {
      return id !== student.id;
    });
    setStudents(newStudents);
  };

  const onRender = (columns, students) => {
    return students.map((student) => {
      return (
        <tr key={student.id}>
          {columns.map((column) => {
            if (column.value === "action") {
              return (
                <td key={student.id}>
                  <button onClick={() => onDelete(student.id)} className="btn">
                    Delete
                  </button>
                </td>
              );
            }
            return (
              <td key={column.value} style={column.style}>
                {student[column.value]}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <>
      <table width="100%" cellPadding={5} cellSpacing={2} border={1}>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.value}>{column.text}</th>;
            })}
          </tr>
        </thead>
        <tbody>{onRender(columns, students)}</tbody>
      </table>
    </>
  );
};
