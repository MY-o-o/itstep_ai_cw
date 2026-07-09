"use client";

import { useChat } from "@ai-sdk/react";
import { useTranslations } from "next-intl";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { useState } from "react";

export function Chat() {
  const t = useTranslations("Chat");
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const isLoading = status === "submitted" || status === "streaming";

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ parts: [{ type: "text", text: input }] });
    setInput("");
  };

  return (
    <section id="chat" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-2xl mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Experience my AI integration skills firsthand. Ask anything about my background, tech stack, or availability.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl shadow-accent/5">
          <div className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth bg-black/[0.02] dark:bg-white/[0.02]">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 space-y-4">
                <Bot className="w-12 h-12" />
                <p>{t("placeholder")}</p>
              </div>
            )}
            
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-4 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                    <Bot className="w-5 h-5" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    m.role === "user"
                      ? "bg-accent text-white rounded-tr-sm"
                      : "bg-background border border-border rounded-tl-sm shadow-sm"
                  }`}
                >
                  <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap">
                    {m.parts
                      ? m.parts.filter((p: any) => p.type === "text").map((p: any) => p.text).join("")
                      : (m as any).content ?? ""}
                  </p>
                </div>

                {m.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-background border border-border p-4 rounded-2xl rounded-tl-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-background border-t border-border">
            <form onSubmit={handleChatSubmit} className="relative flex items-center">
              <input
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-accent/50 outline-none rounded-xl py-4 pl-6 pr-14 transition-all duration-300 placeholder:text-muted-foreground/70"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input?.trim()}
                className="absolute right-2 p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={t("send")}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
