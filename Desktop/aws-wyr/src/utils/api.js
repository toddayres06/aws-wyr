const API_URL = "https://vy3xzk2c4a.execute-api.us-east-2.amazonaws.com/prod/questions";

export const fetchRandomQuestion = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch question");
        }

        const data = await response.json(); // Directly parse JSON
        console.log("Fetched and Parsed Data:", data);

        return data; // Return the object (question, option1, option2)
    } catch (error) {
        console.error("Error fetching question:", error);
        return { question: "Would you rather use AWS or Google Cloud?", option1: "AWS", option2: "Google Cloud" }; // Fallback question
    }
};
