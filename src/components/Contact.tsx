import EmailCopyButton from "@/components/EmailCopyButton";
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
          <EmailCopyButton />
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
