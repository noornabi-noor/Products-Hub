import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     return "/products"; 
  //   },
  // },

  callbacks: {
  async redirect({ url, baseUrl }) {
    // If the URL is on the same origin, return it
    if (url.startsWith(baseUrl)) return url;
    // Otherwise, fallback to homepage
    return baseUrl;
  },
},
});

export { handler as GET, handler as POST };