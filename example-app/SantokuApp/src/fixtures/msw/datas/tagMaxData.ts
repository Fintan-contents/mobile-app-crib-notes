import {maxDb} from '../db';

export const tagMaxData = () => {
  maxDb.tag.create({tagId: '1', tagName: 'apple-developer-enterprise-program', questions: 2});
  [...(Array(49) as unknown[])].forEach((_, index) => {
    maxDb.tag.create({tagId: String(index + 2), tagName: `技術支援${index + 1}`, questions: 2});
  });
};
