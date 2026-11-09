export type TechGroup = {
  label: string;
  items: string[];
};

/** Technologies — from the CV, grouped for the about page */
export const techStack: TechGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "C++", "Python", "SQL", "Bash"],
  },
  {
    label: "Web",
    items: ["Next.js", "Remix", "React", "Tailwind CSS", "REST APIs", "Auth"],
  },
  {
    label: "Infrastructure",
    items: ["Cloudflare Workers", "Workers AI", "D1 · R2 · KV", "Azure IoT", "XAMPP"],
  },
  {
    label: "Security",
    items: ["Nmap", "Metasploit", "Wireshark", "Burp Suite"],
  },
  {
    label: "Tooling",
    items: ["Git", "Linux", "LaTeX", "Raspberry Pi"],
  },
];
