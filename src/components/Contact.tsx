import GitHubIcon from "@/components/GitHubIcon";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-gray-800/50 py-16">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h3 className="bg-gradient-to-r from-[#ff6b6b] to-[#ffb400] bg-clip-text text-2xl font-bold text-transparent">
          Let&apos;s Build Something Amazing Together
        </h3>
        <p className="mt-3 text-gray-400">
          새로운 프로젝트나 협업 기회가 있다면 언제든 연락해 주세요.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:thstjddh8891@gmail.com"
            className="flex items-center space-x-2 rounded-lg border border-red-400/30 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 py-2 text-red-400 transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/10"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>thstjddh8891@gmail.com</span>
          </a>
          <a
            href="https://github.com/Sonseongoh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg border border-gray-600/30 bg-gradient-to-r from-gray-700/50 to-gray-600/50 px-4 py-2 text-gray-300 transition-all duration-300 hover:border-gray-400/60 hover:bg-gray-600/20"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
