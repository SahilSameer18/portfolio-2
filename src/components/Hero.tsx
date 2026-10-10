import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';
import { site } from '../config/site';

const meta = 'text-[12px] font-medium tracking-label';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: "HELLO, I'M SAHIL",
    explore: 'Explore selected work',
    resume: 'View résumé',
    scroll: 'SCROLL TO EXPLORE',
    photoCaption: 'SYSTEMS. DATABASES. SCALE.',
    photoAlt: 'Sahil Sameer Siddique portrait',
    portfolioYear: 'PORTFOLIO / 2026',
  };

  return (
    <section
      className="m-auto max-w-[1800px] pb-0 pl-[4%] pr-[4%] pt-7 desk:pl-[max(4%,108px)] phone:px-[6%] phone:pt-[22px]"
      id="home"
      aria-labelledby="hero-title"
    >
      <div
        className={`${meta} flex justify-between phone:gap-4 phone:pt-[38px] phone:text-[11px]`}
        data-motion="hero-top"
      >
        <span>{personal.location}</span>
        <span className="phone:whitespace-nowrap">{labels.portfolioYear}</span>
      </div>

      <h1
        id="hero-title"
        className="-mx-[1%] mb-0 mt-6 text-center font-display text-[length:clamp(90px,21.7vw,360px)] font-extrabold leading-[.9] tracking-[-.02em] phone:mx-0 phone:mt-[25px] phone:text-[22vw]"
        data-motion="hero-title"
      >
        {personal.name.toUpperCase()}
        <span className="sr-only"> {site.restOfName} — {site.role}</span>
      </h1>

      <div className="relative mt-[-58px] grid min-h-[610px] grid-cols-[1fr_1.4fr_.75fr] items-center gap-[5%] wide:min-h-[730px] tablet:mt-[-25px] tablet:min-h-[570px] tablet:grid-cols-[1fr_1.25fr] tablet:gap-[6%] phone:mt-[-9px] phone:flex phone:min-h-0 phone:flex-col phone:items-stretch phone:gap-0">
        <div
          className="z-[2] pb-[170px] tablet:pb-[calc(37px_+_17.6vw)] phone:order-1 phone:pb-[30px] phone:pt-[35px]"
          data-motion="hero-intro"
        >
          <span className={`${meta} text-accent phone:text-[11px]`}>{labels.eyebrow}</span>
          <h2 className="my-6 font-serif text-[length:clamp(26px,2.8vw,46px)] font-normal leading-[1.15] phone:my-4 phone:text-[38px]">
            {personal.heroHeadline}
            <br />
            <span className="text-accent">{personal.heroItalic}</span>
          </h2>
          <p className="max-w-[285px] text-[16px] text-muted phone:max-w-full">{personal.heroBio}</p>
          <span className="mt-5 hidden border border-accent p-3 text-[12px] font-medium tracking-[1px] text-accent tablet:inline-block">
            {personal.availability}
          </span>
          <a
            className="link-underline nudge-se mt-5 flex max-w-[230px] justify-between border-b border-ink py-4 text-[14px] desk:w-fit desk:max-w-none desk:justify-start desk:gap-2 phone:mt-2.5 phone:max-w-full"
            href="#work"
          >
            {labels.explore} <span aria-hidden="true">↘</span>
          </a>
        </div>

        <figure
          className="group relative z-1 m-0 h-[570px] w-full [align-self:start] wide:h-[680px] tablet:h-[500px] phone:order-0 phone:ml-auto phone:h-[460px] phone:w-[84%]"
          data-motion="hero-photo"
        >
          <Image
            src={personal.heroPhoto}
            alt={labels.photoAlt}
            sizes="(max-width: 900px) 90vw, 40vw"
            placeholder="blur"
            priority
            className="h-full w-full object-cover object-[center_38%] [transition:filter_.6s_var(--ease-expo)] group-hover:[filter:grayscale(1)]"
          />
          <figcaption
            className={`${meta} absolute left-[18px] top-[18px] text-white [text-shadow:0_1px_3px_rgba(0,0,0,.85),0_0_14px_rgba(0,0,0,.6)] [writing-mode:vertical-rl] phone:text-[11px]`}
            data-motion="hero-caption"
          >
            {labels.photoCaption}
          </figcaption>
        </figure>

        <div className="relative z-3 [align-self:start] pt-[155px] tablet:hidden" data-motion="hero-aside">
          <span className="inline-block border border-accent p-3 text-[12px] font-medium tracking-[1px] text-accent">
            {personal.availability}
          </span>
          <p className="my-6 text-[14px] text-muted">{personal.asideCopy}</p>
          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline nudge-ne inline-flex gap-8 border-b border-line py-3.5 text-[14px]"
          >
            {labels.resume} <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-[7px] z-[2] text-center font-display text-[length:clamp(90px,20vw,325px)] font-extrabold leading-none tracking-[.025em] text-ink [-webkit-text-stroke:3px_var(--color-paper)] [paint-order:stroke_fill] [text-shadow:0_2px_8px_#eeeae140] tablet:bottom-[25px] tablet:text-[20vw] phone:-inset-x-[3%] phone:bottom-auto phone:top-[370px] phone:text-[21vw]"
          data-motion="hero-surname"
          aria-hidden="true"
        >
          {personal.surname}
        </div>
      </div>

      <div
        className={`${meta} flex justify-between border-t border-line pb-7 pt-6 phone:gap-[15px] phone:text-[11px]`}
        data-motion="hero-bottom"
      >
        <span>{personal.subrole}</span>
        {/* Pointer-only shortcut: the "Explore selected work" link above is the accessible one. */}
        <a className="-mt-[9px] py-[9px]" href="#work" tabIndex={-1} aria-hidden="true">
          {labels.scroll} ↓
        </a>
      </div>
    </section>
  );
};
