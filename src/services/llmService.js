// src/services/llmService.js

import axios from 'axios';

const LLM_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Replace with your LLM API endpoint
const API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

/**
 * Sends a prompt to the LLM API and returns the response.
 * @param {string} prompt - The input prompt for the LLM.
 * @returns {Promise<string>} - The LLM's response.
 */
export const getLLMResponse = async (prompt) => {
  try {
    const response = await axios.post(
      LLM_API_URL,
      {
        prompt: prompt,
        max_tokens: 150, // Adjust the token limit as needed
        temperature: 0.7, // Adjust the creativity level as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('Invalid response structure from LLM API');
    }
  } catch (error) {
    console.error('Error fetching LLM response:', error);
    throw error;
  }
};
