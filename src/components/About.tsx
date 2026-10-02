'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

const meta = 'text-[12px] font-medium tracking-label';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: '02 / THE DEVELOPER BEHIND THE CODE',
    location: personal.location,
    photoAlt: `${personal.name} ${personal.surname} — ${personal.role}`,
    photoCaption: `${personal.name.toUpperCase()} ${personal.surname.toUpperCase()} / ${personal.role.toUpperCase()}`,
    resumeLink: 'View full résumé',
  };

  return (
    <section
      className="pb-20 pl-[6%] pr-[6%] pt-16 desk:pb-28 desk:pl-[max(6%,108px)] desk:pt-24 phone:pb-[50px] phone:pt-10"
      id="about"
    >
      <div className="flex justify-between gap-6 border-b border-line pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className={`${meta} text-accent phone:text-[12px]`}>{labels.eyebrow}</span>
        <span className="text-muted phone:hidden">{labels.location}</span>
      </div>

      <div className="mb-[85px] mt-[70px] grid grid-cols-[.9fr_1.2fr] items-center gap-[12%] tablet:gap-[7%] phone:mb-[50px] phone:mt-10 phone:flex phone:flex-col phone:gap-[38px]">
        <figure className="relative m-0 phone:w-[90%] phone:[align-self:start]">
          <Image
            data-motion="about-image"
            src={personal.aboutPhoto}
            alt={labels.photoAlt}
            className="border border-ink/10"
            sizes="(max-width: 900px) 90vw, 45vw"
            placeholder="blur"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <figcaption className={`${meta} pt-3.5 text-muted`}>{labels.photoCaption}</figcaption>
          <span
            className="absolute bottom-2.5 right-[-30px] font-serif text-[150px] font-normal leading-[normal] text-accent"
            aria-hidden="true"
          >
            s.
          </span>
        </figure>

        <div data-motion="about-copy">
          <h2 className="m-0 mb-8 font-serif text-[length:clamp(38px,4vw,62px)] font-normal leading-[1.05] phone:text-[43px]">
            {personal.aboutHeadline}
            <br />
            <em className="not-italic text-[#a2654f]">{personal.aboutItalic}</em>
          </h2>

          {personal.aboutParagraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'max-w-[560px] text-[20px] leading-[1.6] text-ink phone:text-[18px]'
                  : 'max-w-[560px] text-muted'
              }
            >
              {paragraph}
            </p>
          ))}

          <a
            className="link-underline nudge-se mt-5 flex max-w-[320px] justify-between border-b border-ink py-4 text-[14px] phone:mt-2.5"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink} <span>↗</span>
          </a>

          <div
            className="mt-10 text-[36px] italic leading-[normal] tracking-[-2px] [font-family:Georgia,serif]"
            aria-hidden="true"
          >
            Sahil Sameer Siddique
          </div>
        </div>
      </div>
    </section>
  );
};
