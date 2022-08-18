import {maxDb} from '../db';

export const templateMaxData = () => {
  maxDb.template.create({
    templateId: '1',
    title: '技術',
    content: `【問い合わせ内容】

【環境】

【目的】

【その他】
`,
  });
  maxDb.template.create({
    templateId: '2',
    title: '提案',
    content: `【提案概要】

【困っていること】

`,
  });
};
