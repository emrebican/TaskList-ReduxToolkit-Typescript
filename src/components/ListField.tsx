import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ListField: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log(tasks);

  return <div>ListField</div>;
};

export default ListField;
