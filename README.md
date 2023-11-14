# Penggunaan k6 - Panduan Singkat 🚀

Panduan ini akan membantu Anda menjalankan dan melaporkan uji kinerja menggunakan k6 pada proyek Anda. Pastikan Anda telah mengikuti langkah-langkah di bawah ini:

## Langkah 1: Instalasi k6

### Debian/Ubuntu

Jalankan perintah berikut di terminal Anda:

```bash
sudo apt install npm git
npm install -g k6
```

### Windows

1. Unduh dan instal [Node.js](https://nodejs.org/en/).
2. Unduh dan instal [Git](https://git-scm.com/downloads).
3. Buka terminal dan jalankan perintah berikut:

```bash
npm install -g k6
```

## Langkah 2: Instalasi Dependencies

Untuk instalasi dependencies, buka terminal dan jalankan perintah berikut:

```bash
npm install
```

## Langkah 3: Menjalankan Test

1. Edit file `test.js` sesuai kebutuhan Anda.
2. Buka terminal dan jalankan perintah:

```bash
k6 run test.js
```

Buka file `postReport.html` untuk melihat visualisasi hasil uji kinerja.
