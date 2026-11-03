---
title: "Hunter Board"
description: "Situs referensi fan-made Monster Hunter Wilds: perbandingan reward quest dan character build, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework."
category: "Web Dev"
kind: "individual"
role: "Solo Developer"
period: "2026"
tech: ["HTML", "CSS", "JavaScript", "Static Site"]
gallery:
  - "/images/projects/hunter-board-1.png"
  - "/images/projects/hunter-board-2.png"
  - "/images/projects/hunter-board-3.png"
  - "/images/projects/hunter-board-4.png"
repo: "https://github.com/anzaniy/HunterBoard"
demo: "https://hunterboard.live/"
order: 1
---

## Ringkasan

Hunter Board adalah situs referensi buatan penggemar untuk **Monster Hunter Wilds** dan **Monster Hunter Outlanders**. Fokus utamanya adalah quest board untuk membandingkan reward, serta character builder untuk menyusun build senjata. Seluruh situs dibangun dengan HTML, CSS, dan JavaScript murni, tanpa framework, tanpa backend, dan tanpa proses build.

## Latar Belakang

Informasi reward quest seperti HRP, Zenny, dan reward unik tersebar di berbagai halaman wiki, sehingga pemain harus membuka banyak tab hanya untuk membandingkan beberapa quest. Hunter Board menyatukan data tersebut dalam satu tabel yang bisa difilter, diurutkan, dan dicari langsung di browser.

## Peran Saya

- Merancang struktur situs dan antarmuka untuk dua game dalam satu hub.
- Menyusun dataset quest, build, skill, dan pemetaan ikon monster.
- Mengimplementasikan tabel quest dengan filter, pengurutan, pencarian, dan paginasi.
- Membangun character builder beserta panel detail build.
- Menyiapkan halaman legal, metadata, sitemap, dan deployment.

## Fitur

- **Quest board**: 155 quest (termasuk event quest) dengan filter tipe quest, urutan berdasarkan HRP, pencarian, dan paginasi.
- **Character builder**: 14 build senjata lengkap dengan panel detail dan pencarian skill.
- **Ikon monster**: 56 ikon monster dan 14 ikon senjata yang dipetakan otomatis ke nama monster.
- **Hub dua game**: pintu masuk terpisah untuk Wilds dan Outlanders.
- **Halaman pendukung**: about, contact, privacy, credits, dan 404 kustom.
- **Siap mesin pencari**: sitemap, robots.txt, dan gambar pratinjau sosial 1200×630.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Markup & tampilan | HTML, CSS |
| Interaksi & data | JavaScript (vanilla) |
| Format data | Objek JavaScript & JSON |
| Build step | Tidak ada |
| Hosting | Cloudflare Pages |

## Struktur Data

- `quests-data.js`: 86 quest dasar, menjadi 155 saat event quest digabungkan.
- `builds-data.js`: 14 build senjata.
- `skills-data.js`: referensi skill dan set bonus untuk panel detail build.
- `monster-icons.js`: pemetaan nama monster ke berkas ikon.

## Catatan

Proyek ini bersifat tidak resmi dan tidak berafiliasi dengan CAPCOM. Aset pihak ketiga tetap mengikuti lisensinya masing-masing, yang didokumentasikan di halaman credits.