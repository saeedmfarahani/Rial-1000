/**
 * Converts Iranian Rial (IRR) to the new denomination
 * by dividing the given value by 1000.
 *
 * @param {number} oldRial - The amount in the current Rial (IRR).
 * @returns {number} The equivalent amount in the new Rial (IRR/1000).
 *
 * @example
 * rial(100000); // 100
 * rial(50000);  // 50
 */
export default function rial(oldRial) {
  const newRial = oldRial * 0.001;
  return newRial;
}
