---
title: "Ngoding Pakai Claude Code dan AI Blueprint: Akhirnya AI yang Nggak Ngaco"
date: 2026-09-02 10:00:00 +0700
permalink: /blog/coding-dengan-claude-code-dan-ai-blueprint/
published: true
tags: [Development, AI, Claude Code, Workflow, Tools]
excerpt: "Gimana caranya bikin Claude Code jadi reliable bikin fitur dari awal sampai selesai tanpa hallucinate di tengah jalan. Jawabannya: AI Blueprint."
---

# Ngoding Pakai Claude Code dan AI Blueprint: Akhirnya AI yang Nggak Ngaco

<figure style="margin: 2rem 0; text-align: center;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" style="width:100%;max-width:800px;height:auto;border-radius:8px;background:#0d1117" role="img" aria-label="Claude Code + AI Blueprint workflow illustration">
    <defs>
      <linearGradient id="bg_i" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0d1117"/>
        <stop offset="100%" style="stop-color:#1a2333"/>
      </linearGradient>
      <linearGradient id="accent1_i" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#58a6ff"/>
        <stop offset="100%" style="stop-color:#8250df"/>
      </linearGradient>
      <linearGradient id="accent2_i" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3fb950"/>
        <stop offset="100%" style="stop-color:#56d364"/>
      </linearGradient>
      <filter id="glow_i">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="1200" height="630" fill="url(#bg_i)"/>
    <g opacity="0.04">
      <pattern id="grid_i" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#58a6ff" stroke-width="0.5"/>
      </pattern>
      <rect width="1200" height="630" fill="url(#grid_i)"/>
    </g>
    <g transform="translate(60, 80)">
      <rect width="520" height="170" rx="8" fill="#161b22" stroke="#30363d" stroke-width="1"/>
      <rect width="520" height="28" rx="8" fill="#21262d"/>
      <rect y="28" width="520" height="1" fill="#30363d"/>
      <circle cx="20" cy="14" r="5" fill="#ff5555"/>
      <circle cx="38" cy="14" r="5" fill="#ffb347"/>
      <circle cx="56" cy="14" r="5" fill="#45d45d"/>
      <text x="260" y="18" fill="#8b949e" font-family="monospace,sans-serif" font-size="10" text-anchor="middle">claude@dev — AI Blueprint</text>
      <text x="16" y="48" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11">$ /onboard</text>
      <text x="16" y="66" fill="#3fb950" font-family="monospace,sans-serif" font-size="11">→ Inspecting project...</text>
      <text x="16" y="82" fill="#8b949e" font-family="monospace,sans-serif" font-size="11">→ Stack: React + Vite</text>
      <text x="16" y="98" fill="#8b949e" font-family="monospace,sans-serif" font-size="11">→ Conventions detected ✅</text>
      <text x="16" y="114" fill="#45d45d" font-family="monospace,sans-serif" font-size="11">→ BP workflow ready ✓</text>
      <text x="16" y="133" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11">$ /feature "login page"</text>
      <text x="16" y="151" fill="#3fb950" font-family="monospace,sans-serif" font-size="11">→ Writing spec...</text>
    </g>
    <g transform="translate(620, 80)">
      <rect width="520" height="170" rx="8" fill="#161b22" stroke="#30363d" stroke-width="1"/>
      <rect width="520" height="28" rx="8" fill="#21262d"/>
      <rect y="28" width="520" height="1" fill="#30363d"/>
      <circle cx="20" cy="14" r="5" fill="#ff5555"/>
      <circle cx="38" cy="14" r="5" fill="#ffb347"/>
      <circle cx="56" cy="14" r="5" fill="#45d45d"/>
      <text x="260" y="18" fill="#8b949e" font-family="monospace,sans-serif" font-size="10" text-anchor="middle">blueprint status</text>
      <text x="16" y="48" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11">$ /status</text>
      <text x="16" y="64" fill="#8b949e" font-family="monospace,sans-serif" font-size="10">━━━━━━━━━━━━━━━━━━━━</text>
      <text x="16" y="80" fill="#3fb950" font-family="monospace,sans-serif" font-size="11">✅ Plans: 2/2 filled</text>
      <text x="16" y="96" fill="#45d45d" font-family="monospace,sans-serif" font-size="11">✅ Context: loaded</text>
      <text x="16" y="112" fill="#ffb347" font-family="monospace,sans-serif" font-size="11">⏳ Feature: login-page</text>
      <text x="16" y="128" fill="#8b949e" font-family="monospace,sans-serif" font-size="11">📁 Project Plan (spec)</text>
      <text x="16" y="144" fill="#8b949e" font-family="monospace,sans-serif" font-size="11">📋 Build Plan (6/12 done)</text>
    </g>
    <text x="600" y="290" fill="#e6edf3" font-family="Arial,sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Feature Workflow Loop</text>
    <g transform="translate(120, 310)">
      <rect x="0" y="20" width="90" height="28" rx="14" fill="#21262d" stroke="#58a6ff" stroke-width="1"/>
      <text x="45" y="34" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11" text-anchor="middle">feature</text>
      <text x="45" y="75" fill="#8b949e" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">Spec it</text>
      <line x1="90" y1="34" x2="108" y2="34" stroke="#30363d" stroke-width="1.5"/>
      <polygon points="108,30 116,34 108,38" fill="#30363d"/>
      <rect x="116" y="20" width="90" height="28" rx="14" fill="#21262d" stroke="#8250df" stroke-width="1"/>
      <text x="161" y="34" fill="#8250df" font-family="monospace,sans-serif" font-size="11" text-anchor="middle">review</text>
      <text x="161" y="75" fill="#8b949e" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">Approve</text>
      <line x1="206" y1="34" x2="224" y2="34" stroke="#30363d" stroke-width="1.5"/>
      <polygon points="224,30 232,34 224,38" fill="#30363d"/>
      <rect x="232" y="20" width="90" height="28" rx="14" fill="#21262d" stroke="#3fb950" stroke-width="1"/>
      <text x="277" y="34" fill="#3fb950" font-family="monospace,sans-serif" font-size="11" text-anchor="middle">implement</text>
      <text x="277" y="75" fill="#8b949e" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">Build + Verify</text>
      <line x1="322" y1="34" x2="340" y2="34" stroke="#30363d" stroke-width="1.5"/>
      <polygon points="340,30 348,34 340,38" fill="#30363d"/>
      <rect x="348" y="20" width="90" height="28" rx="14" fill="#21262d" stroke="#ffb347" stroke-width="1"/>
      <text x="393" y="34" fill="#ffb347" font-family="monospace,sans-serif" font-size="11" text-anchor="middle">check</text>
      <text x="393" y="75" fill="#8b949e" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">Done-when</text>
      <line x1="438" y1="34" x2="456" y2="34" stroke="#30363d" stroke-width="1.5"/>
      <polygon points="456,30 464,34 456,38" fill="#30363d"/>
      <rect x="464" y="20" width="90" height="28" rx="14" fill="#21262d" stroke="#45d45d" stroke-width="1"/>
      <text x="509" y="34" fill="#45d45d" font-family="monospace,sans-serif" font-size="11" text-anchor="middle">complete</text>
      <text x="509" y="75" fill="#8b949e" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">Archive + Merge</text>
    </g>
    <g transform="translate(80, 440)">
      <rect width="1040" height="140" rx="10" fill="#161b22" stroke="#30363d" stroke-width="1"/>
      <rect width="1040" height="32" rx="10" fill="#21262d"/>
      <rect y="32" width="1040" height="1" fill="#30363d"/>
      <text x="520" y="21" fill="#8b949e" font-family="monospace,sans-serif" font-size="10" text-anchor="middle">docs — blueprint/current-feature.md</text>
      <text x="24" y="52" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11"><tspan fill="#ffa657">Feature:</tspan> Login Page</text>
      <text x="24" y="70" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11"><tspan fill="#3fb950">Status:</tspan> Implementing</text>
      <text x="24" y="88" fill="#58a6ff" font-family="monospace,sans-serif" font-size="11">Criteria:</text>
      <text x="40" y="106" fill="#8b949e" font-family="monospace,sans-serif" font-size="10">- Email + password form</text>
      <text x="280" y="106" fill="#3fb950" font-family="monospace,sans-serif" font-size="10">✅</text>
      <text x="40" y="122" fill="#8b949e" font-family="monospace,sans-serif" font-size="10">- Client &amp; server validation</text>
      <text x="300" y="122" fill="#3fb950" font-family="monospace,sans-serif" font-size="10">✅</text>
      <text x="40" y="138" fill="#8b949e" font-family="monospace,sans-serif" font-size="10">- Error handling + UX</text>
      <text x="280" y="138" fill="#ffb347" font-family="monospace,sans-serif" font-size="10">⏳</text>
    </g>
  </svg>
  <figcaption style="color:#8b949e;font-size:0.8rem;margin-top:0.5rem">Workflow: feature → review → implement → check → complete</figcaption>
