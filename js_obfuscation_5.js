// 753dRe148axXmcD_u5 is the answer
// I used a hardcoded xorKey here which is 4, because I was running on local node.js
// on browser I think should adapt xorKey based on elapsed or execution time

_ = "function recfn0(){ return 0;}";
___ = "";
__ = 0;
eval(_);
for (__________ = 0; __________ < parseInt(100.15786224552145); __________++) {
    n = __________ + 1;
    ___ += "function recfn" + n + "(){ return recfn" + __________ + "();}";
}
eval(___);
eval(recfn100());
____ = this;
for (_____ in ____) {
    if (_____.length == parseInt(10.125625)) {
        if (_____.charCodeAt(0) == Math.min(115, 12654)) {
            if (_____.charCodeAt(9) == 116) break;
        }
    }
}
var ___________ = new Date();
_________ = ___________["getSeconds"]();

function ______________(fgseg87857878562) {
    var fgsog87857878562, fgspg87857878562, fgspg87857878561, fgspg87817878562, r, fgspg87817878162;
    fgsog87857878562 = fgseg87857878562;
    fgspg87857878562 += fgsog87857878562 >> fgspg87817878562 - fgsog87857878562;
    fgspg87857878561 -= fgspg87817878562 + fgsog87857878562 + 1337;
    fgspg87817878162 = r ^ fgspg87857878561 + fgsog87857878562;
    return fgsog87857878562;
}


function _______________1(PKDFjidfjezif8756265) {
    ________________ = PKDFjidfjezif8756265;
    _________________ = 145;
    if (________________ == 1) {
        return parseInt(1.256);
    }
    if (________________ == 2) {
        return parseInt(2.145);
    }
    if (________________ == 3) {
        return parseInt(3.145);
    }
    if (________________ > 3) {
        ________________ = _________________ + ________________ - _________________;
        return ________________;
    }
    return ________________;
}

function mainFunc(passwordInput, _______________) {
    ____________ = '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';
    xorKey = 3;

    combined = escape(_______________ + passwordInput + "eDer");
    console.log(combined);
    console.log('qweqwe')
    output = "";
    var fourth,
        fifth,
        sixth = "";
    var _3,
        _1,
        _2,
        _0 = "";
    ______ = 0;
    _____________ = ____________;
    do {
        fourth = combined.charCodeAt(______++);
        fifth = combined.charCodeAt(______++);
        sixth = combined.charCodeAt(______++);
        _3 = fourth >> _______________1(2);
        _1 = (fourth & _______________1(3)) << 4 | fifth >> _______________1(4);
        _2 = (fifth & _______________1(15)) << _______________1(2) | sixth >> 6;
        _0 = sixth & 63;
        if (isNaN(fifth)) {
            _2 = _0 = 64;
        } else if (isNaN(sixth)) {
            _0 = 64;
        }
        output = output + _____________.charAt(_3) + ____________.charAt(_1) + _____________.charAt(_2) + ____________.charAt(_0);


    } while (______ < combined.length);

    
    console.log("LAIQQQQ")
    console.log(output)
    
    remainingAgainstValue = "^2d2S*,~" + ":" + String["fr" + "om" + "C" + "harCode"](74, 76, 69, 83, 70, 48, 32, 40, 39, 55, 112, 40, 44, 53, 74, 39, 60, 44, 50, 112, 114, 70, 69, 47, 87)
    against = fgspg87857878561235("}8\u007FiH\u007F5:}Ypi}*VL}", 13) + remainingAgainstValue //constant
    actualOutput = reverseXor(against, xorKey)
    console.log(actualOutput) // Acquire password now from actualOutput

    if (fgspg87857878561235(actualOutput, xorKey) == fgspg87857878561235("}8\u007FiH\u007F5:}Ypi}*VL}", 13) + remainingAgainstValue){
        console.log("SUCCESSFUL BYPASS")
        console.log(output)
        reverseCustomBase64(actualOutput, _______________);
        window.location.href = passwordInput + ".php";
    } else {
        alert("MOUHAHAHAHHAHAHAHAHA");
    }
}

