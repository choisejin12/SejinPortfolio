
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { Chip } from "@/components/common/chip";
import { FadeUp } from "@/components/motion/fade-up";
import { ProjectDetailBlock } from "@/components/projects/project-detail-block";
import {
  ProjectShowcaseSlider,
  type ShowcaseItem,
} from "@/components/projects/project-showcase-slider";
import { SkillIconGrid } from "@/components/skills/skill-icon-grid";
import { projectMap } from "@/lib/data";

const projectPageShowcases: Record<string, readonly ShowcaseItem[]> = {
  invenqr: [
    {
      title: "대시보드",
      image: "/project-previews/invenqr-dashboard.png",
      description: "재고 현황과 최근 흐름을 빠르게 확인하는 첫 화면입니다.",
      features: [
        "재고 상태 요약 카드",
        "최근 입출고 흐름 시각화",
        "관리자가 먼저 봐야 할 지표를 상단에 배치",
      ],
    },
    {
      title: "관리자 상품 확인 및 거절",
      image: "/project-previews/invenqr-productrequest.png",
      description:
        "상품 등록 요청을 검토하고 승인 또는 거절을 통해 데이터 정합성을 유지하는 관리자 기능입니다.",
      features: [
        "상품 등록 요청 목록 조회",
        "요청 상세 정보 확인 및 검토",
        "승인 시 상품 자동 등록 및 초기 재고 반영",
        "거절 사유 기록 및 상태 관리",
      ],
    },
    {
      title: "QR 스캔",
      image: "/project-previews/invenqr-qr.png",
      description:
        "QR 코드를 통해 상품을 빠르게 식별하고 재고 처리 흐름으로 연결하는 기능입니다.",
      features: [
        "모바일 환경을 고려한 간결한 스캔 인터페이스",
        "스캔 후 상품 상세 및 입출고 처리로 즉시 연결",
        "현장 작업 속도를 고려한 최소 입력 구조",
      ],
    },
    {
      title: "전체 상품 조회",
      image: "/project-previews/invenqr-allproduct.png",
      description:
        "등록된 전체 상품을 조회하고 재고 상태를 관리할 수 있는 화면입니다.",
      features: [
        "상품명, 코드 기반 검색 및 필터 기능",
        "재고 수량 및 위치 정보 확인",
        "최근 입출고 기록 데이터 확인",
      ],
    },
    {
      title: "상품 상세",
      image: "/project-previews/invenqr-detailproduct.png",
      description:
        "개별 상품의 상세 정보와 재고 상태를 확인할 수 있는 화면입니다.",
      features: [
        "상품 기본 정보 및 현재 재고 상태 확인",
        "입출고 이력 조회를 통한 데이터 흐름 파악",
        "QR 코드 생성 및 연계 기능 제공",
      ],
    },
    {
      title: "CSV 다운로드",
      image: "/project-previews/invenqr-csv.png",
      description:
        "상품 및 재고 데이터를 CSV 파일로 추출해 외부에서 활용할 수 있는 기능입니다.",
      features: [
        "상품 및 입출고 데이터 CSV 파일 생성",
        "보고 및 정산을 위한 데이터 추출 지원",
        "다운로드 이력 로그를 통한 기록 관리",
      ],
    },
    {
      title: "재고 목록",
      image: "/project-previews/invenqr-inventory.png",
      description:
        "상품별 재고 상태와 수량을 한 번에 확인할 수 있는 목록 화면입니다.",
      features: [
        "상품 검색 및 조건별 필터 기능 제공",
        "재고 수량과 위치 정보 동시 확인",
        "빠른 상태 파악을 위한 리스트 중심 UI",
      ],
    },
  ],
  teamflow: [
    {
      title: "대시보드",
      image: "/project-previews/teamflow-dashboard.png",
      description: "사용자가 속한 팀 목록과 개인 Task 통계를 확인할 수 있는 화면입니다.",
      features: [
        "사용자가 속한 팀 목록 조회",
        "개인 Task 통계 확인",
      ],
    },
    {
      title: "팀 상세",
      image: "/project-previews/teamflow-team.png",
      description: "팀 멤버와 Task를 관리하고 협업을 진행하는 메인 화면입니다.",
      features: [
        "팀 멤버 목록 확인",
        "초대코드 생성",
        "팀 내 Task 관리",
      ],
    },
    {
      title: "캘린더",
      image: "/project-previews/teamflow-calandar.png",
      description: "Task의 마감일을 기준으로 일정을 한눈에 확인할 수 있는 화면입니다.",
      features: [
        "Task dueDate 기반 캘린더 시각화",
        "전체 Task 일정 확인",
      ],
    },
    {
      title: "관리자 페이지",
      image: "/project-previews/teamflow-admin.png",
      description: "전체 팀과 공지사항을 관리할 수 있는 관리자 전용 화면입니다.",
      features: [
        "전체 팀 관리",
        "공지사항 관리",
      ],
    },
    {
      title: "로그인 / 회원가입",
      image: "/project-previews/teamflow-login.png",
      description: "사용자 인증을 위한 로그인 및 회원가입 화면입니다.",
      features: [
        "JWT 기반 로그인 처리",
        "회원가입 및 사용자 생성",
      ],
    },
    {
      title: "팀 생성 및 가입",
      image: "/project-previews/teamflow-join.png",
      description: "팀을 생성하거나 초대코드를 통해 팀에 참여할 수 있는 기능입니다.",
      features: [
        "팀 생성 기능",
        "초대코드를 통한 팀 가입",
      ],
    },
  ],

  swingfit: [
    {
      title: "로그인 및 회원가입",
      image: "/project-previews/swingfit-login.png",
      description: "회원가입 및 로그인 (Authentication)을 할 수 있는 화면입니다.",
      features: [
        "이메일 기반 회원가입 및 로그인",
        "Firebase Authentication을 활용한 사용자 인증",
        "로그인 상태 유지 및 인증 처리",
      ],
    },
    {
      title: "홈 및 마이페이지",
      image: "/project-previews/swingfit-home.png",
      description: "사용자 프로필 정보와 스윙 기록을 확인하고, 주요 기능으로 이동할 수 있는 마이페이지 화면입니다.",
      features: [
        "사용자 프로필 정보 조회 및 수정",
        "프로필 이미지 변경 및 소개글 관리",
        "스윙 기록(평균 점수 / 최고 점수 / 최근 결과) 확인",
        "주요 기능(자세 분석, 게시판)으로 이동하는 네비게이션",
      ],
    },

    {
      title: "주변 골프장 위치",
      image: "/project-previews/swingfit-map.png",
      description: "MapView를 기반으로 현재 위치와 주변 정보를 마커로 확인할 수 있는 지도 화면입니다.",
      features: [
        "MapView를 이용한 지도 화면 표시",
        "현재 위치 기반 지도 이동",
        "주변 골프장 위치를 마커로 표시",
      ],
    },
    {
      title: "사용자 게시판",
      image: "/project-previews/swingfit-board.png",
      description:"게시글과 댓글을 작성하고 조회할 수 있으며, 페이지네이션을 통해 목록을 관리하는 게시판 화면입니다.",
      features: [
        "게시글 등록 / 조회 / 삭제",
        "댓글 작성 및 조회",
        "페이지네이션 처리",
      ],
    },
    {
      title: "자세 분석 기능",
      image: "/project-previews/swingfit-golf.png",
      description: "이미지를 업로드하여 자세를 분석하고, 스켈레톤 이미지와 점수 및 피드백을 확인할 수 있는 결과 화면입니다.",
      features: [
        "이미지 업로드 기능",
        "자세 분석 결과(JSON) 수신 및 처리",
        "스켈레톤 이미지 및 점수/피드백 시각화",
      ],
    }
  ],
} as const;

