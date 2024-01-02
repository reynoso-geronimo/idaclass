import User from '@/models/User';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ], pages: {
    signIn: '/signin'
  }, callbacks: {
    async session({ session }) {

      const sessionUser = await User.findOne({where:{ email: session.user.email }});
      session.user.id = sessionUser.id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
       
        const userExists = await User.findOne({ where: { email: profile.email } });
        

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            provider:account.provider
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }

}
)

export { handler as GET, handler as POST }