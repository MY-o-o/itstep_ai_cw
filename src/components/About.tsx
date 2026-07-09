import { getTranslations } from "next-intl/server";
import { Code2, GitBranch, Star, Users } from "lucide-react";

async function getGithubStats() {
  try {
    const res = await fetch("https://api.github.com/users/MY-o-o", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats", error);
    return null;
  }
}

export async function About() {
  const t = await getTranslations("About");
  const stats = await getGithubStats();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-foreground/80 font-sans font-light leading-relaxed">
            <p>
              I specialize in bridging the gap between design and engineering, creating highly polished, performant web applications with a focus on modern aesthetics and user experience.
            </p>
            <p>
              With deep expertise in React ecosystems (Next.js, React Native) and backend architectures (NestJS), I build end-to-end solutions that scale. Recently, I've been heavily involved in integrating AI capabilities into robust enterprise applications.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-bold font-display mb-4">{t("technologies")}</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React Native", "NestJS", "TypeScript", "Tailwind CSS", "AI / LLMs", "Node.js"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono font-medium border border-accent/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card border border-border p-8 rounded-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-display font-bold">{stats?.public_repos || "30+"}</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Repositories</div>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-display font-bold">{stats?.followers || "10+"}</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Followers</div>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-display font-bold">Top</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Quality Code</div>
                </div>

                <div className="space-y-2">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-display font-bold">100+</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
