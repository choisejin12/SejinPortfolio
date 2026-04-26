"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillIconMap: Record<string, string> = {
  React: "https://skillicons.dev/icons?i=react",
  Redux: "https://skillicons.dev/icons?i=redux",
  "React-Query": "https://skillicons.dev/icons?i=react",
  "Next.js": "https://skillicons.dev/icons?i=nextjs",
  TypeScript: "https://skillicons.dev/icons?i=ts",
  JavaScript: "https://skillicons.dev/icons?i=js",
  "Tailwind CSS": "https://skillicons.dev/icons?i=tailwind",
  HTML5: "https://skillicons.dev/icons?i=html",
  CSS3: "https://skillicons.dev/icons?i=css",
  "Node.js": "https://skillicons.dev/icons?i=nodejs",
  "Mongoose": "https://cdn.simpleicons.org/mongodb/000000",
  Express: "https://skillicons.dev/icons?i=express",
  MySQL: "https://skillicons.dev/icons?i=mysql",
  MongoDB: "https://skillicons.dev/icons?i=mongodb",
  Prisma: "https://skillicons.dev/icons?i=prisma",
  Firebase: "https://skillicons.dev/icons?i=firebase",
  Vercel: "https://skillicons.dev/icons?i=vercel",
  Render: "https://cdn.simpleicons.org/render/ef4f9a",
  Railway: "https://cdn.simpleicons.org/railway/000000",
  "Railway ": "https://cdn.simpleicons.org/railway/000000",
  Git: "https://skillicons.dev/icons?i=git",
  GitHub: "https://skillicons.dev/icons?i=github",
  Postman: "https://skillicons.dev/icons?i=postman",
  Figma: "https://skillicons.dev/icons?i=figma",
  Notion: "https://skillicons.dev/icons?i=notion",
  "Framer Motion": "https://cdn.simpleicons.org/framer/ef4f9a",
  "React Query" : "https://cdn.simpleicons.org/reactquery/000000",
  "Redux Toolkit" : "https://cdn.simpleicons.org/redux/1C62C0",
  "Vite" : "https://skillicons.dev/icons?i=vite",
  "React Router" : "https://cdn.simpleicons.org/reactrouter/000000",
  "Recharts" : "https://cdn.simpleicons.org/react/6DA561",
  "html5-qrcode" : "https://cdn.simpleicons.org/react/F5C652",
  "React Toastify" : "https://cdn.simpleicons.org/react/3674CE",
  "Axios" : "https://cdn.simpleicons.org/axios/000000",
  "JWT" : "https://cdn.simpleicons.org/jsonwebtokens/3674CE",
  "bcryptjs" : "https://cdn.simpleicons.org/cryptpad/000000",
  "json2csv" : "https://cdn.simpleicons.org/svg/000000",
  "React Native" : "https://cdn.simpleicons.org/react/3674CE",
  "Expo" : "https://cdn.simpleicons.org/expo/3674CE",
  "JIRA" : "https://cdn.simpleicons.org/jira/3674CE",
};

export function SkillIconGrid({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,241,230,0.72))] px-5 py-8",
        className,
      )}
    >
      <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-[rgba(255,216,87,0.14)] blur-3xl" />
      <div className="absolute right-8 top-10 h-28 w-28 rounded-full bg-[rgba(89,115,70,0.1)] blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-[rgba(74,144,226,0.1)] blur-3xl" />

      <div className="relative grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            initial={{ opacity: 0, scale: 0.92, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group flex w-full max-w-[110px] flex-col items-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white shadow-[0_14px_34px_rgba(24,32,18,0.1)] ring-1 ring-[rgba(89,115,70,0.08)] transition group-hover:shadow-[0_18px_40px_rgba(24,32,18,0.14)]">
              {skillIconMap[item] ? (
                <img src={skillIconMap[item]} alt={item} className="h-11 w-11 object-contain" />
              ) : (
                <span className="text-sm font-semibold text-[color:var(--primary)]">
                  {item.slice(0, 2)}
                </span>
              )}
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[color:var(--foreground)]">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
