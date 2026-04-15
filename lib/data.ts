export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  summary: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture: string[];
  outcome: string;
  links: {
    github?: string;
    url?:string;
  };
  highlight?: boolean;
  detaildescription:string[];
  reason:string[];
  fronttechStack:string[];
  backtechStack:string[];
};

export type Experience = {
  period: string;
  title: string;
  organization: string;
  team: string;
  description: string;
  stack: string[];
  highlights: string[];
  responsibilities: string[];
  detailNote: string;
};


export type Test = {
  period: string;
  title : string;
  team : string;
  description : string[];
}


export const profile = {
  name: "최세진",
  tagline: "데이터 흐름과 구조를 설계하는 웹 개발자",
  intro:
    "실무의 문제를 서비스로 정리하고, 화면 뒤에서 데이터가 정확하게 흐르도록 구조를 설계합니다.",
  homeSummary: [
    "무역회사 실무에서 경험한 소통 오류를 계기로 문제 해결형 서비스를 직접 기획하게 되었습니다.",
    "지금은 사용자 경험과 함께 데이터 흐름, 상태 관리, 정보 구조를 함께 설계하는 개발자를 목표로 하고 있습니다.",
  ],
  shortBio: [
    "무역회사 근무 중 창고와의 입출고 소통 오류를 자주 경험하며, 정보가 엇갈릴 때 현장이 얼마나 쉽게 흔들리는지 직접 보았습니다.",
    "그 경험은 단순히 불편을 인지하는 데서 끝나지 않고, 문제를 줄일 수 있는 서비스를 직접 만들고 싶다는 동기로 이어졌습니다.",
    "웹 개발을 공부하면서 화면을 만드는 일뿐 아니라 데이터가 흐르는 방식과 구조를 설계하는 과정에 더 큰 흥미를 느끼게 되었습니다.",
    "지금은 문제를 구조적으로 정리하고, 신뢰할 수 있는 서비스 경험으로 연결하는 개발자가 되기 위해 꾸준히 성장하고 있습니다.",
  ],
  direction: [
    "문제 해결 관점으로 요구사항을 해석합니다.",
    "기능 구현 전에 데이터 흐름과 예외 상황을 먼저 정리합니다.",
    "읽기 쉬운 구조와 협업 가능한 코드 품질을 중요하게 생각합니다.",
  ],
  strengths: [
    {
      title: "실서비스 UI 개선 및 운영 경험",
      description:
        "카페24 자사몰 UI 개선 및 기능 수정 수행한 경험이 있습니다. 이 과정에서 기존 외주로 진행하던 웹 수정 작업을 직접 처리하여 연간 약 200만 원 이상의 비용을 절감하고, 수정 대응 속도를 크게 향상시켰습니다.",
    },
    {
      title: "사용자 중심 문제 해결 및 협업 경험",
      description:
        "사용자 관점에서 문제를 정의하고, 개선안을 제안하여 실제 서비스에 반영합니다.",
    },
    {
      title: "커뮤니케이션 및 협업",
      description:
        "다양한 프로젝트에서 Github, Notion 등 협업 Tool을 이용하여, 프로젝트를 진행한 경험이 있습니다. 직접 기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.",
    },
  ],
  contact: {
    email: "www_zq@naver.com",
    github: "https://github.com/choisejin12",
  },
  skillSummary: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
};



export const test: Test[] =[
  {
    period: "2024.09 ~ 2026.02",
    title: "넥스텝 주식회사",
    team : "영업지원 · 주임 2년차· 영업지원",
    description: ["◾ 영업지원 담당으로 입사했으나, 소규모 조직 특성상 무역 실무·물류·행정·마케팅·웹 운영까지 복합 수행" , 
      "◾ 자사 브랜드 온라인몰 운영,기획 및 웹 프론트 수정 업무 병행",
      "◾ 수출 서류 작성, 선적 스케줄 관리, 거래처 커뮤니케이션 전반, ERP 기반 매입/수금 관리 담당"]
  },
  {
    period: "2024.01 ~ 2024.09",
    title: "(주)체험",
    team : "업체관리팀 · 사원/팀원· 비서",
    description: ["◾ 데이터 분석 및 보고서,회의록 작성 등 사무 업무" , 
      "◾ 엑셀 매크로 관리 및 결제 업무",
      "◾ 인원 월차 관리 및 페널티 등 인원 관리",
      "◾ 사무 업무 외 실장 별도 지시 사항 수행",]
  },
  {
    period: "2022.03 ~ 2023.12",
    title: "홍익대학교 정보전산원",
    team : "홍익대학교 세종캠퍼스 정보전산원(이하 전산실)에서 총 2년동안 국가근로 장학생",
    description: ["◾ 실습실 운영 및 교내 전산 지원 보조" , 
      "◾ 전산실습실 및 자유이용실 운영 보조",
      "◾ 교내 전산 지원 및 장애 처리 ( 전반적인 인터넷 오류 및 office365 관리, 컴퓨터 포맷, 기본프로그램 설치 등 )"]
  }
]

