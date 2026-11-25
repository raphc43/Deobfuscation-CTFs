function base58DecodeUTF8(input) {
    const ALPHABET =
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

    let value = 0n;

    for (const char of input) {
        const digit = ALPHABET.indexOf(char);

        if (digit === -1) {
            throw new Error(`Invalid Base58 character: ${char}`);
        }

        value = value * 58n + BigInt(digit);
    }

    const bytes = [];

    while (value > 0n) {
        bytes.unshift(Number(value & 255n));
        value >>= 8n;
    }

    // Preserve leading zero bytes
    let zeros = 0;

    while (input[zeros] === "1") {
        zeros++;
    }

    const result = new Uint8Array([
        ...new Array(zeros).fill(0),
        ...bytes
    ]);

    return new TextDecoder("utf-8", {
        fatal: true
    }).decode(result);
}

const encoded = "ZV8Ny7abVHPTtkqg5ov3ZVCusxv2ToBLMEqXcX8rs49zDQ139fXpXWwSPmpFRdRpLrY4P1b76KgN99GPJGpcd88viMqwzsTuTmpqDSYWg";

// Example
const decoded = base58DecodeUTF8(encoded);

console.log(decoded);
