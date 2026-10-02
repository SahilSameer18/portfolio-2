'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

const dockLink =
  "relative whitespace-nowrap text-[13px] [padding:2px_3px] tracking-[1.4px] [writing-mode:vertical-rl] " +
  "after:absolute after:bottom-0 after:top-0 after:-right-1 after:w-px after:origin-top after:bg-current after:content-[''] " +
  'after:[transform:scaleY(0)] after:[transition:transform_.18s_var(--ease-expo)] hover:after:[transform:scaleY(1)] ' +
  'tablet:text-[12px] tablet:[writing-mode:horizontal-tb] ' +
  'tablet:after:top-auto tablet:after:bottom-[-3px] tablet:after:left-0 tablet:after:right-0 tablet:after:h-px tablet:after:w-auto ' +
  'tablet:after:origin-left tablet:after:[transform:scaleX(0)] tablet:hover:after:[transform:scaleX(1)] ' +
  'phone:px-0 phone:text-[11px] phone:tracking-[.1px]';

export const Navigation: React.FC = () => {
  const { personal, projects } = portfolioData;

  const countStr = projects.length < 10 ? `0${projects.length}` : `${projects.length}`;

  const labels = {
    skip: 'Skip to content',
    navAria: 'Main navigation',
    homeAria: `${personal.name} ${personal.surname} — Home`,
    work: 'Work',
    about: 'About',
    skills: 'Skills',
    education: 'Education',
    contact: "Let's talk",
  };

  return (
    <>
      <a
        className="fixed top-[-60px] z-100 bg-ink p-3 text-white hover:text-accent focus:top-0"
        href="#main"
      >
        {labels.skip}
      </a>
      <nav
        className="fixed left-[18px] top-1/2 z-50 flex flex-col items-center gap-5 border border-line bg-[color-mix(in_srgb,var(--color-paper)_86%,transparent)] px-3 py-4 [box-shadow:0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-[14px] [transform:translateY(-50%)]! tablet:inset-x-3 tablet:bottom-3.5 tablet:top-auto tablet:flex-row tablet:justify-between tablet:gap-2.5 tablet:px-[13px] tablet:py-[9px] tablet:[transform:none]! phone:gap-1 phone:px-[9px] phone:py-2"
        aria-label={labels.navAria}
        data-motion="dock"
      >
        <a
          className="inline-block pl-1 pr-0.5 font-serif text-[28px] leading-none tracking-[-2px] tablet:pr-1 tablet:text-[24px] tablet:tracking-[-4px] phone:text-[22px]"
          href="#home"
          aria-label={labels.homeAria}
        >
          s<span className="text-accent">s.</span>
        </a>
        <span className="flex flex-col items-center gap-5 tablet:flex-row tablet:gap-4 phone:gap-[9px]">
          <a className={dockLink} href="#work">
            {labels.work}
            <sup className="mt-1 text-[9px] text-accent phone:ml-px phone:text-[8px]">{countStr}</sup>
          </a>
          <a className={dockLink} href="#about">
            {labels.about}
          </a>
          <a className={dockLink} href="#skills">
            {labels.skills}
          </a>
          <a className={dockLink} href="#education">
            {labels.education}
          </a>
        </span>
        <a
          className={`${dockLink} border-l border-ink pl-[9px] tablet:border-l-0 tablet:pl-0`}
          href={`mailto:${personal.email}`}
        >
          {labels.contact} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </>
  );
};
