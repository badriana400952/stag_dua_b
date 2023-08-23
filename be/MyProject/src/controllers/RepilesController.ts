// Mengimpor modul yang diperlukan
import { Request, Response } from "express";
import RepilesService from "../services/RepilesService"; // Mengimpor layanan RepilesService

// Definisikan class RepilesController untuk mengelola operasi terkait balasan (replies)
class RepilesController {
    // Method async untuk mencari balasan
    async find(req: Request, res: Response) {
        try {
            // Memanggil method find dari RepilesService dengan meneruskan query request
            const response = await RepilesService.find(req.query);
            // Mengembalikan respon sukses dengan status 200 dan data balasan
            return res.status(200).json(response);
        } catch (error) {
            // Mengembalikan respon kesalahan server dengan status 500 jika terjadi error
            return res
                .status(500)
                .json({ error: "Terjadi kesalahan pada server" });
        }
    }

    // Method async untuk membuat balasan baru
    async create(req: Request, res: Response) {
        try {
            // Mendapatkan informasi login session dari res.locals
            const loginSession = res.locals.loginSession;

            // Memanggil method create dari RepilesService dengan meneruskan data permintaan dan informasi session
            const response = await RepilesService.create(req.body, loginSession);
            // Mengembalikan respon sukses dengan status 200 dan data balasan yang baru dibuat
            return res.status(200).json(response);
        } catch (error) {
            // Mengembalikan respon kesalahan server dengan status 500 jika terjadi error
            return res
                .status(500)
                .json({ error: "Terjadi kesalahan pada server" });
        }
    }
}
// Class RepilesController dibuat untuk mengelola operasi terkait balasan (replies) dalam aplikasi.
// Method find digunakan untuk mencari balasan:
// Memanggil method find dari RepilesService dengan meneruskan query yang ada dalam request.
// Jika berhasil, mengirimkan respon dengan status 200 dan data balasan yang ditemukan.
// Jika terjadi error, mengirimkan respon kesalahan server dengan status 500.
// Method create digunakan untuk membuat balasan baru:
// Mendapatkan informasi login session dari res.locals.
// Memanggil method create dari RepilesService dengan meneruskan data dari permintaan dan informasi session.
// Jika berhasil, mengirimkan respon dengan status 200 dan data balasan yang baru dibuat.
// Jika terjadi error, mengirimkan respon kesalahan server dengan status 500.
// Instance dari class RepilesController diekspor untuk digunakan dalam mengatur rute dan operasi terkait balasan dalam aplikasi.
// Dengan pendekatan ini, code memisahkan tanggung jawab antara mengatur rute dan operasi bisnis terkait balasan (replies), membantu menjaga struktur aplikasi yang lebih terorganisir.







// Ekspor instance dari class RepilesController yang telah dibuat
export default new RepilesController;
