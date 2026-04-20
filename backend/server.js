import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-story', async (req, res) => {
    try {
        const { activities } = req.body;
        
        if (!activities || activities.length === 0) {
            return res.status(400).json({ error: "No activities provided." });
        }
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const prompt = `You are a children's book author. Write a short, encouraging 3-paragraph adventure story where the reader is the hero who helps save the planet. Incorporate these specific actions they took this week: ${activities.join(', ')}. Make the tone inspiring and imaginative.`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        res.json({ story: response.text() });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to generate story" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Proxy running securely on port ${PORT}`));