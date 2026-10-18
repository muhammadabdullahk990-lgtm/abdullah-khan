import React, { useState } from 'react';
import { Page, ProjectShowcase } from '../types';
import { SHOWCASE_PROJECTS, CONTACT_INFO } from '../data/content';
import { ArrowUpRight, Check, X, ExternalLink, ArrowRight } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (projectSummary: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectShowcase | null>(null);

  const filtered = filter === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter(p => p.category === filter);

  const handleInquireFromModal = (project: ProjectShowcase) => {
    setActiveModalProject(null);
    onSelectProject(`Inquiring about project style: ${project.title} (${project.categoryLabel})`);
    onNavigate('contact');
  };

  return (
    <div className="py-16 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Case Studies & Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
              Production Systems Deployed For Commercial Impact
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Explore recent web systems built with tailored functionality, sub-second load times, and quantifiable client sales increases.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg shadow-xs self-start md:self-auto">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'services', label: 'Healthcare' },
              { id: 'corporate', label: 'Corporate B2B' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-slate-900 border border-slate-200/60">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quantitative Proof Strip */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Measurable Business Outcome
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-bold text-slate-900 font-mono-numbers">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  {project.techStack.slice(0, 2).join(' · ')}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Deep-Dive */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in">
              <div className="p-6 border-b border-slate-200 flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {activeModalProject.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6 overflow-y-auto">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Project Scope & Engineering
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    Delivered Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                    {activeModalProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-slate-100 rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Want to build something similar?
                </span>
                <button
                  onClick={() => handleInquireFromModal(activeModalProject)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Request Quote for this Architecture
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
