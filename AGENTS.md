# Catatan Proyek untuk Agent

Dokumen ini dibaca otomatis oleh agent di sesi baru. Isinya status terakhir, konvensi wajib, dan jebakan yang sudah pernah ditemui. Perbarui bagian "Riwayat pekerjaan" setiap kali ada perubahan besar.

## Proyek

Portofolio pribadi Muhammad Ega Putra Anzani. Astro 4 + Tailwind + daisyUI, statis, deploy ke GitHub Pages.

- Lokasi: `D:\General\Project\Portofolio\astrofy`
- Remote: `origin` = `https://github.com/anzaniy/MyPortofolio.git`, branch `main`
- Live: `https://anzaniy.github.io/MyPortofolio/`
- Base path: `/MyPortofolio` (selalu pakai helper `withBase()` dari `src/config.ts` untuk link/gambar internal)
- Package manager: pnpm 12.15.0, `.npmrc` memakai `shamefully-hoist=true`

## Perintah

```powershell
pnpm install        # wajib kalau node_modules hilang; tanpa ini build gagal "astro is not recognized"
pnpm build          # output ke dist/, harus 20 halaman
pnpm dev -- --port 4321
```

Regenerate PDF CV setelah mengubah `cv.template.html`:

```powershell
& 'C:\Program Files\Google\Chrome\Application\chrome.exe' --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="D:\General\Project\Portofolio\astrofy\public\cv.pdf" "file:///D:/General/Project/Portofolio/astrofy/cv.template.html"
```

## Konvensi wajib

- Commit atas nama: `git -c user.name="Ega" -c user.email="egaanzani77@gmail.com" commit ...`. Pesan commit bahasa Indonesia, format `feat:` / `content:` / `style:` / `fix:`.
- Setelah selesai, selalu commit dan push ke `origin main`. User meminta ini berulang kali.
- Jangan pakai em dash atau en dash di konten. Pakai titik dua, koma, atau tanda hubung biasa. Pemisah antar item memakai `·`.
- Situs bilingual EN/ID, default English. Teks EN dan ID ditulis berdampingan memakai komponen `Dual` (`en=` dan `id=`) atau dua koleksi konten.
- PDF CV hanya bahasa Inggris. Halaman `/cv` tetap bilingual.
- Badge project menampilkan stack, bukan kategori. Kalau ada framework: framework dulu, lalu bahasa, contoh `Ren'Py · Python`, `Odoo 10 · Python`, `Tauri v2 · Rust`, `Unity 6 · C#`. Tanpa framework cukup bahasanya (`JavaScript`).

## Struktur konten project

Koleksi: `src/content/projects` (ID) dan `src/content/projects-en` (EN), slug harus sama di kedua folder. Schema di `src/content/config.ts`.

Field penting:

- `category`: `Web Dev` | `System Dev` | `Game Dev`. Dipakai untuk urutan sidebar dan label tombol demo (`Game Dev` jadi "Play on itch.io").
- `badge`: teks badge yang tampil di kartu dan halaman detail. Wajib.
- `kind`: `work` atau `individual`. Menentukan masuk tab Work atau Individual.
- `order`: urutan tampil dalam grup.
- `gallery`: daftar gambar di `public/images/projects/`.
- `demo`: URL itch.io atau demo live.
- `tech`: chip teknologi di halaman detail.

Thumbnail kartu ada di `public/images/projects/thumbs/` (webp 480x270), dipakai lewat helper `thumb()` di `src/lib/thumb.ts`. Kalau menambah gambar, buat PNG galeri (1280x720) plus thumb webp-nya.

## Riwayat pekerjaan

Commit terakhir: `bf46ae5`.

- `5934b74` Cloudflare Web Analytics dipasang di `src/layouts/BaseLayout.astro` (token beacon publik, bukan rahasia). Hostname di dashboard: `anzaniy.github.io`.
- `accaae5` dan `8d4a8f3` perbaikan CV: jabatan organisasi menjadi "Head of Cadre Development" (ID: Kepala Bidang Kaderisasi), bagian Multimedia dihapus dari halaman CV dan PDF. PDF di-generate ulang.
- `42e9947` menambah Riverbend ke Individual Project plus sistem badge stack. Field `language` diganti `badge` di schema dan semua frontmatter. Referensi `project.data.language` di `index.astro`, `projects.astro`, `individual-project.astro`, dan `ProjectDetail.astro` sudah diganti `project.data.badge`.
- `28219ad` dokumentasi Riverbend memakai 6 screenshot asli dari itch.io (`riverbend-1..6.png` + thumb webp). Isi halaman detail diisi Ringkasan, Fitur, dan Status. Placeholder lama sudah tertimpa.
- `bf46ae5` menambah `C# (Unity)` di Profile dan Skills serta `Unity 6` di Tools, baik di `src/pages/cv.astro` maupun `cv.template.html`, lalu PDF di-generate ulang.

## Data project saat ini

| Slug | Kind | Badge |
|---|---|---|
| website-sekolah | work | CodeIgniter 3 · PHP |
| api-mobile-tdm | work | Odoo 10 · Python |
| game-geometri | work | Ren'Py · Python |
| hunter-board | individual | JavaScript |
| musely | individual | Tauri v2 · Rust |
| pemesanan-atk | individual | Odoo 10 · Python |
| riverbend | individual | Unity 6 · C# |

Riverbend: demo `https://raanzani.itch.io/riverbend`, versi 0.1 Windows 64-bit, kategori Game Dev.

## Jebakan

- PowerShell `Select-String` sering menampilkan `·` sebagai mojibake. Verifikasi teks memakai `read` atau Node (`fs.readFileSync`), jangan percaya output PowerShell untuk karakter non-ASCII.
- `npm run build` gagal karena proyek memakai pnpm dan `node_modules` pernah hilang. Jalankan `pnpm install` dulu.
- Setelah mengganti gambar dengan nama file yang sama, browser bisa menampilkan versi lama. Sarankan hard refresh (Ctrl+F5) sebelum menyimpulkan ada bug.
- Deploy GitHub Pages butuh beberapa menit setelah push. Jangan menyimpulkan gagal sebelum mengecek halaman live.
- Tombol demo untuk kategori Game Dev masih berlabel "Play on itch.io", padahal Riverbend dan game geometri berbentuk unduhan. Belum diubah, bisa dipertimbangkan jadi "Download on itch.io".
- `gh` CLI tidak terpasang, jadi status Actions tidak bisa dicek dari terminal.