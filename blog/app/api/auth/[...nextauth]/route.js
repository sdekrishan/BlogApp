import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import UserModel from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks:{
    async session({ session }) {
        const sessionUser = await UserModel.findOne({email:session.user.email})
    
        session.user.id = sessionUser._id
        return session
      },
      async signIn({ profile }) {
        try {
          await connectToDB();
    
          // for checking the user is connected or not
          const userExists = await UserModel.findOne({ email: profile.email });
          if (!userExists) {
            await UserModel.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
  // }
  
});

export { handler as GET, handler as POST };