export function generateStaticParams() {
  return Object.keys(projectMap).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectMap[slug];

  if (!project) {
    notFound();
  }



  return (
    <>
      <main className="section-gap">
        <div className="container-shell">
          <FadeUp>
            <Link
              href="/#projects"
              className="text-sm font-semibold text-[color:var(--primary)]"
            >
              ← 프로젝트 목록으로
            </Link>
          </FadeUp>

          <FadeUp className="mt-8 p-8 text-center md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              {project.period}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted-foreground)]">
              {project.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {project.techStack.map((stack, index) => (
                <Chip key={stack} label={stack} strong={index === 0} />
              ))}
            </div>
          </FadeUp>

              {/*이부분 */}
          <FadeUp className="flex flex-row  justify-center gap-5" delay={0.3}>
            <div className="flex flex-col items-center">

              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-11 h-11 group transition duration-200 ease-out
                            group-hover:scale-110 group-hover:-translate-y-1
                            active:scale-95"
                >
                  <img
                    src="https://cdn.simpleicons.org/git/000000"
                    className="absolute inset-0 w-full h-full object-contain transition duration-300"
                  />
                  
                  <img
                    src="https://cdn.simpleicons.org/git/4E7BD4"
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </Link>
              )}

              <p className="text-[12px] mt-1">
                깃허브 바로가기
              </p>

            </div>

            <div className="flex flex-col items-center">

              {project.links.url && (
                <Link
                  href={project.links.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-11 h-11 group transition duration-200 ease-out
                            group-hover:scale-110 group-hover:-translate-y-1
                            active:scale-95"
                >
                  <img
                    src="https://cdn.simpleicons.org/pagespeedinsights/000000"
                    className="absolute inset-0 w-full h-full object-contain transition duration-300"
                  />
                  
                  <img
                    src="https://cdn.simpleicons.org/pagespeedinsights/6DA561"
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </Link>
              )}
              {project.links.url?.toLowerCase().includes("github") ? (
                <p className="text-[12px] mt-1">
                  시현 영상보기
                </p>

              ):(
                <p className="text-[12px] mt-1">
                  해당 페이지 바로가기
                </p>
              )}
            </div>            
          </FadeUp>

          <div className="mt-10 grid gap-6">
            <FadeUp>
              <ProjectDetailBlock title="📖 프로젝트 개요">
                {project.detaildescription.map((item) => (
                  <p className="text-[13px] md:text-[15px]"key={item}>{item}</p>
                ))}
              </ProjectDetailBlock>
            </FadeUp>

            <FadeUp>
              <ProjectDetailBlock title="🎯 왜 만들었는가?">
                {project.reason.map((item) => (
                  <p className="text-[13px] md:text-[15px]" key={item}>{item}</p>
                ))}
              </ProjectDetailBlock>
            </FadeUp>





            <FadeUp delay={0.2}>
              <div className="p-5">
                <p className="mb-7 text-xl font-semibold text-center tracking-tight text-[color:var(--foreground)] md:text-2xl">🛠 개발 스킬</p>
                <SkillIconGrid className="bg-none" items={project.fronttechStack} />
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
                <SkillIconGrid className="mt-5 bg-none" items={project.backtechStack} />
              </div>

              
            </FadeUp>

            <FadeUp delay={0.04}>
              <ProjectDetailBlock title="📸 페이지별 주요 화면">
                <ProjectShowcaseSlider
                  projectTitle={project.title}
                  items={projectPageShowcases[slug as keyof typeof projectPageShowcases] ?? []}
                />
              </ProjectDetailBlock>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ProjectDetailBlock title="💡 구현 포인트" >
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm md:text-base"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </ProjectDetailBlock>
            </FadeUp>

            <FadeUp delay={0.25}>
              <ProjectDetailBlock title="🗃️ 향후 개선">
                <ul className="space-y-3">
                  {project.architecture.map((item) => (
                    <li
                      key={item}
                      className=" px-3 py-2 text-sm md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </ProjectDetailBlock>
            </FadeUp>


          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
