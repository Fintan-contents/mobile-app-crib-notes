/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
