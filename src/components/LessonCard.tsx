import { ILesson } from "../utils/Interfaces";
import manageTime from "../utils/manageTime";

interface LessonCardProps {
  lesson: ILesson;
}

export default function LessonCard({ lesson }: LessonCardProps): JSX.Element {
  const { title, description, time, participants } = lesson;

  return (
    <>
      <div className="card">
        <div className="card-header spacey">
          <div>
            {" "}
            {manageTime(time).time12 +
              " on " +
              manageTime(time).dayOfMonth +
              " " +
              manageTime(time).month}
          </div>
          <div>{" " + participants + " total participants"}</div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <button className="btn btn-primary">Add a reflection</button>
        </div>
      </div>
    </>
  );
}
