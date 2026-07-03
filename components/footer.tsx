import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-6 py-16 text-sm text-muted md:flex-row md:justify-between">
      <span>Saad Bhutto — {contact.location}</span>
      <a href={contact.linkedin} className="hover:text-text" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}
