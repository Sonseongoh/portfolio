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
            href="mailto:vox38317@gmail.com"
            className="flex items-center space-x-2 rounded-lg border border-red-400/30 bg-gradient-to-r from-red-500/20 to-orange-500/20 px-4 py-2 text-red-400 transition-all duration-300 hover:border-red-400/60 hover:bg-red-500/10"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Sonseongoh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-lg border border-gray-600/30 bg-gradient-to-r from-gray-700/50 to-gray-600/50 px-4 py-2 text-gray-300 transition-all duration-300 hover:border-gray-400/60 hover:bg-gray-600/20"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.504-.337c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
