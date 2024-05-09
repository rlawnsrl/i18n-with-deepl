import { writeFileSync } from "fs";
import { Config, translate } from "./translate";
import "dotenv/config";

// only English text
const translatorConfig: Config = {
  auth: process.env.DEEPL_API_KEY!,
  targets: ["ko", "en-US"],
  texts: ["Hello friend!", "Whats going on?"],
};

//result path
const resultPath: string = "result.json";

// ----------------------------------------------------------------
async function run() {
  console.log(translatorConfig);
  const result = await translate(translatorConfig);

  console.log(result);
  writeFileSync(resultPath, JSON.stringify(result));
}

run();
