interface Notice {
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
  content: string;
  coverImageURL: string;
  coverVideoURL?: string;
  created_at: string;
}

async function exportNoticeFromMarkdown(
  slug: string,
  category: string,
  coverImageURL: string,
  coverVideoURL: string | undefined,
  createdAt: string,
) {
  const markdownContent = await Deno.readTextFile(
    Deno.cwd() + "/notices/" + slug + ".md",
  );
  const lines = markdownContent.split("\n");
  let title = "";
  let subtitle;
  let contentStart = 0;

  for (let i = 0; i < lines.length; i++) {
    if (!title && lines[i].startsWith("# ")) {
      title = lines[i].replace("# ", "").trim();
      contentStart = i + 1;
      continue;
    }
    if (!subtitle && i === 2 && lines[i].startsWith("## ")) {
      subtitle = lines[i].replace("## ", "").trim();
      contentStart = i + 1;
      break;
    }
  }

  const content = lines.slice(contentStart).join("\n").trim();

  return {
    slug,
    category,
    title,
    subtitle,
    content,
    coverImageURL,
    coverVideoURL,
    created_at: createdAt,
  };
}

export const notices: Notice[] = await Promise.all(
  [{
    slug: "dashboard-launch",
    category: "announcement",
    coverImageURL: "https://gaiaprotocol.com/notice-covers/dashboard.png",
    createdAt: "2025-04-08",
  }, {
    slug: "introducing-gaia-names",
    category: "announcement",
    coverImageURL: "https://common-resources.gaia.cc/covers/gaia-names.png",
    createdAt: "2025-01-21",
  }, {
    slug: "introducing-the-gods-nft",
    category: "announcement",
    coverImageURL: "https://common-resources.gaia.cc/covers/thegods.jpg",
    coverVideoURL: "https://common-resources.gaia.cc/covers/thegods.mp4",
    createdAt: "2024-11-27",
  }, {
    slug: "introducing-gaia-protocol",
    category: "announcement",
    coverImageURL: "https://common-resources.gaia.cc/covers/gaiaprotocol.jpg",
    createdAt: "2024-11-22",
  }].map((data) =>
    exportNoticeFromMarkdown(
      data.slug,
      data.category,
      data.coverImageURL,
      data.coverVideoURL,
      data.createdAt,
    )
  ),
);
