import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiCloudflare,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiGraphql,
  SiGooglebigquery,
  SiAnthropic,
  SiAlgolia,
  SiSupabase,
  SiFirebase,
  SiDatadog,
  SiStorybook,
  SiCypress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type Tech = { name: string; Icon: IconType };

// Curated from the resume — languages, frameworks, cloud/devops, data, AI & services.
const TECHS: Tech[] = [
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "PHP", Icon: SiPhp },
  { name: "Laravel", Icon: SiLaravel },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "AWS", Icon: FaAws },
  { name: "Cloudflare", Icon: SiCloudflare },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Docker", Icon: SiDocker },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "GitLab", Icon: SiGitlab },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MySQL", Icon: SiMysql },
  { name: "Redis", Icon: SiRedis },
  { name: "Elasticsearch", Icon: SiElasticsearch },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "BigQuery", Icon: SiGooglebigquery },
  { name: "Anthropic Claude", Icon: SiAnthropic },
  { name: "Algolia", Icon: SiAlgolia },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Datadog", Icon: SiDatadog },
  { name: "Storybook", Icon: SiStorybook },
  { name: "Cypress", Icon: SiCypress },
];

function TechItem({ name, Icon }: Tech) {
  return (
    <span className="group/item flex shrink-0 items-center gap-2.5 text-muted transition-colors duration-200 hover:text-text">
      <Icon className="h-5 w-5" aria-hidden />
      <span className="text-sm whitespace-nowrap">{name}</span>
    </span>
  );
}

export function TechStrip() {
  return (
    <section aria-label="Technologies I work with" className="border-y border-hair py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-8 flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          The stack I&apos;ve shipped with
        </p>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-x-10 px-5">
          {TECHS.map((t) => (
            <TechItem key={t.name} {...t} />
          ))}
          {/* Seamless-loop duplicate, hidden from assistive tech + reduced-motion. */}
          <div className="marquee-dupe flex items-center gap-x-10" aria-hidden>
            {TECHS.map((t) => (
              <TechItem key={`dup-${t.name}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
