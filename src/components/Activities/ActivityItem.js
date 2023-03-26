import React from "react";
import masjid from "../../assets/masjid.svg";
import { limitter } from "../../utils/limitter";

export default function AcivityItem({ title, content }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img alt="" src={masjid} className="rounded-lg" />
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl py-4">{title}</div>
        <div className="text-center text-xl">{limitter(content)}</div>
      </div>
    </div>
  );
}
