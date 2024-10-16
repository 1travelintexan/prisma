import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //.deleteMany() removes all from the db
  //.create({data: {}}) creates one and expects and object with a data key
  //.createMany(data:[{},{}]) creates everything given in an array. Expects a data key that has and array of objects
  //.findFirst({ where: { name: "Joshua" } }) finds the first occurrence of something, expects an object with where to look
  //.findUnique({ where: { name: "Joshua" } }) finds something based on a key that is unique, also needs a where to look for matches
  //.findMany({ where: { name: "Joshua" } }) finds an array of matching elements can take a where or empty will return all rows
  //.update({ where: { name: "Joshua" } }, data:{name: 'Ragnar'}) needs a where to find a match and then a data key to say what to update

  //clean DB so no overlap on emails
  //   await prisma.user.deleteMany();
  //---------------------------------------------------------//
  //************** create one user ************/
  const newUser = await prisma.user.create({
    data: {
      name: "Jordan",
      email: "jordan@jordan.com",
      age: 32,
      isAdmin: true,
    },
  });
  console.log("here is the new user", newUser);
  //---------------------------------------------------------//
  //***************create a new users as an array*************************
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
  //---------------------------------------------------------//
  //******************************************************* */
  //***************find the first matching result**************************
  //   const foundUser = await prisma.user.findFirst({ where: { name: "Joshua" } });
  //   console.log("user that was found", foundUser);
  //---------------------------------------------------------//
  //******************************************************* */
  //***************find the first matching result**************************
  //   const foundUsers = await prisma.user.findMany();
  //   console.log("users that were found", foundUsers);
  //---------------------------------------------------------//
  //******************************************************* */
  //**************** update ONE user *******************************/
  //Remember to find by something that is unique
  //   const updatedUser = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { name: "Jordan" },
  //   });
  //   console.log("user that was updated", updatedUser);
  //---------------------------------------------------------//
  //******************************************************* */
  //**************** update MANY users *****************************/
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
