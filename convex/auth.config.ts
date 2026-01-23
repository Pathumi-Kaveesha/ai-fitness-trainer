import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://fine-chow-60.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;