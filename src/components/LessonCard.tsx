import { ILesson } from "../utils/Interfaces";

interface LessonCardProps {
  lesson: ILesson;
}

export default function LessonCard({ lesson }: LessonCardProps): JSX.Element {
  const { title, description, time, participants } = lesson;

  return (
    <>
      <h2>{title}</h2> <p>{description}</p>
      <p> {participants + " total participants"}</p>
      <p>{time}</p>
    </>
  );
}
