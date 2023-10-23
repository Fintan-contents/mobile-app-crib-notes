/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * SantokuApp Sandbox REST API
 * SantokuApp Sandbox REST API
 * OpenAPI spec version: 1.0.0
 */
import type {Todo} from './todo';

/**
 * ListTodoResponse
 */
export interface ListTodoResponse {
  /** Current page number */
  number?: number;
  /** Page size */
  size?: number;
  /** Sort key */
  sort?: string;
  /** Number of current page elements. */
  numberOfElements?: number | null;
  /** Total elements */
  totalElements?: number;
  /** Total pages */
  totalPages?: number;
  content?: Todo[];
  /** Whether the content is empty */
  empty?: boolean;
  /** Whether this page is the first page */
  first?: boolean;
  /** Whether this page is the last page */
  last?: boolean;
}
