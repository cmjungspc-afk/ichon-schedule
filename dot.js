/* 파리크라상 게임 도트(픽셀아트) 테마
   - 직접 그린 빵 캐릭터·메뉴 아이콘 스프라이트
   - 그 밖의 이모지·파츠 그림은 자동으로 도트화(저해상도 + 색 단순화 + 검은 외곽선)
   - 게임 창(#gm) 안의 이모지를 찾아 도트 이미지로 바꿔 줌 */
(function () {
  'use strict';
  var EMF = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  var INK = '#1a0f08';
  var PAL = {
    K: '#2a1608', D: '#b0652a', M: '#e09a4a', L: '#f6c879', W: '#ffffff', E: '#2a1608', P: '#ff8fa3',
    S: '#ffffff', C: '#a0522d', F: '#fde8b8', R: '#e5383b', G: '#3ec98a', Y: '#ffd23f', O: '#f08c00',
    B: '#4dabf7', N: '#9aa4b5', Q: '#8b2e1e', U: '#6a3d1e', V: '#7048e8', T: '#38d9a9', A: '#ced4da'
  };
  var SP = {
    CRO: ['........KKKKKK........', '......KKLLLLLLKK......', '.....KLLWWLLLLLLK.....', '...KKKLWLLLLLLLLKKK...', '..KMMKLLLLLLLLLLKMMK..', '.KMLMKLEELLLLEELKMLMK.', '.KMLMKLEELLLLEELKMLMK.', 'KMLLMKPPLLKKLLPPKMLLMK', 'KMLLMKMLLLLLLLLMKMLLMK', 'KDLMDKKMMMMMMMMKKDMLDK', 'KDLDK..KKKKKKKK..KDLDK', 'KDDK..............KDDK', '.KK................KK.'],
    SALT: ['......KKKKKKKK......', '....KKMLLLLLLMKK....', '...KMLLSLLLLSLLMK...', '..KMLLLLLLSLLLLLMK..', '.KMLLLEELLLLEELLLMK.', '.KMLLLEELLLLEELLLMK.', 'KDMLLPPLLLKKLLPPLMDK', 'KDMMLLLLLLLLLLLLMMDK', '.KDMMMMMMMMMMMMMMDK.', '..KKDDDDDDDDDDDDKK..', '....KKKKKKKKKKKK....'],
    BREAD: ['..KKKK....KKKK..', '.KCCCCK..KCCCCK.', 'KCCCCCCKKCCCCCCK', 'KCFFFFFFFFFFFFCK', 'KCFFFFFFFFFFFFCK', 'KCFFEEFFFFEEFFCK', 'KCFFEEFFFFEEFFCK', 'KCFPPFFKKFFPPFCK', 'KCFFFFFFFFFFFFCK', 'KCFFFFFFFFFFFFCK', 'KCCCCCCCCCCCCCCK', '.KKKKKKKKKKKKKK.'],
    CAKE: ['......KGGK......', '.....KRRRRK.....', '.....KRWRRK.....', '......KRRK......', '..KKKKKKKKKKKK..', '.KWWWWWWWWWWWWK.', 'KWWWWWWWWWWWWWWK', 'KWYWWYWWWYWWYWWK', 'KYYYEEYYYYEEYYYK', 'KYYYEEYYYYEEYYYK', 'KYYPPYYKKYYPPYYK', 'KWWWWWWWWWWWWWWK', 'KYYYYYYYYYYYYYYK', '.KKKKKKKKKKKKKK.'],
    SAND: ['..KKKKKKKKKKKK..', '.KLLLLLLLLLLLLK.', 'KLLLLLLLLLLLLLLK', 'KLLLEELLLLEELLLK', 'KLLLEELLLLEELLLK', 'KLLPPLLLKKLLPPLK', 'KGKGGGKGGGKGGGGK', 'KRRRRRRRRRRRRRRK', 'KYYYYYYYYYYYYYYK', 'KLLLLLLLLLLLLLLK', '.KKKKKKKKKKKKKK.'],
    PASTA: ['.....KKRRK......', '...KKYYRRYKK....', '..KYYLYYYYLYKK..', '.KYYLYYYYYYYLYK.', 'KYLYEEYYYYEEYLYK', 'KYYYEEYYYYEEYYYK', 'KYYPPYYKKYYPPYYK', 'KKKKKKKKKKKKKKKK', '.KBWWBBBBBBBBBK.', '..KBBBBBBBBBBK..', '...KKKKKKKKKK...'],
    OMU: ['....KKKKKKKK....', '..KKYYYYYYYYKK..', '.KYYRRRYYYRRRYK.', 'KYYYYYRRRRYYYYYK', 'KYYYEEYYYYEEYYYK', 'KYYYEEYYYYEEYYYK', 'KYYPPYYKKYYPPYYK', 'KOYYYYYYYYYYYYOK', 'KKKKKKKKKKKKKKKK', 'KWWWWWWWWWWWWWWK', '.KKKKKKKKKKKKKK.'],
    HAM: ['....KKKKKKKK....', '..KKCCCCCCCCKK..', '.KCUUUCCCUUUCCK.', 'KCCCCCCCCCCCCCCK', 'KCCCWWCCCCWWCCCK', 'KCCCWKCCCCWKCCCK', 'KCCPPCCKKCCPPCCK', 'KCCCCCCCCCCCCCCK', '.KKKKKKKKKKKKKK.', 'KWWGWWWWWWWWWWWK', '.KKKKKKKKKKKKKK.'],
    CREAM: ['...KRK....KRK...', '..KRRRK..KRRRK..', '..KKKKKKKKKKKK..', '.KWWWWWWWWWWWWK.', 'KWWWWWWWWWWWWWWK', 'KWWWEEWWWWEEWWWK', 'KWWWEEWWWWEEWWWK', 'KWWPPWWKKWWPPWWK', 'KRRRRRRRRRRRRRRK', 'KWWWWWWWWWWWWWWK', 'KWWWWWWWWWWWWWWK', '.KKKKKKKKKKKKKK.'],
    STEAK: ['...KKKKKKKKK....', '.KKQQQQQQQQQKK..', 'KFQQKQQQKQQQQQK.', 'KFQQQKQQQKQQQQQK', 'KFQQWWQQQQWWQQQK', 'KFQQWKQQQQWKQQQK', 'KFQPPQQKKQQPPQQK', 'KFQQQQQQQQQQQQK.', '.KFFQQQQQQQQQK..', '..KKKKKKKKKKK...'],
    GOLD: ['..KRK..KRK..KRK.', '.KRRRKKRRRKKRRRK', 'KFFFFFFFFFFFFFFK', 'KFFFEEFFFFEEFFFK', 'KFFFEEFFFFEEFFFK', 'KFFPPFFKKFFPPFFK', 'KFFFFFFFFFFFFFFK', 'KCDCDCDCDCDCDCDK', '.KCCCCCCCCCCCCK.', '..KKKKKKKKKKKK..'],
    COIN: ['..KKKK..', '.KYYYYK.', 'KYYWYYOK', 'KYYWYYOK', 'KYYWYYOK', 'KYYYYYOK', '.KOOOOK.', '..KKKK..'],
    BOOK: ['.KKKK.KKKK.', 'KWWWWKWWWWK', 'KWNNWKWNNWK', 'KWWWWKWWWWK', 'KWNNWKWNNWK', 'KWWWWKWWWWK', 'KKKKKKKKKKK'],
    BAG: ['...KKK...', '..K...K..', '.KKKKKKK.', 'KRRRRRRRK', 'KRWRRRRRK', 'KRRKKKRRK', 'KRRKYKRRK', 'KRRKKKRRK', 'KRRRRRRRK', '.KKKKKKK.'],
    CAL: ['KKKKKKKKK', 'KRRRRRRRK', 'KKKKKKKKK', 'KWWWWWWWK', 'KWKWKWKWK', 'KWWWWWWWK', 'KWKWKWRWK', 'KWWWWWWWK', 'KKKKKKKKK'],
    STAR: ['....K....', '...KYK...', '...KYK...', 'KKKKYKKKK', 'KYYYYYYYK', '.KYYYYYK.', '..KYYYK..', '.KYYKYYK.', 'KYKK.KKYK', 'KK.....KK'],
    MAIL: ['KKKKKKKKKK', 'KKWWWWWWKK', 'KWKKWWKKWK', 'KWWWKKWWWK', 'KWWWWWWWWK', 'KWWWWWWWWK', 'KKKKKKKKKK'],
    GIFT: ['..PP.PP..', '...PPP...', 'KKKKPKKKK', 'KGGGPGGGK', 'KKKKPKKKK', 'KGGGPGGGK', 'KGGGPGGGK', 'KGGGPGGGK', 'KKKKKKKKK'],
    BOW: ['KK.......KK', 'KPPK...KPPK', 'KPPPKKKPPPK', 'KPPPKPKPPPK', 'KPPPKKKPPPK', 'KPPK.K.KPPK', 'KK..K.K..KK'],
    UP: ['....K....', '...KGK...', '..KGGGK..', '.KGGGGGK.', 'KKKGGGKKK', '..KGGGK..', '..KGGGK..', '..KGGGK..', '..KKKKK..'],
    TRO: ['KKKKKKKKK', 'KYYYYYYYK', 'KYWYYYYYK', '.KYYYYYK.', '..KYYYK..', '...KYK...', '..KKYKK..', '.KYYYYYK.', '.KKKKKKK.'],
    MED: ['.KRK.KBK.', '..KRKBK..', '...KKK...', '..KYYYK..', '.KYYWYYK.', '.KYWYYYK.', '.KYYYYYK.', '..KYYYK..', '...KKK...'],
    KEY: ['..KKK......', '.KYYYK.....', 'KYYKYYKKKKK', 'KYKKKYYYYYK', 'KYYKYYKKYKK', '.KYYYK..K..', '..KKK......'],
    DOOR: ['KKKKKKK', 'KUUUUUK', 'KUCCCUK', 'KUCCCUK', 'KUUUUYK', 'KUCCCUK', 'KUCCCUK', 'KUUUUUK', 'KKKKKKK'],
    NOTE: ['...KKKK', '...KVVK', '...KK.K', '...K..K', '...K..K', '.KKK.KK', 'KVVKKVK', 'KVVKKKK', '.KK....'],
    HEART: ['.KK.KK.', 'KRRKRRK', 'KRWRRRK', 'KRRRRRK', '.KRRRK.', '..KRK..', '...K...'],
    PERSON: ['..KKK..', '.KFFFK.', '.KFEFK.', '..KKK..', '.KBBBK.', 'KBBBBBK', '.KBBBK.', '.KUKUK.', '.KK.KK.'],
    CHART: ['K........', 'K.....KK.', 'K.....KRK', 'K..KK.KRK', 'K..KBKKRK', 'KK.KBKKRK', 'KGKKBKKRK', 'KKKKKKKKK'],
    PLAY: ['KK....', 'KYKK..', 'KYYYK.', 'KYYYYK', 'KYYYK.', 'KYKK..', 'KK....']
  };
  var CHK = { cro: 'CRO', salt: 'SALT', bread: 'BREAD', cake: 'CAKE', sand: 'SAND', pasta: 'PASTA', omu: 'OMU', ham: 'HAM', cream: 'CREAM', steak: 'STEAK', gold: 'GOLD' };
  var OVR = {
    '🥐': 'CRO', '🍞': 'BREAD', '🍰': 'CAKE', '🥪': 'SAND', '🍝': 'PASTA', '🍳': 'OMU', '🍖': 'HAM', '🎂': 'CREAM', '🥩': 'STEAK',
    '🪙': 'COIN', '📖': 'BOOK', '🎒': 'BAG', '📅': 'CAL', '⭐': 'STAR', '🌟': 'STAR', '📮': 'MAIL', '🛍': 'GIFT', '🎁': 'GIFT', '🎀': 'BOW',
    '🏆': 'TRO', '🏅': 'MED', '🔑': 'KEY', '🚪': 'DOOR', '🎵': 'NOTE', '❤': 'HEART', '👤': 'PERSON', '📊': 'CHART'
  };
  var cache = {}, urlCache = {};
  function mk(w, h) { var c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
  function sprite(name) {
    var key = 's:' + name; if (cache[key]) return cache[key];
    var rows = SP[name], w = 0, h = rows.length, i, x;
    for (i = 0; i < h; i++) w = Math.max(w, rows[i].length);
    var c = mk(w, h), g = c.getContext('2d');
    for (i = 0; i < h; i++) for (x = 0; x < rows[i].length; x++) { var ch = rows[i][x]; if (ch !== '.') { g.fillStyle = PAL[ch] || '#f0f'; g.fillRect(x, i, 1, 1); } }
    c.complete = true; return (cache[key] = c);
  }
  // 저해상도로 줄이고, 투명도 이진화 + 색 단순화 + 1px 외곽선
  function crunch(src, res) {
    var c = mk(res + 2, res + 2), g = c.getContext('2d');
    g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    var sw = src.width, sh = src.height, k = Math.min(res / sw, res / sh), dw = Math.max(1, Math.round(sw * k)), dh = Math.max(1, Math.round(sh * k));
    g.drawImage(src, 1 + Math.floor((res - dw) / 2), 1 + Math.floor((res - dh) / 2), dw, dh);
    var d; try { d = g.getImageData(0, 0, c.width, c.height); } catch (e) { return c; }
    var p = d.data, W = c.width, H = c.height, on = new Uint8Array(W * H), i;
    for (i = 0; i < W * H; i++) {
      var a = p[i * 4 + 3];
      if (a > 110) {
        on[i] = 1; var r = p[i * 4] * 255 / a, gg = p[i * 4 + 1] * 255 / a, b = p[i * 4 + 2] * 255 / a;
        p[i * 4] = Math.min(255, Math.round(r / 32) * 32); p[i * 4 + 1] = Math.min(255, Math.round(gg / 32) * 32); p[i * 4 + 2] = Math.min(255, Math.round(b / 32) * 32); p[i * 4 + 3] = 255;
      } else p[i * 4 + 3] = 0;
    }
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
      i = y * W + x; if (on[i]) continue;
      if ((x > 0 && on[i - 1]) || (x < W - 1 && on[i + 1]) || (y > 0 && on[i - W]) || (y < H - 1 && on[i + W])) { p[i * 4] = 26; p[i * 4 + 1] = 15; p[i * 4 + 2] = 8; p[i * 4 + 3] = 255; }
    }
    g.putImageData(d, 0, 0); c.complete = true; return c;
  }
  function norm(e) { return String(e).replace(/️/g, ''); }
  function emoji(e, res) {
    res = res || 16; var n = norm(e);
    if (OVR[n]) return sprite(OVR[n]);
    var key = 'e:' + n + ':' + res; if (cache[key]) return cache[key];
    var big = mk(res * 4, res * 4), g = big.getContext('2d');
    g.font = Math.round(res * 3.5) + 'px ' + EMF; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(e, res * 2, res * 2.15);
    return (cache[key] = crunch(trim(big), res));
  }
  function trim(c) { // 그림 주변 빈 공간 잘라내기
    var g = c.getContext('2d'), d; try { d = g.getImageData(0, 0, c.width, c.height).data; } catch (e) { return c; }
    var x0 = c.width, y0 = c.height, x1 = -1, y1 = -1;
    for (var y = 0; y < c.height; y++) for (var x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 40) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 < 0) return c;
    var s = Math.max(x1 - x0, y1 - y0) + 1, o = mk(s, s);
    o.getContext('2d').drawImage(c, x0, y0, x1 - x0 + 1, y1 - y0 + 1, Math.floor((s - (x1 - x0 + 1)) / 2), Math.floor((s - (y1 - y0 + 1)) / 2), x1 - x0 + 1, y1 - y0 + 1);
    return o;
  }
  function fromImg(img, res) {
    var key = 'i:' + (img.currentSrc || img.src) + ':' + (res || 18); if (cache[key]) return cache[key];
    var big = mk(96, 96); big.getContext('2d').drawImage(img, 0, 0, 96, 96);
    return (cache[key] = crunch(trim(big), res || 18));
  }
  function url(c) { if (c._u) return c._u; try { c._u = c.toDataURL(); } catch (e) { c._u = ''; } return c._u; }
  function char(k) { return CHK[k] ? sprite(CHK[k]) : sprite('CRO'); }
  function draw(ctx, c, x, y, size) {
    if (!c) return; var k = size / Math.max(c.width, c.height), w = c.width * k, h = c.height * k;
    var s = ctx.imageSmoothingEnabled; ctx.imageSmoothingEnabled = false; ctx.drawImage(c, Math.round(x - w / 2), Math.round(y - h / 2), Math.round(w), Math.round(h)); ctx.imageSmoothingEnabled = s;
  }
  // HTML 안 이모지 → 도트 이미지
  var RE = /(?:\p{Extended_Pictographic}|\p{Regional_Indicator}{2})(?:️|⃣|[\u{1F3FB}-\u{1F3FF}]|‍\p{Extended_Pictographic}️?)*/gu;
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CANVAS: 1, OPTION: 1, TITLE: 1 };
  function convert(root) {
    if (!root || !root.ownerDocument) return;
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), list = [], n;
    while ((n = tw.nextNode())) { RE.lastIndex = 0; if (RE.test(n.nodeValue)) list.push(n); }
    list.forEach(function (t) {
      var p = t.parentNode; if (!p || SKIP[p.nodeName] || p.namespaceURI === 'http://www.w3.org/2000/svg' || (p.closest && p.closest('svg,[data-nopx]'))) return;
      var s = t.nodeValue, f = document.createDocumentFragment(), last = 0, m; RE.lastIndex = 0;
      while ((m = RE.exec(s))) {
        if (m.index > last) f.appendChild(document.createTextNode(s.slice(last, m.index)));
        var im = document.createElement('img'); im.className = 'pxe'; im.alt = m[0]; im.draggable = false; im.src = url(emoji(m[0])); f.appendChild(im); last = m.index + m[0].length;
      }
      if (last < s.length) f.appendChild(document.createTextNode(s.slice(last)));
      p.replaceChild(f, t);
    });
    var imgs = root.querySelectorAll ? root.querySelectorAll('img.pic:not([data-px]),.gmov img[src^="data:image/svg"]:not([data-px])') : [];
    Array.prototype.forEach.call(imgs, function (im) {
      im.setAttribute('data-px', '1');
      var go = function () { var u = url(fromImg(im, 18)); if (u) im.src = u; };
      if (im.complete && im.naturalWidth) go(); else im.addEventListener('load', go, { once: true });
    });
  }
  var obs = new MutationObserver(function (ms) {
    for (var i = 0; i < ms.length; i++) { var m = ms[i]; if (m.type === 'characterData') convert(m.target.parentNode); else for (var j = 0; j < m.addedNodes.length; j++) { var a = m.addedNodes[j]; convert(a.nodeType === 3 ? a.parentNode : a); } }
  });
  var watched = null;
  new MutationObserver(function () {
    var gm = document.getElementById('gm');
    if (gm && gm !== watched) { watched = gm; convert(gm); obs.disconnect(); obs.observe(gm, { childList: true, subtree: true, characterData: true }); }
  }).observe(document.body, { childList: true });
  // 파츠 그림(캔버스용)도 도트로
  function pimg() {
    try {
      if (typeof PIMG === 'object') Object.keys(PIMG).forEach(function (k) {
        var im = PIMG[k]; if (!im || im._px || im.getContext) return;
        var f = function () { var c = fromImg(im, 18); c._px = 1; PIMG[k] = c; };
        if (im.complete && im.naturalWidth) f(); else im.addEventListener('load', f, { once: true });
      });
    } catch (e) {}
  }
  pimg(); setTimeout(pimg, 1500);
  window.PX = { emoji: emoji, sprite: sprite, char: char, charURL: function (k) { return url(char(k)); }, emojiURL: function (e) { return url(emoji(e)); }, draw: draw, fromImg: fromImg, convert: convert, FONT: '"Galmuri11",monospace' };
})();
