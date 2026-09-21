import data from "./site.json";

export interface Section {
  key: string;
  label: string;
  enabled: boolean;
}

export const site = data;

export const enabledSections: Section[] = (data.sections as Section[]).filter(
  (s) => s.enabled,
);

export function isEnabled(key: string): boolean {
  return (data.sections as Section[]).some((s) => s.key === key && s.enabled);
}
