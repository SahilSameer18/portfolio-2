import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  const labels = {
    eyebrow: 'ACADEMIC FOUNDATION',
    tagline: 'COMPUTER SCIENCE & SYSTEMS',
    headingLine: 'A Foundation',
    headingItalic: 'for intentional design.',
  };

  return (
    <section
      className="bg-paper-alt bg-[image:var(--grain)] pb-20 pl-[6%] pr-[6%] pt-16 desk:pb-28 desk:pl-[max(6%,108px)] desk:pt-24 phone:pb-[50px] phone:pt-10"
      id="education"
    >
      <div className="flex justify-between gap-6 border-b border-line pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-label text-accent phone:text-[12px]">{labels.eyebrow}</span>
        <span className="text-muted phone:hidden">{labels.tagline}</span>
      </div>

      <div className="mt-[60px] grid grid-cols-[1fr_1.3fr] gap-[10%] tablet:gap-[6%] phone:mt-[35px] phone:block">
        <h2
          className="m-0 font-serif text-[length:clamp(38px,4vw,62px)] font-normal leading-[1.14] phone:mb-10 phone:text-[43px]"
          data-motion="education-title"
        >
          {labels.headingLine}
          <br />
          <span className="inline-block pb-1 text-accent-soft">{labels.headingItalic}</span>
        </h2>

        <div>
          {education.map((item, idx) => (
            <article
              key={idx}
              className="group mb-8 border-b border-[#c3bdb1] pb-8 transition-colors duration-300 hover:border-accent/50"
              data-motion="timeline-item"
            >
              <div className="flex justify-between gap-[15px] text-[12px] tracking-[1px] text-muted">
                <span>{item.meta}</span>
                <span>{item.location}</span>
              </div>
              <h3 className="mb-[7px] mt-5 text-[23px] font-medium transition-colors group-hover:text-accent phone:text-[21px]">{item.title}</h3>
              <h4 className="m-0 text-[15px] font-medium text-accent">{item.organization}</h4>
              <p className="m-0 mt-[18px] text-[16px] text-muted leading-[1.7]">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="border border-[#c3bdb1] bg-paper/40 px-2.5 py-[7px] text-[12px] text-muted transition-all duration-200 hover:border-accent hover:text-ink hover:scale-[1.03] select-none"
                  >
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