
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the assistant for AURUM STUDIO, a premium salon in Rajagiriya, Sri Lanka.
Your tone is friendly, polite, and helpful.

Location: 121, 1 Parliament Rd, Rajagiriya.
Phone: +94 77 751 2222
Email: aurumstudioslk@gmail.com

You handle questions about:
- Services: Hair styling, skin care, makeup, nails, and grooming.
- Booking: Tell users to click the "Book Now" button or visit our Fresha page.
- Location: We are located in Rajagiriya at 121, 1 Parliament Rd.

RULES:
- Use clear, simple English. Avoid fancy words like "bespoke".
- Keep replies under 60 words.
- Be warm and welcoming.
`;

export async function getChatResponse(prompt: string) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });
    
    return response.text || "I'm sorry, I can't answer that right now. Please call us at +94 77 751 2222.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you for your message. Please call our studio at +94 77 751 2222 for immediate help.";
  }
}
