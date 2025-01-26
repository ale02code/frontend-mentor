import React from "react";

interface TitleSectionProps {
  numberSection: number;
  titleSection: string;
}

export function TitleSection({
  numberSection,
  titleSection,
}: TitleSectionProps) {
  return (
    <h4 className="text-balance text-xl uppercase tracking-widest text-white font-semibold tbl:text-3xl">
      <span className="text-xl text-neutral-400 mr-5 tbl:text-3xl">
        {numberSection < 10 ? `0${numberSection}` : numberSection}
      </span>
      {titleSection}
    </h4>
  );
}
