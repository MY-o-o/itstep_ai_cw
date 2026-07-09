import { getTranslations } from "next-intl/server";
import { Mail, Send as TelegramIcon, Link } from "lucide-react";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section id="contact" className="py-24 relative bg-black dark:bg-white text-white dark:text-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8">
          {t("title")}
        </h2>
        <p className="text-xl md:text-2xl font-sans font-light opacity-80 mb-16 max-w-2xl mx-auto">
          Ready to build something extraordinary? Let's discuss your next project.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:contact@my.dev"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 backdrop-blur-md rounded-full transition-colors border border-white/10 dark:border-black/10"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">{t("email")}</span>
          </a>
          
          <a
            href="https://t.me/my_dev"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
          >
            <TelegramIcon className="w-5 h-5" />
            <span className="font-medium">{t("telegram")}</span>
          </a>

          <a
            href="https://linkedin.com/in/my-dev"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full transition-colors"
          >
            <Link className="w-5 h-5" />
            <span className="font-medium">{t("linkedin")}</span>
          </a>
        </div>
      </div>
      
      <div className="mt-32 text-center text-sm opacity-50 font-mono relative z-10">
        © {new Date().getFullYear()} MY.DEV. All rights reserved.
      </div>
    </section>
  );
}
