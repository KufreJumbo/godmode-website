import { whatsappHref } from "@/lib/site";
import { WhatsApp } from "./ui/Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:pr-5 md:bottom-7 md:right-7"
    >
      <WhatsApp size={26} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[160px] group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
