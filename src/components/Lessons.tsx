import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE } from "../utils/APIFragments";
import { ILesson } from "../utils/Interfaces";
import LessonCard from "./LessonCard";

interface LessonProps {
  userId: number;
}

export default function Lessons({ userId }: LessonProps): JSX.Element {
  const [lessonList, setLessonList] = useState<ILesson[]>([]);
  useEffect(() => {
    axios
      .get(`${API_BASE}/lessons/${userId}`)
      .then((response) => {
        setLessonList(response.data.lessons);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  const lessonCards = lessonList.map((lesson) => (
    <LessonCard lesson={lesson} key={lesson.lessonid} />
  ));

  return <>{lessonCards}</>;
}
