
import * as express from 'express'
import ThreadsController from '../controllers/ThreadsController'
import { Request, Response } from 'express'
import AuthorController from '../controllers/AuthorController'
import authenticate from '../middlewares/authMiddleware'

import { upload } from '../middlewares/uploadFile'
import UserController from '../controllers/UserController'
import RepilesController from '../controllers/RepilesController'
import ThreadsQueue from '../queque/ThreadsQueue'
import QueueController from '../queque/QueueController'
import QueControllers from '../controllers/QueControllers'
import LikeController from '../controllers/LikeController'

// Membuat instance router dari Express
const router = express.Router()

// Rute untuk halaman awal
router.get("/", (req, res) => {
    res.send('hello world')
})

// Rute terkait threads
router.get("/thread", authenticate, ThreadsController.find) // Mendapatkan daftar threads setelah melewati proses autentikasi
router.get("/thread/:id", authenticate, ThreadsController.findOne) // Mendapatkan thread berdasarkan ID setelah melewati proses autentikasi
router.post("/thread/created", authenticate, upload("image"), ThreadsQueue.create) // Membuat thread baru dengan mengunggah gambar (dengan antrean) setelah melewati proses autentikasi
router.delete("/thread/delete/:id", authenticate, ThreadsController.delete) // Menghapus thread berdasarkan ID setelah melewati proses autentikasi
router.patch("/thread/update/:id", authenticate, ThreadsController.update) // Memperbarui informasi thread berdasarkan ID setelah melewati proses autentikasi

// Rute terkait otorisasi
router.post("/register", AuthorController.register) // Mengizinkan pendaftaran pengguna baru
router.post("/login", AuthorController.login) // Mengizinkan proses login pengguna
router.get("/check", authenticate, AuthorController.check) // Memeriksa detail pengguna yang sudah login setelah melewati proses autentikasi
// router.delete("/auth/user/delete/:id", authenticate, ThreadsController.delete)
// router.patch("/auth/user/update/:id", authenticate, ThreadsController.update)


// Rute terkait pengguna
router.get("/user", authenticate, UserController.find) // Mendapatkan daftar pengguna setelah melewati proses autentikasi
router.get("/user/:id", authenticate, UserController.findOne) // Mendapatkan pengguna berdasarkan ID setelah melewati proses autentikasi
router.post("/user/created", authenticate, upload("image"), UserController.create) // Membuat pengguna baru dengan mengunggah gambar setelah melewati proses autentikasi
router.delete("/user/delete/:id", authenticate, UserController.delete) // Menghapus pengguna berdasarkan ID setelah melewati proses autentikasi
router.patch("/user/update/:id", authenticate, UserController.update) // Memperbarui informasi pengguna berdasarkan ID setelah melewati proses autentikasi

// Rute terkait balasan (replies)
router.get("/replys", authenticate, RepilesController.find) // Mendapatkan daftar balasan setelah melewati proses autentikasi
router.post("/reply", authenticate, RepilesController.create) // Membuat balasan baru setelah melewati proses autentikasi

// Rute terkait likes
router.post("/like", authenticate, LikeController.create) // Menambahkan like ke thread setelah melewati proses autentikasi
router.delete("/like/:thread_id", authenticate, LikeController.delete) // Menghapus like dari thread setelah melewati proses autentikasi


//      Kode di atas menggambarkan pengaturan rute untuk berbagai operasi dalam aplikasi.Setiap rute terkait dengan pengelolaan thread, otorisasi pengguna, pengguna, balasan, dan likes.Berikut penjelasan untuk setiap bagian:
//      Rute untuk halaman awal memberikan respons "hello world" ketika rute ini diakses.
//      Diawali dengan mengimpor modul dan pengontrol yang diperlukan serta menginstansiasi router dari Express.
//      Rute terkait threads:
//      /thread: Mendapatkan daftar threads setelah melewati proses autentikasi menggunakan middleware authenticate.
//          / thread /: id: Mendapatkan thread berdasarkan ID setelah melewati proses autentikasi.
//      / thread / delete /:id: Menghapus thread berdasarkan ID setelah melewati proses autentikasi.
//      / thread / created: Membuat thread baru dengan mengunggah gambar(dengan antrean) setelah melewati proses autentikasi.
//          / thread / update /: id: Memperbarui informasi thread berdasarkan ID setelah melewati proses autentikasi.
//      Rute terkait otorisasi:
//      /register: Mengizinkan pendaftaran pengguna baru.
//              / login: Mengizinkan proses login pengguna.
//      / check: Memeriksa detail pengguna yang sudah login setelah melewati proses autentikasi.
//      Rute terkait pengguna:
//      /user: Mendapatkan daftar pengguna setelah melewati proses autentikasi.
//          / user /: id: Mendapatkan pengguna berdasarkan ID setelah melewati proses autentikasi.
//      / user / created: Membuat pengguna baru dengan mengunggah gambar setelah melewati proses autentikasi.
//      / user / delete /:id: Menghapus pengguna berdasarkan ID setelah melewati proses autentikasi.
//          / user / update /: id: Memperbarui informasi pengguna berdasarkan ID setelah melewati proses autentikasi.
//      Rute terkait balasan(replies):
//      /replys: Mendapatkan daftar balasan setelah melewati proses autentikasi.
//          / reply: Membuat balasan baru setelah melewati proses autentikasi.
//      Rute terkait likes:
//      /like: Menambahkan like ke thread setelah melewati proses autentikasi.
//          / like /: thread_id: Menghapus like dari thread setelah melewati proses autentikasi.
//      Kode ini membantu mengatur rute dan menghubungkan antara rute dan kontroler yang relevan untuk setiap operasi dalam aplikasi.Dengan penjelasan ini, semoga menjadi panduan yang sederhana dan mudah dipahami bagi junior developer yang terlibat dalam pengembangan proyek.
// Ekspor instance router yang telah dibuat
export default router
