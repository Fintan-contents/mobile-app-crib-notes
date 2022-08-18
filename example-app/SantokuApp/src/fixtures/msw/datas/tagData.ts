import {db} from '../db';

export const tagData = () => {
  db.tag.create({tagId: '1', tagName: '技術支援', questions: 1});
  db.tag.create({tagId: '2', tagName: 'react-native', questions: 1});
  db.tag.create({tagId: '3', tagName: 'typescript', questions: 1});
  db.tag.create({tagId: '4', tagName: 'javascript', questions: 1});
  db.tag.create({tagId: '5', tagName: 'aws', questions: 1});
  db.tag.create({tagId: '6', tagName: 'nablarch', questions: 1});
  db.tag.create({tagId: '7', tagName: 'flutter', questions: 1});
  db.tag.create({tagId: '8', tagName: 'react', questions: 1});
  db.tag.create({tagId: '9', tagName: 'mobile-application', questions: 1});
  db.tag.create({tagId: '10', tagName: 'c', questions: 1});
};
