import { AVATAR_COLORS } from '../Constants/Colors';

export function colorForLetter(letter) {
  const index = (letter.charCodeAt(0)) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}
