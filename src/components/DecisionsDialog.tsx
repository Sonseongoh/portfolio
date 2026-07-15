"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function DecisionsDialog({
  project,
  initials,
}: {
  project: Project;
  initials: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="mt-4 cursor-pointer self-start text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
      >
        주요 의사결정 기록 {project.highlights.length}건
        <span className="ml-1 inline-block">›</span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[85vh] w-[min(42rem,calc(100vw-2rem))] rounded-3xl border border-gray-700/50 bg-transparent p-0 text-gray-300 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex max-h-[85vh] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black">
          <div className="relative shrink-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 p-6 sm:p-8">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="닫기"
              className="absolute right-6 top-6 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600/50 bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:border-red-400/50 hover:bg-red-500/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-4 pr-14">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md sm:h-14 sm:w-14 sm:rounded-2xl">
                <span className="text-sm font-black text-cyan-400 sm:text-base">{initials}</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white sm:text-2xl">{project.name}</h3>
                <p className="mt-1 text-sm text-gray-400">주요 의사결정 기록</p>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto p-6 sm:p-8">
            <ul className="space-y-6 border-l-2 border-cyan-500/30 pl-4 sm:pl-5">
              {project.highlights.map((highlight) => (
                <li key={highlight.title}>
                  <p className="font-bold text-white">{highlight.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                    {highlight.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </>
  );
}
