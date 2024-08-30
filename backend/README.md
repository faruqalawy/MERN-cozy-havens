# YANG HARUS DIPERHATIKAN KETIKA DEPLOY MERN APP KE VERCEL
- file utama backend harus diletakana di folder /api dan bernama index.js
- pastikan api di frontend dan backend sudah diatur ke api vercel bukan lagi local
- perhatikan konfigurasi headers route di file vercel.json agar terhindar dari cors error
- perhatikan konfigurasi whitelist ip address di mongodb atlas, pastikan ip address kita terdaftar
- perhatikan konfigurasi integrasi vercel dan mongodb atlas di menu integration di vercel, pastikan server backend app kita telah diintegrasi
- 