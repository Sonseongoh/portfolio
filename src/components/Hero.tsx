const stats = [
  { value: "4+", label: "프로젝트", gradient: "from-cyan-400 to-blue-500" },
  { value: "10+", label: "결정 기록 (ADR)", gradient: "from-purple-400 to-pink-500" },
  { value: "25", label: "단위 테스트", gradient: "from-emerald-400 to-teal-500" },
];

export default function Hero() {
  return (
    <section id="top" className="container mx-auto px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 to-green-500/20 px-4 py-2 shadow-lg backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <p className="text-sm font-semibold tracking-wide text-emerald-300">
                Open to work
              </p>
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Frontend{" "}
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="max-w-xl text-base font-light leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              기능을 나열하기보다{" "}
              <span className="font-semibold text-white">문제를 먼저 정의</span>
              하고, <span className="font-semibold text-white">지표 하나</span>로
              기능을 넣고 빼는 기준을 세웁니다. 가설이 깨진 자리와 결정을 번복한
              이유를 기록하며 만듭니다.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-500/30 sm:p-4"
                >
                  <div
                    className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-2xl font-black text-transparent sm:text-3xl`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>프로젝트 보기</span>
                  <span>→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="https://github.com/Sonseongoh"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-gray-600 px-8 py-4 text-center font-bold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-gray-400 hover:bg-white/5 hover:text-white hover:shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>GitHub 보기</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-black/50 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-1.5 border-b border-gray-800/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-gray-500">developer.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-gray-300">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                  {"\n"}  name: <span className="text-emerald-300">&quot;손성오&quot;</span>,
                  {"\n"}  role: <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,
                  {"\n"}  start: <span className="text-emerald-300">&quot;문제 정의&quot;</span>,
                  {"\n"}  decide: <span className="text-emerald-300">&quot;지표 하나로&quot;</span>,
                  {"\n"}  record: [<span className="text-emerald-300">&quot;가설&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;번복&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;ADR&quot;</span>],
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>

            <div className="absolute -right-4 -top-5 rounded-xl border border-gray-700/50 bg-gray-900/90 px-4 py-2.5 text-sm shadow-xl backdrop-blur-md">
              🎯 문제 정의 → 완수
            </div>
            <div className="absolute -left-6 bottom-10 rounded-xl border border-gray-700/50 bg-gray-900/90 px-4 py-2.5 text-sm shadow-xl backdrop-blur-md">
              📝 번복도 기록으로
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
