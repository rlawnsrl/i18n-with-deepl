## Deepl을 이용한 번역기

### 사용법

1. deepl api 키를 얻는다.

2. .env 파일 만들고 `DEEPL_API_KEY=xxxxxxx` api 키를 넣는다.

3. `run.ts`에서 두 변수를 수정한다.

```typescript
// only English text
const translatorConfig: Config = {
  auth: process.env.DEEPL_API_KEY!,
  targets: ["ko", "en-US"], // 번역할 대상
  texts: ["Hello friend!", "Whats going on?"], // 번역할 문자
};

//result path
const resultPath: string = "result.json"; // 결과 파일 저장위치
```

### 결과

```json
// result.json
{
  "Hello friend!": { "ko": "안녕 친구!", "en-US": "Hello friend!" },
  "Whats going on?": { "ko": "무슨 일이에요?", "en-US": "Whats going on?" }
}
```
