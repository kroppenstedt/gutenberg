/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { SecondaryAndTertiaryBase } from './base-styles';
import { appearBusy } from './busy-styles';

export const TertiaryButton = styled( SecondaryAndTertiaryBase )`
	white-space: nowrap;
	color: var( --wp-admin-theme-color );
	background: transparent;
	padding: 6px; // This reduces the horizontal padding on tertiary/text buttons, so as to space them optically.

	.dashicon {
		display: inline-block;
		flex: 0 0 auto;
	}

	${ appearBusy }
`;
