import DecisionsDialog from "@/components/DecisionsDialog";
import { activities } from "@/data/projects";

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-16 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Activities{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                &amp; Education
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base lg:text-lg">
              프로젝트 밖에서의 도전과 학습 기록입니다.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {activities.map((activity) => (
              <article
                key={activity.slug}
                className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <span className="text-sm font-black text-cyan-400">
                        {activity.initials}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {activity.name}
                    </h3>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400">
                    {activity.period}
                  </span>
                </div>

                <p className="mt-4 font-medium text-purple-300">{activity.summary}</p>

                <ul className="mt-3 space-y-1.5">
                  {activity.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-gray-400"
                    >
                      <span className="mt-0.5 shrink-0 text-cyan-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {activity.highlights && (
                  <DecisionsDialog
                    name={activity.name}
                    initials={activity.initials ?? activity.name.slice(0, 2)}
                    intro={activity.story}
                    highlights={activity.highlights}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
