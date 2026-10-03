import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { site } from '../config/site';
import { CopyEmailButton } from './CopyEmailButton';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: '05 / GET IN TOUCH',
    sub: 'FULL-STACK / BACKEND / ENGINEERING',
    intro: 'Engineering scalable web systems, high-QPS APIs & AI products.',
    headingLine1: "LET'S BUILD",
    headingLine2: 'SOMETHING GREAT.',
    emailAria: `Email ${site.fullName}`,
    resumeLink: 'Résumé ↗',
    copyright: `© 2026 ${site.fullName.toUpperCase()}`,
    tagline: 'TURNING IDEAS INTO CODE, ONE COMMIT AT A TIME ☕',
    backToTop: 'BACK TO TOP ↑',
  };

  return (
    <section
      className="dark dark-depth bg-ink pb-0 pl-[6%] pr-[6%] pt-16 text-paper desk:pl-[max(6%,108px)] desk:pt-24 tablet:pb-20 phone:pt-10"
      data-motion="dark"
      id="contact"
    >
      <div className="flex justify-between gap-6 border-b border-[#494943] pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-label text-[#c9a493]">{labels.eyebrow}</span>
        <span className="text-[#b7b3a8] phone:hidden">{labels.sub}</span>
      </div>

      <div className="relative pb-[30px] pt-[55px] phone:pb-5 phone:pt-[38px]">
        <p
          className="mb-[25px] font-serif text-[28px] font-normal leading-[normal] phone:text-[24px]"
          data-motion="contact-lead"
        >
          {labels.intro}
        </p>
        <h2
          className="m-0 font-display text-[length:clamp(70px,11.5vw,180px)] font-bold leading-[.92] tracking-[-.01em] phone:text-[15vw]"
          data-motion="contact-title"
        >
          {labels.headingLine1}
          <br />
          <span className="text-[#c89d87]">{labels.headingLine2}</span>
        </h2>
        <a
          className="absolute bottom-[12%] right-[2%] flex size-[145px] items-center justify-center rounded-[50%] border border-[#8c8a80] font-sans text-[110px] font-normal leading-[normal] [transition:transform_.35s_var(--ease-expo)] hover:[transform:scale(1.05)] tablet:size-[100px] tablet:text-[75px] phone:bottom-5 phone:right-0 phone:size-[58px] phone:text-[40px]"
          href={`mailto:${personal.email}`}
          aria-label={labels.emailAria}
        >
          ↗
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-5 pb-[55px] pt-[30px] phone:gap-x-[18px] phone:gap-y-2.5 phone:pb-[35px]">
        <a
          className="link-underline border-b border-[#6a695f] py-3 text-[length:clamp(17px,2vw,27px)] phone:max-w-full phone:text-[18px] phone:[overflow-wrap:anywhere]"
          href={`mailto:${personal.email}`}
        >
          {personal.email}
        </a>
        <CopyEmailButton email={personal.email} />

        <div className="ml-auto flex gap-6 text-[14px] tablet:ml-0 tablet:w-full phone:mt-[15px]">
          {site.socials.map((social) => (
            <a
              key={social.label}
              className="-my-[13px] py-[13px]"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
          <a
            className="-my-[13px] py-[13px]"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink}
          </a>
        </div>
      </div>

      <footer className="flex justify-between gap-[25px] border-t border-[#494943] py-[25px] text-[12px] tracking-[1px] text-[#bbb7ad] phone:flex-wrap phone:gap-[18px] phone:text-[11px]">
        <span className="whitespace-nowrap">{labels.copyright}</span>
        <span className="phone:hidden">{labels.tagline}</span>
        <a className="-my-4 whitespace-nowrap py-4" href="#home">
          {labels.backToTop}
        </a>
      </footer>
    </section>
  );
};