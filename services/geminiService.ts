import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the assistant for AURUM STUDIO, a premium salon in Rajagiriya, Sri Lanka.
Your tone is friendly, polite, and helpful.

Location: 121, 1 Parliament Rd, Rajagiriya.
Phone: +94 77 751 2222
Email: aurumstudioslk@gmail.com

You handle questions about pricing, booking, and beauty services.
Keep replies polite, warm, and luxury-toned.

RULES:
- Use clear English.
- Keep replies under 80 words.
- Suggest clicking the "Book Now" button for direct appointments.
`;

export async function getChatResponse(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });
    
    // Accessing .text property directly as per latest guidelines
    return response.text || "I'm sorry, I'm having trouble responding. Please call us at +94 77 751 2222.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you for reaching out. Please call our studio directly at +94 77 751 2222 for help.";
  }
}