</figure>

Lu pernah nggak sih ngalamin ini: lu ngasih tugas ke Claude Code, "Bikin halaman login dong." Dua menit kemudian, lu dapet 15 file baru, routing berubah total, ada database migration yang nggak lu minta, dan—entah kenapa—skema warnanya jadi pake palet Barbie core.

Gue udah sering banget. Masalah utamanya bukan di AI-nya, tapi di **struktur** nya. Claude Code itu cerdas banget, tapi kalo dikasih task open-ended tanpa framework, dia kayak developer yang terlalu semangat: lompat langsung ke kode tanpa mikir arsitektur, gampang kehilangan konteks di project gede, dan suka bikin hal-hal yang nggak diminta. AI blueprint spill bertambah >:D

Makanya gue akhirnya nyoba [**AI Blueprint**](https://ai-blueprint.dev), dan frankly? Ini *game changer*.

---


### Apa Itu AI Blueprint?

AI Blueprint itu **workflow overlay** buat project yang udah lo scaffold. Bukan framework baru, bukan library JavaScript, dan bukan app starter. Ini lapisan yang duduk di atas stack yang udah lo pilih (React, Astro, Rails, whatever).

Dia nambahin 5 layer penting:

| Layer | Gunanya |
|-------|---------|
| **Plans** | Nentuin apa yang lo bikin dan urutan kerjanya |
| **Configuration** | Workflow policy yang konsisten buat setiap sesi AI |
| **Context** | Project overview yang dikasih ke AI tiap kali start sesi |
| **Current feature** | Satu fitur aktif dalam satu waktu — fokus, nggak kemana-mana |
| **History** | Catatan keputusan dan hasil yang udah selesai |

Intinya: AI Blueprint ngasih **guardrails** buat Claude Code. Jadi AI-nya tetap kreatif, tapi nggak keluar jalur.


### Cara Pasang

Gampang banget. Tinggal jalanin satu command di dalem folder project lo:

```bash
npx create-ai-blueprint@latest
```

Nanti lo milih tool adapter yang mau dipake (Claude Code, Codex, GitHub Copilot, OpenCode). Centang Claude Code, dan sisanya diurus. Dia bakal bikin folder `blueprint/` dengan file-file planning, state manifest, dan adapter config yang dibutuhin.

Abis itu jalanin `/onboard` di Claude Code. Command ini bakal inspeksi project lo: ngeliat stack, coding conventions, CI yang udah ada, dan setup workflow policy sesuai preferensi (Efficient vs Guided).


### Workflow: Fitur per Fitur

Nah ini bagian yang paling gue suka. Workflow AI Blueprint tuh **feature-loop** based. Lo ngerjain satu fitur dalam satu siklus pendek:

```
/feature → review → /implement → /check → /complete
```

Penjelasan singkatnya:

1. **`/feature`** — Lo tulis spesifikasi fitur. "Halaman login dengan email + password, validasi client & server, error handling." Simpel.
2. **Review** — Lo baca spesifikasinya, setuju apa nggak. Kalo oke, lanjut.
3. **`/implement`** — Claude Code mulai nulis kode. Bedanya, ini bukan free-for-all. Dia kerja sesuai spesifikasi, bikin perubahan kecil, dan ngejalanin Verify command.
4. **`/check`** — Ngecek apakah fiturnya beneran selesai sesuai *done-when* criteria.
5. **`/complete`** — Archive, commit, merge. Rapi.

Kalo ada yang error di tengah jalan? Ada `/fix` dan `/debug`. Mau quality check? `/audit`. Mau ngerjain semua fitur nonstop? `/continuous`.

Setiap siklus ada **review gates** — jadi lo nggak bakal dikejutin sama perubahan yang nggak diminta. Nggak ada lagi "eh kok database gue berubah?"


### Kenapa Ini Cocok Buat Solo Dev & Tim Kecil?

Gue sering liat solo dev atau tim 2-3 orang pake Claude Code, dan masalahnya selalu sama: **inkonsistensi**. Sesi pertama bikin kode pake pola A, sesi berikutnya lupa dan pake pola B, akhirnya codebase jadi Frankenstein.

Dengan AI Blueprint:

- **Semua sesi punya context yang sama**. `blueprint/context/project-overview.md` isinya durable project knowledge yang di-load tiap kali Claude Code start. Jadi AI nggak pernah lupa arsitektur project lo.
- **Dua file planning**: `blueprint/project-plan.md` buat visi besar, `blueprint/build-plan.md` buat task checklist. AI tau persis mana yang udah dikerjain dan mana yang belum.
- **Rollback** kalo fitur ternyata salah arah — tanpa rewrite git history.
- **GitHub Actions integration** lewat `/ci` — Verify command yang sama jalan di lokal dan di CI.

Ini power duo beneran: **Claude Code** sebagai engine coding-nya, **AI Blueprint** sebagai struktur yang bikin engine itu tetap di jalur.


### Kesimpulan

Kalo lo udah mulai pake Claude Code tapi masih sering berantakan hasilnya, jangan salahin Claude-nya. Coba kasih struktur lewat AI Blueprint. Butuh 5 menit buat install, dan efeknya langsung kerasa di sesi coding pertama.

Menurut gue, ini adalah cara paling masuk akal untuk nge-develop software di 2026: lo tetap ngoding, AI yang bikin kodenya, tapi workflow-nya ada di tangan lo.

Coba aja: **[AI Blueprint — Getting Started Guide](https://ai-blueprint.dev/docs/getting-started/)**