export const test2: Test[] =[
  {
    period: "2026-04 ~ 2026-04",
    title: "InvenQR",
    team : "창고 내 자산을 상품, 창고, 위치, 입출고 기록, 승인 요청 단위로 체계적으로 관리하는 웹 기반 반응형 재고 관리 서비스",
    description: ["◾ Full Stack 개발 (Frontend + Backend 전반 설계 및 구현)" , 
      "◾ 서비스 기획 및 문제 정의",
      "◾ RESTful API 설계 및 구현 (Controller / Service 구조)",
      "◾ 인증 및 권한 관리 구현 (JWT)",    
      "◾ 상태 관리 구조 설계 (React Query + Redux)",
      "◾ DB 설계 (Prisma 기반 데이터 모델링)"    
    ],
  },
  {
    period: "2026.03~2026.04",
    title: "TeamFlow",
    team : "React Query와 Redux를 활용한 상태 분리 구조를 기반으로 협업 관리 시스템을 Full Stack으로 구현한 프로젝트",
    description: ["◾ Full Stack 개발 (Frontend + Backend 전반 설계 및 구현)" , 
      "◾ 서비스 전체 구조 설계",
      "◾ UI/UX 구현 (React)",
      "◾ API 설계 및 개발 (Express)",    
      "◾ DB 모델링 및 관계 설계 (MongoDB)",
      "◾ 인증 및 권한 관리 구현 (JWT)",
      "◾ 상태 관리 구조 설계 (React Query + Redux)"
    ],
  },  
  {
    period: "2023.09~2023.11",
    title: "SwingFit",
    team : "골프 자세 측정 어플리케이션",
    description: ["◾ 앱 전체 UI 및 사용자 기능 구현 – 로그인/게시판/마이페이지 등 (기여도 90%)" , 
      "◾ React Native 기반 앱 화면 및 UX 설계 (기여도 100%)",
      "◾ Firebase 기반 인증 및 데이터 처리 기능 구현 (기여도 85%)",
      "◾ 자세 분석 알고리즘 결과 연동 및 화면 출력 처리 (기여도 70%)",    
      "◾ 서비스 기획 및 구조 설계 참여 (기여도 90%)"
    ],
  }, 

]




export const skills = {
  frontend: [
    
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express",
    "MySQL",
    "REST API",
    "Prisma",
    "Firebase",
    "Git",
    "GitHub",
  ],
};

