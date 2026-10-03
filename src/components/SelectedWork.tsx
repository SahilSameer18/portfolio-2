import React from 'react';
import Image from 'next/image';
import { portfolioData } from '../data/portfolioData';

export const SelectedWork: React.FC = () => {
  const { projects, personal } = portfolioData;

  const countStr = projects.length < 10 ? `0${projects.length}` : `${projects.length}`;

  const labels = {
    sectionAria: 'Selected Work',
    eyebrow: '01 / SELECTED WORK',
    category: 'FULL-STACK & SYSTEMS ARCHITECTURE',
    headingLine1: 'SELECTED',
    headingLine2: 'PROJECTS',
    workCountAria: `${projects.length} Projects`,
    workNote: 'Architected to scale.',
    workIntro: 'Production web systems, compound-indexed database architectures, and GenAI platforms engineered with Node.js, PostgreSQL, MongoDB, and React.',
    resumeLink: 'View résumé',
    openProject: 'LIVE DEMO ↗',
    openGithub: 'GITHUB ↗',
    ctaPrompt: 'Building a scalable platform?',
    ctaAction: "Let's connect ↗",
  };

  return (
    <section
      className="dark dark-depth bg-[#191a17] pb-20 pl-[6%] pr-[6%] pt-16 text-paper desk:pb-28 desk:pl-[max(6%,108px)] desk:pt-24"
      data-motion="dark"
      id="work"
      aria-label={labels.sectionAria}
    >
      <div className="flex justify-between gap-6 border-b border-[#45463f] pb-6 text-[12px] tracking-label phone:items-start phone:text-[11px] phone:tracking-[.7px]">
        <span className="text-[12px] font-medium tracking-label text-accent-light">{labels.eyebrow}</span>
        <span className="text-[#b7b3a8] phone:hidden">{labels.category}</span>
      </div>

      <div className="mb-16 mt-14 grid grid-cols-[1.8fr_1fr] items-end justify-between gap-[6%] phone:my-[35px] phone:block">
        <h2 className="m-0 font-display text-[length:clamp(76px,10.8vw,174px)] font-bold leading-[.86] tracking-[-.025em] phone:text-[length:clamp(45px,16vw,76px)]">
          <span className="inline-flex items-start text-accent-light" data-motion="work-title-line">
            {labels.headingLine1}
          </span>
          <br />
          <span className="inline-flex items-start text-accent-light" data-motion="work-title-line">
            {labels.headingLine2}
            <span
              className="ml-5 mt-3 font-serif text-[24px] font-normal leading-[1.2] tracking-[0] text-paper"
              aria-label={labels.workCountAria}
            >
              ({countStr})
            </span>
          </span>
        </h2>
        <div className="max-w-[330px] pb-1 [justify-self:end] phone:mt-8" data-motion="work-intro">
          <span className="font-serif text-[32px] font-normal leading-[1.15] text-paper">{labels.workNote}</span>
          <p className="mb-[22px] mt-[18px] text-[16px] leading-[1.7] text-[#babbb1]">{labels.workIntro}</p>
          <a
            className="link-underline nudge-ne flex justify-between border-b border-[#77776b] py-3.5 text-[14px]"
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.resumeLink} <span className="text-[20px]" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-9 gap-y-16 phone:block">
        {projects.map((project) => {
          const targetUrl = project.link || project.github;
          const wide = !!project.wide;
          return (
            <article
              key={project.id}
              className={`m-0 min-w-0 p-0 phone:mb-[45px] ${
                wide ? 'col-[1/-1] grid grid-cols-[1.2fr_1fr] gap-x-[8%] gap-y-0 tablet:block' : ''
              }`}
              data-motion="project"
            >
              <div
                className={`flex justify-between gap-5 pb-[17px] text-[12px] leading-[1.5] tracking-[1.3px] text-[#c6c5ba] ${
                  wide ? 'col-[1/-1]' : ''
                }`}
                data-motion="project-kicker"
              >
                <span className="text-accent-light">{project.kicker}</span>
                <span>{project.badge}</span>
              </div>

              <a
                className={`group relative isolate block overflow-hidden border border-[#d6d0c3]/60 bg-[linear-gradient(145deg,#ddd7ca,#c8c1b2)] ${
                  wide ? 'col-[1/-1] row-auto px-[8%] py-[5%]' : 'p-[7%]'
                } phone:p-[6%]`}
                data-motion="project-image"
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.openProject} - ${project.title}`}
              >
                <div className="overflow-hidden border border-[#0d0e0b]/40 bg-[#111210] [box-shadow:0_40px_70px_-30px_rgba(25,26,23,.55),0_12px_24px_-12px_rgba(25,26,23,.35)] [transition:transform_.6s_var(--ease-expo)] group-hover:[transform:translateY(-6px)]">
                  <div
                    className="flex items-center gap-1.5 border-b border-white/10 bg-[#191a16] px-3 py-[9px]"
                    aria-hidden="true"
                  >
                    <span className="size-[7px] rounded-[50%] bg-[#4b4d44]" />
                    <span className="size-[7px] rounded-[50%] bg-[#4b4d44]" />
                    <span className="size-[7px] rounded-[50%] bg-[#4b4d44]" />
                    <span className="ml-3 truncate text-[11px] leading-none tracking-[.04em] text-[#8d9084]">
                      {targetUrl ? new URL(targetUrl).host : ''}
                    </span>
                  </div>
                  <Image
                    className="block h-auto w-full"
                    src={project.image}
                    alt={project.imageAlt}
                    sizes={wide ? '(max-width: 900px) 90vw, 55vw' : '(max-width: 600px) 90vw, (max-width: 900px) 42vw, 36vw'}
                    placeholder="blur"
                  />
                </div>
                <span className="absolute bottom-[18px] right-[18px] border border-[#ffffff2b] bg-[#1e211d] px-[18px] py-3.5 text-[12px] tracking-[1px] text-[#f4eee3] [transition:background_.2s,color_.2s] group-hover:bg-paper group-hover:text-ink phone:bottom-3 phone:right-3 phone:p-3">
                  {labels.openProject}
                </span>
              </a>

              <div
                className={`flex items-center gap-[15px] ${
                  wide ? '[align-self:start] pt-7' : 'pt-[25px]'
                } phone:gap-3.5 phone:pt-5`}
                data-motion="project-heading"
              >
                <span className="[align-self:start] pt-[7px] font-sans text-[15px] font-normal leading-[normal] tracking-label text-accent-light">
                  {project.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`mb-2.5 font-display font-semibold leading-none tracking-[0] [overflow-wrap:anywhere] phone:text-[28px] ${
                      wide
                        ? 'text-[length:clamp(48px,5.2vw,76px)]'
                        : 'text-[length:clamp(28px,3vw,44px)]'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[#babbb1]">{project.subtitle}</p>
                </div>
                <a
                  className="flex size-12 min-h-11 min-w-11 shrink-0 items-center justify-center rounded-[50%] border border-[#65685c] text-[26px] [transition:background_.2s,color_.2s] hover:bg-accent-light hover:text-[#191a17]"
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </div>

              <p
                className={`max-w-full text-[16px] leading-[1.7] text-[#bcbeb3] ${
                  wide ? 'col-start-2 mt-7' : 'mt-[22px]'
                }`}
                data-motion="project-description"
              >
                {project.description}
              </p>

              {project.metrics && (
                <div
                  className={`mt-6 flex flex-wrap gap-x-9 gap-y-4 ${wide ? 'col-start-2' : ''}`}
                  data-motion="project-metrics"
                >
                  {project.metrics.map((metric) => (
                    <div key={metric.value} className="max-w-[180px]">
                      <span className="block font-display text-[40px] font-semibold leading-none tracking-[.01em] text-accent-light">
                        {metric.value}
                      </span>
                      <span className="mt-2 block text-[12px] leading-[1.5] text-[#bcbeb3]">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className={`mt-[19px] flex flex-wrap gap-2 [align-self:start] ${wide ? 'col-start-2' : ''}`}
                data-motion="project-tags"
              >
                {project.tags.map((tag, i) => (
                  <span key={i} className="border border-[#484b40] px-2.5 py-[7px] text-[12px] text-[#d1d1c6]">
                    {tag}
                  </span>
                ))}
                {project.github && project.link && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-[7px] text-[12px] underline"
                  >
                    {labels.openGithub}
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <a
        className="mt-14 flex items-center justify-between border-t border-[#45463f] pt-6 text-[16px] phone:mt-[15px] phone:gap-5 phone:text-[14px] phone:leading-[1.7]"
        href={`mailto:${personal.email}`}
      >
        {labels.ctaPrompt} <span className="font-serif text-[26px] font-normal leading-[normal]">{labels.ctaAction}</span>
      </a>
    </section>
  );
};