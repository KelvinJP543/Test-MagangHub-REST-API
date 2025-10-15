# Test MagangHub REST API - Kelvin Jaya Pratama

[![Made with Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Framework Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Deployed with Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📝 Deskripsi Proyek

Ini adalah REST API sederhana yang dibuat sebagai submission untuk tes teknis. API ini menyediakan fitur dasar untuk manajemen pengguna (CRUD - Create & Read) dengan data yang disimpan sementara di memori server (in-memory array).

Proyek ini dibangun menggunakan **Node.js** dan framework **Express.js**, serta dilengkapi dengan validasi input menggunakan `express-validator`.

---

## 🚀 URL REST API (Endpoint Live)

API ini telah berhasil di-deploy menggunakan Vercel dan dapat diakses secara publik melalui URL di bawah ini:

**Base URL:**
https://kelvin-test-maganghub-api.vercel.app

## 📖 Fitur & Dokumentasi API

API ini memiliki 3 endpoint utama sesuai dengan persyaratan tes.

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/users` | Menampilkan seluruh daftar pengguna. |
| `GET` | `/users/:id` | Menampilkan detail pengguna berdasarkan `id` pengguna. |
| `POST` | `/users` | Menambahkan pengguna baru ke dalam daftar pengguna. |
| `PATCH` | `/users/:id` | Memperbarui data pengguna berdasarkan `id` pengguna. |
| `DELETE`| `/users/:id` | Menghapus data pengguna berdasarkan `id` pengguna. |

<br>

### Contoh Request Body untuk `POST/users`

Untuk menambahkan pengguna baru, kirimkan request dengan format JSON seperti berikut:

```json
{
    "name": "Nama Pengguna",
    "email": "email@contoh.com",
    "age": 25
}
```

**Validasi:**
* **`name`**: Wajib diisi, minimal 2 karakter.
* **`email`**: Wajib diisi, harus dalam format email yang valid dan unik.
* **`age`**: Wajib diisi, harus berupa angka.

<br>

### Contoh Request Body untuk `PATCH/users/:id`

Untuk memperbarui data pengguna, Anda hanya perlu mengirimkan property yang ingin diubah. Property lain yang tidak dikirimkan tidak akan terpengaruh.

**Contoh 1: Hanya mengubah nama dan umur**
```json
{
    "name": "Kelvin Pratama",
    "age": 23
}
```

**Contoh 2: Hanya mengubah email**
```json
{
    "email": "kelvin.baru@email.com"
}
```

**Validasi:**
* **`name`**: Jika dikirim, minimal 2 karakter.
* **`email`**: Jika dikirim, harus dalam format email yang valid dan unik.
* **`age`**: Jika dikirim, harus berupa angka.

---

## 💻 Cara Menjalankan Secara Lokal

Jika Anda ingin menjalankan proyek ini di komputer Anda, pastikan Anda sudah memiliki Node.js dan npm ter-install. Kemudian, ikuti langkah-langkah berikut:

1.  **Clone repository ini**
    ```bash
    git clone https://github.com/KelvinJP543/Test-MagangHub-REST-API.git
    ```

2.  **Masuk ke direktori proyek**
    ```bash
    cd Test-MagangHub-REST-API
    ```

3.  **Install semua dependencies yang dibutuhkan**
    ```bash
    npm install
    ```

4.  **(Khusus Lokal) Aktifkan Server**
    Buka file `index.js` dan hapus tanda komentar (`/*` dan `*/`) pada blok kode `app.listen()` di bagian bawah file.

    **Ubah ini:**
    ```javascript
    /*
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
    */
    ```
    **Menjadi ini:**
    ```javascript
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
    ```

5.  **Jalankan server**
    ```bash
    npm start
    ```
    Server sekarang akan berjalan dengan benar di `http://localhost:3000`.
    
---

## 👨‍💻 Author

* **Kelvin Jaya Pratama**
* **GitHub**: [https://github.com/KelvinJP543](https://github.com/KelvinJP543)




