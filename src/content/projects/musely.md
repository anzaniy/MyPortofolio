---
title: "Musely"
description: "Widget desktop Windows yang menampilkan lirik lagu tersinkron dari lagu yang sedang diputar, selalu di atas jendela lain."
category: "System Dev"
kind: "individual"
role: "Solo Developer"
period: "2026"
tech: ["Rust", "Tauri v2", "TypeScript", "HTML", "CSS", "LRCLIB API"]
gallery:
  - "/images/projects/musely-1.png"
  - "/images/projects/musely-2.png"
repo: "https://github.com/anzaniy/Musely"
order: 2
---

## Ringkasan

Musely adalah widget desktop kecil untuk Windows yang menampilkan lirik lagu yang sedang diputar dan selalu berada di atas jendela lain (*always-on-top*). Widget membaca judul lagu langsung dari Windows lewat GSMTC, mengambil lirik tersinkron dari LRCLIB, lalu menyorot baris yang sedang dinyanyikan. Seluruh proses berjalan lokal tanpa perlu login Spotify.

## Latar Belakang

Lirik lagu biasanya hanya terlihat di dalam aplikasi pemutar musik, sehingga tertutup begitu pengguna membuka aplikasi lain. Musely memisahkan lirik dari aplikasi pemutarnya: widget kecil melayang di sudut layar, dengan mode ringkas yang hanya menampilkan teks lirik saat kursor tidak diarahkan ke widget.

## Peran Saya

- Merancang arsitektur aplikasi desktop dengan Tauri v2: backend Rust untuk data pemutaran, frontend web untuk antarmuka widget.
- Mengimplementasikan pembacaan sesi media Windows (GSMTC) dengan polling dan penggabungan data dari beberapa sumber.
- Mengintegrasikan LRCLIB untuk lirik tersinkron beserta cache di memori.
- Membangun antarmuka widget: kartu lagu, baris lirik, kontrol, serta mode ringkas saat hover.
- Menangani sinkronisasi lirik dan penyesuaian offset waktu yang tersimpan di `localStorage`.
- Menyiapkan jendela Tauri transparan, tanpa dekorasi, always-on-top, dan ikon tray.

## Fitur

- **Lirik tersinkron** — baris aktif disorot dan bergulir mengikuti posisi lagu.
- **Tanpa login Spotify** — judul dan status pemutaran dibaca dari GSMTC Windows.
- **Kontrol pemutaran** — tombol sebelumnya, play/pause, dan berikutnya langsung dari widget.
- **Penyesuaian offset** — lirik bisa dimajukan atau dimundurkan per 100 ms, dan nilainya disimpan.
- **Mode ringkas** — kartu dan tombol disembunyikan saat kursor menjauh, menyisakan teks lirik ber-outline.
- **Selalu di atas** — widget tetap terlihat meski berpindah aplikasi, dan bisa disembunyikan lewat tray.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Shell desktop | Tauri v2 (Rust + WebView2) |
| Frontend | TypeScript, HTML, CSS |
| Sumber pemutaran | Global System Media Transport Controls (GSMTC) |
| Sumber lirik | LRCLIB |
| Penyimpanan preferensi | `localStorage` |
| Distribusi | Build lokal (installer NSIS) |

## Cara Kerja

1. Thread Rust membaca status pemutaran Windows setiap 500 ms dan mengirim event `playback:update`.
2. Ketika judul, artis, atau durasi berubah, aplikasi mengambil lirik tersinkron dari LRCLIB dan mengirim `lyrics:update`.
3. Frontend menginterpolasi posisi lagu di antara polling, mengoreksi selisih waktu secara bertahap, lalu memilih baris aktif dengan *binary search*.
4. Lirik di-cache di memori agar lagu yang sama tidak diunduh ulang.
5. Status idle baru diumumkan setelah tiga kegagalan baca berturut-turut agar tampilan tidak berkedip.

## Catatan

Saat ini lirik hanya di-cache di memori, hotkey global untuk menampilkan/menyembunyikan widget belum tersedia, dan thumbnail album belum diambil dari GSMTC. Area transparan di sekitar widget juga belum *click-through* karena mode hover membutuhkan event mouse.
