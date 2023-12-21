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

import React, {useMemo, useState} from 'react';

import {LoadingOverlayComponent} from './LoadingOverlayComponent';
import {FullWindowOverlay} from '../overlay/FullWindowOverlay';

type LoadingOverlayType = {
  visible: (visible: boolean) => void;
  Component: typeof Component;
};

const Component: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  LoadingOverlay = useMemo<LoadingOverlayType>(
    () => ({...LoadingOverlay, visible: (visible: boolean) => setVisible(visible)}),
    [],
  );
  return (
    <>
      <FullWindowOverlay>
        <LoadingOverlayComponent visible={visible} />
      </FullWindowOverlay>
    </>
  );
};

let LoadingOverlay: LoadingOverlayType = {
  visible: () => {
    throw new Error('LoadingOverlay.Component is required.');
  },
  Component,
};

export {LoadingOverlay};
