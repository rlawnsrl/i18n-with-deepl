import * as deepl from "deepl-node";

export interface Config {
  auth: string;
  targets: deepl.TargetLanguageCode[];
  texts: string[];
}

export interface Results {
  [enText: string]: {
    [target: string]: string;
  };
}

let translator: deepl.Translator;
let curAuth = "";
export async function translate({
  auth,
  targets,
  texts,
}: Config): Promise<Results> {
  const translator = new deepl.Translator(auth);
  const results: Results = {};

  for (const text of texts) {
    if (results[text]) continue;
    results[text] = {};
    console.log(`"${text}" 번역 시작-------`);

    for (const target of targets) {
      results[text][target] = await translator
        .translateText(text, "en", target)
        .then((res) => res.text);
    }
    console.log(`"${text}" 번역 종료-------`);
  }

  return results;
}
