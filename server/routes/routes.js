import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'API Running' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    const response = await openai.images.generate({
      prompt,
      model: 'dall-e-2',
      n: 1,
      response_format: 'b64_json',
      size: '1024x1024',
    });

    if (
      !response ||
      !response.data ||
      !response.data.data ||
      !response.data.data[0] ||
      !response.data.data[0].b64_json
    )
      return res.status(400).json({ error: 'Invalid response from OpenAI' });

    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
