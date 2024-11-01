"use client";
import React from "react";
import s from "./styles.module.scss";

const TableComponent = () => {
  // Пример данных
  const data = [
    {
      id: 1,
      title: "Product 1",
      amount: 100,
      category: "Category 1",
      date: "2023-10-21",
    },
    {
      id: 2,
      title: "Product 2",
      amount: 200,
      category: "Category 2",
      date: "2023-10-22",
    },
    {
      id: 3,
      title: "Product 3",
      amount: 300,
      category: "Category 3",
      date: "2023-10-23",
    },
  ];

  return (
    <div className={s.container}>
      <div className={s.pagination}>
        <button className={s.button}>Previous</button>
        <div className={s.number}>1</div>
        <button className={s.button}>Next</button>
      </div>
      <div className={s.table_block}>
        <table className={s.table}>
          <thead>
            <tr className={s.heads}>
              <th>№</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td> {/* Нумерация строк */}
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  {/* Пример кнопки для действия */}
                  <button onClick={() => alert(`Action for ${item.title}`)}>
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
