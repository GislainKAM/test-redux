import { useState } from "react";
import { useDispatch } from "react-redux";

const TaskForm = (props) => {
  const [text, setText] = useState("");
  const dispash = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispash({
      type: "todo/addTask",
      payload: text,
    })
    

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
