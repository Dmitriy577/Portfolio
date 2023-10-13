import React from "react";
import { Collapse } from "react-collapse";

const Accordion = ({ open, toggle, title, work, g1, g2, g3 }) => {
  return (
    <div
      className="border-b border-white/20 h-[160px] mb-[15px] flex"
      onClick={toggle}
    >
      <div className="max-w-[490px]">
        <h4 className="text-[18px] tracking-wider font-primary font-semibold mb-2">
          {title}
        </h4>
        <p className="text-lg leading-6">{work}</p>
        <Collapse isOpened={open}>
          <div className="text-[15px] leading-6">{g1}</div>
          <div className="text-[15px] leading-6">{g2}</div>
        </Collapse>
      </div>
      <div className="flex flex-col flex-1 items-end cursor-pointer">
        <span className="text-gradient text-sm">
          {open ? "close" : "learn more"}
        </span>
      </div>
    </div>
  );
};

export default Accordion;
