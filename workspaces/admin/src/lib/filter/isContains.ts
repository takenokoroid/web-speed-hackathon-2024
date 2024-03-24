import { compareWithFlags, PRIMARY as UCA_L1_FLAG, SECONDARY as UCA_L2_FLAG } from 'unicode-collation-algorithm2';

const SENSITIVITY_ACCENT_FLAG = UCA_L1_FLAG ^ UCA_L2_FLAG;

type Params = {
  query: string;
  target: string;
};

export function isContains({ query, target }: Params): boolean {
  // 文字列を正規化する
  const normalizedQuery = query.normalize('NFC');
  const normalizedTarget = target.normalize('NFC');

  // Boyer-Mooreアルゴリズムの単純化版を用いた検索
  const m = normalizedQuery.length;
  const n = normalizedTarget.length;

  let skip: number;
  for (let i = 0; i <= n - m; i += skip) {
    skip = 0;
    for (let j = m - 1; j >= 0; j--) {
      if (compareWithFlags(normalizedTarget[i + j], normalizedQuery[j], SENSITIVITY_ACCENT_FLAG) !== 0) {
        skip = Math.max(1, j);
        break;
      }
    }
    if (skip == 0) return true; // 発見された場合
  }

  return false; // 発見されなかった場合
}
