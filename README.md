---

## 🚀 نشر المشروع على Vercel

1. قم بتحميل [GitHub CLI](https://cli.github.com)
2. افتح الطرفية في مجلد المشروع وشغل:

```bash
gh auth login
gh repo create freelance-spa --public --source=. --push
```

3. توجه إلى [https://vercel.com/new](https://vercel.com/new)
4. اختر المستودع `freelance-spa`
5. اضغط Deploy

📍 إعدادات Vercel:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`