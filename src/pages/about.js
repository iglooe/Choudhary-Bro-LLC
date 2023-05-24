import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <div className={ubuntu.className}>
      <h1>Error... Page is under construction</h1>
    </div>
  );
}
