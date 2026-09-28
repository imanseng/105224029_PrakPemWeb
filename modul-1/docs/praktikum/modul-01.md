# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas
HTTP
Nama/NIM : Iman Dwi Satrio (105224029)
Repositori : https://github.com/imanseng/105224029_PrakPemWeb

## 1. Lingkungan Pengembangan

Tabel versi perangkat dan lingkungan pengembangan yang digunakan:

| Perangkat/Komponen | Versi/Spesifikasi |
| :--- | :--- |
| **Sistem Operasi** | Windows 11 Home 64-bit |
| **Node.js** | v26.4.0 |
| **npm** | 11.17.0 |
| **Git** | 2.53.0 |
| **Visual Studio Code** | 1.139.1 |

## 2. Alur Kerja Git
### Riwayat Git (git log)
*   ccdb8b8 (HEAD -> main, origin/main) merge: selesaikan konflik fileREADME.md
|\  
| * 8a3dd24 docs: menambah isi README.md
* | 0938e2e docs: menambah isi README.md di branch main
|/  
* cd0a7c5 chore: inisialisasi proyek Next.js dan struktur modul 1
* 52482e5 first commit

### Pull Request
https://github.com/imanseng/105224029_PrakPemWeb/pull/1


### Penjelasan Bagian 2
Konflik yang Terjadi: Konflik terjadi pada berkas README.md pada baris teks yang sama. Hal ini dipicu karena ada dua branch berbeda, yaitu branch main dan branch testing/conflict, yang melakukan perubahan/modifikasi secara bersamaan pada baris teks yang sama. Git tidak dapat menentukan isi teks mana yang benar secara otomatis sehingga menandai berkas tersebut berstatus CONFLICT.

Cara Penyelesaian:
- Membuka berkas README.md melalui VS Code.
- Meninjau blok kode yang berkonflik yang ditandai oleh penanda Git: <<<<<<< HEAD (perubahan dari branch main), ======= (pemisah), dan >>>>>>> testing/conflict (perubahan dari branch yang digabungkan).
- Memilih Current Changes, yaitu mempertahankan perubahan terakhir/head atau dari branch main.
- Menandai berkas yang sudah bersih dari konflik menggunakan perintah git add di terminal.
- Mengakhiri proses merge dengan membuat commit baru menggunakan perintah git commit -m dan push ke remote github.

Alasan Pemilihan Isi Akhir: Isi akhir dipilih dengan mempertahankan poin-poin dari branch main (Accept Incoming Changes) agar informasi mengenai konteks deskripsi pesan di README.md jelas dan sesuai dengan latihan conflict.   

## 3. Pengamatan Lalu Lintas HTTP
### Lembar Kerja Pengamatan HTTP

| No | URL | Metode | Kode Status | Content-Type | Header Lain yang Diamati |
| :-: | :--- | :-: | :-: | :--- | :--- |
| 1 | `http://localhost:3000/` | GET | 200 OK | `text/html; charset=utf-8` | `Cache-Control: no-cache, must-revalidate` |
| 2 | `http://localhost:3000/halaman-tidak-ada` | GET | 404 Not Found | `text/html; charset=utf-8` | `Keep-Alive: timeout=5` |
| 3 | `http://localhost:3000/_next/static/chunks/%5Broot-of-the-server%5D__0cbk-n2._.css` | GET | 304 Not Modified | `text/css` | `Accept-Encoding: gzip, deflate, br, zstd` |
| 4 | `http://github.com` (via `curl -I`) | HEAD | 301 Moved Permanently | `Tidak Diketahui` | `Location: https://github.com/` |
| 5 | `https://developer.mozilla.org` (dengan cache) | GET | 302 Found (from disk cache) | `text/html; charset=utf-8` | `Age: 1887` |

Perbedaan Status dan Ukuran:
- Tanpa Cache (Disable Cache Aktif): Browser selalu mengirimkan permintaan HTTP penuh ke server, mengunduh seluruh isi berkas dari jaringan sehingga size berkas sesuai ukuran aslinya dan status yang dikembalikan adalah 200 OK.
- Dengan Cache Aktif: Jika berkas tersimpan di cache lokal browser, browser mengambil dari memori tanpa mengirim permintaan ke jaringan 302 Found (from memory/disk cache). Jika browser memvalidasi ulang berkas ke server, server mengembalikan status 304 Not Modified tanpa mengirim ulang body berkas, jadi lebih hemat bandwidth dan waktu pemuatan lebih cepat.

Alasan Metode curl -I Adalah HEAD:
Opsi -I (atau --head) pada perintah curl menginstruksikan klien untuk mengirimkan permintaan dengan metode HTTP HEAD, bukan GET. Metode HEAD meminta server untuk mengembalikan baris status dan header respons saja tanpa menyertakan isi body respons.

Alasan http://github.com Dialihkan (301 Moved Permanently):
Pengalihan dilakukan untuk alasan keamanan (keamanan komunikasi data melalui enkripsi TLS/HTTPS). Server mengembalikan kode status 301 Moved Permanently beserta header Location: https://github.com/ untuk mengarahkan browser secara otomatis ke versi alamat HTTPS yang aman.

## 4. Kendala dan Penyelesaian
Berikut adalah kendala teknis yang dihadapi selama pengerjaan Modul 1 beserta solusinya:
1. **Kendala 1: Gagal Membuat Branch `latihan/konflik` karena Branch Sudah Ada**
   - **Penyebab:** Branch `latihan/konflik` sudah sempat dibuat sebelum berkas awal proyek dan `.gitignore` di-commit di branch `main`.
   - **Penyelesaian:** Pindah ke `main`, menghapus branch lama menggunakan `git branch -D latihan/konflik`, melakukan clean commit untuk seluruh proyek awal di `main`, lalu membuat ulang branch baru dengan `git switch -c testing/conflict`.

## 5. Catatan Pemanfaatan AI

- **Alat AI:** Gemini (Google AI)
- **Tautan Percakapan AI:** https://share.gemini.google/di8BIpEFYL4t
- **Perintah Utama (Prompt):**
  - "Bagaimana mengatur folder saya agar environment-nya Next.js?"
  - "Bantu buatkan penjelasannya untuk bagian 2: Konflik yang terjadi, cara penyelesaian, dan alasan pemilihan isi akhir."
  - "Lanjut bagian 3 pengamatan lalu lintas HTTP."
- **Bagian yang Digunakan:**
  - Penyusunan analisis teknis penyelesaian *merge conflict* dan alasannya.
  - Penyusunan format lembar kerja pengamatan HTTP dan analisis teknis terkait *caching*, metode `HEAD`, dan pengalihan HTTPS.
- **Cara Memverifikasi:** Memeriksa langsung kesesuaian perintah melalui terminal VS Code (`git status`, `git log`, `curl.exe`), memverifikasi struktur file `.gitignore`, serta mengecek kode status pada panel Network DevTools peramban.