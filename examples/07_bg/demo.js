// 补环境
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM()

window = dom.window
window = window.document

// 扣代码
function _0x300484(_0x17a9d3) {
    let _0x1403b1, _0x491f1a, _0x58689c = '';
    for (var _0x2a4fe4 = 0x0; _0x2a4fe4 < _0x17a9d3['length']; )
        _0x1403b1 = _0x17a9d3[_0x2a4fe4],
        _0x491f1a = 0x0,
        _0x1403b1 >>> 0x7 === 0x0 ? (_0x58689c += String['fromCharCode'](_0x17a9d3[_0x2a4fe4]),
        _0x2a4fe4 += 0x1) : 0xfc === (0xfc & _0x1403b1) ? (_0x491f1a = (0x3 & _0x17a9d3[_0x2a4fe4]) << 0x1e,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x1]) << 0x18,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x2]) << 0x12,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x3]) << 0xc,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x4]) << 0x6,
        _0x491f1a |= 0x3f & _0x17a9d3[_0x2a4fe4 + 0x5],
        _0x58689c += String['fromCharCode'](_0x491f1a),
        _0x2a4fe4 += 0x6) : 0xf8 === (0xf8 & _0x1403b1) ? (_0x491f1a = (0x7 & _0x17a9d3[_0x2a4fe4]) << 0x18,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x1]) << 0x12,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x2]) << 0xc,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x3]) << 0x6,
        _0x491f1a |= 0x3f & _0x17a9d3[_0x2a4fe4 + 0x4],
        _0x58689c += String['fromCharCode'](_0x491f1a),
        _0x2a4fe4 += 0x5) : 0xf0 === (0xf0 & _0x1403b1) ? (_0x491f1a = (0xf & _0x17a9d3[_0x2a4fe4]) << 0x12,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x1]) << 0xc,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x2]) << 0x6,
        _0x491f1a |= 0x3f & _0x17a9d3[_0x2a4fe4 + 0x3],
        _0x58689c += String['fromCharCode'](_0x491f1a),
        _0x2a4fe4 += 0x4) : 0xe0 === (0xe0 & _0x1403b1) ? (_0x491f1a = (0x1f & _0x17a9d3[_0x2a4fe4]) << 0xc,
        _0x491f1a |= (0x3f & _0x17a9d3[_0x2a4fe4 + 0x1]) << 0x6,
        _0x491f1a |= 0x3f & _0x17a9d3[_0x2a4fe4 + 0x2],
        _0x58689c += String['fromCharCode'](_0x491f1a),
        _0x2a4fe4 += 0x3) : 0xc0 === (0xc0 & _0x1403b1) ? (_0x491f1a = (0x3f & _0x17a9d3[_0x2a4fe4]) << 0x6,
        _0x491f1a |= 0x3f & _0x17a9d3[_0x2a4fe4 + 0x1],
        _0x58689c += String['fromCharCode'](_0x491f1a),
        _0x2a4fe4 += 0x2) : (_0x58689c += String['fromCharCode'](_0x17a9d3[_0x2a4fe4]),
        _0x2a4fe4 += 0x1);
    return _0x58689c;
}


