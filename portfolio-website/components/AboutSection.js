import { aboutTechIcons } from "@/components/about/TechIcons";

export default function AboutSection() {
  return (
    <section id="about" className="p-12 bg-gray-800/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-14 lg:gap-16">
        <div className="order-1 w-full md:order-none md:w-1/2 min-w-0 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <svg
              className="h-8 w-8 shrink-0 text-white/90"
              viewBox="0 0 640 640"
              aria-hidden
              focusable="false"
            >
              <path fill="currentColor" d="M73.4 182.6C60.9 170.1 60.9 149.8 73.4 137.3C85.9 124.8 106.2 124.8 118.7 137.3L278.7 297.3C291.2 309.8 291.2 330.1 278.7 342.6L118.7 502.6C106.2 515.1 85.9 515.1 73.4 502.6C60.9 490.1 60.9 469.8 73.4 457.3L210.7 320L73.4 182.6zM288 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L288 512C270.3 512 256 497.7 256 480C256 462.3 270.3 448 288 448z" />
            </svg>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-xl font-semibold text-white mb-4 leading-snug">Biochemist → Computer Scientist</p>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              I started my academic journey in biochemistry, where research and data analysis sharpened my analytical
              and problem-solving skills. Over time, I was drawn to the computational side of that work—especially using
              code to explore and interpret data. Eventually pivoting to computer science so I could apply the same
              scientific rigor in a more creative, hands-on way.
            </p>
            <p>
              Since then, I&apos;ve enjoyed expanding my skill set: learning about object-oriented design, data
              structures and algorithms, software architecture, and building user interfaces. I&apos;ve also built habits
              around version control, testing, and writing maintainable, well-structured code.
            </p>
            <p>
              I&apos;m motivated by the prospect of building tools and solutions that have real-world impact — whether
              that&apos;s streamlining a process, improving user experience, or solving a problem in a tangible way.
              There&apos;s something really rewarding about turning an idea into a product people actually use and benefit
              from.
            </p>
          </div>
        </div>
        <div className="order-2 w-full md:order-none md:w-1/2 shrink-0 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">Tools &amp; Technologies</h3>
          <ul
            className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-7 max-w-[25rem] sm:max-w-[13rem] md:max-w-[35rem]"
            aria-label="Technologies I work with"
          >
            {aboutTechIcons.map(({ id, name, Icon }) => (
              <li
                key={id}
                className="grid aspect-square min-h-0 min-w-0 box-border p-1"
                aria-label={name}
                title={name}
              >
                <Icon className="block h-full w-full min-h-0 min-w-0" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
