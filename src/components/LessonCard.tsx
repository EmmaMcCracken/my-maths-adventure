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
        <div className="card-header">
          {manageTime(time).time12 +
            " on " +
            manageTime(time).dayOfMonth +
            " " +
            manageTime(time).month}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p> <br />{" "}
          <p>{participants + " total participants"}</p>
          <a href="#" className="btn btn-primary">
            Add a reflection
          </a>
        </div>
      </div>
    </>
  );
}
