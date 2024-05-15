import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise } from "./database/client-promise";
import CredentialProviders from "next-auth/providers/credentials";
import { dbConnection } from "./db-connection/mongo";
import { userModel } from "./models/user-model";
import bcryptjs from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProviders({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await dbConnection();

        try {
          const user = await userModel.findOne({
            email: credentials?.email,
          });
          if (user) {
            const isMatch = await bcryptjs.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
    }),
  ],
});
