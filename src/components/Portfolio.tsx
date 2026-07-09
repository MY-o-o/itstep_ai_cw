import { getTranslations } from "next-intl/server";
import { ArrowUpRight, GitPullRequest, Star } from "lucide-react";

async function getRepos() {
  try {
    const res = await fetch(
      "https://api.github.com/users/MY-o-o/repos?sort=updated&per_page=6",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}

export async function Portfolio() {
  const t = await getTranslations("Portfolio");
  const repos = await getRepos();

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo: any) => (
            <div
              key={repo.id}
              className="group relative flex flex-col h-full bg-card rounded-3xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 text-accent rounded-xl">
                  <GitPullRequest className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-4">
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-sm font-mono text-muted-foreground">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                {repo.name}
              </h3>
              
              <p className="text-muted-foreground font-sans line-clamp-3 mb-6 flex-grow">
                {repo.description || "No description provided."}
              </p>

              <div className="flex items-center gap-3 mt-auto">
                {repo.language && (
                  <span className="text-xs font-mono px-3 py-1 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10">
                    {repo.language}
                  </span>
                )}
                <span className="text-xs font-mono px-3 py-1 bg-foreground/5 text-foreground/70 rounded-full border border-foreground/10 flex items-center gap-1">
                  Updated <span className="font-semibold">{new Date(repo.updated_at).toLocaleDateString()}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
