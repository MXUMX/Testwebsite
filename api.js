const willhate = (/**@type {string}*/ text) => {
  const codePoints = [...text].map((c) => c.codePointAt(0));

  const output = [];
  for (const char of codePoints) {
    output.push(
      String.fromCodePoint(
        char + (0x00 < char && char < 0x7f ? 0xe0000 : 0)
      ).toString()
    );
  }

  return output.join("");
};

willhate("AIzaSyCEAH5KQZnbBVi1YhwUShvi5uBIzwIHtso")
