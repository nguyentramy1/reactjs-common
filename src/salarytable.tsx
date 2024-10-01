import React, { useState } from "react";
import "./salary-table.scss";
import Button_p from "../common/Button/Button-plus.tsx";
import DropDownField, {
  optionType,
} from "../common/DropDown/DropDownField.tsx";
import { createPortal } from "react-dom";
import ModalContent from "../common/Modal/Modal-content.tsx";
import Table from "../common/table/table.tsx";
import Input from "../common/Input/Input-lop.tsx";

import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/store.ts";
import { appActions } from "../redux/appSlice.ts";
import Button from "../common/Button/Button.tsx";

function App() {
  const dispatch = useAppDispatch();
  const selected1 = useAppSelector((state) => state.app.selected1);
  const inputValue = useAppSelector((state) => state.app.inputValue);

  const data = [
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023 nhóm PM",
      Kyluong: "26/12/2022 -25/01/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023 nhóm BA",
      Kyluong: "26/12/2022 -25/01/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023 nhóm trợ lý TC",
      Kyluong: "26/12/2022 -25/01/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023 nhóm trợ lý GĐ",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023 nhóm DEV",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/10/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/01/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/06/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/07/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
    {
      tenBL: "Bảng lương tháng 1/2023",
      Kyluong: "26/12/2022 -25/02/2023",
    },
  ];
  const columnNames = {
    tenBL: {
      label: "Tên bảng lương",
      render: (label: string) => (
        <span
          style={{ color: "#009AE3  ", fontSize: "14px", fontWeight: "600" }}
        >
          {label}
        </span>
      ),
    },
    Kyluong: {
      label: "Kỳ lương",
      render: (label: string) => (
        <span
          style={{
            color: "#001F2D",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          {label}
        </span>
      ),
    },
  };

  // Tạo danh sách mức lương không trùng lặp cho dropdown
  const uniqueSalaries = [
    { value: "all", label: "Tất cả" },
    ...Array.from(new Set(data.map((item) => item.Kyluong))).map((salary) => ({
      value: salary.toString(),
      label: salary,
    })),
  ];

  // Hàm lọc dữ liệu theo tên và mức lương
  const filteredData = data.filter((item) => {
    const matchesName = item.tenBL
      .toLowerCase()
      .includes(inputValue.toLowerCase());
    const matchesSalary =
      selected1 === null ||
      selected1.value === "all" ||
      item.Kyluong.toString() === selected1.value;
    return matchesName && matchesSalary;
  });

  return (
    <>
      <header>
        <div className="head-container">
          <div className="logo"></div>
          <div className="name"></div>
        </div>
      </header>
      <body>
        <div className="Fillter">
          <Input
            value={inputValue}
            // onChange={setInputValue}
            onChange={(value) => dispatch(appActions.setInputValue(value))}
            placeholder="Nhập tên nhân viên"
          />

          <DropDownField
            options={uniqueSalaries}
            // onChange={setSelected1}
            onChange={(option) => dispatch(appActions.setSelected1(option))}
            selected={selected1?.label}
            placeholder="Lọc theo mức lương"
          />

          <Button_p onClick={console.log} style={{ width: "10px" }} />
        </div>
        <Table data={filteredData} columnNames={columnNames} />
      </body>
    </>
  );
}

export default App;
