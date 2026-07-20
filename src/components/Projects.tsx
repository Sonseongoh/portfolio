import DecisionsDialog from "@/components/DecisionsDialog";
import GitHubIcon from "@/components/GitHubIcon";
import { projects, type Project } from "@/data/projects";

const categoryBadge: Record<string, string> = {
  "Web · PWA": "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-400/30",
  App: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-400/30",
  Web: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-400/30",
};

function initialsOf(name: string) {
  const words = name.split(/[\s&]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function ProjectCard({ project }: { project: Project }) {
  if (project.wip) {
    return (
      <article className="flex min-h-48 flex-col items-center justify-center rounded-3xl border border-dashed border-gray-700/60 bg-gradient-to-br from-gray-900/30 to-black/30 p-6 text-center">
        <h3 className="text-lg font-black text-gray-400">{project.name}</h3>
        <p className="mt-2 text-sm text-gray-500">
          내용 준비 중 — <code className="font-mono text-xs">src/data/projects.ts</code>
        </p>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:border-cyan-400/60 sm:h-14 sm:w-14 sm:rounded-2xl">
          <span className="text-sm font-black text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:text-base">
            {initialsOf(project.name)}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col p-4 sm:p-6">
        <div className="space-y-3 pr-16">
          <span
            className={`inline-flex items-center rounded-md border bg-gradient-to-r px-2 py-1 text-xs font-bold ${
              categoryBadge[project.category] ?? categoryBadge.Web
            }`}
          >
            {project.category}
          </span>
          <h3 className="text-lg font-black leading-tight text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent sm:text-xl lg:text-2xl">
            {project.name}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.oneLiner}</p>

        <div className="mt-5 space-y-2">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:text-xs">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-gray-600/30 bg-gradient-to-r from-gray-800/60 to-gray-700/60 px-2 py-0.5 text-[10px] font-medium text-gray-300 backdrop-blur-sm sm:py-1 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:text-xs">
            어떤 문제를 다르게 봤나
          </span>
          <p className="text-sm leading-relaxed text-gray-300">{project.problem}</p>
        </div>

        <DecisionsDialog
          name={project.name}
          initials={initialsOf(project.name)}
          highlights={project.highlights}
        />

        <div className="mt-5 flex gap-4 border-t border-gray-800/50 pt-4 text-sm">
          {project.links.map((link) => {
            const isGitHub = link.href.includes("github.com");
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 transition-colors duration-300 hover:text-cyan-300"
              >
                <span>{link.label}</span>
                {isGitHub ? <GitHubIcon /> : <span>↗</span>}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base lg:text-lg">
              기능 목록이 아니라, 무엇을 고민했고 어떤 가설이 틀렸는지의 기록입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
