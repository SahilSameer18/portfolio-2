import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { site } from '../config/site';
import { CopyEmailButton } from './CopyEmailButton';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const labels = {
    eyebrow: 'GET IN TOUCH',
    sub: 'FULL-STACK / BACKEND / ENGINEERING',
    intro: 'Backend-focused web apps, APIs and AI features.',
    headingLine1: "LET'S BUILD",
    headingLine2: 'SOMETHING GREAT.',
    resumeLink: 'Résumé',
    copyright: `© 2026 ${site.fullName.toUpperCase()}`,
    tagline: 'TURNING IDEAS INTO CODE, ONE COMMIT AT A TIME',
    backToTop: 'BACK TO TOP ↑',
  };

  return (
    <section
      className="dark dark-depth bg-ink pb-0 pl-[6%] pr-[6%] pt-16 text-paper desk:pl-[max(6%,108px)] desk:pt-24 tablet:pb-20 phone:pt-10"
      data-motion="dark"
      id="contact"
    >
      <div className="flex justify-between gap-6 border-b border-dark-line pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-label text-accent-light">{labels.eyebrow}</span>
        <span className="text-dark-label phone:hidden">{labels.sub}</span>
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
          <span className="text-accent-light">{labels.headingLine2}</span>
        </h2>
        <a
          className="group absolute bottom-[12%] right-[2%] flex size-[145px] items-center justify-center rounded-full border border-dark-line/80 bg-white/[0.02] p-2 backdrop-blur-sm transition-all duration-500 ease-out hover:border-accent-light/60 hover:bg-white/[0.06] hover:scale-[1.06] active:scale-[0.96] tablet:size-[100px] phone:bottom-5 phone:right-0 phone:size-[60px]"
          href={`mailto:${personal.email}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="flex size-full items-center justify-center rounded-full border border-white/10 font-sans text-[90px] leading-none text-paper transition-all duration-300 group-hover:bg-accent-light group-hover:text-ink-deep tablet:text-[60px] phone:text-[34px]">
            ↗
          </div>
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-5 pb-[55px] pt-[30px] phone:gap-x-[18px] phone:gap-y-2.5 phone:pb-[35px]">
        <a
          className="link-underline border-b border-[#6a695f] py-3 text-[length:clamp(17px,2vw,27px)] transition-colors hover:text-accent-light active:scale-[0.98] phone:max-w-full phone:text-[18px] phone:[overflow-wrap:anywhere]"
          href={`mailto:${personal.email}`}
        >
          {personal.email}
        </a>
        <CopyEmailButton email={personal.email} />

        <div className="ml-auto flex flex-wrap gap-x-6 gap-y-3 text-[14px] tablet:ml-0 tablet:w-full phone:mt-[15px]">
          {site.socials.map((social) => (
            <a
              key={social.label}
              className="group -my-[13px] flex items-center gap-1.5 py-[13px] transition-colors hover:text-accent-light active:scale-[0.98]"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{social.label}</span>
              <span className="text-[12px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                ↗
              </span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ))}
          <a
            className="group -my-[13px] flex items-center gap-1.5 py-[13px] transition-colors hover:text-accent-light active:scale-[0.98]"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{labels.resumeLink}</span>
            <span className="text-[12px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
              ↗
            </span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      <footer className="flex justify-between gap-[25px] border-t border-dark-line py-[25px] text-[12px] tracking-[1px] text-[#bbb7ad] phone:flex-wrap phone:gap-[18px] phone:text-[11px]">
        <span className="whitespace-nowrap">{labels.copyright}</span>
        <span className="phone:hidden">{labels.tagline}</span>
        <a className="-my-4 whitespace-nowrap py-4" href="#home">
          {labels.backToTop}
        </a>
      </footer>
    </section>
  );
};