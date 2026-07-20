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

export type Activity = {
  slug: string;
  name: string;
  period: string;
  summary: string;
  points: string[];
  /** 있으면 카드에서 '주요 의사결정 기록' 모달을 열 수 있다 */
  story?: string;
  highlights?: { title: string; body: string }[];
  initials?: string;
};

export const activities: Activity[] = [
  {
    slug: "ax-war",
    name: "조코딩 AX 인재전쟁 해커톤 본선",
    period: "2026.07",
    initials: "AX",
    summary: "5,300여 명 지원 중 60인 본선 진출",
    points: [
      "예선: AI 콘텐츠를 배포 전에 검증하는 플러그인 'mrt-truth-gate' — 사실원 대조 방식, 블라인드 recall 91.7% 측정·공개",
      "본선: '언제 갈지'와 가격 변동성을 푸는 '여행 결정 그리드' — 전후 1달 항공가 분포로 가격 등급(잘 샀는지)을 표시하고, 공휴일 낀 일정을 연차 효율순으로 추천",
    ],
  },
  {
    slug: "devcamp",
    name: "프론트엔드 데브캠프 1기",
    period: "2024.05 – 2024.12",
    initials: "FE",
    summary:
      "JavaScript · React · TypeScript · Tailwind 등 프론트엔드 전반 학습",
    points: ["React, TypeScript 기반 팀 프로젝트 3건을 수행하며 협업 경험"],
  },
];

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
    ],
  },
  {
    slug: "photowhale",
    name: "PhotoWhale",
    category: "Web",
    oneLiner:
      "이미 갖고 있는 사진으로 브라우저에서 만드는 나만의 인생네컷 — 프레임 편집부터 저장·공유까지 (2인 FE 팀)",
    problem:
      "인생네컷은 부스에 가야 하고 그 자리에서 찍은 사진만 쓸 수 있다 — 추억은 부스가 아니라 사진첩에 이미 있는데. 그 제약을 웹으로 뒤집고, 프레임 선택도 '1×3' 같은 규격 숫자가 아니라 결과물의 생김새로 고르게 했다. 만들고 끝이 아니라 다운로드 시도/성공/실패를 각각 계측해 '눌렀는데 안 됐다'가 보이는 구조로 만들었다.",
    stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "GA4", "html-to-image"],
    highlights: [
      {
        title: "Variable Font 최적화를 하루 만에 버린 결정",
        body: "폰트 용량을 80% 줄인 Variable Font가 특정 OS·GPU·브라우저 조합에서 아예 적용되지 않는 걸 발견하고, 같은 날 static 방식으로 전환했다. 이어서 font preload가 랜딩 이미지와 대역폭을 경쟁하며 LCP를 미는 병목을 찾아 해제 — LCP 950ms → 740ms.",
      },
      {
        title: "프레임 선택: 숫자 옵션 → 시각 프리뷰",
        body: "'1×3, 2×2' 버튼은 규격을 아는 사람만 읽을 수 있는 UI였다. 인생네컷 사용자는 결과물의 생김새로 고른다고 판단해 프레임 모양 그대로를 선택지로 바꿨다 — 다만 선택률 데이터로 검증하지 못한 가설임을 기록해뒀다.",
      },
      {
        title: "안 되는 버튼은 보여주지 않는다",
        body: "Web Share API가 동작하지 않는 데스크톱에서 공유 버튼을 보여주고 실패시키는 대신, 모바일 여부와 navigator.share 지원을 판단하는 훅으로 동작하는 환경에서만 노출했다.",
      },
      {
        title: "step 상태를 저장하지 않고 URL에서 파생",
        body: "페이지마다 useEffect로 진행 단계를 세팅하던 반복을 pathname 파생으로 바꿔 동기화할 상태 자체를 없앴다. '이미 존재하는 사실에서 파생 가능한 값은 저장하지 않는다'는 원칙을 여기서 얻어 이후 프로젝트에도 쓰고 있다.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/PHOTOWHALE/PHOTOWHALE" },
      { label: "Live", href: "https://photowhale.vercel.app/" },
    ],
  },
  {
    slug: "catchletter",
    name: "CatchLetter",
    category: "Web",
    oneLiner:
      "그림 정답을 맞혀야 편지를 읽을 수 있는 익명 우체통 — 정답 시도 플로우와 분리 입력 UI 담당 (5인 팀, FE 3)",
    problem:
      "메시지 전달을 작은 게임으로 만든 제품에서 '틀리는 경험'의 설계를 맡았다. 무한 시도를 막기 위해 3번 틀리면 3분 잠금 페널티를 두되, 그 끝에 힌트가 도착하게 해 이탈 대신 재시도로 이어지게 했고, 페널티가 새로고침으로 회피되지 않도록 시도 상태를 서버 기준으로 그렸다. 그리고 비밀 편지는 네트워크 탭에서도 비밀이어야 한다 — 편지 데이터 요청 자체를 정답 이후로 잠갔다.",
    stack: ["React", "Vite", "TypeScript", "Emotion", "TanStack Query", "Zustand", "i18next"],
    highlights: [
      {
        title: "편지 내용이 정답 전에 새고 있었다",
        body: "정답 여부와 무관하게 편지 데이터가 미리 호출되고 있었다 — UI로는 잠겨 있어도 개발자도구로 내용을 볼 수 있는 상태. TanStack Query의 enabled: isCorrect로 쿼리 실행 자체를 정답 이후로 잠갔다. '안 보여준다'와 '안 보낸다'는 다른 층위다.",
      },
      {
        title: "타이머가 1초마다 화면 전체를 리렌더링",
        body: "3분 타이머 상태가 페이지 훅에 있어 초가 줄 때마다 페이지 전체가 다시 그려졌다. 타이머를 별도 컴포넌트로 격리해 그 부분만 리렌더링되게 리팩토링 — 자주 바뀌는 상태는 소비하는 최소 범위에 둔다.",
      },
      {
        title: "불변 데이터에 staleTime: Infinity",
        body: "그림·정답·편지는 한 번 만들어지면 바뀌지 않는데 화면 전환마다 refetch되고 있었다. 정적 데이터로 판단해 staleTime: Infinity + gcTime 30분을 적용, 중복 API 요청을 제거했다(당시 측정 약 66% 감소).",
      },
      {
        title: "분리 입력 인풋과 한글 IME",
        body: "OTP식 분리 입력 인풋(자동 포커스 이동, 백스페이스 역이동)을 라이브러리 없이 직접 만들며 한글 조합(IME) 처리에 오래 막혔다. 출시 후에도 백스페이스 이슈가 다시 나와 고쳤다 — 완결이 아니라 계속 엣지가 나오는 영역임을 한계로 기록해뒀다.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Catch-Letter/Catch-Letter-FE" },
      { label: "Live", href: "https://catchletter.kr/" },
    ],
  },
];
