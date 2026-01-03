import { type ChangeEventHandler, type FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskSchema } from "./TaskForm.types";
import styles from "./TaskForm.module.css";

export const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const result = TaskSchema.safeParse({
      title,
      id: uuidv4(),
      created_at: new Date().toISOString(),
      completed_at: null,
      time_taken: null,
    });
    if (result.success) {
      // ToDo do somethine with data
      console.log(result.data);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.inputContainer}>
          <label
            className={styles.labelTitle}
            htmlFor="task-title"
          >
            Task Title:
          </label>
          <input
            className={styles.inputTitle}
            type="text"
            name="title"
            id="task-title"
            placeholder="Enter a title…"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button
          className={styles.submitButton}
          type="submit"
        >
          <span className={styles.btnText}>Add task</span>
        </button>
      </form>
    </div>
  );
};
