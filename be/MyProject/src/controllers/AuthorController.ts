// Mengimpor modul yang diperlukan
import { Request, Response } from "express";
import AuthorService from "../services/AuthorService"; // Mengimpor layanan AuthorService
import { expression } from "joi"; // Mengimpor modul joi untuk validasi data

// Definisikan class AuthorController untuk mengelola operasi terkait penulis
class AuthorController { 
    // Class AuthorController dibuat untuk mengelola berbagai operasi yang berkaitan dengan penulis dalam aplikasi.
    // Method untuk mendaftarkan penulis baru
    register(req: Request, res: Response) {
        // Memanggil method register dari AuthorService dengan meneruskan request dan response
        AuthorService.register(req, res);
    }

    // Method untuk proses login penulis
    login(req: Request, res: Response) {
        // Memanggil method login dari AuthorService dengan meneruskan request dan response
        AuthorService.login(req, res);
    }

    // Method untuk memeriksa detail penulis
    check(req: Request, res: Response) {
        // Memanggil method check dari AuthorService dengan meneruskan request dan response
        AuthorService.check(req, res);
    }

    // Method untuk menghapus akun penulis
    // delete(req: Request, res: Response) {
        // Memanggil method delete dari AuthorService dengan meneruskan request dan response
        // AuthorService.delete(req, res);
    // }

    // Method untuk memperbarui informasi penulis
    // update(req: Request, res: Response) {
        // Memanggil method update dari AuthorService dengan meneruskan request dan response
        // AuthorService.update(req, res);
    // }
}
// Setiap method dalam AuthorController adalah respons terhadap permintaan pada endpoint tertentu yang berhubungan dengan penulis, seperti pendaftaran, login, pemeriksaan detail, penghapusan akun, dan pembaruan informasi penulis.
// Setiap method dalam AuthorController memanggil method yang sesuai dari AuthorService untuk melakukan tugas-tugas terkait, dengan meneruskan objek req (permintaan dari klien) dan res (respon yang akan dikirimkan kembali ke klien).
// Instance baru dari class AuthorController diekspor sehingga dapat digunakan di bagian lain dari aplikasi untuk mengatur rute dan operasi terkait penulis.
// Ekspor instance dari class AuthorController yang telah dibuat
export default new AuthorController;
