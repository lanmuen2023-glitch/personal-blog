---
title: "欢迎来到我的博客"
description: "这是我的第一篇博客文章，记录建站的过程和心得。"
pubDate: 2026-05-06
tags: ["博客", "日常"]
category: "生活"
draft: false
ogImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop"
---

![写作工作台](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=500&fit=crop)

## 关于这个博客

这个博客是用 **Astro** 搭建的，部署在 **Vercel** 上，完全免费。

### 功能特点

- 用 Markdown 写文章，简单方便
- 支持标签和分类，方便整理
- 暗色模式，夜间阅读不伤眼
- RSS 订阅，第一时间收到更新
- 评论系统，欢迎留言交流

### 写文章的方法

在 `src/content/blog/` 目录下新建 `.md` 文件，像这样开头：

```markdown
---
title: "文章标题"
description: "简短描述"
pubDate: 2026-05-06
tags: ["标签1", "标签2"]
draft: false
---

正文内容写在这里...
```

写好之后 push 到 GitHub，Vercel 就会自动部署更新。
