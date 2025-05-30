import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    userType: string
  }

  interface Session {
    user: {
      id: string
      name: string
      email: string
      userType: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    userType: string
  }
} 