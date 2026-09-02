---
title: "Ngoding Pakai Claude Code dan AI Blueprint: Akhirnya AI yang Nggak Ngaco"
date: 2026-09-02 10:00:00 +0700
permalink: /blog/coding-dengan-claude-code-dan-ai-blueprint/
published: true
tags: [Development, AI, Claude Code, Workflow, Tools]
excerpt: "Gimana caranya bikin Claude Code jadi reliable bikin fitur dari awal sampai selesai tanpa hallucinate di tengah jalan. Jawabannya: AI Blueprint."
---

# Ngoding Pakai Claude Code dan AI Blueprint: Akhirnya AI yang Nggak Ngaco

![Coding with AI](hero.png)

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