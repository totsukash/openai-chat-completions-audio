import OpenAI from "openai";

const openai = new OpenAI();

// 音声ファイルを取得し、base64文字列に変換する
const url = "https://openaiassets.blob.core.windows.net/$web/API/docs/audio/alloy.wav";
const audioResponse = await fetch(url);
const buffer = await audioResponse.arrayBuffer();
const base64str = Buffer.from(buffer).toString("base64");

const response = await openai.chat.completions.create({
  model: "gpt-4o-audio-preview",
  modalities: ["text", "audio"],
  audio: {voice: "alloy", format: "wav"},
  messages: [
    {
      role: "user",
      content: [
        {type: "text", text: "Response to audio input"},
        {type: "input_audio", input_audio: {data: base64str, format: "wav"}}
      ]
    }
  ]
});

console.log(response.choices[0]);