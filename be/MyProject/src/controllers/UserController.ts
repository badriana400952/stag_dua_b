// Mengimpor modul yang diperlukan
import { Request, Response } from "express";
import UserService from "../services/UserService"; // Mengimpor layanan UserService

// Definisikan class UserController untuk mengelola operasi terkait pengguna (user)
class UserController {
    // Method untuk mencari pengguna (users)
    find(req: Request, res: Response) {
        // Memanggil method find dari UserService dengan meneruskan data permintaan dan respon
        UserService.find(req, res);
    }

    // async find(req: Request, res: Response) {
    //     try {
    //         // Mendapatkan informasi login session dari res.locals
    //         const loginSession = res.locals.loginSession;

    //         // Memanggil method find dari ThreadService dengan meneruskan data permintaan dan informasi session
    //         const response = await UserService.find(req.body, loginSession);
    //         // Mengembalikan respon sukses dengan status 200 dan data thread yang ditemukan
    //         return res.status(200).json(response);
    //     } catch (error) {
    //         // Mengembalikan respon kesalahan server dengan status 500 jika terjadi error
    //         return res
    //             .status(500)
    //             .json({ error: "Terjadi kesalahan pada server" });
    //     }
    // }

    // Method untuk mencari satu pengguna (user) berdasarkan ID
    findOne(req: Request, res: Response) {
        // Memanggil method findOne dari UserService dengan meneruskan data permintaan dan respon
        UserService.findOne(req, res);
    }

    // Method untuk membuat pengguna (user) baru
    create(req: Request, res: Response) {
        // Memanggil method create dari UserService dengan meneruskan data permintaan dan respon
        UserService.create(req, res);
    }

    // Method untuk menghapus pengguna (user)
    delete(req: Request, res: Response) {
        // Memanggil method delete dari UserService dengan meneruskan data permintaan dan respon
        UserService.delete(req, res);
    }

    // Method untuk memperbarui informasi pengguna (user)
    update(req: Request, res: Response) {
        // Memanggil method update dari UserService dengan meneruskan data permintaan dan respon
        UserService.update(req, res);
    }
}
// Diawali dengan mengimpor modul express yang dibutuhkan dan layanan UserService.
// Class UserController dibuat untuk mengelola operasi terkait pengguna (user) dalam aplikasi.
// Setiap method dalam UserController adalah tanggapan terhadap permintaan pada endpoint tertentu yang berkaitan dengan pengguna, seperti mencari, mencari berdasarkan ID, membuat baru, menghapus, dan memperbarui informasi pengguna.
// Setiap method dalam UserController memanggil method yang sesuai dari UserService untuk melakukan tugas terkait, dengan meneruskan data permintaan dan respon.
// Instance dari class UserController diekspor untuk digunakan dalam mengatur rute dan operasi terkait pengguna dalam aplikasi.
// Dengan pendekatan ini, code memisahkan tanggung jawab antara mengatur rute dan operasi bisnis terkait pengguna (user), membantu menjaga struktur aplikasi yang lebih terorganisir.
// Ekspor instance dari class UserController yang telah dibuat
export default new UserController();
