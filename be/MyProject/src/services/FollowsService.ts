import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Follow } from "../entities/Follow";
import { User } from "../entities/User";

class FollowsService {
  private readonly followRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow);

  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(
    loginSession: any,
    queryType?: string,
    queryLimit?: number
  ): Promise<any> {
    try {
      let follows: Follow[];

      if (queryType === "followings") {
        follows = await this.followRepository.find({
          take: queryLimit,
          where: {
            follower: {
              id: loginSession.user.id,
            },
          },
          relations: ["followed", "follower"],
        });

        return follows.map((follow) => ({
          id: follow.id,
          user_id: follow.followed.id,
          username: follow.followed.username,
          name: follow.followed.name,
          email: follow.followed.email,
          profile_picture: follow.followed.profile_picture,
          profile_deskripsi: follow.followed.profile_deskripsi,
          is_followed: true,
        }));
      } else if (queryType === "followers") {
        follows = await this.followRepository.find({
          take: queryLimit,
          where: {
            followed: {
              id: loginSession.user.id,
            },
          },
          relations: ["followed", "follower"],
        });

        return await Promise.all(
          follows.map(async (follow) => {
            const isFollowed = await this.followRepository.count({
              where: {
                follower: {
                  id: loginSession.user.id,
                },
                followed: {
                  id: follow.follower.id,
                },
              },
            });

            return {
              id: follow.id,
              user_id: follow.follower.id,
              username: follow.follower.username,
              name: follow.follower.name,
              email: follow.follower.email,
              profile_picture: follow.follower.profile_picture,
              profile_deskripsi: follow.follower.profile_deskripsi,
              is_followed: isFollowed > 0,
            };
          })
        );
      }

      return {
        message: `Please specify valid query "type" (followers / followings)`,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(reqBody: any, loginSession: any): Promise<any> {
    try {
      const isFollowExist = await this.followRepository.count({
        where: {
          follower: {
            id: loginSession.user.id,
          },
          followed: {
            id: reqBody.followed_user_id,
          },
        },
      });
      console.log("isFollowExist",isFollowExist)


      if (isFollowExist > 0) {
        throw new Error("You already follow this user!");
      }

      if (reqBody.followed_user_id === loginSession.user.id) {
        throw new Error("You can't follow yourself!");
      }

      const isUserExist = await this.userRepository.count({
        where: {
          id: reqBody.followed_user_id,
        },
      });

      if (isUserExist <= 0) {
        throw new Error("This user doesn't exist!");
      }

      const follow = this.followRepository.create({
        follower: {
          id: loginSession.user.id,
        },
        followed: {
          id: reqBody.followed_user_id,
        },
      });
      console.log("folloewdfollowedfollowedfollowed",follow)

      await this.followRepository.save(follow);

      return {
        message: "You follow this user!",
        follow: follow,
      };
    } catch (error) {
      throw new Error(error.message);
    }
}

// async findRandom(reqQuery?: any,  loginSession: any): Promise<any> {
//         try {
//             let follows = Follow
//             const limit = parseInt(reqQuery.limit ?? 0)
//             const users = await this.userRepository
//           .createQueryBuilder('users')
//           .select()
//           .orderBy('RANDOM()')
//           .take(limit)
//           .getMany();
 
//          





 
//           return users?.map((follow) => ({
//             id: follow.id,
//             user_id: follow.id,
//             username: follow.username,
//             name: follow.name,
//             email: follow.email,
//             profile_picture: follow.profile_picture,
//             profile_deskripsi: follow.profile_deskripsi,
//                 is_followed: true
//           }))
          
//         } catch (error) {
//          throw new Error(error.message)
//         }
//      }


async findRandom(reqQuery?: any): Promise<any> {
  try {
    let follows = Follow;
    const limit = parseInt(reqQuery.limit ?? 0);
    const users = await this.userRepository
      .createQueryBuilder("users")
      .select()
      .orderBy("RANDOM()")
      .take(limit)
      .getMany();

      return users.map((user) => ({
        id: user.id,
        user_id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        profile_picture: user.profile_picture,
        profile_deskripsi: user.profile_deskripsi,
        is_followed: false//user.id === reqQuery.followed_user_id,
    }));
  } catch (error) {
    throw new Error(error.message);
  }
}


// async findRandom(reqQuery: any, loginSession: any): Promise<any> {
//   try {
//     const limit = parseInt(reqQuery.limit ?? 0);
    
//     // Mengambil pengguna secara acak
//     const users = await this.userRepository
//       .createQueryBuilder('users')
//       .select()
//       .orderBy('RANDOM()')
//       .take(limit)
//       .getMany();

//     // Memeriksa apakah pengguna yang akan diikuti sudah diikuti atau tidak
//     const isFollowExist = await this.followRepository.count({
//       where: {
//         follower: {
//           id: loginSession.user.id,
//         },
//         followed: {
//           id: reqQuery.followed_user_id,
//         },
//       },
//     });

//     if (isFollowExist > 0) {
//       throw new Error("You already follow this user!");
//     }

//     if (reqQuery.followed_user_id === loginSession.user.id) {
//       throw new Error("You can't follow yourself!");
//     }

//     // Memeriksa apakah pengguna yang akan diikuti ada atau tidak
//     const followedUser = await this.userRepository.findOne({
//       where: {
//         id: reqQuery.followed_user_id,
//       },
//     });

//     if (!followedUser) {
//       throw new Error("This user doesn't exist!");
//     }

//     // Membuat entitas Follow baru dan menyimpannya
//     const follow = this.followRepository.create({
//       follower: {
//         id: loginSession.user.id,
//       },
//       followed: {
//         id: reqQuery.followed_user_id,
//       },
//     });

//     // Simpan entitas Follow ke dalam database
//     await this.followRepository.save(follow);

//     // Mengembalikan pengguna yang telah diikuti
//     return users.map((user) => ({
//       id: user.id,
//       user_id: user.id,
//       username: user.username,
//       name: user.name,
//       email: user.email,
//       profile_picture: user.profile_picture,
//       profile_deskripsi: user.profile_deskripsi,
//       is_followed: user.id === reqQuery.followed_user_id,
//     }));
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }




  async delete(followedUserId: number, loginSession: any): Promise<any> {
    try {
      const follow = await this.followRepository.findOne({
        where: {
          follower: {
            id: loginSession.user.id,
          },
          followed: {
            id: followedUserId,
          },
        },
      });

      if (!follow) {
        throw new Error("You didn't follow this user!");
      }

      await this.followRepository.delete({
        id: follow.id,
      });

      return {
        message: "You unfollow this user!",
        follow: follow,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new FollowsService();
