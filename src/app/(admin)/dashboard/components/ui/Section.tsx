import React, { ReactNode } from "react";

type TSectionProps = {
  className: string;
  children: ReactNode;
};

const Section = ({ children, className = "" }: TSectionProps) => {
  return <section className={className}>{children}</section>;
};

export default Section;
