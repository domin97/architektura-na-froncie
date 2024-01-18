enum PageSize {
  _10 = 10,
  _25 = 25,
  _50 = 50,
  _100 = 100,
}

// 🔥 MASSIVE WIN! TypeScript poprawił tego babola w v5.0 🥳
// https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#all-enums-are-union-enums
const defaultSize: PageSize = 7234 // 😞
