"use client";

import { useRef, useState } from "react";

const EMAIL = "thstjddh8891@gmail.com";

export default function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 API를 못 쓰는 환경(비보안 컨텍스트 등)에선 메일 앱으로 폴백
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={EMAIL}
      className="flex cursor-pointer items-center space-x-2 rounded-lg border border-red-400/30 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 py-2 text-red-400 transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/10"
    >
      {copied ? (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )}
      <span>{copied ? "복사됨 ✓" : "Email"}</span>
    </button>
  );
}
