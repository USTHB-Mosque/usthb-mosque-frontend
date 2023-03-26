import React, { useEffect, useState } from "react";
import vector from "../../assets/Vector.svg";
import moment from "moment";

export default function Adhan() {
  const [salats, setSalats] = useState(salatsArray);
  useEffect(() => {
    const url =
      "http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=DZ&city=Algiers";
    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => {
        salatsArray[4].time = moment(data.timings.Fajr, "HH:mm").format(
          "HH:mm"
        );
        salatsArray[3].time = moment(data.timings.Dhuhr, "HH:mm").format(
          "HH:mm"
        );
        salatsArray[2].time = moment(data.timings.Asr, "HH:mm").format("HH:mm");
        salatsArray[1].time = moment(data.timings.Maghrib, "HH:mm").format(
          "HH:mm"
        );
        salatsArray[0].time = moment(data.timings.Isha, "HH:mm").format(
          "HH:mm"
        );
        setSalats([...salatsArray]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 mb-[0rem] lg:mb-40">
      {salats.map((salat) => (
        <div
          key={salat.name}
          className={`flex flex-col justify-around items-center bg-green-400 px-14 py-2 h-28 text-white relative ${salat.color} ${salat.style}`}
        >
          <img
            alt="vector"
            src={vector}
            className="absolute top-0 left-0 z-[-1]"
          />
          <div className="text-2xl">{salat.name}</div>
          <div className="text-3xl">{salat.time}</div>
        </div>
      ))}
    </div>
  );
}

// const fetchPrayerTimes = (salats) => {
//   const res = fetch(
//       "http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=DZ&city=Algiers"
//   ).then(res => res.json())
//       .then(({data}) => {
//         console.log(data)
//         salats[4].time = moment(data.results.Fajr, "HH:mm");
//         salats[3].time = moment(data.results.Dhuhr, "HH:mm");
//         salats[2].time = moment(data.results.Asr, "HH:mm");
//         salats[1].time = moment(data.results.Maghrib, "HH:mm");
//         salats[0].time = moment(data.results.Isha, "HH:mm");
//         console.log(salats);
//       })
//         .catch(err => console.log(err));
//   return salats
// }

const salatsArray = [
  {
    name: "العشاء",
    time: "00:00",
    color: "bg-[#24b79f]",
    style: "",
  },
  {
    name: "المغرب",
    time: "00:00",
    color: "bg-[#50C3B1]",
  },
  {
    name: "العصر",
    time: "00:00",
    color: "bg-[#24b79f]",
  },
  {
    name: "الظهر",
    time: "00:00",
    color: "bg-[#50C3B1]",
  },
  {
    name: "الفجر",
    time: "00:00",
    color: "bg-[#24b79f]",
    style: "",
  },
];
