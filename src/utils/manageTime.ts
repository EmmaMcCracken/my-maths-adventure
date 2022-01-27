interface ITime {
  date: string;
  dayOfMonth: string;
  month: string;
  time24: string;
  time12: string;
}

export default function manageTime(timestamp: string): ITime {
  const ITime: ITime = {
    date: "",
    dayOfMonth: "",
    month: "",
    time24: "",
    time12: "",
  };

  ITime.date = timestamp.slice(0, 10);

  ITime.dayOfMonth = timestamp.slice(8, 10);

  ITime.month = getMonthName(parseInt(timestamp.slice(5, 7)));

  ITime.time24 = timestamp.slice(11, 16);

  const hour = parseInt(ITime.time24.slice(0, 2));
  const minutes = ITime.time24.slice(3, 5);

  if (hour > 11) {
    ITime.time12 = `${hour - 12}${minutes === "00" ? "" : "." + minutes}pm`;
  } else {
    ITime.time12 = `${hour}${minutes === "00" ? "" : "." + minutes}am`;
  }

  return ITime;
}

function getMonthName(month: number): string {
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString("default", { month: "short" });
  return monthName;
}
