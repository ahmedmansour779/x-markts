import React from "react";
import Link from "next/link";

export default function Banner({ text, bg }) {
  return (
    <div
      className="tf-page-title"
      style={{ backgroundImage: `url(${bg})` }} // Correct usage
    >
      <div className="container-full">
        <div className="heading text-center">{text}</div>
      </div>
    </div>
  );
}
