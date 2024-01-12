import { cn } from "@/lib/utils";

interface DatesFace {
  date: number;
  mon: "pre" | "cur" | "nxt";
}

const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Calender = () => {
  const Dates: DatesFace[][] = [];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const preMonthDate = new Date(year, month, 0);
  const preMonthDay = preMonthDate.getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  Dates.push([{ date: preMonthDate.getDate(), mon: "pre" }]);

  for (let i = 0; i < preMonthDay; i++) {
    Dates[0].unshift({ date: preMonthDate.getDate() - i - 1, mon: "pre" });
  }
  for (let i = 0; i < 6; i++) {
    for (; Dates[i].length < 7; ) {
      const len = Dates[i].length - 1;
      if (Dates[i][len].mon == "pre") {
        Dates[i].push({ date: 1, mon: "cur" });
      } else if (Dates[i][len].date == lastDay) {
        Dates[i].push({ date: 1, mon: "nxt" });
      } else {
        Dates[i].push({ date: Dates[i][len].date + 1, mon: Dates[i][len].mon });
      }
    }
    if (i < 5) {
      if (Dates[i][6].mon == "pre") {
        Dates.push([{ date: 1, mon: "cur" }]);
      } else if (Dates[i][6].mon == "cur" && Dates[i][6].date == lastDay) {
        Dates.push([{ date: 1, mon: "nxt" }]);
      } else {
        Dates.push([{ date: Dates[i][6].date + 1, mon: Dates[i][6].mon }]);
      }
    }
  }

  return (
    <div className="h-full w-full p-8 flex flex-col items-start">
      <p className="text-3xl font-bold">
        {Month[month]} {year}
      </p>
      <table className="bg-white mt-8 text-gray-300 w-full h-full font-light table-fixed">
        <thead>
          <tr className="text-center w-full">
            {Day.map((ai, i) => (
              <th key={i}>{ai}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Dates.map((ai, i) => (
            <tr key={i} className="text-center text-black text-xl font-normal">
              {ai.map((aj, j) => (
                <td
                  key={j}
                  className={cn(
                    "",
                    aj.mon != "cur" && "text-gray-300",
                    aj.mon == "cur" &&
                      aj.date == date &&
                      "bg-yellow-300 rounded-full"
                  )}
                >
                  {aj.date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calender;
