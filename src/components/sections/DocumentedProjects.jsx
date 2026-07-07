import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  Images,
  MapPin,
  Phone,
  PlayCircle,
  Sparkles,
  UserRoundCheck,
  X,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const mediaBase = `${import.meta.env.BASE_URL}assets/projects/project1`;
const projectAsset = (fileName) => `${mediaBase}/${fileName}`;
const projectMapUrl = "https://www.google.com/maps?q=26.4551567,87.8243033&z=17&hl=en";

const projectImages = {
  before: [
    projectAsset("pre-img1.jpeg"),
    projectAsset("pre-img2.jpeg"),
  ],
  during: [
    projectAsset("d-img1.jpeg"),
    projectAsset("d-img2.jpeg"),
    projectAsset("d-img3.jpeg"),
    projectAsset("d-img4.jpeg"),
    projectAsset("d-img5.jpeg"),
    projectAsset("d-img6.jpeg"),
  ],
  after: [
    projectAsset("l-img1.jpeg"),
    projectAsset("l-img2.jpeg"),
    projectAsset("l-img3.jpeg"),
    projectAsset("l-img4.jpeg"),
  ],
};

const stageOrder = ["before", "during", "after"];

const buildImageMedia = (stage, index, src) => ({
  id: `${stage}-${index + 1}`,
  type: "image",
  stage,
  src,
  label: `${stage}-${index + 1}`,
});

const projectImageMedia = stageOrder.flatMap((stage) =>
  projectImages[stage].map((src, index) => buildImageMedia(stage, index, src))
);

const projectVideos = [
  {
    id: "video-1",
    type: "video",
    stage: "during",
    src: projectAsset("vedio1.mp4"),
    poster: projectImages.during[0] || projectImages.after[0] || projectImages.before[0],
    label: "فيديو التوثيق",
  },
];

const projectMedia = [
  ...projectImageMedia.filter((item) => item.stage === "after"),
  ...projectImageMedia.filter((item) => item.stage === "during"),
  ...projectImageMedia.filter((item) => item.stage === "before"),
  ...projectVideos,
];
const defaultMedia =
  projectImageMedia.find((item) => item.stage === "after") ||
  projectImageMedia.find((item) => item.stage === "during") ||
  projectImageMedia[0] ||
  projectVideos[0];

const content = {
  ar: {
    badge: "مشاريع موثقة بشفافية",
    title: "المشاريع الموثقة",
    description:
      "نؤمن أن الشفافية جزء من الأمانة، لذلك نوثق كل مشروع بالصور والتفاصيل منذ بداية التنفيذ وحتى التسليم، ليبقى الأثر واضحاً ومطمئناً لكل من ساهم في الخير.",
    fieldBadge: "توثيق ميداني",
    mainImageBadge: "الصورة الرئيسية",
    mainVideoBadge: "توثيق مرئي",
    galleryBadge: "معرض المشروع",
    detailsTitle: "تفاصيل المشروع",
    dedicationTitle: "صدقة جارية",
    dedication:
      "بئر ماء صدقة جارية عن عبد الرحمن محمد قعويرة رحمه الله وأسكنه فسيح جناته",
    dedicationText: "سائلين الله تعالى القبول وأن يجعلها صدقة جارية له",
    cta: "مشاهدة صور التوثيق",
    videoCta: "عرض الفيديو",
    close: "إغلاق",
    moreMedia: "وسائط",
    stageLabels: {
      before: "قبل التنفيذ",
      during: "أثناء التنفيذ",
      after: "بعد التنفيذ",
    },
    meta: [
      { label: "نوع المشروع", value: "بئر ماء", Icon: BadgeCheck },
      { label: "موقع المشروع", value: "نيبال", Icon: MapPin, href: projectMapUrl },
      { label: "تاريخ المشروع", value: "28/05/2026", Icon: CalendarDays },
      { label: "التاريخ الهجري", value: "11 ذو الحجة 1447ه", Icon: CalendarDays },
      { label: "الإشراف", value: "أبو عمر غازي", Icon: UserRoundCheck },
      { label: "التواصل", value: "0044-7411-572266", Icon: Phone },
      { label: "الحالة", value: "موثق / مكتمل", Icon: CheckCircle2, success: true },
    ],
    timeline: [
      { stage: "before", title: "قبل التنفيذ", text: "توثيق بداية العمل", Icon: ClipboardCheck },
      { stage: "during", title: "أثناء التنفيذ", text: "توثيق مراحل التنفيذ", Icon: Hammer },
      { stage: "after", title: "بعد التنفيذ", text: "توثيق اكتمال المشروع", Icon: FileCheck2 },
    ],
  },
  en: {
    badge: "Transparently Documented Projects",
    title: "Documented Projects",
    description:
      "We believe transparency is part of trust, so every project is documented with photos and details from implementation to handover.",
    fieldBadge: "Field documentation",
    mainImageBadge: "Main image",
    mainVideoBadge: "Video documentation",
    galleryBadge: "Project gallery",
    detailsTitle: "Project Details",
    dedicationTitle: "Ongoing Charity",
    dedication:
      "A water well as ongoing charity on behalf of Abdul Rahman Muhammad Qaweirah, may Allah have mercy on him and grant him spacious gardens.",
    dedicationText: "We ask Allah to accept it and make it an ongoing charity for him.",
    cta: "View Documentation Photos",
    videoCta: "View Video",
    close: "Close",
    moreMedia: "media",
    stageLabels: {
      before: "Before",
      during: "During",
      after: "After",
    },
    meta: [
      { label: "Project Type", value: "Water well", Icon: BadgeCheck },
      { label: "Project Location", value: "Nepal", Icon: MapPin, href: projectMapUrl },
      { label: "Project Date", value: "28/05/2026", Icon: CalendarDays },
      { label: "Hijri Date", value: "11 Dhu al-Hijjah 1447 AH", Icon: CalendarDays },
      { label: "Supervision", value: "Abu Omar Ghazi", Icon: UserRoundCheck },
      { label: "Contact", value: "0044-7411-572266", Icon: Phone },
      { label: "Status", value: "Documented / Complete", Icon: CheckCircle2, success: true },
    ],
    timeline: [
      { stage: "before", title: "Before", text: "Initial work documentation", Icon: ClipboardCheck },
      { stage: "during", title: "During", text: "Implementation stages documented", Icon: Hammer },
      { stage: "after", title: "After", text: "Completion documented", Icon: FileCheck2 },
    ],
  },
};

