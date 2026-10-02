'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  const labels = {
    eyebrow: '04 / EDUCATION',
    tagline: 'LEARNING. EXPLORING. REFINING.',
    headingLine: 'A Foundation',
    headingItalic: 'for intentional design.',
  };

  return (
    <section
      className="bg-[#e3dfd5] pb-20 pl-[6%] pr-[6%] pt-16 desk:pl-[max(6%,108px)] phone:pb-[50px] phone:pt-10"
      id="education"
    >
      <div className="flex justify-between gap-6 border-b border-line pb-6 text-[12px] tracking-[1.4px] phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-[1.6px] text-accent phone:text-[12px]">{labels.eyebrow}</span>
        <span className="text-muted phone:hidden">{labels.tagline}</span>
      </div>

      <div className="mt-[60px] grid grid-cols-[1fr_1.3fr] gap-[10%] tablet:gap-[6%] phone:mt-[35px] phone:block">
        <h2
          className="m-0 font-serif text-[length:clamp(38px,4vw,62px)] font-normal leading-[1.05] phone:mb-10 phone:text-[43px]"
          data-motion="education-title"
        >
          {labels.headingLine}
          <br />
          <em className="not-italic text-[#a2654f]">{labels.headingItalic}</em>
        </h2>

        <div>
          {education.map((item, idx) => (
            <article key={idx} className="mb-8 border-b border-[#c3bdb1] pb-8" data-motion="timeline-item">
              <div className="flex justify-between gap-[15px] text-[12px] tracking-[1px] text-muted">
                <span>{item.meta}</span>
                <span>{item.location}</span>
              </div>
              <h3 className="mb-[7px] mt-5 text-[23px] font-medium phone:text-[21px]">{item.title}</h3>
              <h4 className="m-0 text-[15px] font-medium text-accent">{item.organization}</h4>
              <p className="m-0 mt-[18px] text-[16px] text-muted">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="border border-[#c3bdb1] px-2.5 py-[7px] text-[12px] text-muted">
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};