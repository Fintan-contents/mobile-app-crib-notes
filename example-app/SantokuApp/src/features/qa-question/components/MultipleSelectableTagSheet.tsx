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

import {Tag as TagType} from 'features/backend/apis/model';
import React, {useCallback, useState} from 'react';

import {TagSheet} from './TagSheet';

type MultipleSelectableTagSheetProps = {
  tags?: TagType[];
  isVisible: boolean;
  initialSelectedTagIds: string[];
  select: (tagIds: string[]) => void;
  close: () => void;
};
export const MultipleSelectableTagSheet: React.FC<MultipleSelectableTagSheetProps> = ({
  tags,
  isVisible,
  initialSelectedTagIds,
  select,
  close,
}) => {
  const [selectedTagIds, setSelectedTagIds] = useState(initialSelectedTagIds);
  const selectTag = useCallback(
    (value: string) => {
      if (selectedTagIds.includes(value)) {
        setSelectedTagIds(v => v.filter(i => i !== value));
      } else {
        setSelectedTagIds(v => [...v, value]);
      }
    },
    [selectedTagIds],
  );

  const clear = useCallback(() => setSelectedTagIds([]), []);

  const decide = useCallback(() => select(selectedTagIds), [select, selectedTagIds]);
  const isActive = useCallback((tagId: string) => selectedTagIds.includes(tagId), [selectedTagIds]);

  return (
    <TagSheet
      tags={tags}
      isVisible={isVisible}
      clear={clear}
      decide={decide}
      selectTag={selectTag}
      isActive={isActive}
      close={close}
    />
  );
};
