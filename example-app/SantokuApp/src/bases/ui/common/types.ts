import {restyleTheme} from '../theme/restyleTheme';

export type StyledSpacingKeys = keyof typeof restyleTheme.spacing;
export type StyledSpaceProps = {space: StyledSpacingKeys};
