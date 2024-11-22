interface Notice {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  cover_image_url: string;
  created_at: string;
}

async function exportNoticeFromMarkdown(
  slug: string,
  category: string,
  coverImageURL: string,
  createdAt: string,
) {
  const markdownContent = await Deno.readTextFile(Deno.cwd() + "/notices/" + slug + ".md");
  const lines = markdownContent.split("\n");
  let title = "";
  let subtitle = "";
  let contentStart = 0;

  for (let i = 0; i < lines.length; i++) {
    if (!title && lines[i].startsWith("# ")) {
      title = lines[i].replace("# ", "").trim();
      contentStart = i + 1;
      continue;
    }
    if (!subtitle && lines[i].startsWith("## ")) {
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
    cover_image_url: coverImageURL,
    created_at: createdAt,
  };
}

export const notices: Notice[] = await Promise.all(
  [{
    slug: "introducing-gaia-protocol",
    category: "announcement",
    coverImageURL: "https://common-resources.gaia.cc/covers/gaiaprotocol.jpg",
    createdAt: "2024-11-22",
  }].map((data) =>
    exportNoticeFromMarkdown(
      data.slug,
      data.category,
      data.coverImageURL,
      data.createdAt,
    )
  ),
);
