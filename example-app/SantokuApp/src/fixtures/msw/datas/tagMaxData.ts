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

import {maxDb} from '../db';

export const tagMaxData = () => {
  maxDb.tag.create({tagId: '1', tagName: 'apple-developer-enterprise-program', questions: 2});
  [...(Array(49) as unknown[])].forEach((_, index) => {
    maxDb.tag.create({tagId: String(index + 2), tagName: `技術支援${index + 1}`, questions: 2});
  });
};
