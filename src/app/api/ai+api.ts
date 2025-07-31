/* import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const { exerciseName } = await request.json();

    if (!exerciseName) {
        return Response.json(
            {error: "Exercise name is required" },
            {status: 404 }
        );
    }

    const prompt = `
    You are a fitness coach.
    You are given an exercise, provide clear instructions on how to perform the exercise. Include if any equipment is required.
    Explain the exercise in detail and for a beginner.
    
    The exercise name is: ${exerciseName}
    
    Keep it short and concise. Use markdown formatting.
    
    Use the following format:
    
    ## Equipment Required
    
    ## Instruction
    
    ### Tips
    
    ### Variations
    
    ### Safety
    
    keep spacing between the headings and the content.
    
    Always use headings and subheadings.
    `;

    console.log(prompt);

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
        });

        console.log(response);
        return Response.json({ message: response.choices[0].message.content });
    } catch (error) {
        console.error("Error fetching AI Guidance:", error);
        return Response.json(
            { error: "Error fetching AI Guidance" },
            { status: 500 }
        );
    }
}
*/

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
    const { exerciseName } = await request.json();

    if (!exerciseName) {
        return Response.json(
            { error: "Exercise name is required" },
            { status: 400 } 
        );
    }
    

    if (!process.env.GEMINI_API_KEY) {
        console.error("GEMINI_API_KEY environment variable is not set.");
        return Response.json(
            { error: "Server configuration error: Gemini API key is missing." },
            { status: 500 }
        );
    }

    const prompt = `
    You are a fitness coach.
    You are given an exercise, provide clear instructions on how to perform the exercise. Include if any equipment is required.
    Explain the exercise in detail and for a beginner.
    
    The exercise name is: ${exerciseName}
    
    Keep it short and concise. Use markdown formatting.
    
    Use the following format:
    
    ## Equipment Required
    
    ## Instruction
    
    ### Tips
    
    ### Variations
    
    ### Safety
    
    keep spacing between the headings and the content.
    
    Always use headings and subheadings.
    `;

    console.log("Prompt sent to Gemini:", prompt);

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        
        const response = await result.response;
        
        const text = response.text();

        console.log("Gemini API Full Response Object:", response);
        console.log("AI Guidance Text:", text);

        return Response.json({ message: text });

    } catch (error) {
        console.error("Error fetching AI Guidance from Gemini:", error);
        return Response.json(
            { 
                error: "Error fetching AI Guidance from Gemini", 
                details: error.message || "An unknown error occurred." 
            },
            { status: 500 }
        );
    }
}
