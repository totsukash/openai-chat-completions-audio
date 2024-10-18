import {existsSync, mkdirSync, writeFileSync} from "node:fs";
import OpenAI from "openai";

const openai = new OpenAI();

// 与えられたプロンプトに対する音声応答を生成する
const response = await openai.chat.completions.create({
  model: "gpt-4o-audio-preview",
  modalities: ["text", "audio"],
  audio: {voice: "alloy", format: "wav"},
  messages: [
    {
      role: "user",
      content: "こんにちは！今日の調子はどう？"
    }
  ]
});

// 返されたデータを確認する
// console.log(response.choices[0]);

// outputディレクトリを作成する（存在しない場合）
const outputDir = "./outputs";
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

// 音声データをファイルに書き込む
writeFileSync(
  `${outputDir}/audio.wav`,
  Buffer.from(response.choices[0].message.audio.data, 'base64'),
  {encoding: "utf-8"}
);