function MediaView({ media, labels, className = "" }) {
  if (!media) return null;

  const isVideo = media.type === "video";
  const stageLabel = labels.stageLabels?.[media.stage];

  return (
    <div className={`relative overflow-hidden bg-slate-100 dark:bg-night-navy ${className}`}>
      {isVideo ? (
        <video
          src={media.src}
          poster={media.poster}
          controls
          preload="metadata"
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={media.src}
          alt={media.label}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 sm:p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/55 bg-white/86 px-3 py-1 text-[11px] font-black text-water-blue shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-night-panel/82 dark:text-water-cyan">
          {isVideo ? <PlayCircle size={14} /> : <Images size={14} />}
          {isVideo ? labels.mainVideoBadge : labels.mainImageBadge}
        </span>
        <span className="flex flex-col items-end gap-2">
          {stageLabel ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/55 bg-white/86 px-3 py-1 text-[11px] font-black text-soft-gold shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-night-panel/82">
              <ClipboardCheck size={14} />
              {stageLabel}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/55 bg-white/86 px-3 py-1 text-[11px] font-black text-trust-green shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-night-panel/82 dark:text-emerald-300">
            <BadgeCheck size={14} />
            {labels.fieldBadge}
          </span>
        </span>
      </div>
    </div>
  );
}

function Thumbnail({ media, labels, isActive, onClick, hiddenCount = 0 }) {
  const isVideo = media.type === "video";
  const stageLabel = labels.stageLabels?.[media.stage];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-20 sm:w-28 ${
        isActive
          ? "border-water-blue shadow-lg shadow-water-blue/20 ring-2 ring-water-blue/18 dark:border-water-cyan dark:ring-water-cyan/20"
          : "border-white/80 opacity-82 hover:-translate-y-0.5 hover:border-water-blue/45 hover:opacity-100 dark:border-white/10"
      }`}
      aria-label={media.label}
    >
      {isVideo ? (
        <video
          src={media.src}
          poster={media.poster}
          preload="metadata"
          className="h-full w-full object-cover"
          muted
        />
      ) : (
        <img src={media.src} alt="" className="h-full w-full object-cover" loading="lazy" />
      )}

      <span className="absolute inset-0 bg-gradient-to-t from-ink/42 via-transparent to-transparent opacity-80" />

      {isVideo ? (
        <span className="absolute inset-0 grid place-items-center text-white">
          <PlayCircle size={24} fill="rgba(255,255,255,0.18)" />
        </span>
      ) : null}

      {stageLabel ? (
        <span className="absolute inset-x-1 bottom-1 truncate rounded-full bg-white/88 px-2 py-0.5 text-[10px] font-black text-water-blue backdrop-blur-md dark:bg-night-panel/82 dark:text-water-cyan">
          {stageLabel}
        </span>
      ) : null}

      {hiddenCount > 0 ? (
        <span className="absolute inset-0 grid place-items-center bg-ink/62 text-sm font-black text-white backdrop-blur-[1px]">
          +{hiddenCount} {labels.moreMedia}
        </span>
      ) : null}
    </button>
  );
}

function DocumentationModal({ media, labels, selected, onSelect, onClose }) {
  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] bg-night-navy/72 p-3 backdrop-blur-xl sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        onPointerDown={handleClose}
        onClick={handleClose}
        className="fixed end-4 top-4 z-[90] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-night-navy/72 text-white shadow-xl backdrop-blur-xl transition hover:bg-night-navy/88 sm:end-6 sm:top-6"
        aria-label={labels.close}
      >
        <X size={22} />
      </button>

      <motion.div
        className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-4"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <MediaView
          media={selected}
          labels={labels}
          className="max-h-[72vh] min-h-[18rem] rounded-3xl border border-white/12 shadow-[0_18px_52px_rgba(0,0,0,0.28)]"
        />

        <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/12 bg-white/10 p-2 backdrop-blur-xl">
          {media.map((item) => (
            <Thumbnail
              key={item.id}
              media={item}
              labels={labels}
              isActive={item.id === selected.id}
              onClick={() => onSelect(item)}
            />
          ))}
        </div>

        <button
          type="button"
          onPointerDown={handleClose}
          onClick={handleClose}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-2.5 text-sm font-black text-white shadow-lg backdrop-blur-xl transition hover:bg-white/20"
        >
          <X size={17} />
          {labels.close}
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function DocumentedProjects() {
  const { language } = useLanguage();
  const labels = content[language] || content.ar;
  const [selectedMedia, setSelectedMedia] = useState(defaultMedia);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const mediaCountText =
    language === "ar"
      ? `${projectImageMedia.length} صور${projectVideos.length ? ` + ${projectVideos.length} فيديو` : ""}`
      : `${projectImageMedia.length} photos${projectVideos.length ? ` + ${projectVideos.length} video` : ""}`;

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <section
      id="documented-projects"
      className="relative isolate scroll-mt-28 overflow-hidden py-12 text-[var(--body)] sm:scroll-mt-32 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_44%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#152b42_54%,#0d2f43_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(34,199,221,0.18),transparent)] dark:bg-[linear-gradient(180deg,rgba(34,199,221,0.12),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-[linear-gradient(180deg,transparent,rgba(214,168,79,0.08))] dark:bg-[linear-gradient(180deg,transparent,rgba(214,168,79,0.05))]" />
      </div>

      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-soft-gold/20 bg-white/72 px-4 py-2 text-xs font-black text-soft-gold shadow-lg shadow-soft-gold/8 backdrop-blur-xl dark:border-soft-gold/18 dark:bg-white/8">
            <Sparkles size={15} />
            {labels.badge}
          </div>

          <h2 className="mt-4 text-3xl font-black leading-[1.12] text-[var(--heading)] sm:text-5xl lg:text-6xl">
            {labels.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {labels.description}
          </p>
        </motion.div>

        <motion.article
          className="relative mt-10 overflow-hidden rounded-[1.4rem] border border-white/82 bg-white/76 p-3 shadow-[0_18px_52px_rgba(21,155,215,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-night-panel/64 dark:shadow-black/20 sm:mt-14 sm:rounded-[2rem] sm:p-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-water-blue/[0.075] via-white/40 to-soft-gold/[0.07] dark:from-water-cyan/[0.07] dark:via-white/[0.035] dark:to-soft-gold/[0.04]" />

          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="min-w-0">
              <MediaView
                media={selectedMedia}
                labels={labels}
                className="min-h-[16rem] aspect-[4/3] rounded-[1.15rem] border border-white/82 shadow-[0_16px_38px_rgba(21,155,215,0.1)] dark:border-white/10 sm:aspect-[16/10] sm:min-h-[22rem] lg:aspect-[16/11]"
              />

              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-water-blue/12 bg-water-blue/8 px-3 py-1.5 text-xs font-black text-water-blue dark:border-water-cyan/14 dark:bg-water-cyan/8 dark:text-water-cyan">
                  <Images size={15} />
                  {labels.galleryBadge}
                </span>
                <span className="rounded-full bg-soft-gold/10 px-3 py-1.5 text-xs font-black text-soft-gold">
                  {mediaCountText}
                </span>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {projectMedia.map((item) => (
                  <Thumbnail
                    key={item.id}
                    media={item}
                    labels={labels}
                    isActive={item.id === selectedMedia.id}
                    onClick={() => setSelectedMedia(item)}
                  />
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black text-[var(--heading)] sm:text-2xl">
                  {labels.detailsTitle}
                </h3>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/14 bg-emerald-500/10 px-3 py-1.5 text-xs font-black text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 size={15} />
                  {labels.meta[6].value}
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-soft-gold/18 bg-gradient-to-br from-soft-gold/12 via-white/70 to-water-blue/8 p-4 shadow-lg shadow-soft-gold/8 dark:border-soft-gold/14 dark:from-soft-gold/8 dark:via-white/[0.04] dark:to-water-cyan/7">
                <div className="flex items-center gap-2 text-xs font-black text-soft-gold">
                  <Sparkles size={15} />
                  {labels.dedicationTitle}
                </div>
                <p className="mt-3 text-lg font-black leading-8 text-[var(--heading)] sm:text-xl">
                  {labels.dedication}
                </p>
                <p className="mt-2 text-sm font-bold leading-7 text-[var(--muted)]">
                  {labels.dedicationText}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {labels.meta.map(({ label, value, Icon, success, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-2xl border border-water-blue/8 bg-white/58 p-3 shadow-sm shadow-slate-900/[0.03] dark:border-water-cyan/9 dark:bg-white/[0.045]"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        success
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                          : "bg-water-blue/10 text-water-blue dark:bg-water-cyan/10 dark:text-water-cyan"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-black text-[var(--muted)]">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-0.5 inline-flex items-center gap-1.5 break-words text-sm font-black leading-5 text-water-blue transition hover:text-water-cyan dark:text-water-cyan"
                        >
                          {value}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="mt-0.5 block break-words text-sm font-black leading-5 text-[var(--heading)]">
                          {value}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                {labels.timeline.map(({ stage, title, text, Icon }, index) => {
                  const stagePreview = projectImages[stage]?.[0];
                  const stageImagesCount = projectImages[stage]?.length || 0;

                  return (
                    <div
                      key={stage}
                      className="relative overflow-hidden rounded-2xl border border-water-blue/8 bg-white/52 p-3 dark:border-water-cyan/9 dark:bg-white/[0.04]"
                    >
                      {stagePreview ? (
                        <div className="mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-sky-soft dark:bg-night-navy">
                          <img
                            src={stagePreview}
                            alt={title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-soft-gold/10 text-soft-gold">
                          <Icon size={17} />
                        </span>
                        <span className="text-xs font-black text-[var(--heading)]">
                          {title}
                        </span>
                      </div>
                      <p className="mt-2 text-xs font-bold leading-5 text-[var(--muted)]">
                        {text}
                      </p>
                      <span className="mt-2 inline-flex rounded-full bg-water-blue/8 px-2 py-1 text-[10px] font-black text-water-blue dark:bg-water-cyan/8 dark:text-water-cyan">
                        {language === "ar" ? `${stageImagesCount} صور` : `${stageImagesCount} photos`}
                      </span>
                      <span className="absolute end-3 top-3 rounded-full bg-white/82 px-2 py-1 text-[10px] font-black text-water-blue/55 shadow-sm backdrop-blur-md dark:bg-night-panel/82 dark:text-water-cyan/55">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-water-blue to-water-cyan px-5 py-3 text-sm font-black text-white shadow-xl shadow-water-blue/24 transition hover:-translate-y-0.5 hover:shadow-water-blue/34"
                >
                  <Images size={17} />
                  {labels.cta}
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMedia(projectVideos[0]);
                    setIsGalleryOpen(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-water-blue/16 bg-white/62 px-5 py-3 text-sm font-black text-water-blue shadow-sm transition hover:-translate-y-0.5 hover:border-water-blue/35 dark:border-water-cyan/15 dark:bg-white/6 dark:text-water-cyan"
                >
                  <PlayCircle size={17} />
                  {labels.videoCta}
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </Container>

      <AnimatePresence>
        {isGalleryOpen ? (
          <DocumentationModal
            media={projectMedia}
            labels={labels}
            selected={selectedMedia}
            onSelect={setSelectedMedia}
            onClose={() => setIsGalleryOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
