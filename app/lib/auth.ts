import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();
    if (!user) {
        return null
    }

    // check in db
    const existingUser = await db.user.findUnique({ where: { clerkUserId: user.id } });
    if (existingUser) { return existingUser }
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    })
    return newUser;
}