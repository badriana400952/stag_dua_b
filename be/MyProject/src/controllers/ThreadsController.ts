// Mengimpor modul yang diperlukan
import { Request, Response } from "express";
import ThreadService from "../services/ThreadService"; // Mengimpor layanan ThreadService

// Definisikan class ThreadsController untuk mengelola operasi terkait thread
class ThreadsController {
    // Method async untuk mencari thread
    async find(req: Request, res: Response) {
        try {
            // Mendapatkan informasi login session dari res.locals
            const loginSession = res.locals.loginSession;

            // Memanggil method find dari ThreadService dengan meneruskan data permintaan dan informasi session
            const response = await ThreadService.find(req.body, loginSession);
            // Mengembalikan respon sukses dengan status 200 dan data thread yang ditemukan
            return res.status(200).json(response);
        } catch (error) {
            // Mengembalikan respon kesalahan server dengan status 500 jika terjadi error
            return res
                .status(500)
                .json({ error: "Terjadi kesalahan pada server" });
        }
    }
            // CARA MENTOR TERBARU
            // CARA MENTOR TERBARU
    // Method async untuk mencari satu thread berdasarkan id
    // async findOne(req: Request, res: Response) {
    // try {
    // Mendapatkan ID dari parameter permintaan dan mengonversi ke tipe data integer
    // const id = parseInt(req.params.id);

    // Mendapatkan informasi login session dari res.locals
    // const loginSession = res.locals.loginSession;

    // Memanggil method findOne dari ThreadService dengan meneruskan ID dan informasi session
    // const response = await ThreadService.findOne(id, loginSession);

    // Mengirimkan respon sukses dengan status 200 dan data thread yang ditemukan
    // return res.status(200).json(response);
    // } catch (error) {
    // Mengirimkan respon kesalahan server dengan status 500 jika terjadi error
    // return res
    // .status(500)
    // .json({ error: "Terjadi kesalahan pada server" });
    // }
    // }

    // MENTOR REBARU SAMPAI DISINI

    // CARA MENTOR LAMA
    // Method async untuk mencari satu thread berdasarkan id
    // async findOne(req: Request, res: Response) {
    //     // Memanggil method findOne dari ThreadService dengan meneruskan data permintaan dan respon
    //     ThreadService.findOne(req, res);
    // }

    async findOne(req: Request, res: Response) {
        try {
          const id = parseInt(req.params.id);
          const loginSession = res.locals.loginSession;
    
          const response = await ThreadService.findOne(id, loginSession);
          return res.status(200).json(response);
        } catch (error) {
          console.log("ini erorr baris 27", error);
          return res
            .status(500)
            .json({ error: "Error while getting findOne threads controller" });
        }
      }

    // Method untuk membuat thread baru
    create(req: Request, res: Response) {
        // Memanggil method create dari ThreadService dengan meneruskan data permintaan dan respon
        ThreadService.create(req, res);
    }

    // Method untuk menghapus thread
    delete(req: Request, res: Response) {
        // Memanggil method delete dari ThreadService dengan meneruskan data permintaan dan respon
        ThreadService.delete(req, res);
    }

    // Method untuk memperbarui informasi thread
    update(req: Request, res: Response) {
        // Memanggil method update dari ThreadService dengan meneruskan data permintaan dan respon
        ThreadService.update(req, res);
    }
}
// Diawali dengan mengimpor modul express yang dibutuhkan dan layanan ThreadService.
// Class ThreadsController dibuat untuk mengelola operasi terkait thread dalam aplikasi.
// Method find digunakan untuk mencari thread:
// Mendapatkan informasi login session dari res.locals.
// Memanggil method find dari ThreadService dengan meneruskan data dari permintaan dan informasi session.
// Jika berhasil, mengirimkan respon dengan status 200 dan data thread yang ditemukan.
// Jika terjadi error, mengirimkan respon kesalahan server dengan status 500.
// Method findOne digunakan untuk mencari satu thread berdasarkan id:
// Memanggil method findOne dari ThreadService dengan meneruskan data permintaan dan respon.
// Method create digunakan untuk membuat thread baru:
// Memanggil method create dari ThreadService dengan meneruskan data permintaan dan respon.
// Method delete digunakan untuk menghapus thread:
// Memanggil method delete dari ThreadService dengan meneruskan data permintaan dan respon.
// Method update digunakan untuk memperbarui informasi thread:
// Memanggil method update dari ThreadService dengan meneruskan data permintaan dan respon.
// Instance dari class ThreadsController diekspor untuk digunakan dalam mengatur rute dan operasi terkait thread dalam aplikasi.
// Dengan pendekatan ini, code memisahkan tanggung jawab antara mengatur rute dan operasi bisnis terkait thread, membantu menjaga struktur aplikasi yang lebih terorganisir.






// Ekspor instance dari class ThreadsController yang telah dibuat
export default new ThreadsController();



