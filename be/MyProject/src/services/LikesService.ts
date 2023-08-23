import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Likes } from "../entities/Likes";

// Definisikan class LikesService untuk mengelola operasi terkait likes
class LikesService {
    // Mendapatkan repository untuk entitas Likes
    private readonly likeRepositori: Repository<Likes> = AppDataSource.getRepository(Likes);

    // Method async untuk membuat like baru
    async create(reqBody: any, loginSession: any): Promise<any> {
        try {
            // Mengecek apakah like sudah ada berdasarkan user dan thread yang diberikan
            const isLikeExit = await this.likeRepositori.count({
                where: {
                    user: {
                        id: loginSession.user.id
                    },
                    threads: {
                        id: reqBody.thread_id
                    }
                }
            });

            // Jika like sudah ada, lempar error
            if (isLikeExit > 0) {
                throw new Error("Anda sudah menyukai thread ini sebelumnya");
            }

            // Membuat objek like baru
            const like = this.likeRepositori.create({
                threads: {
                    id: reqBody.thread_id,
                },
                user: {
                    id: loginSession.user.id,
                }
            });

            // Menyimpan like baru ke dalam database
            await this.likeRepositori.save(like);

            // Mengembalikan respon sukses dengan pesan dan data like yang baru dibuat
            return {
                message: "Anda telah menyukai thread ini",
                like: like
            };
        } catch (error) {
            // Jika terjadi error, lempar error dengan pesan yang diambil dari error asli
            throw new Error(error.message);
        }
    }

    // Import modul yang diperlukan, termasuk Repository dari TypeORM, AppDataSource yang merupakan sumber data aplikasi, dan entitas Likes.
    // Class LikesService dibuat untuk mengelola operasi terkait likes dalam aplikasi.
    // Repository untuk entitas Likes didapatkan dari AppDataSource.
    // Method create digunakan untuk membuat like baru:
    // Mengecek apakah like sudah ada berdasarkan user dan thread yang diberikan.
    // Jika like sudah ada, error dilempar dengan pesan yang sesuai.
    // Jika like belum ada, objek like baru dibuat dan disimpan ke dalam database.
    // Mengembalikan respon sukses dengan pesan dan data like yang baru dibuat.
    // Jika terjadi error, error dilempar dengan pesan yang diambil dari error asli.
    // Instance dari class LikesService diekspor untuk digunakan dalam mengatur operasi terkait likes dalam aplikasi.



    // Method async untuk menghapus like
    async delete(threadId: number, loginSession: any): Promise<any> {
        try {
            // Mencari like berdasarkan threadId dan user dari session login
            const like = await this.likeRepositori.findOne({
                where: {
                    threads: {
                        id: threadId
                    },
                    user: {
                        id: loginSession.user.id
                    }
                }
            });

            // Jika like tidak ditemukan, lempar error
            if (!like) {
                throw new Error("Anda belum menyukai thread ini");
            }

            // Menghapus like dari database berdasarkan ID
            await this.likeRepositori.delete({
                id: like.id,
            });

            // Mengembalikan respon sukses dengan pesan dan data like yang dihapus
            return {
                message: "Anda telah tidak menyukai thread ini lagi",
                like: like
            };
        } catch (error) {
            // Jika terjadi error, lempar error dengan pesan yang diambil dari error asli
            throw new Error(error.message);
        }
    }
    //     Class LikesService dibuat untuk mengelola operasi terkait likes dalam aplikasi.
    // Repository untuk entitas Likes didapatkan dari AppDataSource.
    // Method delete digunakan untuk menghapus like:
    // Mencari like berdasarkan threadId dan user dari session login.
    // Jika like tidak ditemukan, error dilempar dengan pesan yang sesuai.
    // Jika like ditemukan, like dihapus dari database berdasarkan ID.
    // Mengembalikan respon sukses dengan pesan dan data like yang dihapus.
    // Jika terjadi error, error dilempar dengan pesan yang diambil dari error asli.
    // Instance dari class LikesService diekspor untuk digunakan dalam mengatur operasi terkait likes dalam aplikasi.
}
// Ekspor instance dari class LikesService yang telah dibuat
export default new LikesService();
