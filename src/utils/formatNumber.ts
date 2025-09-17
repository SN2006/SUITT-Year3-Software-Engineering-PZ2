import { config } from '../config.js';
import type { NumberFormatOptions } from '../types/numberFormatOption.js';

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}
