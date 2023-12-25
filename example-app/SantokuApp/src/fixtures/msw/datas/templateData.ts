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

export const templateData = () => {
  db.template.create({
    templateId: '1',
    title: '技術',
    content: `【問い合わせ内容】

【環境】

【目的】

【その他】
`,
  });
  db.template.create({
    templateId: '2',
    title: '提案',
    content: `【提案概要】

【困っていること】

`,
  });
};
