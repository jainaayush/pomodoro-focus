import React, { useState } from "react";
import { TaskList } from "../helpers/data";
import { Link } from "react-router-dom";

const TodoTable = ({ color }) => {
  const [flag, setFlag] = useState("Todos");

  const getTodoList = () => {
    if ( flag === "Todos" ) {
      return TaskList.todos;
    } 
    else if ( flag === "Projects" ) {
      return TaskList.projects;
    }
    else {
      return TaskList.history;
    }
  }

  return (
    <div>
      <div className="tabbable-responsive tabbable-position tabbable-position-nxt">
        <div className="tabbable">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{color}}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("Todos")}
              >
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{color}}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("Projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{color}}
                data-toggle="tab"
                to=""
                onClick={() => setFlag("History")}
              >
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="todos1">
          {getTodoList().map((item, index) => {
            return (
              <div key={index}
                className="row align-items-center todo-box  "
                style={{
                  color,
                  borderLeft: `${index === 0 ? `6px solid ${color}` : ""}`,
                }}
              >
                <div className="col-md-9 col-sm-9 col-9">
                  <label className="checkbox-main d-flex align-items-center">
                    <input
                      name={index}
                      type="checkbox"
                      style={{ color }}
                    />
                    <span
                      className={`checkmark ${
                        color === "#024A46" ? "checkmark-green" : ""
                      }`}
                    ></span>
                    <h6>{item.name}</h6>
                  </label>
                </div>
                <div className="col-md-3 col-sm-3 col-3 text-right ">
                  <h6>
                    {item.completed} / {item.total}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoTable;
