const philosophies = [
  {
    icon: "🎯",
    title: "문제 정의 중심",
    accent: "text-blue-400",
    card: "from-blue-500/10 to-indigo-500/10 border-blue-400/20",
    body: "기능이 아니라 문제에서 시작합니다. 칼로리 앱과 러닝 앱 '사이의 끊긴 다리'처럼, 기존 제품이 놓친 질문을 먼저 찾습니다.",
  },
  {
    icon: "📊",
    title: "지표로 결정",
    accent: "text-purple-400",
    card: "from-purple-500/10 to-pink-500/10 border-purple-400/20",
    body: "성공 지표 하나를 정하고, 그 지표로 기능을 넣고 빼는 결정을 내립니다. GPS를 미루고 푸시를 뺀 것도 전부 완수율 하나로 판단했습니다.",
  },
  {
    icon: "📝",
    title: "번복의 기록",
    accent: "text-emerald-400",
    card: "from-emerald-500/10 to-green-500/10 border-emerald-400/20",
    body: "결정이 틀렸다는 걸 알게 되면 번복하고, 그 이유를 ADR로 남깁니다. 설계 문서의 취소선까지가 포트폴리오라고 생각합니다.",
  },
];

const skillGroups = [
  {
    icon: "🧩",
    name: "Frontend",
    chip: "from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-400/30",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: "🗂️",
    name: "상태 · 데이터",
    chip: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30",
    items: ["Zustand", "Supabase"],
  },
  {
    icon: "📱",
    name: "크로스플랫폼",
    chip: "from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-400/30",
    items: ["React Native", "Expo"],
  },
  {
    icon: "🧪",
    name: "품질 · 도구",
    chip: "from-orange-500/20 to-yellow-500/20 text-orange-300 border-orange-400/30",
    items: ["Vitest", "Tailwind CSS", "Git"],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base lg:text-lg">
              {/* TODO: 자기소개 2~3문장 — "무엇을 만들 때 어떤 기준으로 결정하는 사람인지" 중심으로 */}
              만드는 것보다 만드는 이유를 먼저 적는 프론트엔드 개발자입니다.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {philosophies.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border bg-gradient-to-r p-6 backdrop-blur-sm ${item.card}`}
              >
                <h3 className={`mb-2 text-lg font-bold ${item.accent}`}>
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 mt-24 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">기술 스택</h2>
            <p className="mt-4 text-sm text-gray-400 sm:text-base lg:text-lg">
              프로젝트에서 실제로 사용하고 있는 기술들입니다.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.name}
                className="rounded-3xl border border-gray-600/30 bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30"
              >
                <div className="mb-6 flex items-center space-x-4">
                  <div className="text-3xl">{group.icon}</div>
                  <h3 className="text-xl font-bold text-white">{group.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border bg-gradient-to-r px-3 py-1.5 text-sm font-semibold ${group.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
