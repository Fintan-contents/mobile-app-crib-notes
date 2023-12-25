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

type SingleSelectableTagSheetProps = {
  tags?: TagType[];
  isVisible: boolean;
  initialSelectedTagId?: string;
  select: (tagId?: string) => void;
  close: () => void;
};

export const SingleSelectableTagSheet: React.FC<SingleSelectableTagSheetProps> = ({
  tags,
  isVisible,
  initialSelectedTagId,
  select,
  close,
}) => {
  const [selectedTagId, setSelectedTagId] = useState(initialSelectedTagId);

  const clear = useCallback(() => setSelectedTagId(undefined), []);

  const selectTag = useCallback((value: string) => {
    setSelectedTagId(value);
  }, []);
  const decide = useCallback(() => select(selectedTagId), [select, selectedTagId]);
  const isActive = useCallback((tagId: string) => selectedTagId === tagId, [selectedTagId]);

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
