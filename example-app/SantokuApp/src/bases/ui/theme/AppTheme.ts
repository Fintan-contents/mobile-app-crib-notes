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

export type AppTheme = {
  /**
   * Theme name.
   */
  name: string;
  /**
   * Color settings group for this theme.
   */
  colors: {
    /**
     * Standard background color of the screen.
     */
    background: string;
    /**
     * Header background color.
     */
    backgroundHeader: string;
    /**
     * Background color of bottom tab.
     */
    backgroundBottomTab: string;
    /**
     * Background color of the snack bar used for notifications.
     */
    backgroundSnackbar: string;
    /**
     * Standard font color.
     */
    text: string;
    /**
     * Text color to be used when overlaid on a background with a different shade from the standard background color,
     * or when you want to invert the color within a selection.
     */
    textInverted: string;
    /**
     * Text color for more emphasis than standard (e.g. title)
     */
    textStrong: string;
    /**
     * Text color if you want it to be more subdued than standard (e.g. placeholders)
     */
    textWeak: string;
    /**
     * Standard border color.
     */
    border: string;
    /**
     * Border color for more emphasis than standard (e.g., underline in text entry field)
     */
    borderStrong: string;
    /**
     * Colors used for elements that you want to emphasize, such as normal buttons and selected elements.
     */
    primary: string;
    /**
     * Primary color for overlaid on a background with a different shade from the standard background color,
     * also used for expressing shading in combination with primary.
     */
    primaryVariant: string;
    /**
     * Colors used for auxiliary elements.
     */
    secondary: string;
    /**
     * Secondary color for overlay on a background with a different shade from the standard background color.
     * It is also used to express shading by placing it with secondary at the same time.
     */
    secondaryVariant: string;
    /**
     * The color to use for elements that are disabled or unselected.
     */
    inactive: string;
    /**
     * Colors used for destructive operation buttons and warnings against destructive operations (e.g. delete button)
     */
    danger: string;
    /**
     * Colors used for error messages.
     */
    error: string;
    /**
     * Colors used for warning messages.
     */
    warning: string;
  };
};
