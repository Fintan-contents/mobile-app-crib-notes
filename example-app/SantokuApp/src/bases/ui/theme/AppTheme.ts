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
