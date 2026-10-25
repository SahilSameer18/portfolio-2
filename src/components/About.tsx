import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

const meta = 'text-[12px] font-medium tracking-label';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: 'THE DEVELOPER BEHIND THE CODE',
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
        <figure className="group relative m-0 p-2 border border-line/80 bg-paper/60 shadow-[0_24px_50px_-24px_rgba(35,35,31,0.18)] phone:w-[90%] phone:[align-self:start]">
          <div className="overflow-hidden">
            <Image
              data-motion="about-image"
              src={personal.aboutPhoto}
              alt={labels.photoAlt}
              className="[transition:transform_.7s_var(--ease-expo),filter_.6s_var(--ease-expo)] group-hover:scale-[1.03] group-hover:[filter:grayscale(1)]"
              sizes="(max-width: 900px) 90vw, 45vw"
              placeholder="blur"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <figcaption className={`${meta} pt-3.5 text-muted`}>{labels.photoCaption}</figcaption>
          <span
            className="pointer-events-none absolute bottom-2.5 right-[-30px] font-serif text-[150px] font-normal leading-[normal] text-accent select-none"
            aria-hidden="true"
          >
            s.
          </span>
        </figure>

        <div data-motion="about-copy">
          <h2 data-motion="about-title" className="m-0 mb-8 font-serif text-[length:clamp(38px,4vw,62px)] font-normal leading-[1.14] phone:text-[43px]">
            {personal.aboutHeadline}
            <br />
            <span className="inline-block pb-1 text-accent-soft">{personal.aboutItalic}</span>
          </h2>

          {personal.aboutParagraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? 'max-w-[560px] text-[20px] leading-[1.65] text-ink phone:text-[18px]'
                  : 'max-w-[560px] text-muted leading-[1.7]'
              }
            >
              {paragraph}
            </p>
          ))}

          <a
            className="group mt-6 inline-flex max-w-[320px] items-center justify-between border-b border-ink/80 pb-3 text-[14px] font-medium transition-colors hover:text-accent active:scale-[0.98] phone:mt-3"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{labels.resumeLink}</span>
            <span
              className="flex size-6 items-center justify-center rounded-full bg-ink/5 text-[12px] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-paper"
              aria-hidden="true"
            >
              ↗
            </span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>

          <div
            className="mt-10 text-[36px] italic leading-[normal] tracking-[-2px] [font-family:Georgia,serif] text-ink/85 select-none"
            aria-hidden="true"
          >
            Sahil Sameer Siddique
          </div>
        </div>
      </div>
    </section>
  );
};

