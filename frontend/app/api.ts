// lib/api.ts

// export const BASE_URL = "https://vasavi-marketing-backend.onrender.com/api";
// export const MEDIA_URL = "https://vasavi-marketing-backend.onrender.com";


export const BASE_URL = "http://localhost:1337/api";
export const MEDIA_URL = "http://localhost:1337";




export async function apiRequest(endpoint: string, body?: any, method = "POST") {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return { success: false };
  }
}

export async function apiGet(endpoint: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    return await res.json();
  } catch (error) {
    console.error("GET API Error:", error);
    return { success: false };
  }
}
