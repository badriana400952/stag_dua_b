import { Request, Response } from "express";
import LikesService from "../services/LikesService";

class LikeController {
    // setelah dari routing kita akan membaca file Like Controller
    // create reques dan response
    async create(req: Request, res: Response) {
        try {
            //membutuhkan login session user
            const loginSession = res.locals.loginSession;
            // Fungsi dari LikesService.create(req.body, loginSession) adalah untuk membuat atau menambahkan sukaan (likes) baru berdasarkan data yang diberikan dalam req.body (permintaan HTTP) dan sesi login loginSession.
            const response = await LikesService.create(req.body, loginSession);
            // LikesService adalah sebuah objek atau modul yang memiliki fungsionalitas terkait sukaan (likes), seperti membuat, menghapus, atau mengelola sukaan.
            // .create() adalah metode (fungsi) yang digunakan untuk membuat sukaan baru.
            // req.body adalah data yang dikirimkan dalam permintaan HTTP (biasanya dalam format JSON) dan berisi informasi yang diperlukan untuk membuat sukaan, seperti ID postingan yang akan diberi sukaan.
            // loginSession mewakili sesi login pengguna yang telah terotentikasi. Ini mungkin digunakan untuk memastikan bahwa sukaan hanya dapat ditambahkan oleh pengguna yang memiliki izin.
            res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        // Membuat Permintaan HTTP DELETE diterima oleh endpoint yang sesuai.
        // Di dalam metode delete, kode tersebut mencoba menjalankan beberapa langkah dengan menggunakan blok try untuk menangani potensi kesalahan.
        try {
            const loginSession = res.locals.loginSession

        // res.locals.loginSession mengambil informasi sesi login dari objek res.locals. Ini mungkin berisi informasi tentang pengguna yang terautentikasi dan sedang menjalankan permintaan.
        const threadId = parseInt(req.params.thread_id)
        // req.params.thread_id digunakan untuk mengambil parameter thread_id dari URL permintaan. Ini akan memberikan informasi tentang id thread (mungkin suatu jenis konten) yang akan dihapus sukaannya.
        // parseInt(req.params.thread_id) mengubah nilai thread_id yang diambil dari URL menjadi tipe data integer, sehingga dapat digunakan dalam proses selanjutnya.
        const response = await LikesService.delete(threadId, loginSession)
        // LikesService.delete(threadId, loginSession) dipanggil dengan memberikan threadId dan loginSession sebagai argumen. Ini mencerminkan pemanggilan metode delete dari LikesService untuk menghapus sukaan dari thread yang sesuai oleh pengguna yang sedang terotentikasi.
        // await digunakan untuk menunggu hasil dari operasi LikesService.delete(), karena operasi ini mungkin melibatkan pemrosesan yang memerlukan waktu.
        res.status(200).json(response)
        // Setelah operasi penghapusan selesai, respons dengan status HTTP 200 dan data respons yang mungkin berisi informasi tambahan atau konfirmasi tentang penghapusan.
        // Jika ada kesalahan yang terjadi selama proses (seperti kesalahan dalam panggilan metode LikesService.delete()), maka blok catch akan menangkap kesalahan tersebut.
        // Jika ada kesalahan yang ditangkap, server akan merespons dengan status HTTP 500 dan mengirimkan pesan kesalahan yang lebih rinci dalam format JSON.
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

}
export default new LikeController()