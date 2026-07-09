import { getTranslations } from "next-intl/server";
import { Globe, Smartphone, BrainCircuit, ServerCog } from "lucide-react";

export async function Services() {
  const t = await getTranslations("Services");

  const services = [
    {
      id: "web",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-500",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/20",
      textColor: "text-purple-500",
    },
    {
      id: "ai",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "from-amber-500/20 to-orange-500/20",
      textColor: "text-amber-500",
    },
    {
      id: "automation",
      icon: <ServerCog className="w-8 h-8" />,
      color: "from-emerald-500/20 to-teal-500/20",
      textColor: "text-emerald-500",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-black/[0.02] dark:bg-white/[0.02] border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center justify-end gap-4 text-right">
          {t("title")}
          <span className="w-12 h-1 bg-accent rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-background border border-border overflow-hidden hover:border-accent/50 transition-colors duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 p-4 inline-flex rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-sm ${service.textColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t(`${service.id}.title` as any)}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed mt-auto">
                  {t(`${service.id}.desc` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
