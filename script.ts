import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //clean DB so no overlap on emails
  //   await prisma.user.deleteMany();
  //************** create one user */
  const newUser = await prisma.user.create({
    data: {
      name: "Jordan",
      email: "jordan@jordan.com",
      age: 32,
      isAdmin: true,
    },
  });
  console.log("here is the new user", newUser);
  //***************create a new users as an array
  //   const newUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Mitch",
  //         email: "mitch@mitch.com",
  //         age: 31,
  //         isAdmin: false,
  //       },
  //       {
  //         name: "Joshua",
  //         email: "joshua@joshua.com",
  //         age: 38,
  //         isAdmin: true,
  //       },
  //     ],
  //   });
  //   console.log("user created", newUser);
  //******************************************************* */
  //***************find the first matching result
  //   const foundUser = await prisma.user.findFirst({ where: { name: "Joshua" } });
  //   console.log("user that was found", foundUser);
  //******************************************************* */
  //***************find the first matching result
  //   const foundUsers = await prisma.user.findMany();
  //   console.log("users that were found", foundUsers);
  //******************************************************* */
  //**************** update ONE user */
  //Remember to find by something that is unique
  //   const updatedUser = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { name: "Jordan" },
  //   });
  //   console.log("user that was updated", updatedUser);
  //******************************************************* */
  //**************** update MANY users */
  //   const updatedUsers = await prisma.user.updateMany({
  //     where: { name: "Jordan" },
  //     data: { name: "Mitchell" },
  //   });
  // console.log("users that were updated", updatedUsers);
}
main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
