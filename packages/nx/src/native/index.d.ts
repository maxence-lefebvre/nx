/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface FileData {
  file: string
  hash: string
}
export function hashFile(file: string): FileData | null
export function hashFiles(workspaceRoot: string): Record<string, string>