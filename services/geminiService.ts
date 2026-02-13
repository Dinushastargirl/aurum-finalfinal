import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the assistant for AURUM STUDIO, a premium salon in Rajagiriya, Sri Lanka.
Your tone is friendly, polite, and professional.

Location: 121, 1 Parliament Rd, Rajagiriya.
Phone: +94 77 751 2222
Email: aurumstudioslk@gmail.com

You handle questions about:
- Services: Hair styling, skin care, makeup, nails, and grooming.
- Booking: Direct users to the "Book Now" button.

RULES:
- Be warm and welcoming.
- Keep replies under 70 words.
- Professional English.
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
    
    // Access .text property directly as per latest guidelines
    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at +94 77 751 2222.";
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "Thank you for reaching out. For immediate assistance, please call Aurum Studio at +94 77 751 2222.";
  }
}