function _0x476691(_0x4eff8a) {
    let _0x5f0aa7 = [-0x6f, 0x34, 0x5b, 0x41, -0x41, 0x74, 0x77, 0x6a, -0x79, -0x52, -0x5, 0x50, 0x33, 0x61, 0x44, -0x53, -0x70, -0x33, 0x17, -0x2e, -0x22, -0x72, -0x37, -0xb, -0x7f, 0x5a, 0x21, 0x16, -0x1f, 0x32, -0x11, 0x14, -0x2c, 0xf, -0x5e, -0x7b, 0x76, -0x17, -0x3d, 0x72, 0x47, -0x68, -0x7e, -0x75, -0x51, -0x36, -0x12, -0x6e, -0x4, -0x5f, -0x5b, 0x5e, -0x50, -0xe, 0x78, 0x69, 0x55, 0x68, -0x56, -0x6c, 0x43, 0x19, 0x65, 0x6c, 0x10, -0x69, 0x6f, -0xa, 0x75, -0x49, 0x4d, 0x59, -0x1d, -0x62, -0x44, 0x70, 0x6b, -0x1, 0x56, 0x79, 0x58, -0x65, -0x7c, 0x45, -0x1e, -0x8, -0x71, -0x4a, -0x76, 0x39, -0x19, 0xc, -0x73, -0x6a, 0x5f, 0x7f, 0x54, 0x7c, -0x66, -0x1c, 0x49, 0x2b, -0x3c, 0x1c, 0x2e, 0x73, 0x1e, 0x7a, -0x4b, 0x7d, -0x43, -0x4d, 0x3, -0x7, -0x35, -0xd, 0x35, 0x4e, -0x48, 0x1, 0xb, -0x47, -0x27, -0x4f, -0x3, 0x13, 0x29, 0x7e, -0x2b, -0x7d, -0x1b, 0x22, 0x3f, 0x8, 0x48, -0x23, -0x29, -0x3f, 0x3c, -0x18, 0x66, 0x2f, -0x77, -0x67, -0x16, 0x2d, 0x3b, 0x40, -0x60, 0x31, 0x53, -0x6b, -0x78, -0x39, -0x46, 0x0, -0x26, -0x54, -0x28, 0x18, 0xe, 0x30, 0x1d, 0x2c, -0x24, -0x2f, 0x38, -0x5c, 0x26, 0x25, 0x4, -0x32, 0x67, 0xa, -0x59, 0x37, 0x71, -0x1a, 0x6e, 0x36, 0x24, -0x14, -0x4e, -0xc, -0x74, 0x46, -0x25, 0x5, -0x3e, -0x4c, -0x30, -0x40, 0x4f, 0x64, 0x28, 0x6, -0x3a, -0x5a, -0x13, -0x9, 0x27, 0x5d, -0x63, 0x15, 0x7, 0x1a, -0x2, 0x1b, -0x2d, 0x51, 0x3a, -0x7a, 0x4c, -0x42, 0x2, 0x5c, -0x2a, 0x62, -0x10, 0x9, 0x3d, 0x3e, -0xf, 0x63, -0x15, 0x1f, -0x38, 0x57, 0x11, -0x34, -0x45, -0x21, -0x3b, -0x55, 0x42, 0x4a, 0x12, -0x5d, -0x80, -0x57, -0x20, 0x2a, 0x20, -0x58, 0x6d, 0x60, 0xd, -0x6, 0x4b, -0x64, -0x31, 0x23, -0x61, 0x52, -0x6d, 0x7b]
      , _0x48065b = 0x0
      , _0x5274e8 = 0x0
      , _0x86b937 = 0x0
      , _0x114065 = new Array();
    for (let _0x4aff5a = 0x0; _0x4aff5a < _0x4eff8a['length']; _0x4aff5a++) {
        _0x48065b = _0x48065b + 0x1 & 0xff,
        _0x5274e8 = (0xff & _0x5f0aa7[_0x48065b]) + _0x5274e8 & 0xff;
        const _0x3c8821 = _0x5f0aa7[_0x48065b];
        _0x5f0aa7[_0x48065b] = _0x5f0aa7[_0x5274e8],
        _0x5f0aa7[_0x5274e8] = _0x3c8821,
        _0x86b937 = (0xff & _0x5f0aa7[_0x48065b]) + (0xff & _0x5f0aa7[_0x5274e8]) & 0xff,
        _0x114065['push'](_0x4eff8a[_0x4aff5a] ^ _0x5f0aa7[_0x86b937]);
    }
    return _0x114065;
}

// function _0x4176cc(_0x529333) {
//     const _0x2bc465 = window['atob'](_0x529333)
//       , _0x5384be = new Int8Array(_0x2bc465['length']);
//     for (let _0x41c9e8 = 0x0; _0x41c9e8 < _0x2bc465['length']; _0x41c9e8++)
//         _0x5384be[_0x41c9e8] = _0x2bc465['charCodeAt'](_0x41c9e8);
//     return _0x5384be;
// }

function _0x4176cc(_0x529333) {
    const _0x2bc465 = Buffer.from(_0x529333, 'base64');
    const _0x5384be = new Int8Array(_0x2bc465);
    return _0x5384be;
}


function _0x58b5da(_0x512f6f) {
    return _0x300484(_0x476691(_0x4176cc(_0x512f6f)));
}

// data = "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"
// console.log(_0x58b5da(data))



