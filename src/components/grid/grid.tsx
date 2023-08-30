import "./grid.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Grid({ children }: Props) {
  return <div className="grid">{children}</div>;
}
