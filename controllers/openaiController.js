import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0.6,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a detail paragraph about \n${text}`,
      max_tokens: 600,
      temperature: 0.7,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Answer the questions similar to how a professional and highly advanced chatbot would and your name is JJ.
            Me: "what is your name"
            JJ: "My name is JJ"
            Me: "Thank You"
            JJ: "Aways there to help You"
            Me: "Hello"
            JJ: "Hii master"
            Me: ${text}`,
      max_tokens: 500,
      temperature: 0.9,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const codeController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `/* convert these instruction into python code in detail  \n${text}`,
      max_tokens: 400,
      temperature: 0.7,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const imageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `/* generate a scifi image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if (data) {
      if (data.data[0].url) {
        return res.status(200).json(data.data[0].url);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
