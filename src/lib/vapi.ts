// lib/vapi.ts
import Vapi from "@vapi-ai/web";

const vapiApiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;

if (!vapiApiKey) {
  console.warn("Vapi API Key is missing");
}

export const vapi = new Vapi(vapiApiKey || "");