import User from '@/models/User';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require('bcrypt');


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {

        if (!credentials || !credentials.email || !credentials.password) {
          return null

        }
        // Add logic here to look up the user from the credentials supplied
        if (credentials.method === "login") {
          const dbUser = await User.findOne({
            where: {
              email: credentials.email
            }
          });
          if (dbUser) {
            
            if (bcrypt.compareSync( credentials.password, dbUser.password)) {
              dbUser.name = dbUser.username
              return dbUser
            }
            // Any object returned will be saved in `user` property of the JWT

          } else return null
        }

        if (credentials.method === "register") {
          const dbUser = await User.findOne({
            where: {
              email: credentials.email
            }
          });
          if (!dbUser) {
            const hash = bcrypt.hashSync(credentials.password, 10)



            const user = await User.create({
              email: credentials.email,
              username: credentials.given_name + " " + credentials.family_name,
              password: hash,
              given_name: credentials?.given_name,
              family_name: credentials?.family_name,

            });
            user.name = user.username
            return user
          } else return null
        }
        else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ], pages: {
    signIn: '/signin'
  }, callbacks: {
    async session({ session }) {
      try {

        const sessionUser = await User.findOne({ where: { email: session.user.email } });
        session.user.id = sessionUser.id.toString();

        return session;
      } catch (error) {
        console.log("Error creando la sesion: ", error.message);
        return error
      }
    },
    async signIn({ user, account, profile, email, credentials }) {

      if (profile) {

        try {
          const userExists = await User.findOne({ where: { email: profile.email } });
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name,
              given_name: profile?.given_name,
              family_name: profile?.family_name,
              provider: account.provider
            });
          }

          return true
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false
        }
      }
      if (credentials) {


        return true

      }
    },
  }

}
)

export { handler as GET, handler as POST }