export const projects: Project[] = [
  {
    slug: "invenqr",
    title: "InvenQR",
    subtitle: "QR을 통해 오프라인 자산을 디지털 데이터로 관리하는 웹 서비스",
    period: "개인 프로젝트",
    description:
      "무역회사 실무 경험에서 출발해, 창고와 사무실 간 재고 정보 전달 문제를 해결하기 위해 기획한 서비스입니다.",
    summary:
      "입출고 과정의 커뮤니케이션 오류를 줄이기 위해 QR 기반 재고 추적과 데이터 흐름 정리를 중심으로 설계했습니다.",
    role:
      "문제 정의부터 서비스 기획, 화면 설계, 프론트엔드 구현, 데이터 구조 정리까지 주도적으로 진행했습니다.",
    problem:
      "창고와 사무실이 재고 상태를 서로 다른 방식으로 기록하고 공유하면서 입출고 누락, 수량 불일치, 확인 지연이 반복되었습니다. 특히 현장에서는 빠른 확인이 필요하지만 기존 방식은 정보 최신성을 보장하기 어려웠습니다.",
    solution:
      "상품 단위에 QR 식별 흐름을 부여하고, 스캔 시점마다 상태가 갱신되도록 구조를 설계했습니다. 현장과 관리자가 같은 데이터를 바라보도록 만들고, 재고 상태를 빠르게 추적할 수 있게 했습니다.",
    features: [
      "1. React Query 기반으로 API를 기능별로 분리",
      "2. 사용자 인증 상태는 Redux Toolkit으로 관리",
      "3. 상품 등록 요청과 실제 상품 등록을 분리한 승인 워크플로우를 사용",
      "4. 창고 + 위치 기반으로 재고를 관리",
      "5. 관리자에서 상품 수량 수정 시 입출고 로그도 함께 생성해 이력과 수량이 맞도록 처리",
      "6. CSV 다운로드 이력은 DownloadLog 테이블에 저장",
      "7. 이미지 업로드는 현재 Base64 방식으로 처리",
      "8. QR 스캔 페이지는 카메라 스캔 / 직접 입력 / 이미지 업로드 방식을 지원",
     
    ],
    techStack:[],
    fronttechStack: ["React", "TypeScript", "React Query","Redux Toolkit","Vite","Tailwind CSS", "React Router", "Recharts", "html5-qrcode", "React Toastify","Axios" ],
    backtechStack: ["Node.js",  "MySQL", "Express", "TypeScript", "Prisma", "JWT", "bcryptjs","json2csv"],
    architecture: [
      "▶ 이미지 업로드를 S3 같은 외부 스토리지로 분리",
      "▶ 검색 / 필터 / 페이지네이션 고도화",
      "▶ 테스트 코드 추가",
      "▶ 배포 환경 헬스체크 및 모니터링 강화",
      "▶ 관리자 로그 / 감사 추적 기능 강화",
      "▶ CSV 다운로드 옵션 세분화",
    ],

    

    outcome:
      "단순한 재고 조회를 넘어, 현장과 관리자가 같은 흐름을 공유할 수 있는 구조를 목표로 설계했습니다.",
    links: {
      github: "https://github.com/choisejin12/InvenQR",
      url:"https://invenqr.vercel.app/",
    },
    detaildescription:[
      "InvenQR는 창고 내 자산을 상품, 창고, 위치, 입출고 기록, 승인 요청 단위로 체계적으로 관리하는 웹 기반 반응형 재고 관리 서비스입니다.",
      "실제 현장에서는 상품 박스에 QR 코드를 부착하여 재고를 관리하며, 이를 통해 상품 식별, 위치 확인, 입출고 처리를 보다 빠르고 정확하게 수행할 수 있도록 설계했습니다.",
      "일반 사용자는 상품 조회, 상품 등록 요청, 입출고 기록 조회, QR 스캔, CSV 다운로드 기능을 사용할 수 있습니다.",
      "관리자는 상품 승인/거절, 창고 관리, 전체 상품 관리, 관리자 전용 입출고 기록 조회 기능을 사용할 수 있습니다.",
      "상품 상세 페이지에서는 QR 코드가 생성되며, QR 스캔 시 해당 상품 상세 페이지로 이동합니다.",
      "다운로드 이력과 입출고 이력을 별도 로그로 남겨 추적할 수 있습니다.",
    ],
    reason : [
      "이전에 근무한 무역회사에서 창고와 소통을 담당하는 업무를 수행하며, 입출고 과정에서 소통 오류가 빈번하게 발생하는 문제를 경험했습니다.",
      "특히 월 1~2회 재고조사를 위해 창고를 방문할 때, 창고 규모가 크고 물류량이 많아 재고를 파악하고 입출고를 관리하는 과정에서 많은 비효율이 발생했습니다.",
      "이로 인해 현장 담당자뿐만 아니라 저 역시 업무 처리에 어려움을 느꼈습니다.",
      "이러한 경험을 통해, 기존의 수기 및 엑셀 중심 재고 관리 방식이 실시간 데이터 반영과 정확한 커뮤니케이션에 한계를 가진다는 것을 체감하게 되었고, 이를 개선할 수 있는 방법에 대해 고민하게 되었습니다.",
      "현재도 많은 기업에서 오프라인 기반의 재고 관리 방식을 유지하고 있으며, 이는 데이터 불일치, 커뮤니케이션 오류, 작업 지연 등의 문제로 이어지고 있습니다."
    ]
  },
{
  slug: "teamflow",
  title: "TeamFlow",
  subtitle: "팀/할 일/멤버를 통합 관리하는 협업 플랫폼",
  period: "개인 프로젝트",
  description:
    "실제 팀 프로젝트 환경에서 발생하는 협업 구조 문제를 해결하기 위해 기획한 웹 서비스입니다.",
  summary:
    "권한 기반 협업 구조와 상태 관리 분리를 중심으로, 팀 단위 데이터 흐름을 안정적으로 관리할 수 있도록 설계했습니다.",
  role:
    "문제 정의부터 서비스 기획, 데이터 구조 설계, 프론트엔드 및 백엔드 구현까지 전체 과정을 단독으로 수행했습니다.",

  problem:
    "기존 팀 프로젝트에서는 역할 구분이 명확하지 않거나, 할 일(Task)과 팀 정보가 분리되어 관리되면서 협업 효율이 떨어지는 문제가 발생했습니다. 또한 인증과 권한 관리가 일관되지 않아 사용자별 접근 제어가 어려운 구조였습니다.",

  solution:
    "사용자, 팀, 역할을 분리한 구조를 설계하고 TeamMember 컬렉션을 통해 유연한 관계를 구성했습니다. JWT 기반 인증과 역할(role) 기반 접근 제어를 적용해 사용자별 권한을 명확히 구분하고, React Query와 Redux를 분리 사용하여 데이터 흐름을 안정적으로 관리하도록 구현했습니다.",

  features: [
    "1. React Query를 활용한 서버 상태 관리 및 캐싱 전략 적용",
    "2. Redux Toolkit을 통한 사용자 인증 상태 전역 관리",
    "3. JWT 기반 인증 및 role 기반 권한 제어 구조 구현",
    "4. TeamMember 중간 컬렉션을 통한 유저-팀 관계 분리 설계",
    "5. 초대코드 기반 팀 가입 시스템 (만료 시간 및 unique 처리)",
    "6. Task, Notice CRUD 기능 구현",
    "7. ProtectedRoute / AdminRoute를 통한 페이지 접근 제어",
    "8. invalidateQueries를 활용한 UI 자동 동기화 처리",
  ],

  techStack: [],

  fronttechStack: [
    "React",
    "TypeScript",
    "React Query",
    "Redux Toolkit",
    "Vite",
    "Tailwind CSS",
  ],

  backtechStack: [
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
  ],

  architecture: [
    "▶ 서버 상태와 클라이언트 상태를 분리한 구조 유지",
    "▶ API 응답 구조 표준화 및 타입 안정성 강화",
    "▶ 테스트 코드 추가 및 안정성 검증",
    "▶ 실시간 협업 기능(WebSocket) 확장 가능성 고려",
    "▶ 권한 관리 로직 고도화 (세분화된 role 관리)",
  ],

  outcome:
    "단순한 기능인 CRUD를 넘어 권한, 관계, 상태 관리 구조를 통합적으로 설계하며, 실제 협업 서비스에서 요구되는 데이터 흐름과 구조를 구현했습니다.",

  links: {
    github: "https://github.com/choisejin12/TeamFlow",
    url: "https://team-flow-three.vercel.app/",
  },

  detaildescription: [
    "TeamFlow는 팀 단위 협업 환경을 웹으로 구현한 반응형 협업 관리 서비스입니다.",
    "사용자는 팀을 생성하고 초대코드를 통해 팀에 참여하며, 역할에 따라 할 일(Task)과 공지사항을 관리할 수 있습니다.",
    "플랫폼 관리자, 팀장, 일반 사용자로 역할을 구분하여 권한 기반으로 기능을 사용할 수 있도록 설계했습니다.",
    "Task는 팀 단위로 관리되며, 마감일(dueDate)을 기반으로 캘린더 형태로 시각화할 수 있습니다.",
    "React Query를 통해 서버 상태를 관리하고, Redux를 통해 사용자 상태를 분리하여 데이터 흐름을 효율적으로 구성했습니다.",
    "JWT 인증을 기반으로 사용자 식별 및 권한 검증을 수행하며, middleware를 통해 API 접근을 제어합니다.",
  ],

  reason: [
    "팀 프로젝트를 진행하면서 역할 구분이 명확하지 않아 작업 충돌이 발생하는 경험을 했습니다.",
    "특히 할 일(Task) 관리와 팀 구조가 분리되어 있어 협업 효율이 떨어지는 문제를 체감했습니다.",
    "이러한 문제를 해결하기 위해, 사용자-팀-역할 관계를 명확히 정의하는 협업 구조를 직접 설계하고 구현하고자 했습니다.",
    "또한 인증과 권한 관리, 상태 관리 구조를 실무 수준으로 경험해보기 위해 해당 프로젝트를 진행하게 되었습니다.",
    "협업 서비스는 단순 기능 구현보다 데이터 흐름과 구조 설계가 중요하다고 판단하여, 이를 중심으로 프로젝트를 구성했습니다.",
  ],
},

{
  slug: "swingfit",
  title: "SwingFit",
  subtitle: "골프 스윙 자세 측정 및 분석 어플리케이션",
  period: "팀 프로젝트",
  description:
    "골프 스윙 자세를 측정하고 분석하여 사용자에게 피드백을 제공하기 위해 개발한 모바일 어플리케이션입니다.",
  summary:
    "이미지 기반 자세 분석을 통해 스윙 점수와 피드백을 제공하고, 사용자가 스스로 자세를 개선할 수 있도록 설계했습니다.",
  role:
    "React Native 기반 전체 프론트엔드 구현, Firebase를 활용한 인증 및 데이터 관리, UI/UX 디자인을 담당했습니다.",

  problem:
    "골프는 레슨 비용과 접근성 문제로 인해 꾸준한 자세 교정이 어려운 문제가 있습니다. 또한 개인이 자신의 스윙 자세를 객관적으로 분석하기 어렵다는 한계가 존재합니다.",

  solution:
    "사용자가 촬영한 이미지를 기반으로 자세를 분석하고 점수와 피드백을 제공하는 구조를 설계했습니다. MediaPipe를 활용해 좌표를 추출하고, 기준 데이터와 비교하여 점수를 산출하며 시각적인 스켈레톤 이미지와 함께 결과를 제공합니다.",

  features: [
    "1. Firebase Authentication을 활용한 로그인 / 회원가입 기능",
    "2. 게시글 및 댓글 작성 기능",
    "3. 게시글 목록 페이징 처리",
    "4. React Native MapView 기반 지도 및 마커 표시",
    "5. 프로필 이미지 등록 및 변경 기능",
    "6. 자세 이미지 업로드 및 분석 기능",
    "7. MediaPipe 기반 자세 좌표 추출 및 점수 계산",
    "8. 분석 결과 이미지 및 피드백 제공",
  ],

  techStack: [],

  fronttechStack: ["React Native", "Expo"],

  backtechStack: ["Firebase"],

  architecture: [
    "▶ 이미지 리사이즈 및 전처리 과정 개선",
    "▶ 자세 분석 알고리즘 고도화",
    "▶ 실시간 영상 분석 기능 확장",
    "▶ 위치 기반 골프장 정보 기능 보완",
  ],

  outcome:
    "이미지 기반 자세 분석과 피드백 제공을 통해 사용자가 스스로 자세를 개선할 수 있는 구조를 구현했습니다.",

  links: {
    github: "https://github.com/choisejin12/Hongik_SwingFit",
    url: "https://github.com/choisejin12/Hongik_SwingFit",
  },

  detaildescription: [
    "SwingFit은 골프 스윙 자세를 측정하고 분석하여 피드백을 제공하는 모바일 어플리케이션입니다.",
    "사용자는 자세 이미지를 업로드하고, 분석 결과를 통해 스윙 점수와 문제점을 확인할 수 있습니다.",
    "MediaPipe를 활용해 자세 좌표를 추출하고, 기준 데이터와 비교하여 점수를 계산합니다.",
    "분석 결과는 스켈레톤이 적용된 이미지와 텍스트 피드백 형태로 제공됩니다.",
    "Firebase를 활용하여 사용자 인증 및 데이터 저장을 처리했습니다.",
  ],

  reason: [
    "골프는 코로나 시기에도 인기가 증가하고 산업 규모가 성장하고 있습니다.",
    "하지만 레슨 비용과 접근성 문제로 인해 꾸준한 자세 교정이 어렵다는 점을 확인했습니다.",
    "사용자가 쉽게 접근할 수 있는 어플리케이션을 통해 자세 분석과 피드백을 제공하고자 했습니다.",
    "이를 통해 비용 부담 없이 스윙 실력 향상에 도움을 주는 서비스를 만들고자 했습니다.",
  ],
}



];

export const projectMap = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