function reverseCustomBase64(output, firstCheckVal) {
    const specialKey =
        '8aZ{E$+rT yU}1#2(IOP<qs,DFg.)H*Jk~L6M7]W;X%VxB:N!^-03/9[4&5|"?Kz';

    if (specialKey.length !== 64) {
        throw new Error("Invalid alphabet length: " + specialKey.length);
    }

    let decoded = "";

    for (let i = 0; i < output.length; i += 4) {
        const a = specialKey.indexOf(output[i]);
        const b = specialKey.indexOf(output[i + 1]);
        const c = specialKey.indexOf(output[i + 2]);
        const d = specialKey.indexOf(output[i + 3]);

        if (a < 0 || b < 0) {
            throw new Error("Invalid character at position " + i);
        }

        const byte1 = (a << 2) | (b >> 4);
        decoded += String.fromCharCode(byte1);

        if (c >= 0) {
            decoded += String.fromCharCode(
                ((b & 15) << 4) | (c >> 2)
            );
        }

        if (d >= 0 && c >= 0) {
            decoded += String.fromCharCode(
                ((c & 3) << 6) | d
            );
        }
    }

    const original = unescape(decoded);

    const prefix = firstCheckVal;
    const suffix = "eDer";

console.log("Decoded bytes:", [...decoded].map(c =>
    c.charCodeAt(0)
));

console.log("Decoded raw:", JSON.stringify(decoded));
console.log("Decoded text:", JSON.stringify(original));
console.log("Expected prefix:", JSON.stringify(firstCheckVal));
console.log("Actual prefix:", JSON.stringify(
    original.slice(0, firstCheckVal.length)
));

    if (!original.startsWith(prefix)) {
        throw new Error("Prefix mismatch");
    }

    if (!original.endsWith(suffix)) {
        throw new Error("Suffix mismatch");
    }

    return original.slice(
        prefix.length,
        original.length - suffix.length
    );
}


function fgspg87857878561235(q45qsdfus8465dfsfgth, __) {
    q45qsdfzf8465dfsfgth = "";
    q45qsdfzf8465dfsfguh = "";
    _______________ = 0000000000;
    for (_______________; _______________ < 13 - 2; _______________++) {
        q45qsdfzf8465dfsfgth = q45qsdfus8465dfsfgth.length ^ __;
        if (q45qsdfzf8465dfsfgth != "") q45qsdfzf8465dfsfgth = "";
    }
    q45qsdfzs8465dfsfgth = q45qsdfzf8465dfsfgth;
    q45qsdfzf8465dfsfguh = q45qsdfzs8465dfsfgth;

    for (i = 0; i < q45qsdfus8465dfsfgth.length; i++) {
            q45qsdfzs8465dfsfgth += String.fromCharCode(__ ^ q45qsdfus8465dfsfgth.charCodeAt(i));

    }

    //console.log(q45qsdfzs8465dfsfgth);

    return q45qsdfzs8465dfsfgth;
}


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



//---------------------------------------------------------------
function ____________________________8(passwordInput) {
    ________________ = '37.13R53.14R65.78R37.45R51.14R53.75R90.125R101.2365R37.145R53.789R65.123R37.745R51.258R56.348R90.368R120.125R37.785R53.78R65.1R88.842R37.11R53.785R65.78R37.82R54.46R68.13R90.82R99.193R37.73R53.769R65.71R53.46';
    _________________ = ________________.split('R');
    __________________ = '';
    for (n = 0; n < _________________.length; n++) {
        __________________ += String["fromCharCode"](parseInt(_________________[n]));
    }
    testedAgainst = __________________;
    console.log(testedAgainst);

    first = Array('%5A%58', '%5A%65', '%5A%32', '%5A%35', '%5A%72', '%5A%6C', '%5A%73', '%5A%76', '%5A%69', '%5A%70', '%5A%38', '%5A%77', '%5A%66', '%5A%70', '%5A%78', '%5A%6D', '%5A%63');
    second = 0;
    third = String();
    ____________ = '';

    //this runs as per password's input length
    for (second = 0; second < passwordInput.length; second++) {
        ____________ = passwordInput.substr(second, 1);
        console.log(____________);
        for (j = 0; j < first.length; j++) {
            if (unescape(first[j].substr(3, 3)) == ____________) {
                third += first[j];
            }
            if ((first[j] << 2) == "\x00" || (first[j] << 2) == "¿") {
                third += "%5D%12";
            }
        }
    }

    console.log('first')
    console.log(third);
    console.log('wer')
    console.log(unescape(testedAgainst));
    console.log('thir')
    if ('Z5ZeZ8ZxZXZmZcZ5' == unescape(testedAgainst)) {
        mainFunc(passwordInput, unescape(third));
    } else {
        console.log('FAIL')
    }
}

function checkPass(passwordInput) {
    _______ = new Date();
    ________ = _______['getSeconds']();
    ______ = ________ - _________;
    if ((______ < 0) && (______ == 2)) ______ = 2;
    if ((______ > 1) && (______ == 2)) ______ = 2;
    if ((______ > 1) && (______ != 2)) ______ = 3;
    if ((______ < 0) && (______ != 2)) ______ = 3;
    __ = 1.565685956 + ______;

    ____________________________8(passwordInput);
}
console.log(checkPass("idontknowpas"));