import SectionHeading from "../components/SectionHeading";
import SocialLink from "../components/SocialLink";
import {
  Instagram,
  Phone,
  Linkedin,
  Facebook,
  Github,
  Mail,
} from "lucide-react";
import { CONTACT } from "../data/siteData";

export default function Contact({ t }) {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
      <SectionHeading id="contacto">{t.sections.contact}</SectionHeading>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <SocialLink
          href={CONTACT.email}
          label={t.labels.email || "Email"}
          icon={Mail}
        />
        <SocialLink href={CONTACT.whatsapp} label="WhatsApp" icon={Phone} />
        <SocialLink
          href={CONTACT.instagram}
          label="Instagram"
          icon={Instagram}
        />
        <SocialLink href={CONTACT.linkedin} label="Linkedin" icon={Linkedin} />
        <SocialLink href={CONTACT.github} label="Github" icon={Github} />
      </div>
    </section>
  );
}
