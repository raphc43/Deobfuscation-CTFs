
// Root-Me: JavaScript Obfuscation Reverse Solution

const alphabet = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';

// Reconstruct the comparison target.
const firstPart = [..."}8\x7fiH\x7f5:}Ypi}*VL}"]
    .map(ch => String.fromCharCode(ch.charCodeAt(0) ^ 13))
    .join('');

const secondPart = '^2d2S*,~';

const thirdPart = String.fromCharCode(
    74, 76, 69, 83, 70, 48, 32, 40, 39, 55,
    112, 40, 44, 53, 74, 39, 60, 44, 50, 112,
    114, 70, 69, 47, 87
);

const target = firstPart + secondPart + ':' + thirdPart;

console.log(target)

// Reverse XOR.
function reverseXor(output, xorKey) {
    //Reverse XOR function to bypass
    let recovered = ''

    const initial = output.length ^ xorKey;

    if (initial === 0) {
        recovered = "0";
    }

    for (let i = 0; i < output.length; i++) {
        recovered += String.fromCharCode(
            xorKey ^ output.charCodeAt(i)
        );
    }

    return recovered;
}


// Reverse custom Base64.
function decodeCustomBase64(encoded) {
    let decoded = '';

    for (let i = 0; i < encoded.length; i += 4) {
        const a = alphabet.indexOf(encoded[i]);
        const b = alphabet.indexOf(encoded[i + 1]);
        const c = i + 2 < encoded.length ? alphabet.indexOf(encoded[i + 2]) : -1;
        const d = i + 3 < encoded.length ? alphabet.indexOf(encoded[i + 3]) : -1;

        if (a < 0 || b < 0) {
            throw new Error('Invalid character at offset ' + i);
        }

        decoded += String.fromCharCode((a << 2) | (b >> 4));

        if (c >= 0)
            decoded += String.fromCharCode(((b & 15) << 4) | (c >> 2));

        if (c >= 0 && d >= 0)
            decoded += String.fromCharCode(((c & 3) << 6) | d);
    }

    return unescape(decoded);
}

// Try candidate XOR keys.
const expectedPrefix = 'Z5ZeZ8ZxZXZmZcZ5';

for (let key = 0; key <= 4; key++) {
    try {
        const encoded = reverseXor(target, key);
        console.log('1');
        console.log(encoded)
        const recovered = decodeCustomBase64(encoded);

        if (recovered.startsWith(expectedPrefix)) {
            const password = recovered.slice(
                expectedPrefix.length,
                recovered.length - 4
            );

            console.log('XOR key:', key);
            console.log('Recovered data:', recovered);
            console.log('Password:', password);
        }
    } catch (_) {
        // Ignore invalid candidate keys.
    }
}
