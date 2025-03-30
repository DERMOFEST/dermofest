export function isValidGLN(gln) {
  return gln && gln.length === 13 && /^[0-9]+$/.test(gln);
}