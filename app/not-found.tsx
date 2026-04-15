import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl rounded-[32px] border border-[color:var(--border)] bg-white p-10 text-center shadow-[var(--shadow)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
          요청한 프로젝트 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
