import NextAuth from "next-auth";

// import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      premium: boolean;
      lukqhdsngvkfq: boolean;
      city: string;
    } & Session["user"];
  }
  interface User {
    id: string;
    name: string;
    premium: boolean;
    lukqhdsngvkfq: boolean;
    city: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    premium: boolean;
    lukqhdsngvkfq: boolean;
    city: string;
  }
}
