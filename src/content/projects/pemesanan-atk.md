---
title: "Sistem Pemesanan Alat Tulis Kerja"
description: "Modul Odoo 10 untuk pengajuan alat tulis kantor: master barang dan departemen, alur persetujuan, validasi stok, serta laporan PDF dan Excel."
category: "System Dev"
kind: "individual"
role: "Solo Developer"
period: "2026"
tech: ["Odoo 10", "Python", "PostgreSQL", "XML/QWeb", "report_xlsx"]
repo: "https://github.com/anzaniy/PemesananATK"
gallery:
  - "/images/projects/pemesanan-atk-1.png"
  - "/images/projects/pemesanan-atk-2.png"
  - "/images/projects/pemesanan-atk-3.png"
order: 3
---

## Ringkasan

Sistem Pemesanan Alat Tulis Kerja adalah modul Odoo 10 untuk pengajuan alat tulis kantor (ATK). Modul ini mengelola master barang dan departemen, mencatat transaksi pengajuan beserta rincian barangnya, menjalankan alur persetujuan, dan menyediakan laporan PDF maupun Excel.

## Latar Belakang

Pengajuan ATK di banyak tim masih dilakukan lewat chat atau spreadsheet, sehingga stok tidak terkontrol dan tidak ada jejak siapa yang menyetujui apa. Modul ini membuat alurnya eksplisit dan tercatat di dalam sistem.

## Peran Saya

- Merancang model data Odoo: barang, departemen, transaksi, rincian transaksi, dan wizard rekap.
- Mengimplementasikan alur status Draft, Diajukan, Disetujui, dan Ditolak beserta tombol aksi per grup.
- Membuat validasi jumlah terhadap stok, termasuk pengecekan ulang saat barang diganti.
- Menyiapkan hak akses grup User dan Manager serta record rule per pemilik data.
- Membangun laporan PDF berbasis QWeb, laporan Excel per transaksi, dan rekap Excel per status dengan rentang tanggal.
- Menulis dokumentasi instalasi dan penggunaan modul.

## Fitur

- **Master barang**: nama, stok, harga, dan status aktif/nonaktif.
- **Master departemen**: daftar departemen pemesan.
- **Transaksi**: header dan rincian barang, total dihitung otomatis.
- **Alur persetujuan**: Draft, Diajukan, Disetujui, dan Ditolak.
- **Validasi stok**: jumlah yang diminta tidak boleh melebihi stok tercatat.
- **Hak akses**: grup User dan Manager, user hanya melihat pengajuannya sendiri.
- **Laporan PDF**: per transaksi, dibuat dengan QWeb.
- **Laporan Excel**: file `.xlsx` per transaksi melalui modul OCA `report_xlsx`.
- **Rekap Excel**: rekap per status dalam rentang tanggal tertentu.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Platform | Odoo 10 |
| Bahasa | Python |
| Basis data | PostgreSQL |
| Tampilan | XML (Odoo views) |
| Laporan | QWeb dan `report_xlsx` |

## Alur Transaksi

1. Manager mengisi master barang ATK dan master departemen.
2. User membuat transaksi, menambahkan rincian barang, lalu menekan **Ajukan**.
3. Jumlah divalidasi terhadap stok yang tercatat.
4. Manager menyetujui atau menolak pengajuan.
5. Transaksi yang disetujui dapat dicetak sebagai PDF atau Excel, dan direkap per status.

## Catatan

Modul ini dibuat sebagai proyek individu dan tidak terikat pada modul perusahaan mana pun. Instalasi memerlukan Odoo 10 serta modul OCA `report_xlsx` versi 10.0. Database hasil instal masih kosong, jadi master barang dan departemen perlu diisi terlebih dahulu.
