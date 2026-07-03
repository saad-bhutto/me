import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 pb-14">
      <div className="rule mb-8" />
      <div className="flex flex-col items-center gap-3 text-sm text-muted md:flex-row md:justify-between">
        <span>
          Saad Bhutto — {contact.location} · © {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-text">
            Email
          </a>
          <a
            href={contact.linkedin}
            className="transition-colors hover:text-text"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
