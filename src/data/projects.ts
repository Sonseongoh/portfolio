export type Project = {
  slug: string;
  name: string;
  /** 카드 우상단 배지 (Web / App 등) */
  category: string;
  oneLiner: string;
  /** "어떤 문제를 다르게 봤나" — 기능 나열이 아니라 문제 정의로 시작 */
  problem: string;
  stack: string[];
  /** 결정·번복·막힌 지점의 기록 (docs/PORTFOLIO.md 5질문 서사에서 발췌) */
  highlights: { title: string; body: string }[];
  links: { label: string; href: string }[];
  /** 내용을 아직 채우지 않은 자리 표시 카드 */
  wip?: boolean;
};

export const projects: Project[] = [
  {
    slug: "eat-and-run",
    name: "Eat & Run",
    category: "Web · PWA",
    oneLiner:
      "방금 먹은 것을 지금 당장의 운동 계획으로, 그리고 실제 완수로 잇는 웹 건강 루틴 (PWA)",
    problem:
      "칼로리 앱은 '측정'에서 멈추고 러닝 앱엔 '음식 맥락'이 없다. 그 사이가 끊겨 있다는 데 주목해, 제품 가치를 측정이 아니라 다리(먹은 것 → 행동 → 완수)로 정의했다. 성공 지표도 기록 수가 아니라 완수율 하나로 잡고, 이후 모든 기능 결정을 이 지표로 정당화하거나 기각했다.",
    stack: ["React", "TypeScript", "Zustand", "Supabase", "OpenAI", "PWA", "Vitest"],
    highlights: [
      {
        title: "GPS 자동 완수 → 수동 1탭",
        body: "웹은 화면을 끄면 JS가 멈춰 백그라운드 추적이 불가능하다. 자동 판정을 고집하면 완수 데이터가 한 건도 안 쌓인다는 걸 인정하고, 수동 1탭으로 고리를 먼저 닫은 뒤 GPS를 향상 레이어로 강등했다.",
      },
      {
        title: "배포해도 사용자에게 도달하지 않는 기본값",
        body: "zustand persist가 계산용 기본값까지 localStorage에 박제해, 코드 배포로는 영원히 못 고치는 유령 상태를 만들고 있었다. persist 대상을 '사용자가 소유한 값'으로 한정(partialize)하고 version+migrate로 이미 저장된 오염까지 청소했다.",
      },
      {
        title: "웹엔 자정에 돌 크론이 없다",
        body: "당일 미완수의 '놓침' 마감을 저장하지 않고 읽는 시점에 파생하는 KST 순수 함수로 격리하고 now를 주입했다. 그 덕에 테스트가 전무하던 저장소에 Vitest를 처음 도입해 자정 경계·연속 기록 엣지를 25건의 단위 테스트로 고정했다.",
      },
      {
        title: "재참여: 사용자를 부르는 대신, 돌아온 순간을 만든다",
        body: "웹+익명 환경에서 푸시는 반쯤 부서진 채널이다. 재방문 시 '오늘의 미완료'를 가장 먼저 직면시켜 1탭으로 닫게 하고, Streak으로 끊고 싶지 않게 만드는 쪽으로 문제를 재정의했다.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sonseongoh/EatAndRunWeb" },
      {
        label: "결정 기록 (PORTFOLIO.md)",
        href: "https://github.com/Sonseongoh/EatAndRunWeb/blob/main/docs/PORTFOLIO.md",
      },
    ],
  },
  {
    slug: "footprint",
    name: "footprint",
    category: "App",
    oneLiner:
      "GPS로 인증한 방문만 지도를 채우는, 나라가 아니라 도시 단위의 여행 수집 앱 (React Native)",
    problem:
      "기존 여행 앱은 '일본 ✓' 하나로 끝난다 — 도쿄만 다섯 번인지 홋카이도까지 훑었는지가 그 사람의 여행인데. 수집 단위를 나라 안의 도시로 잡고, 수동 추가를 아예 없애 '이 지도는 거짓말을 못 한다'를 제품의 뼈대로 삼았다.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "SQLite", "d3-geo"],
    highlights: [
      {
        title: "익명 우선 → 로그인 필수로 뒤집은 결정",
        body: "익명 계정은 로그아웃 반복으로 무한 생성된다 — 익명 신고 3건이면 아무 글이나 자동 숨김되는 구멍을 셀프 설계 리뷰에서 발견했다. 클라이언트 차단은 우회 가능하므로 서버(RLS restrictive policy, JWT 클레임 검사)에서 강제하도록 전환하고, 번복 이유를 설계 문서에 취소선으로 남겼다.",
      },
      {
        title: "오프라인 큐가 남의 계정에 체크인을 넣을 수 있었다",
        body: "A로 체크인 → 큐 대기 → B로 로그인 → 온라인 복귀 시 A의 체크인이 B의 발자국이 되는 시나리오를 발견했다. flush 시 큐 주인과 현재 세션이 다르면 건너뛰고, 주인이 재로그인할 때 동기화하도록 순서를 바로잡았다.",
      },
      {
        title: "비행기 모드에서 로그인 사용자가 '게스트'가 됐다",
        body: "인증 판정을 서버 API(getUser)에 묻고 있어 오프라인이면 로그인 사용자를 게스트로 오판했다. 기기에 암호화 저장된 세션(getSession)을 읽도록 바꿨다 — 오프라인은 예외가 아니라 전제라는 원칙을 인증에도 적용한 것.",
      },
      {
        title: "Hermes에서 d3 geoPath가 침묵하며 죽었다",
        body: "RN(Hermes)+react-native-svg 조합에서 경로가 에러 없이 안 그려졌다. 투영만 d3에서 가져오고 좌표를 직접 투영해 Polygon으로 그리는 방식으로 우회 — 웹 표준 도구가 네이티브 JS 엔진에서 그대로 돌지 않는다는 걸 몸으로 배웠다.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sonseongoh/footprint" },
      {
        label: "결정 기록 (PORTFOLIO.md)",
        href: "https://github.com/Sonseongoh/footprint/blob/main/docs/PORTFOLIO.md",
      },
    ],
  },
  {
    slug: "photowhale",
    name: "PhotoWhale",
    category: "Web",
    oneLiner: "TODO: 한 줄 소개 — PDF 포트폴리오의 서사를 여기로 옮기기",
    problem: "TODO: 어떤 문제를 다르게 봤는지 2~3문장.",
    stack: [],
    highlights: [],
    links: [],
    wip: true,
  },
  {
    slug: "catchletter",
    name: "CatchLetter",
    category: "Web",
    oneLiner: "TODO: 한 줄 소개 — PDF 포트폴리오의 서사를 여기로 옮기기",
    problem: "TODO: 어떤 문제를 다르게 봤는지 2~3문장.",
    stack: [],
    highlights: [],
    links: [],
    wip: true,
  },
];
