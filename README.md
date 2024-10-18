# openai-chat-completions-audio

2024/10/18にOpenAIが発表した音声生成のサンプルコードです。

## setup

```bash
$ cp .env.sample .env
$ npm install
````

OpenIのAPIキーを`.env`に設定してください。

- https://platform.openai.com/api-keys

## Usage

1. テキストを入力して音声を生成する

プロンプトに入力した文字列に対して、音声で応答を生成します。

```bash
$ npm run dev:output_audio
```

2. 音声を入力してテキストを生成する

音声ファイルを入力して、テキストで応答を生成します。

```bash
$ npm run dev:input_audio
```

## URL

- [OpenAIドキュメント](https://platform.openai.com/docs/guides/audio)
- [npakaさんnote](https://note.com/npaka/n/ne6ef35e84903)
