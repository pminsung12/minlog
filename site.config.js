const CONFIG = {
  // profile setting (required)
  profile: {
    name: "MinLog",
    image: "/avatar.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "My Library of Knowledge",
    email: "pminsung12@gmail.com",
    linkedin: "pminsung12",
    github: "pminsung12",
    instagram: "",
  },
  projects: [
    {
      name: `OpenList`,
      href: "https://github.com/boostcampwm2023/iOS10-OpenList",
    },
  ],
  // blog setting (required)
  blog: {
    title: "MinLog",
    description: "Welcome To MinLog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://www.giant-minsung.tech",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },

  giscus: {
    enable: true,
      config: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "username/repo",
        repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "repo-id",
        category: "Q&A",
        categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "category-id",
        mapping: "og:title",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "top",
        lang: "ko",
        crossorigin: "anonymous",
    },
},
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
