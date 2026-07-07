export const whatsappDefaultMessage =
  "مرحبا نداء الرحمة، أود أن أكون أحد المتبرعين في حفر بئر لإغاثة المحتاجين كصدقة جارية. يرجى تزويدي بالتفاصيل.";

const whatsappBaseUrl = "https://wa.me/447411572266";

export function createWhatsappUrl(message = whatsappDefaultMessage) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
