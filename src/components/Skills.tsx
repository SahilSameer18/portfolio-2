import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills, strengths } = portfolioData;

  const labels = {
    eyebrow: '03 / SKILLS',
    tagline: 'TOOLS I WORK WITH',
    headline: 'The Core Stack.',
    italic: 'Engineered to scale.',
  };

  return (
    <section
      className="dark dark-depth bg-ink pb-20 pl-[6%] pr-[6%] pt-16 text-paper desk:pb-28 desk:pl-[max(6%,108px)] desk:pt-24 phone:pb-[50px] phone:pt-10"
      data-motion="dark"
      id="skills"
    >
      <div className="flex justify-between gap-6 border-b border-[#494943] pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-label text-[#c9a493] phone:text-[12px]">{labels.eyebrow}</span>
        <span className="text-[#b7b3a8] phone:hidden">{labels.tagline}</span>
      </div>

      <div className="mb-[85px] mt-[70px] grid grid-cols-4 gap-x-6 border-t border-[#494943] tablet:grid-cols-2 phone:mb-[50px] phone:mt-10 phone:grid-cols-1">
        {strengths.map((item) => (
          <div key={item.number} className="py-[22px]" data-motion="strength">
            <span className="text-[12px] text-[#d7a68f]">{item.number}</span>
            <h4 className="m-0 mt-2.5 font-serif text-[26px] font-normal leading-[1.15]">{item.label}</h4>
            <p className="mb-0 mt-2.5 text-[14px] text-[#babbb1]">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_2fr] gap-x-[10%] tablet:gap-x-[5%] phone:block">
        <h3
          className="my-5 font-serif text-[40px] font-normal leading-[1.12] phone:mb-8 phone:mt-0 phone:text-[36px]"
          style={{ gridRow: `1 / ${skills.length + 1}` }}
          data-motion="expertise-title"
        >
          {labels.headline}
          <br />
          <em className="not-italic text-[#c89d87]">{labels.italic}</em>
        </h3>

        {skills.map((skill) => (
          <div
            key={skill.number}
            className="grid grid-cols-[30px_1fr] gap-x-[18px] gap-y-0 border-t border-[#494943] py-[22px]"
            data-motion="skill-row"
          >
            <span className="pt-[5px] text-[12px] text-[#d7a68f]">{skill.number}</span>
            <h4 className="m-0 text-[19px] font-medium">{skill.title}</h4>
            <div className="col-start-2 mt-3.5 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="border border-[#484b40] px-2.5 py-[7px] text-[13px] text-[#d1d1c6]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
