export function generatePassword(): string {
  const charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomString = (length: number, chars: string) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  const part1 = randomString(6, charset);
  const part2 = randomString(6, charset);
  const part3 = randomString(6, charset);

  return `${part1}-${part2}-${part3}`;
}
