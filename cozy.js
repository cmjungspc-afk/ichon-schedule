/* 파리크라상 게임 — 숲속 손그림 일러스트 테마
   - 갈색 외곽선 + 부드러운 색의 빵 캐릭터·메뉴 아이콘(직접 그린 SVG)
   - 대기실·제목 화면 숲 배경 그림
   - 게임 창(#gm) 안 메뉴 이모지를 같은 그림체 아이콘으로 바꿔 줌 */
(function () {
  'use strict';
  var O = '#5b4636';
  function wrap(inner, vb) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + (vb || '0 0 64 64') + '"><g stroke="' + O + '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">' + inner + '</g></svg>'; }
  function face(cx, cy, s, nb) {
    s = s || 1; var e = 6 * s, r = '';
    r += '<ellipse cx="' + (cx - e) + '" cy="' + cy + '" rx="' + 1.9 * s + '" ry="' + 2.4 * s + '" fill="#3b2a20" stroke="none"/>';
    r += '<ellipse cx="' + (cx + e) + '" cy="' + cy + '" rx="' + 1.9 * s + '" ry="' + 2.4 * s + '" fill="#3b2a20" stroke="none"/>';
    r += '<circle cx="' + (cx - e + .6 * s) + '" cy="' + (cy - .9 * s) + '" r="' + .7 * s + '" fill="#fff" stroke="none"/><circle cx="' + (cx + e + .6 * s) + '" cy="' + (cy - .9 * s) + '" r="' + .7 * s + '" fill="#fff" stroke="none"/>';
    r += '<path d="M' + (cx - 2.6 * s) + ' ' + (cy + 3.2 * s) + ' q' + 1.3 * s + ' ' + 2 * s + ' ' + 2.6 * s + ' 0 q' + 1.3 * s + ' ' + 2 * s + ' ' + 2.6 * s + ' 0" fill="none" stroke-width="' + 1.6 * s + '"/>';
    if (!nb) r += '<ellipse cx="' + (cx - 10.5 * s) + '" cy="' + (cy + 3 * s) + '" rx="' + 3 * s + '" ry="' + 1.8 * s + '" fill="#f58fa8" opacity=".65" stroke="none"/><ellipse cx="' + (cx + 10.5 * s) + '" cy="' + (cy + 3 * s) + '" rx="' + 3 * s + '" ry="' + 1.8 * s + '" fill="#f58fa8" opacity=".65" stroke="none"/>';
    return r;
  }
  function spark(x, y, s, c) { s = s || 1; return '<path d="M' + x + ' ' + (y - 5 * s) + ' Q' + x + ' ' + y + ' ' + (x + 5 * s) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + 5 * s) + ' Q' + x + ' ' + y + ' ' + (x - 5 * s) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - 5 * s) + 'Z" fill="' + (c || '#fff3a8') + '" stroke="#d9a400" stroke-width="1.2"/>'; }
  function croBody(a, b, c, hi) {
    return '<ellipse cx="13" cy="42" rx="6" ry="9.5" transform="rotate(-42 13 42)" fill="' + a + '"/><ellipse cx="51" cy="42" rx="6" ry="9.5" transform="rotate(42 51 42)" fill="' + a + '"/>' +
      '<ellipse cx="20.5" cy="33" rx="9.5" ry="13.5" transform="rotate(-28 20.5 33)" fill="' + b + '"/><ellipse cx="43.5" cy="33" rx="9.5" ry="13.5" transform="rotate(28 43.5 33)" fill="' + b + '"/>' +
      '<ellipse cx="32" cy="30" rx="13" ry="16.5" fill="' + c + '"/><path d="M25 20 q4 -5 10 -4" fill="none" stroke="' + hi + '" stroke-width="2.6"/>';
  }
  var CHAR = {
    cro: '<path d="M5 50 C2 34 12 19 32 17 C52 19 62 34 59 50 C55 46 49 44 45 46 C41 40 23 40 19 46 C15 44 9 46 5 50 Z" fill="#f6c97c"/><path d="M5 50 C2 37 8 29 13 26 C16 33 17 39 19 46 C15 44 9 46 5 50 Z" fill="#e7a656"/><path d="M59 50 C62 37 56 29 51 26 C48 33 47 39 45 46 C49 44 55 46 59 50 Z" fill="#e7a656"/><path d="M13 26 C17 22 21 19 24.5 18.2 C25 27 25.5 33 26 41.5 C23.5 42.5 21 44 19 46 C17 39 16 33 13 26 Z" fill="#efb865"/><path d="M51 26 C47 22 43 19 39.5 18.2 C39 27 38.5 33 38 41.5 C40.5 42.5 43 44 45 46 C47 39 48 33 51 26 Z" fill="#efb865"/><path d="M28 21 q4 -1.6 8 0" fill="none" stroke="#fff1cf" stroke-width="2.2"/><ellipse cx="27.2" cy="31" rx="1.52" ry="1.92" fill="#3b2a20" stroke="none"/><ellipse cx="36.8" cy="31" rx="1.52" ry="1.92" fill="#3b2a20" stroke="none"/><path d="M29.92 33.56 q1.04 1.6 2.08 0 q1.04 1.6 2.08 0" fill="none" stroke-width="1.2800000000000002"/><ellipse cx="23.6" cy="33.4" rx="2.4000000000000004" ry="1.4400000000000002" fill="#f58fa8" opacity=".65" stroke="none"/><ellipse cx="40.4" cy="33.4" rx="2.4000000000000004" ry="1.4400000000000002" fill="#f58fa8" opacity=".65" stroke="none"/>',
    salt: '<ellipse cx="32" cy="38" rx="27" ry="16" fill="#eab36a"/><path d="M8 40 q5 -11 14 -13 M56 40 q-5 -11 -14 -13" fill="none" stroke="#c98a45" stroke-width="2"/><g fill="#fff" stroke="none"><rect x="23" y="25" width="3.4" height="2.6" rx="1"/><rect x="37" y="23.5" width="3.4" height="2.6" rx="1"/><rect x="30.5" y="21.5" width="3" height="2.4" rx="1"/><rect x="44" y="28" width="3" height="2.4" rx="1"/></g>' + face(32, 40),
    bread: '<path d="M10 55 V29 C10 16 21 12 26.5 16.5 C29 11 35 11 37.5 16.5 C43 12 54 16 54 29 V55 Z" fill="#d9944e"/><path d="M15.5 51 V31 C15.5 23 22 20 27 23 C29 19 35 19 37 23 C42 20 48.5 23 48.5 31 V51 Z" fill="#fbe7c2" stroke="#e7bf86" stroke-width="1.6"/>' + face(32, 38),
    cake: '<rect x="10" y="28" width="44" height="27" rx="7" fill="#fff6ea"/><rect x="11.3" y="45" width="41.4" height="5" fill="#f6d38a" stroke="none"/><rect x="10" y="28" width="44" height="27" rx="7" fill="none"/><path d="M10.5 31 q5.4 6 10.8 0 q5.4 6 10.8 0 q5.4 6 10.8 0 q5.4 6 10.8 0" fill="none" stroke-width="2"/><path d="M32 13 c-6 0 -8 6 -6 10 c2 4 4 5 6 5 c2 0 4 -1 6 -5 c2 -4 0 -10 -6 -10z" fill="#ef5b5b"/><path d="M27.5 13.5 l4.5 3 l4.5 -3 l-4.5 -2z" fill="#7bb661" stroke-width="1.6"/>' + face(32, 38),
    sand: '<path d="M8 50 L32 11 L56 50 Z" fill="#f4dca8"/><path d="M15 46.5 L32 19 L49 46.5 Z" fill="none" stroke="#e2b877" stroke-width="1.6"/><path d="M7 50 q4.2 5 8.4 0 q4.2 5 8.4 0 q4.2 5 8.4 0 q4.2 5 8.4 0 q4.2 5 8.4 0 q4.2 5 8.4 0 L57 55 L7 55 Z" fill="#8cc56a"/><rect x="9" y="54" width="46" height="4.2" rx="2" fill="#ef5b5b"/><rect x="8" y="57.5" width="48" height="5" rx="2.5" fill="#f4dca8"/>' + face(32, 38, .85),
    pasta: '<path d="M10 38 C10 23 22 15 32 15 C42 15 54 23 54 38 Z" fill="#f5d58a"/><path d="M16 32 q4 -4 8 0 q4 4 8 0 M28 23 q4 -4 8 0 q4 4 8 0 M36 33 q3 -3 6 0 q3 3 6 0" fill="none" stroke="#dcae55" stroke-width="1.8"/><circle cx="43" cy="20" r="5.2" fill="#a5553a"/><path d="M7 38 H57 C57 52 46 59 32 59 C18 59 7 52 7 38 Z" fill="#f7f4ec"/><path d="M12 45 H52" stroke="#7aa7d8" stroke-width="3"/>' + face(30, 29, .9),
    omu: '<ellipse cx="32" cy="50" rx="28" ry="9" fill="#fbfbf7"/><path d="M10 49 C10 27 22 20 32 20 C42 20 54 27 54 49 Z" fill="#f8d35b"/><path d="M19 30 q4.4 -4 8.8 0 q4.4 4 8.8 0 q4.4 -4 8.8 0" fill="none" stroke="#e14b4b" stroke-width="3.2"/>' + face(32, 40),
    ham: '<ellipse cx="32" cy="50" rx="28" ry="9" fill="#fbfbf7"/><ellipse cx="32" cy="38" rx="22" ry="14" fill="#9a6442"/><path d="M16 33 C20 25 44 25 48 33 C42 30 22 30 16 33 Z" fill="#5e3a26" stroke="none"/><circle cx="48" cy="26" r="3.4" fill="#7bb661"/><circle cx="44.5" cy="24" r="2.6" fill="#8fcf6d"/>' + face(32, 40),
    cream: '<rect x="8" y="26" width="48" height="29" rx="9" fill="#fffaf2"/><rect x="9.3" y="44" width="45.4" height="4.5" fill="#f7a8b8" stroke="none"/><rect x="8" y="26" width="48" height="29" rx="9" fill="none"/><circle cx="19" cy="24" r="5" fill="#ef5b5b"/><circle cx="32" cy="20.5" r="5.6" fill="#ef5b5b"/><circle cx="45" cy="24" r="5" fill="#ef5b5b"/><g fill="#fff" stroke-width="1.6"><circle cx="25.5" cy="26" r="3"/><circle cx="38.5" cy="26" r="3"/></g>' + face(32, 36),
    steak: '<path d="M10 37 C8 22 22 14 36 16 C50 18 58 28 54 41 C50 53 30 56 18 51 C12 47 11 43 10 37 Z" fill="#b0553a"/><path d="M11.5 36 C10 24 22 17 35 18.5" fill="none" stroke="#f3dfc2" stroke-width="4.4"/><path d="M10 37 C8 22 22 14 36 16" fill="none"/><path d="M26 25 l10 -4 M28 31 l14 -6 M40 33 l9 -4" stroke="#6b2d1d" stroke-width="2"/>' + face(33, 40),
    gold: '<rect x="8" y="38" width="48" height="17" rx="7" fill="#d9a35e"/><path d="M15 41 v11 M24 41 v11 M33 41 v11 M42 41 v11 M50 41 v10" stroke="#b8803e" stroke-width="1.6"/><ellipse cx="32" cy="38" rx="24" ry="7" fill="#fff1d0"/><circle cx="20" cy="31" r="6" fill="#ef5b5b"/><circle cx="32" cy="27.5" r="6.5" fill="#ef5b5b"/><circle cx="44" cy="31" r="6" fill="#ef5b5b"/><g fill="#ffe7a0" stroke="none"><circle cx="19" cy="30" r=".9"/><circle cx="22" cy="32" r=".9"/><circle cx="31" cy="26" r=".9"/><circle cx="34" cy="28.5" r=".9"/><circle cx="43" cy="30" r=".9"/><circle cx="46" cy="32" r=".9"/></g>' + spark(9, 22, .9) + spark(55, 19, .9) + face(32, 46, .9),
    anpan: '<ellipse cx="32" cy="38" rx="25" ry="19" fill="#c9823f"/><path d="M19 27 q6 -7 15 -7" fill="none" stroke="#e6a86a" stroke-width="3"/><g fill="#fff6e0" stroke="none"><ellipse cx="32" cy="22.5" rx="1.2" ry="2" transform="rotate(20 32 22.5)"/><ellipse cx="27" cy="24.5" rx="1.2" ry="2" transform="rotate(-20 27 24.5)"/><ellipse cx="37" cy="24.5" rx="1.2" ry="2" transform="rotate(40 37 24.5)"/></g>' + face(32, 40),
    donut: '<ellipse cx="32" cy="38" rx="26" ry="20" fill="#e3b27a"/><path d="M8 35 C8 20 56 20 56 35 C56 41 52 39 50 43 C48 47 44 41 40 45 C36 49 32 43 28 47 C24 49 20 43 16 45 C12 47 8 43 8 35 Z" fill="#f7a8c0"/><ellipse cx="32" cy="27" rx="7" ry="3.6" fill="#c9945e"/><g stroke="none"><rect x="16" y="29" width="4" height="1.6" rx=".8" fill="#7ac4e8" transform="rotate(30 18 30)"/><rect x="44" y="28" width="4" height="1.6" rx=".8" fill="#ffe066" transform="rotate(-30 46 29)"/><rect x="22" y="23" width="4" height="1.6" rx=".8" fill="#8ce99a"/><rect x="40" y="22" width="4" height="1.6" rx=".8" fill="#fff" transform="rotate(40 42 23)"/></g>' + face(32, 37, 1, 1),
    mac: '<path d="M9 42 h46 c0 8 -8 12 -23 12 c-15 0 -23 -4 -23 -12z" fill="#a8e2c9"/><rect x="8" y="36" width="48" height="6.5" rx="3.2" fill="#fff7ec"/><rect x="9.5" y="32" width="45" height="4.5" rx="2" fill="#93d3b8"/><ellipse cx="32" cy="25" rx="24" ry="11" fill="#a8e2c9"/><path d="M18 19 q6 -4 13 -4" fill="none" stroke="#e3fff3" stroke-width="2.4"/>' + face(32, 26),
    pudding: '<ellipse cx="32" cy="54" rx="27" ry="6" fill="#fbfbf7"/><path d="M17 22 H47 Q49 22 50 25 L54 50 Q54 53 51 53 H13 Q10 53 10 50 L14 25 Q15 22 17 22 Z" fill="#f9dc7c"/><path d="M17 22 H47 Q49 22 49.6 25 L50.6 31 C45 35 41 29 37 33 C33 37 29 31 25 34 C21 37 17 32 13.5 31 L14.4 25 Q15 22 17 22 Z" fill="#a8672e"/><path d="M21 26 q5 -2 9 -1" fill="none" stroke="#d6965a" stroke-width="2"/>' + face(32, 42),
    melon: '<defs><clipPath id="czmc"><path d="M8 50 C8 22 20 14 32 14 C44 14 56 22 56 50 Z"/></clipPath></defs><path d="M8 50 C8 22 20 14 32 14 C44 14 56 22 56 50 Z" fill="#dcef9f"/><g clip-path="url(#czmc)" stroke="#a9c95a" stroke-width="1.8"><path d="M0 26 L30 56 M10 14 L46 50 M24 8 L60 44 M38 6 L64 32 M64 26 L34 56 M54 14 L18 50 M40 8 L4 44 M26 6 L0 32"/></g><path d="M8 50 C8 22 20 14 32 14 C44 14 56 22 56 50 Z" fill="none"/><path d="M6 50 H58" />' + '<ellipse cx="32" cy="40" rx="14" ry="8" fill="#ecf8c8" stroke="none" opacity=".9"/>' + face(32, 39),
    cup: '<path d="M14 38 H50 L46 58 H18 Z" fill="#9cc9ee"/><path d="M23 38 L25 58 M32 38 V58 M41 38 L39 58" stroke="#6f9fcf" stroke-width="1.8"/><path d="M10 40 C5 34 11 27 16 28 C14 19 24 15 28 18 C30 9 42 11 42 18 C48 15 55 23 50 30 C56 32 56 40 52 40 Z" fill="#f7b6c8"/><path d="M40 8 q2 -5 7 -6" fill="none" stroke-width="2"/><circle cx="40" cy="12" r="5" fill="#e94b5a"/>' + face(31, 31),
    goldcro: '<path d="M23 17 L25 6 L29.5 12 L32 4 L34.5 12 L39 6 L41 17 Z" fill="#ffd84d"/><circle cx="32" cy="13" r="1.8" fill="#e94b5a" stroke-width="1"/><path d="M5 50 C2 34 12 19 32 17 C52 19 62 34 59 50 C55 46 49 44 45 46 C41 40 23 40 19 46 C15 44 9 46 5 50 Z" fill="#fbd75a"/><path d="M5 50 C2 37 8 29 13 26 C16 33 17 39 19 46 C15 44 9 46 5 50 Z" fill="#f0b52e"/><path d="M59 50 C62 37 56 29 51 26 C48 33 47 39 45 46 C49 44 55 46 59 50 Z" fill="#f0b52e"/><path d="M13 26 C17 22 21 19 24.5 18.2 C25 27 25.5 33 26 41.5 C23.5 42.5 21 44 19 46 C17 39 16 33 13 26 Z" fill="#f6c63f"/><path d="M51 26 C47 22 43 19 39.5 18.2 C39 27 38.5 33 38 41.5 C40.5 42.5 43 44 45 46 C47 39 48 33 51 26 Z" fill="#f6c63f"/><path d="M28 21 q4 -1.6 8 0" fill="none" stroke="#fffbe0" stroke-width="2.2"/><ellipse cx="27.2" cy="31" rx="1.52" ry="1.92" fill="#3b2a20" stroke="none"/><ellipse cx="36.8" cy="31" rx="1.52" ry="1.92" fill="#3b2a20" stroke="none"/><path d="M29.92 33.56 q1.04 1.6 2.08 0 q1.04 1.6 2.08 0" fill="none" stroke-width="1.2800000000000002"/><ellipse cx="23.6" cy="33.4" rx="2.4000000000000004" ry="1.4400000000000002" fill="#f58fa8" opacity=".65" stroke="none"/><ellipse cx="40.4" cy="33.4" rx="2.4000000000000004" ry="1.4400000000000002" fill="#f58fa8" opacity=".65" stroke="none"/>' + spark(7, 22) + spark(57, 18) + spark(56, 58, .8),
    unicorn: '<defs><clipPath id="czuc"><rect x="10" y="30" width="44" height="26" rx="8"/></clipPath></defs><g clip-path="url(#czuc)" stroke="none"><rect x="10" y="30" width="44" height="6" fill="#fff"/><rect x="10" y="36" width="44" height="4" fill="#f7a8b8"/><rect x="10" y="40" width="44" height="4" fill="#ffd6a5"/><rect x="10" y="44" width="44" height="4" fill="#fdf6b2"/><rect x="10" y="48" width="44" height="4" fill="#c4f0bf"/><rect x="10" y="52" width="44" height="4" fill="#b9d8ff"/></g><rect x="10" y="30" width="44" height="26" rx="8" fill="none"/><path d="M10.5 33 q5.4 6 10.8 0 q5.4 6 10.8 0 q5.4 6 10.8 0 q5.4 6 10.8 0" fill="none" stroke-width="2"/><path d="M17 31 L20 17 L27.5 29 Z M47 31 L44 17 L36.5 29 Z" fill="#fff"/><path d="M20 21 L21.5 27 L24.5 28 Z M44 21 L42.5 27 L39.5 28 Z" fill="#f7a8b8" stroke="none"/><path d="M32 3 L27 25 H37 Z" fill="#ffe08a"/><path d="M29.4 17 L34.8 14.5 M28.4 21.5 L35.8 18.5" stroke-width="1.6"/>' + spark(8, 20) + spark(56, 14) + spark(58, 50, .8, '#ffd6f0') + face(32, 41)
  };
  var ICON = {
    book: '<path d="M3 5 C6 4 9 4 12 6 C15 4 18 4 21 5 V19 C18 18 15 18 12 20 C9 18 6 18 3 19 Z" fill="#fff8e8"/><path d="M12 6 V20" /><path d="M6 9 h3 M6 12 h3 M15 9 h3 M15 12 h3" stroke-width="1.4"/>',
    bag: '<path d="M8 7 C8 3 16 3 16 7" fill="none"/><rect x="4" y="7" width="16" height="14" rx="4" fill="#e8806a"/><rect x="8" y="13" width="8" height="5" rx="1.5" fill="#f6c56b"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="3" fill="#fff8e8"/><path d="M3 10 H21" /><path d="M3.8 6 Q4 5 6 5 H18 Q20 5 20.2 6 V9.6 H3.8 Z" fill="#e8806a" stroke="none"/><path d="M8 3 V7 M16 3 V7" /><circle cx="9" cy="15" r="1.3" fill="#5b4636" stroke="none"/><circle cx="15" cy="15" r="1.3" fill="#e8806a" stroke="none"/>',
    star: '<path d="M12 2.8 L14.7 8.6 L21 9.3 L16.3 13.6 L17.6 19.9 L12 16.7 L6.4 19.9 L7.7 13.6 L3 9.3 L9.3 8.6 Z" fill="#f9d25a"/>',
    mail: '<rect x="3" y="6" width="18" height="13" rx="2.5" fill="#fff8e8"/><path d="M4 7.5 L12 13.5 L20 7.5" fill="none"/><circle cx="18" cy="7" r="2.6" fill="#e8806a"/>',
    gift: '<rect x="4" y="10" width="16" height="11" rx="2" fill="#9cd3a8"/><rect x="3" y="7" width="18" height="4.4" rx="1.6" fill="#b5e2bf"/><path d="M12 7 V21" stroke="#e8806a" stroke-width="2.6"/><path d="M12 7 C9 3 5 5 7.5 7 Z M12 7 C15 3 19 5 16.5 7 Z" fill="#f2a0b4"/>',
    bow: '<path d="M12 12 C8 5 3 7 3.5 12 C3 17 8 19 12 12 Z M12 12 C16 5 21 7 20.5 12 C21 17 16 19 12 12 Z" fill="#f2a0b4"/><circle cx="12" cy="12" r="2.4" fill="#e8806a"/>',
    sprout: '<path d="M12 21 V11" /><path d="M12 13 C7 13 4 10 4 6 C9 6 12 8 12 13 Z" fill="#9cd38a"/><path d="M12 11 C12 6 15 3 20 3 C20 8 17 11 12 11 Z" fill="#b8e39f"/><path d="M7 21 H17" />',
    trophy: '<path d="M7 4 H17 V10 C17 14 14.5 16 12 16 C9.5 16 7 14 7 10 Z" fill="#f9d25a"/><path d="M7 6 H4 C4 10 6 11 7.5 11 M17 6 H20 C20 10 18 11 16.5 11" fill="none"/><path d="M12 16 V19 M8 21 H16 V19 H8 Z" fill="#d9a35e"/>',
    medal: '<path d="M8 2 L12 9 L16 2" fill="none" stroke="#e8806a" stroke-width="2.6"/><circle cx="12" cy="15" r="6" fill="#f9d25a"/><path d="M12 12 L13 14.2 L15.3 14.4 L13.5 15.9 L14 18.2 L12 17 L10 18.2 L10.5 15.9 L8.7 14.4 L11 14.2 Z" fill="#fff3c0" stroke-width="1"/>',
    coin: '<circle cx="12" cy="12" r="9" fill="#f9d25a"/><circle cx="12" cy="12" r="5.6" fill="none" stroke="#d9a400" stroke-width="1.6"/><path d="M9.5 8.5 q2 -1.5 4 -1" stroke="#fff6c8" stroke-width="1.6" fill="none"/>',
    key: '<circle cx="8" cy="12" r="4.5" fill="#f9d25a"/><path d="M12.5 12 H21 M18 12 V15 M21 12 V14.5" />',
    door: '<path d="M5 21 V6 C5 3 19 3 19 6 V21 Z" fill="#d9944e"/><circle cx="15.5" cy="13" r="1.3" fill="#f9d25a"/><path d="M3 21 H21" />',
    note: '<path d="M9 18 V5 L19 3 V15" fill="none"/><ellipse cx="7" cy="18" rx="3" ry="2.4" fill="#f2a0b4"/><ellipse cx="17" cy="15.5" rx="3" ry="2.4" fill="#f2a0b4"/>',
    chart: '<rect x="4" y="12" width="4" height="8" rx="1" fill="#9cd38a"/><rect x="10" y="7" width="4" height="13" rx="1" fill="#f9d25a"/><rect x="16" y="4" width="4" height="16" rx="1" fill="#e8806a"/><path d="M2 21 H22" />',
    person: '<circle cx="12" cy="8" r="4" fill="#fbe7c2"/><path d="M4 21 C4 15 8 13 12 13 C16 13 20 15 20 21 Z" fill="#9cc9ee"/>',
    pine: '<path d="M12 2 L17 9 H14.5 L19 15 H15.5 L20 21 H4 L8.5 15 H5 L9.5 9 H7 Z" fill="#7da35a"/><path d="M11 21 V23 H13 V21" fill="#8a5a3b"/>',
    anger: '<path d="M9 3 C9 7 7 9 3 9 M15 3 C15 7 17 9 21 9 M9 21 C9 17 7 15 3 15 M15 21 C15 17 17 15 21 15" fill="none" stroke="#e94b5a" stroke-width="2.6"/>',
    heart: '<path d="M12 20 C5 15 3 11 3 8 C3 5 5.5 3.5 8 3.5 C10 3.5 11.2 5 12 6.2 C12.8 5 14 3.5 16 3.5 C18.5 3.5 21 5 21 8 C21 11 19 15 12 20 Z" fill="#f2788f"/>'
  };
  // ── 손님·보스 (같은 손그림체) ──
  function pface(cx, cy, mood, o) {
    var r = '', ey = cy, ex = 5.6;
    if (o.ninja) { r += '<rect x="' + (cx - 11) + '" y="' + (cy - 4) + '" width="22" height="8" rx="4" fill="' + o.skin + '"/>'; }
    if (o.xeyes) r += '<path d="M' + (cx - ex - 2) + ' ' + (ey - 2) + ' l4 4 M' + (cx - ex + 2) + ' ' + (ey - 2) + ' l-4 4 M' + (cx + ex - 2) + ' ' + (ey - 2) + ' l4 4 M' + (cx + ex + 2) + ' ' + (ey - 2) + ' l-4 4" stroke-width="1.6"/>';
    else r += '<ellipse cx="' + (cx - ex) + '" cy="' + ey + '" rx="1.7" ry="2.1" fill="#3b2a20" stroke="none"/><ellipse cx="' + (cx + ex) + '" cy="' + ey + '" rx="1.7" ry="2.1" fill="#3b2a20" stroke="none"/>';
    if (mood === 'angry') r += '<path d="M' + (cx - ex - 3) + ' ' + (ey - 5) + ' l5 2 M' + (cx + ex + 3) + ' ' + (ey - 5) + ' l-5 2" stroke-width="1.8"/>';
    if (o.ninja) return r;
    var my = cy + 5.5;
    if (mood === 'shout') r += '<ellipse cx="' + cx + '" cy="' + (my + .5) + '" rx="2.4" ry="2" fill="#8a2c2c" stroke-width="1.4"/>';
    else if (mood === 'angry' || mood === 'frown') r += '<path d="M' + (cx - 2.6) + ' ' + (my + 1.4) + ' q2.6 -2.4 5.2 0" fill="none" stroke-width="1.5"/>';
    else if (mood === 'grin') r += '<path d="M' + (cx - 3) + ' ' + my + ' q3 3 6 0" fill="#fff" stroke-width="1.4"/>';
    else r += '<path d="M' + (cx - 2) + ' ' + (my + .5) + ' h4" stroke-width="1.5"/>';
    if (!o.noblush) r += '<ellipse cx="' + (cx - 9) + '" cy="' + (cy + 3.5) + '" rx="2.4" ry="1.4" fill="#f58fa8" opacity=".55" stroke="none"/><ellipse cx="' + (cx + 9) + '" cy="' + (cy + 3.5) + '" rx="2.4" ry="1.4" fill="#f58fa8" opacity=".55" stroke="none"/>';
    return r;
  }
  function person(o) {
    var cx = 32, cy = 27, r = '', hc = o.hc || '#6b4a32', sk = o.skin || '#fcd9bd';
    if (o.cape) r += '<path d="M14 62 L20 40 H44 L50 62 Z" fill="' + o.cape + '"/>';
    if (o.hair === 'long') r += '<path d="M15 26 C13 44 18 50 21 50 H43 C46 50 51 44 49 26 Z" fill="' + hc + '"/>';
    if (o.hair === 'afro') r += '<circle cx="32" cy="22" r="19" fill="' + hc + '"/>';
    if (o.hair === 'clown') r += '<circle cx="15" cy="24" r="7" fill="#f2788f"/><circle cx="49" cy="24" r="7" fill="#7ac4e8"/><circle cx="17" cy="15" r="6" fill="#f9d25a"/><circle cx="47" cy="15" r="6" fill="#8fcf6d"/>';
    r += '<path d="M15 63 C15 48 22 41 32 41 C42 41 49 48 49 63 Z" fill="' + (o.shirt || '#7aa7d8') + '"/>';
    if (o.vneck) r += '<path d="M27 42 L32 50 L37 42" fill="#fff"/>';
    if (o.apron) r += '<path d="M24 47 H40 V63 H24 Z" fill="#fff"/>';
    if (o.stitch) r += '<path d="M22 50 l8 6 M24 49 l-1 3 M27 51 l-1 3 M42 48 v10 M40 51 h4 M40 55 h4" stroke-width="1.4"/>';
    if (o.collar) r += '<path d="M20 42 L26 50 L32 43 L38 50 L44 42 L40 40 H24 Z" fill="' + o.collar + '"/>';
    if (o.horns) r += '<path d="M19 18 L15 6 L25 14 Z M45 18 L49 6 L39 14 Z" fill="#fff3d6"/>';
    r += '<circle cx="32" cy="' + cy + '" r="15" fill="' + sk + '"/>';
    if (o.hair === 'short') r += '<path d="M17 26 C16 13 48 13 47 26 C44 20 38 18.5 32 19.5 C26 18.5 20 20 17 26 Z" fill="' + hc + '"/>';
    if (o.hair === 'long') r += '<path d="M17 27 C16 12 48 12 47 27 C43 21 38 19 33 21 C30 18 24 19 17 27 Z" fill="' + hc + '"/>';
    if (o.hair === 'bun') r += '<circle cx="32" cy="11" r="5.5" fill="' + hc + '"/><path d="M17 25 C17 13 47 13 47 25 C42 20 22 20 17 25 Z" fill="' + hc + '"/>';
    if (o.hair === 'bald') r += '<path d="M17.5 30 C16 24 18 20 21 19 C20 23 20 26 21 30 Z M46.5 30 C48 24 46 20 43 19 C44 23 44 26 43 30 Z" fill="' + hc + '"/>';
    if (o.hair === 'slick') r += '<path d="M17 25 C16 12 48 12 47 25 C43 19 36 18 32 23 C28 18 21 19 17 25 Z" fill="' + hc + '"/>';
    if (o.hair === 'afro') r += '<path d="M17 24 C18 14 28 11 32 13 C36 11 46 14 47 24 C42 20 22 20 17 24 Z" fill="' + hc + '"/>';
    if (o.hood) r += '<path d="M15 30 C14 12 50 12 49 30 C49 40 44 44 32 44 C20 44 15 40 15 30 Z" fill="' + o.hood + '"/>';
    r += pface(cx, cy + 1, o.mood || 'neutral', { ninja: o.hood, skin: sk, xeyes: o.xeyes, noblush: o.noblush });
    if (o.glasses) r += '<circle cx="26.4" cy="28" r="4" fill="rgba(255,255,255,.35)" stroke-width="1.5"/><circle cx="37.6" cy="28" r="4" fill="rgba(255,255,255,.35)" stroke-width="1.5"/><path d="M30.4 28 h3.2" stroke-width="1.5"/>';
    if (o.shades) r += '<rect x="21" y="24.5" width="9" height="6" rx="2.5" fill="#3b2a20" stroke-width="1.4"/><rect x="34" y="24.5" width="9" height="6" rx="2.5" fill="#3b2a20" stroke-width="1.4"/><path d="M30 26.5 h4" stroke-width="1.4"/>';
    if (o.stache) r += '<path d="M26 33.5 C28 31 31 32 32 33 C33 32 36 31 38 33.5 C35 35 33 34 32 33.8 C31 34 29 35 26 33.5 Z" fill="' + hc + '" stroke-width="1.3"/>';
    if (o.beard) r += '<path d="M19 30 C21 44 27 52 32 54 C37 52 43 44 45 30 C41 37 23 37 19 30 Z" fill="#f4f1ea"/>';
    if (o.nose) r += '<circle cx="32" cy="31" r="3.2" fill="#e94b5a" stroke-width="1.4"/>';
    if (o.fangs) r += '<path d="M29.5 33 l1 2.6 l1 -2.6 M32.5 33 l1 2.6 l1 -2.6" fill="#fff" stroke-width="1"/>';
    if (o.sweat) r += '<path d="M48 14 C46 18 46 21 48.5 21 C51 21 51 18 48 14 Z" fill="#9fd4f5" stroke-width="1.4"/>';
    if (o.hat === 'chef') r += '<path d="M20 16 C15 10 20 2 26 5 C28 0 36 0 38 5 C44 2 49 10 44 16 Z" fill="#fff"/><rect x="20" y="14" width="24" height="5" rx="2" fill="#fff"/>';
    if (o.hat === 'cap') r += '<path d="M17 21 C17 10 47 10 47 21 Z" fill="' + o.capc + '"/><path d="M38 21 H54 C54 24 50 24 47 24 H38 Z" fill="' + o.capc + '"/>';
    if (o.hat === 'helmet') r += '<path d="M15 24 C15 7 49 7 49 24 Z" fill="#f9d25a"/><path d="M32 9 V24" stroke-width="2"/>';
    if (o.hat === 'wizard') r += '<path d="M13 20 C20 22 44 22 51 20 C47 17 41 16 32 1 C23 16 17 17 13 20 Z" fill="#8c6fd1"/>' + '<path d="M36 9 l1.2 2.4 l2.6 .3 l-2 1.6 l.6 2.6 l-2.4 -1.3 l-2.4 1.3 l.6 -2.6 l-2 -1.6 l2.6 -.3 Z" fill="#f9d25a" stroke-width="1"/>';
    if (o.headband) r += '<path d="M17.3 22 C24 19 40 19 46.7 22 L46 25.5 C40 23 24 23 18 25.5 Z" fill="#e94b5a"/>';
    if (o.phone) r += '<rect x="41" y="44" width="8" height="12" rx="2" fill="#5b6b9a"/><rect x="42.6" y="45.6" width="4.8" height="7" rx="1" fill="#bfe3ff" stroke="none"/>';
    if (o.basket) r += '<path d="M38 50 H56 L53 62 H41 Z" fill="#d9a35e"/><path d="M41 50 C41 44 53 44 53 50" fill="none"/><circle cx="44" cy="49" r="2.6" fill="#ef5b5b"/><circle cx="49" cy="48" r="2.6" fill="#8fcf6d"/>';
    if (o.bike) r += '<circle cx="14" cy="57" r="5" fill="none" stroke-width="2"/><circle cx="50" cy="57" r="5" fill="none" stroke-width="2"/>';
    if (o.disco) r += '<circle cx="22" cy="52" r="1.4" fill="#fff" stroke="none"/><circle cx="41" cy="55" r="1.4" fill="#fff" stroke="none"/><circle cx="35" cy="48" r="1.2" fill="#f9d25a" stroke="none"/>';
    if (o.small) r = '<g transform="translate(6.4 12.8) scale(.8)">' + r + '</g>';
    return r;
  }
  var PEOPLE = {
    '🚶': { hair: 'short', hc: '#6b4a32', shirt: '#7aa7d8', mood: 'frown' },
    '🚶‍♀': { hair: 'long', hc: '#4a3426', shirt: '#f2a0b4', mood: 'frown' },
    '🧍': { hair: 'short', hc: '#2f2620', shirt: '#8fcf6d', mood: 'neutral' },
    '🧑‍🍳': { hair: 'short', hc: '#6b4a32', shirt: '#f4f1ea', hat: 'chef', apron: 1, mood: 'neutral' },
    '👵': { hair: 'bun', hc: '#c9c3bb', shirt: '#b39ddb', glasses: 1, mood: 'frown' },
    '🧒': { hair: 'short', hc: '#6b4a32', shirt: '#f9d25a', hat: 'cap', capc: '#f08c3c', mood: 'grin', small: 1 },
    '🧑‍🦯': { hair: 'short', hc: '#4a3426', shirt: '#9cc9ee', phone: 1, mood: 'neutral' },
    '🛒': { hair: 'long', hc: '#8a5a3b', shirt: '#f7b6c8', basket: 1, mood: 'frown' },
    '🚴': { hair: 'short', hc: '#2f2620', shirt: '#8fcf6d', hat: 'helmet', bike: 1, mood: 'grin' },
    '🧓': { hair: 'bald', hc: '#d6d0c8', shirt: '#c79a6b', stache: 1, mood: 'frown' },
    '🏃': { hair: 'short', hc: '#2f2620', shirt: '#e8806a', headband: 1, sweat: 1, mood: 'shout' },
    '🕺': { hair: 'afro', hc: '#3b2a20', shirt: '#b39ddb', vneck: 1, disco: 1, mood: 'grin' },
    '🧟': { hair: 'short', hc: '#4f6b3a', skin: '#b9d9a0', shirt: '#9a8f7c', stitch: 1, xeyes: 1, noblush: 1, mood: 'shout' },
    '🥷': { hood: '#3b3550', shirt: '#3b3550', mood: 'angry' },
    '🧛': { hair: 'slick', hc: '#2f2620', skin: '#efe4ec', shirt: '#3b3550', cape: '#c0392b', collar: '#e94b5a', fangs: 1, noblush: 1, mood: 'grin' },
    '🤡': { hair: 'clown', skin: '#fff8f0', shirt: '#f9d25a', nose: 1, collar: '#7ac4e8', mood: 'grin' },
    '👹': { hair: 'short', hc: '#3b2a20', skin: '#f08a7a', shirt: '#8a5a3b', horns: 1, noblush: 1, mood: 'angry' },
    '🧙': { hair: 'short', hc: '#d6d0c8', shirt: '#8c6fd1', hat: 'wizard', beard: 1, mood: 'neutral' }
  };
  function bossSVG(open) {
    var m = open ? '<ellipse cx="50" cy="56" rx="9" ry="7" fill="#8a2c2c"/><path d="M43 52.5 h14" stroke="#fff" stroke-width="2.4"/><ellipse cx="50" cy="59.5" rx="4.6" ry="2.4" fill="#f58fa8" stroke="none"/>'
      : '<ellipse cx="50" cy="56" rx="7" ry="3.4" fill="#8a2c2c"/>';
    return '<path d="M22 100 C22 78 32 70 50 70 C68 70 78 78 78 100 Z" fill="#5b6b9a"/><path d="M42 70 L50 84 L58 70 Z" fill="#fff"/><path d="M47.5 73 H52.5 L54 90 L50 95 L46 90 Z" fill="#e94b5a"/>' +
      '<circle cx="50" cy="42" r="28" fill="#ffc2a2"/><path d="M22.5 38 C20 16 36 10 50 12 C64 10 80 16 77.5 38 C74 28 66 24 58 27 C54 22 46 22 42 27 C34 24 26 28 22.5 38 Z" fill="#3b2a20"/>' +
      '<ellipse cx="30" cy="52" rx="6" ry="3.4" fill="#f2788f" opacity=".75" stroke="none"/><ellipse cx="70" cy="52" rx="6" ry="3.4" fill="#f2788f" opacity=".75" stroke="none"/>' +
      '<path d="M31 34 L45 40 M69 34 L55 40" stroke-width="4"/><ellipse cx="40" cy="44" rx="3" ry="3.6" fill="#3b2a20" stroke="none"/><ellipse cx="60" cy="44" rx="3" ry="3.6" fill="#3b2a20" stroke="none"/>' + m;
  }


  function af(cx, cy, dark) { var e = dark ? '#fff' : '#3b2a20'; return '<circle cx="' + (cx - 2.7) + '" cy="' + cy + '" r="1" fill="' + e + '" stroke="none"/><circle cx="' + (cx + 2.7) + '" cy="' + cy + '" r="1" fill="' + e + '" stroke="none"/><path d="M' + (cx - 1.2) + ' ' + (cy + 1.9) + ' q.6 .9 1.2 0 q.6 .9 1.2 0" fill="none" stroke-width="1"/><ellipse cx="' + (cx - 4.6) + '" cy="' + (cy + 1.6) + '" rx="1.3" ry=".8" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="' + (cx + 4.6) + '" cy="' + (cy + 1.6) + '" rx="1.3" ry=".8" fill="#f58fa8" opacity=".7" stroke="none"/>'; }
  var ANIM = {
    cat: '<path d="M5 9 L5.5 2.8 L10 6.2 Z M19 9 L18.5 2.8 L14 6.2 Z" fill="#f4b46a"/><circle cx="12" cy="13.5" r="8" fill="#f4b46a"/><path d="M12 5.6 v2.6 M9.5 6 l.6 2.2 M14.5 6 l-.6 2.2" stroke="#c97a35" stroke-width="1.2"/>' + af(12, 13.5),
    dog: '<circle cx="12" cy="13" r="8" fill="#f1d3a8"/><path d="M5 7.5 C2 9 2.5 15 5 16 C6.5 13 6.5 9 5 7.5 Z M19 7.5 C22 9 21.5 15 19 16 C17.5 13 17.5 9 19 7.5 Z" fill="#a0704a"/><ellipse cx="12" cy="16" rx="3.4" ry="2.4" fill="#fff6e6" stroke-width="1"/><circle cx="12" cy="14.8" r=".9" fill="#3b2a20" stroke="none"/>' + af(12, 12.4).replace(/<path[^>]*q\.6[^>]*\/>/, ''),
    rabbit: '<ellipse cx="8.6" cy="5" rx="2.4" ry="5" fill="#fff"/><ellipse cx="15.4" cy="5" rx="2.4" ry="5" fill="#fff"/><ellipse cx="8.6" cy="5.4" rx="1" ry="3" fill="#f7b6c8" stroke="none"/><ellipse cx="15.4" cy="5.4" rx="1" ry="3" fill="#f7b6c8" stroke="none"/><circle cx="12" cy="14.5" r="7.6" fill="#fff"/>' + af(12, 14.5),
    bear: '<circle cx="5.6" cy="7" r="3" fill="#b07a4f"/><circle cx="18.4" cy="7" r="3" fill="#b07a4f"/><circle cx="12" cy="13.5" r="8" fill="#b07a4f"/><ellipse cx="12" cy="16.2" rx="3.6" ry="2.6" fill="#f1d3a8" stroke-width="1"/><circle cx="12" cy="15.2" r=".9" fill="#3b2a20" stroke="none"/>' + af(12, 12.6).replace(/<path[^>]*q\.6[^>]*\/>/, ''),
    penguin: '<circle cx="12" cy="12.5" r="8.6" fill="#4a4f63"/><path d="M5.5 14 C5.5 8 9 7 12 9.5 C15 7 18.5 8 18.5 14 C18.5 18.5 15.5 20.5 12 20.5 C8.5 20.5 5.5 18.5 5.5 14 Z" fill="#fff" stroke-width="1.2"/><path d="M10.6 15.6 L12 17.4 L13.4 15.6 Z" fill="#f6a03c" stroke-width="1"/>' + af(12, 13.4).replace(/<path[^>]*q\.6[^>]*\/>/, ''),
    fox: '<path d="M4 4 L9 8 L5 12 Z M20 4 L15 8 L19 12 Z" fill="#f08c3c"/><path d="M4 9 C4 16 8 20.5 12 20.5 C16 20.5 20 16 20 9 C17 7 7 7 4 9 Z" fill="#f08c3c"/><path d="M5 12 C7 13 9.5 15 12 20.5 C14.5 15 17 13 19 12 C18 17 15 20.5 12 20.5 C9 20.5 6 17 5 12 Z" fill="#fff6e6" stroke-width="1"/><circle cx="12" cy="18.6" r=".9" fill="#3b2a20" stroke="none"/>' + af(12, 12.8).replace(/<path[^>]*q\.6[^>]*\/>/, ''),
    sheep: '<g fill="#fff"><circle cx="6" cy="8" r="3.4"/><circle cx="12" cy="5.6" r="3.6"/><circle cx="18" cy="8" r="3.4"/><circle cx="5" cy="14" r="3.2"/><circle cx="19" cy="14" r="3.2"/><circle cx="12" cy="18.6" r="3.4"/></g><ellipse cx="12" cy="13" rx="5.6" ry="5.8" fill="#f1d3a8"/>' + af(12, 13),
    chick: '<circle cx="12" cy="13" r="8.4" fill="#ffd84d"/><path d="M11 4.8 q1 -3 2.6 -1.6" fill="none"/><path d="M10.4 14.6 L12 16.4 L13.6 14.6 Z" fill="#f6a03c" stroke-width="1"/>' + af(12, 12.4).replace(/<path[^>]*q\.6[^>]*\/>/, ''),
    hatch: '<circle cx="12" cy="11" r="7.4" fill="#ffd84d"/><path d="M10.6 12.6 L12 14.2 L13.4 12.6 Z" fill="#f6a03c" stroke-width="1"/>' + af(12, 10.4).replace(/<path[^>]*q\.6[^>]*\/>/, '') + '<path d="M3.5 14 L6.5 12 L9 14.6 L12 12 L15 14.6 L17.5 12 L20.5 14 C20.5 19 17 21.5 12 21.5 C7 21.5 3.5 19 3.5 14 Z" fill="#fff8e8"/>',
    panda: '<circle cx="5.8" cy="6.8" r="2.8" fill="#3b3550"/><circle cx="18.2" cy="6.8" r="2.8" fill="#3b3550"/><circle cx="12" cy="13.5" r="8" fill="#fff"/><ellipse cx="9" cy="13" rx="2" ry="2.6" fill="#3b3550" stroke="none" transform="rotate(-20 9 13)"/><ellipse cx="15" cy="13" rx="2" ry="2.6" fill="#3b3550" stroke="none" transform="rotate(20 15 13)"/>' + af(12, 13, 1).replace(/<path[^>]*q\.6[^>]*\/>/, '') + '<circle cx="12" cy="16" r=".9" fill="#3b2a20" stroke="none"/>',
    tiger: '<path d="M5 8.5 L5.4 3.4 L9.6 6 Z M19 8.5 L18.6 3.4 L14.4 6 Z" fill="#f6a03c"/><circle cx="12" cy="13.5" r="8" fill="#f6a03c"/><path d="M12 5.6 v3 M4.4 12 h2.4 M4.8 15.2 h2.2 M19.6 12 h-2.4 M19.2 15.2 h-2.2" stroke-width="1.3"/><ellipse cx="12" cy="16.4" rx="3.6" ry="2.4" fill="#fff6e6" stroke-width="1"/>' + af(12, 12.8),
    frog: '<circle cx="7.6" cy="6.6" r="3.2" fill="#8fcf6d"/><circle cx="16.4" cy="6.6" r="3.2" fill="#8fcf6d"/><ellipse cx="12" cy="14" rx="9" ry="7" fill="#8fcf6d"/><circle cx="7.6" cy="6.6" r="1.1" fill="#3b2a20" stroke="none"/><circle cx="16.4" cy="6.6" r="1.1" fill="#3b2a20" stroke="none"/><path d="M8.5 15 q3.5 2.6 7 0" fill="none" stroke-width="1.2"/><ellipse cx="6" cy="15" rx="1.4" ry=".9" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="18" cy="15" rx="1.4" ry=".9" fill="#f58fa8" opacity=".7" stroke="none"/>',
    tulip: '<path d="M12 21 V12 M12 17 C9 17 7 15 6.5 12.5 C9 12.5 11 14 12 17 Z M12 18.5 C15 18.5 17.5 16.5 18 14 C15.5 14 13 15.5 12 18.5 Z" fill="#8fcf6d"/><path d="M7 4 L9.5 7 L12 3.5 L14.5 7 L17 4 C17.5 10 15.5 12.5 12 12.5 C8.5 12.5 6.5 10 7 4 Z" fill="#f2788f"/>',
    blossom: '<g fill="#f7b6c8"><circle cx="12" cy="6" r="3.8"/><circle cx="17.7" cy="10.2" r="3.8"/><circle cx="15.5" cy="17" r="3.8"/><circle cx="8.5" cy="17" r="3.8"/><circle cx="6.3" cy="10.2" r="3.8"/></g><circle cx="12" cy="12" r="2.6" fill="#ffe27a"/>',
    herb: '<path d="M12 22 V6" /><path d="M12 10 C8 10 5 8 4 4 C8 4 11 6 12 10 Z M12 15 C16 15 19 13 20 9 C16 9 13 11 12 15 Z M12 19 C8.5 19 6 17.5 5 14.5 C8.5 14.5 11 16 12 19 Z" fill="#8fcf6d"/>',
    smile: '<circle cx="12" cy="12" r="9" fill="#ffd84d"/>' + af(12, 11),
    sun: '<circle cx="12" cy="12" r="9" fill="#ffd84d"/>' + af(12, 11) + '<path d="M8 8 q1.5 -1 3 0 M13 8 q1.5 -1 3 0" fill="none" stroke-width="1"/>'
  };
  Object.keys(ANIM).forEach(function (k) { ICON[k] = ANIM[k]; });


  // ── 레전더리 꾸미기: 아이콘 둘레를 감싸는 프레임 (가운데는 비어 있음) ──
  function fw(inner) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke="' + O + '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">' + inner + '</g></svg>'; }
  function star4(x, y, r, c) { return '<path d="M' + x + ' ' + (y - r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + 'Z" fill="' + c + '" stroke-width="1.2"/>'; }
  var FRAME = {
    cat: fw('<path d="M18 60 C6 46 10 24 24 24" fill="none" stroke-width="12"/><path d="M18 60 C6 46 10 24 24 24" fill="none" stroke="#f4b46a" stroke-width="7.4"/><path d="M12 42 l5 1 M13 34 l5 2" stroke="#c97a35" stroke-width="1.6"/>' +
      '<path d="M16 58 A36 36 0 0 0 84 58" fill="none" stroke-width="20"/><path d="M16 58 A36 36 0 0 0 84 58" fill="none" stroke="#f4b46a" stroke-width="15"/>' +
      '<path d="M26 76 l4 -6 M38 84 l2 -7 M50 87 v-7 M62 84 l-2 -7 M74 76 l-4 -6" stroke="#c97a35" stroke-width="2"/>' +
      '<ellipse cx="42" cy="90" rx="6" ry="4" fill="#fff6e6"/><ellipse cx="58" cy="90" rx="6" ry="4" fill="#fff6e6"/>' +
      '<path d="M71 25 L72 11 L80 19 Z M92 30 L95 17 L85 21 Z" fill="#f4b46a"/><circle cx="82" cy="32" r="13" fill="#f4b46a"/><path d="M82 19.5 v4 M78.5 20 l1 3 M85.5 20 l-1 3" stroke="#c97a35" stroke-width="1.4"/>' +
      '<circle cx="77.6" cy="32" r="1.5" fill="#3b2a20" stroke="none"/><circle cx="86.4" cy="32" r="1.5" fill="#3b2a20" stroke="none"/><path d="M80 35.5 q1 1.4 2 0 q1 1.4 2 0" fill="none" stroke-width="1.3"/><ellipse cx="74" cy="36" rx="2.4" ry="1.4" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="90" cy="36" rx="2.4" ry="1.4" fill="#f58fa8" opacity=".7" stroke="none"/><path d="M66 31 h-6 M66 34 l-6 2 M98 31 h-4 M98 34 l-4 1.5" stroke-width="1"/>'),
    wreath: fw((function () { var r = '', i, a, x, y; for (i = 0; i < 14; i++) { a = i / 14 * Math.PI * 2; x = 50 + Math.cos(a) * 40; y = 50 + Math.sin(a) * 40; r += '<ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="4" ry="8" transform="rotate(' + (a * 180 / Math.PI + 45).toFixed(0) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')" fill="' + (i % 2 ? '#8fcf6d' : '#a9dc8a') + '" stroke-width="1.6"/>'; }
      [[0, '#f7b6c8'], [1.3, '#fff4f0'], [2.5, '#f9d25a'], [3.8, '#f7b6c8'], [5.0, '#fff4f0']].forEach(function (f) { x = 50 + Math.cos(f[0] - 1.57) * 40; y = 50 + Math.sin(f[0] - 1.57) * 40; r += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"><circle r="4.2" cx="-4" fill="' + f[1] + '" stroke-width="1.4"/><circle r="4.2" cx="4" fill="' + f[1] + '" stroke-width="1.4"/><circle r="4.2" cy="-4" fill="' + f[1] + '" stroke-width="1.4"/><circle r="4.2" cy="4" fill="' + f[1] + '" stroke-width="1.4"/><circle r="2.8" fill="#ffe27a" stroke-width="1.2"/></g>'; });
      return r + '<path d="M50 90 C42 84 34 92 40 97 C44 99 48 95 50 90 C52 95 56 99 60 97 C66 92 58 84 50 90 Z" fill="#f2788f"/><circle cx="50" cy="90" r="3" fill="#e94b5a"/>'; })()),
    bunny: fw('<ellipse cx="36" cy="12" rx="7" ry="15" fill="#fff" transform="rotate(-12 36 12)"/><ellipse cx="36" cy="13" rx="3" ry="9" fill="#f7b6c8" stroke="none" transform="rotate(-12 36 13)"/><ellipse cx="64" cy="12" rx="7" ry="15" fill="#fff" transform="rotate(12 64 12)"/><ellipse cx="64" cy="13" rx="3" ry="9" fill="#f7b6c8" stroke="none" transform="rotate(12 64 13)"/>' +
      '<ellipse cx="36" cy="88" rx="9" ry="7" fill="#fff"/><ellipse cx="64" cy="88" rx="9" ry="7" fill="#fff"/><path d="M33 86 v4 M38 86 v4 M61 86 v4 M66 86 v4" stroke-width="1.4"/><circle cx="36" cy="91" r="1.6" fill="#f7b6c8" stroke="none"/><circle cx="64" cy="91" r="1.6" fill="#f7b6c8" stroke="none"/>' +
      '<path d="M84 70 L94 92 L78 80 Z" fill="#f6a03c"/><path d="M84 70 l-3 -6 M86 70 l1 -7 M88 71 l4 -5" stroke="#5aa84a" stroke-width="2.2"/>' + star4(12, 30, 5, '#fff3a8') + star4(90, 26, 4, '#ffd6f0')),
    rainbow: fw('<path d="M5 60 A45 45 0 0 1 95 60" fill="none" stroke-width="13"/><path d="M5 60 A45 45 0 0 1 95 60" fill="none" stroke="#f7a8b8" stroke-width="10"/><path d="M8.6 60 A41.4 41.4 0 0 1 91.4 60" fill="none" stroke="#ffe08a" stroke-width="3.4"/><path d="M11.8 60 A38.2 38.2 0 0 1 88.2 60" fill="none" stroke="#9cd3e8" stroke-width="3"/>' +
      '<g fill="#fff" stroke-width="2"><circle cx="5" cy="66" r="5.4"/><circle cx="11" cy="70" r="5"/><circle cx="95" cy="66" r="5.4"/><circle cx="89" cy="70" r="5"/></g>' + star4(50, 6, 4.5, '#fff3a8')),
    bear: fw('<circle cx="34" cy="8" r="6" fill="#b07a4f"/><circle cx="66" cy="8" r="6" fill="#b07a4f"/><path d="M28 22 C28 4 72 4 72 22 Z" fill="#b07a4f"/><circle cx="43" cy="15" r="1.5" fill="#3b2a20" stroke="none"/><circle cx="57" cy="15" r="1.5" fill="#3b2a20" stroke="none"/><ellipse cx="50" cy="19" rx="4.4" ry="3" fill="#f1d3a8" stroke-width="1.2"/><circle cx="50" cy="18" r="1.1" fill="#3b2a20" stroke="none"/>' +
      '<path d="M14 40 C4 56 10 80 30 86" fill="none" stroke-width="15"/><path d="M14 40 C4 56 10 80 30 86" fill="none" stroke="#b07a4f" stroke-width="10.6"/><path d="M86 40 C96 56 90 80 70 86" fill="none" stroke-width="15"/><path d="M86 40 C96 56 90 80 70 86" fill="none" stroke="#b07a4f" stroke-width="10.6"/>' +
      '<circle cx="33" cy="86" r="7" fill="#b07a4f"/><circle cx="67" cy="86" r="7" fill="#b07a4f"/><ellipse cx="33" cy="87" rx="3.4" ry="2.6" fill="#f1d3a8" stroke="none"/><ellipse cx="67" cy="87" rx="3.4" ry="2.6" fill="#f1d3a8" stroke="none"/>' +
      '<path d="M50 92 C47 89 43 91 45 94 L50 98 L55 94 C57 91 53 89 50 92 Z" fill="#f2788f" stroke-width="1.4"/>'),
    galaxy: fw('<circle cx="50" cy="50" r="42" fill="none" stroke="#c9b8f5" stroke-width="2.4" stroke-dasharray="3 6"/>' + star4(50, 6, 6, '#fff3a8') + star4(92, 44, 5, '#ffd6f0') + star4(74, 88, 4.5, '#c4f0bf') + star4(14, 74, 5, '#b9d8ff') + star4(12, 26, 4, '#fff3a8') +
      '<circle cx="84" cy="16" r="7" fill="#f7b6c8"/><ellipse cx="84" cy="16" rx="12" ry="3.4" fill="none" stroke="#5b4636" stroke-width="1.8" transform="rotate(-20 84 16)"/><path d="M26 92 C30 88 34 88 36 92 C34 90 30 90 26 92 Z" fill="#fff"/><circle cx="20" cy="50" r="2" fill="#fff3a8" stroke="none"/><circle cx="80" cy="66" r="1.6" fill="#fff" stroke="none"/>')
  };


  var STK = {
    cap: '<path d="M4 15 C4 7 20 7 20 15 Z" fill="#7ac4e8"/><path d="M14 15 H23 C23 17.5 20 17.5 18 17.5 H14 Z" fill="#5fa8d0"/><circle cx="12" cy="7.6" r="1.3" fill="#fff"/><path d="M12 9 V15" stroke-width="1.2"/>',
    straw: '<ellipse cx="12" cy="15" rx="10.5" ry="4" fill="#f3d58a"/><path d="M6.5 14.5 C6.5 7 17.5 7 17.5 14.5 Z" fill="#f6df9c"/><path d="M6.6 12.4 C9 13.6 15 13.6 17.4 12.4 L17.5 14.5 C15 15.6 9 15.6 6.5 14.5 Z" fill="#f2788f"/><circle cx="16" cy="12.6" r="1.8" fill="#fff4f0"/>',
    tophat: '<path d="M7 16 V5.5 C7 4 17 4 17 5.5 V16 Z" fill="#4a4f63"/><path d="M7 12.5 H17 V15 H7 Z" fill="#e8806a"/><ellipse cx="12" cy="17" rx="10" ry="2.6" fill="#4a4f63"/>',
    shades: '<path d="M2 9 H22" /><path d="M3 9 H11 V12 C11 15 9 16 7 16 C4.5 16 3 14.5 3 12 Z M13 9 H21 V12 C21 14.5 19.5 16 17 16 C15 16 13 15 13 12 Z" fill="#3b3550"/><path d="M5 11 l2 -1.2 M15 11 l2 -1.2" stroke="#fff" stroke-width="1.2"/>',
    butterfly: '<path d="M12 12 C8 3 2 5 3 10 C3.5 13 8 13 12 12 Z M12 12 C16 3 22 5 21 10 C20.5 13 16 13 12 12 Z" fill="#b39ddb"/><path d="M12 12 C9 14 4 15 5 18.5 C6 21 10 18 12 12 Z M12 12 C15 14 20 15 19 18.5 C18 21 14 18 12 12 Z" fill="#f7b6c8"/><path d="M12 7 V19" stroke-width="2"/><path d="M12 7 l-2 -3 M12 7 l2 -3" stroke-width="1.2"/><circle cx="7" cy="9" r="1.2" fill="#fff" stroke="none"/><circle cx="17" cy="9" r="1.2" fill="#fff" stroke="none"/>',
    grad: '<path d="M2 9.5 L12 5 L22 9.5 L12 14 Z" fill="#4a4f63"/><path d="M6.5 11.5 V16 C9 18 15 18 17.5 16 V11.5" fill="#5b6378"/><path d="M20 10.4 V16" stroke="#f9d25a" stroke-width="1.6"/><circle cx="20" cy="17" r="1.4" fill="#f9d25a"/>',
    phones: '<path d="M4 15 V12 C4 6 20 6 20 12 V15" fill="none" stroke-width="2.6"/><rect x="2.5" y="12" width="5" height="8" rx="2.4" fill="#f2788f"/><rect x="16.5" y="12" width="5" height="8" rx="2.4" fill="#f2788f"/>',
    snow: '<path d="M12 2.5 V21.5 M3.8 7.2 L20.2 16.8 M3.8 16.8 L20.2 7.2" stroke="#7ac4e8" stroke-width="2.4"/><path d="M12 2.5 V21.5 M3.8 7.2 L20.2 16.8 M3.8 16.8 L20.2 7.2" stroke="#fff" stroke-width=".8"/><path d="M9.6 4 L12 6 L14.4 4 M9.6 20 L12 18 L14.4 20" fill="none" stroke="#7ac4e8" stroke-width="1.6"/><circle cx="12" cy="12" r="2" fill="#fff" stroke="#7ac4e8" stroke-width="1.4"/>',
    santa: '<path d="M4 16 C5 8 11 3 17 5 C20 6 21 10 20 13 L18 10 C15 9 9 11 6 16 Z" fill="#e94b5a"/><circle cx="20" cy="14" r="2.4" fill="#fff"/><path d="M3 15.5 C7 14 14 14 19 15.5 L19 19 C14 17.6 7 17.6 3 19 Z" fill="#fff"/>',
    fire: '<path d="M12 22 C6.5 22 4 18 4.5 14 C5 10.5 8 9 8 5.5 C11 7 12 9.5 11.5 12 C13 10.5 14 8 13.6 3 C18 6 20.5 10 19.5 15 C19 19 16 22 12 22 Z" fill="#f6a03c"/><path d="M12 21 C9.5 21 8 19 8.5 17 C9 15 11 14.5 11 12.5 C13 13.5 14 15 13.6 16.5 C14.6 16 15 15 15 14 C16.6 16 16 21 12 21 Z" fill="#ffd84d" stroke-width="1.4"/>',
    rainbow: '<path d="M2 18 A10 10 0 0 1 22 18" fill="none" stroke-width="8"/><path d="M2 18 A10 10 0 0 1 22 18" fill="none" stroke="#f7a8b8" stroke-width="6"/><path d="M4.5 18 A7.5 7.5 0 0 1 19.5 18" fill="none" stroke="#ffe08a" stroke-width="2.4"/><path d="M6.6 18 A5.4 5.4 0 0 1 17.4 18" fill="none" stroke="#9cd3e8" stroke-width="2.2"/><g fill="#fff" stroke-width="1.4"><circle cx="3.5" cy="18.5" r="2.6"/><circle cx="6" cy="19.8" r="2.2"/><circle cx="20.5" cy="18.5" r="2.6"/><circle cx="18" cy="19.8" r="2.2"/></g>',
    crown: '<path d="M3 18 L2 7 L7.5 11.5 L12 4 L16.5 11.5 L22 7 L21 18 Z" fill="#f9d25a"/><path d="M3 18 H21 V20.5 H3 Z" fill="#e8a400"/><circle cx="12" cy="13.5" r="1.8" fill="#e94b5a"/><circle cx="7" cy="15" r="1.2" fill="#7ac4e8"/><circle cx="17" cy="15" r="1.2" fill="#8fcf6d"/>',
    diamond: '<path d="M6 4 H18 L22 9.5 L12 21.5 L2 9.5 Z" fill="#a8dcf7"/><path d="M2 9.5 H22 M8.5 4 L7 9.5 L12 21.5 L17 9.5 L15.5 4" fill="none" stroke-width="1.4"/><path d="M5.5 8.3 L7.5 5.5" stroke="#fff" stroke-width="1.4"/>',
    coffee: '<path d="M5 9 H17 V15 C17 18.5 14.5 20 11 20 C7.5 20 5 18.5 5 15 Z" fill="#fff8e8"/><path d="M17 11 C21 11 21 16 17 16" fill="none"/><path d="M6 9.5 H16 V11.5 H6 Z" fill="#a8672e" stroke="none"/><path d="M9 3.5 q-1.5 1.5 0 3 M13 3.5 q-1.5 1.5 0 3" fill="none" stroke-width="1.3"/><path d="M9.6 15 q1.4 1.4 2.8 0" fill="none" stroke-width="1.1"/>',
    snowman: '<circle cx="12" cy="16.5" r="5.6" fill="#fff"/><circle cx="12" cy="8.5" r="4.2" fill="#fff"/><path d="M8.2 11.4 Q12 13.4 15.8 11.4 L16 12.8 Q12 14.8 8 12.8 Z" fill="#e94b5a" stroke-width="1.2"/><path d="M10.5 9.6 L13.8 10.4 L10.5 10.8 Z" fill="#f6a03c" stroke-width=".8"/><circle cx="10.4" cy="7.6" r=".7" fill="#3b2a20" stroke="none"/><circle cx="13.6" cy="7.6" r=".7" fill="#3b2a20" stroke="none"/><path d="M8.6 5.4 H15.4 V4.6 C15.4 3 8.6 3 8.6 4.6 Z" fill="#4a4f63" stroke-width="1.2"/>',
    bell: '<path d="M5 17 C6.5 15 6 12 6.5 9.5 C7 6.5 9.5 5 12 5 C14.5 5 17 6.5 17.5 9.5 C18 12 17.5 15 19 17 Z" fill="#f9d25a"/><circle cx="12" cy="19" r="2" fill="#e8a400"/><path d="M12 5 V3" /><path d="M8.5 10 q.5 -2 2 -2.5" stroke="#fff3c0" stroke-width="1.4" fill="none"/><path d="M15 4 L19 6 L15 8 Z M9 4 L5 6 L9 8 Z" fill="#e94b5a" stroke-width="1.2"/>',
    deer: '<path d="M7 8 L5 3 M5 5 L3 4 M17 8 L19 3 M19 5 L21 4" stroke="#8a5a3b" stroke-width="1.8"/><path d="M5.5 10 L3 8.5 L6.6 8 Z M18.5 10 L21 8.5 L17.4 8 Z" fill="#c08458"/><ellipse cx="12" cy="13.5" rx="6.2" ry="7" fill="#c08458"/><ellipse cx="12" cy="17.5" rx="3.6" ry="2.8" fill="#f1d3a8" stroke-width="1.2"/><circle cx="12" cy="16" r="1.8" fill="#e94b5a" stroke-width="1"/>' ,
    moon: '<path d="M15 3 C9 4 6 9.5 7.5 14.5 C9 19.5 15 22 20 19.5 C14.5 19 11 15 11.5 10 C12 6.5 13.5 4.5 15 3 Z" fill="#f9d25a"/><circle cx="10.5" cy="15" r=".9" fill="#3b2a20" stroke="none"/><ellipse cx="11.5" cy="17.2" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/>',
    dove: '<path d="M4 13 C4 9 8 7 11 9 C12 6 15 4 18 5 C16 7 15 9 15.5 11 C18 11 21 10 22 9 C21 14 17 17 12 17 C8 17 4 16 4 13 Z" fill="#fff"/><path d="M4 12 L1.5 12.8 L4 13.8 Z" fill="#f6a03c" stroke-width="1"/><circle cx="6.5" cy="11.4" r=".8" fill="#3b2a20" stroke="none"/><path d="M9 21 C10 19 11 18 12 17" stroke="#8fcf6d" stroke-width="1.6"/><ellipse cx="9" cy="20" rx="1.6" ry=".9" fill="#8fcf6d" stroke="none"/>',
    halo: '<ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#f9d25a" stroke-width="3.4"/><ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke-width="1"/><circle cx="12" cy="15" r="6.4" fill="#fbe7c2"/>' ,
    unicorn: '<path d="M14 2 L11.5 9 H15 Z" fill="#ffe08a" stroke-width="1.4"/><path d="M5 20 C4 14 6 9 12 8.5 C17 8 20 11 20 14 C20 16.5 18 17.5 16 17 L14.5 20 Z" fill="#fff"/><path d="M7 9.5 C5 8 4 10 4.6 12 C3 13 3.6 15.5 5 16 C4.6 18 6 19.5 7 19" fill="none" stroke="#f7a8b8" stroke-width="2.6"/><path d="M6.5 10 C8 8 9 8.5 10 9" fill="none" stroke="#b9d8ff" stroke-width="2.2"/><circle cx="15" cy="12.4" r=".9" fill="#3b2a20" stroke="none"/><ellipse cx="17.4" cy="14.6" rx="1.3" ry=".8" fill="#f58fa8" opacity=".7" stroke="none"/>',
    galaxy: '<circle cx="12" cy="12" r="9.5" fill="#6a5acd"/><path d="M4 14 C8 10 16 10 20 8" fill="none" stroke="#d0bfff" stroke-width="2.2"/><circle cx="8" cy="8" r="1" fill="#fff" stroke="none"/><circle cx="16" cy="15" r="1.2" fill="#fff3a8" stroke="none"/><circle cx="14" cy="6.5" r=".8" fill="#fff" stroke="none"/><circle cx="7" cy="16" r=".8" fill="#ffd6f0" stroke="none"/>' + '<path d="M17 4 Q17 6 19 6 Q17 6 17 8 Q17 6 15 6 Q17 6 17 4 Z" fill="#fff3a8" stroke-width=".8"/>'
  };
  Object.keys(STK).forEach(function (k) { ICON['s_' + k] = STK[k]; });


  var STK2 = {
    sunflower: '<path d="M12 22 V14" stroke="#5aa84a" stroke-width="2.2"/><path d="M12 19 C9 19 7.5 17.5 7 15.5 C9.5 15.5 11 17 12 19 Z" fill="#8fcf6d" stroke-width="1.2"/>' + (function () { var r = '', i, a; for (i = 0; i < 10; i++) { a = i * 36; r += '<ellipse cx="12" cy="3.6" rx="2" ry="3.6" fill="#ffd84d" stroke-width="1.1" transform="rotate(' + a + ' 12 9)"/>'; } return r; })() + '<circle cx="12" cy="9" r="3.8" fill="#8a5a3b"/><circle cx="11" cy="8.4" r=".6" fill="#3b2a20" stroke="none"/><circle cx="13" cy="8.4" r=".6" fill="#3b2a20" stroke="none"/>',
    rose: '<path d="M12 22 V13" stroke="#5aa84a" stroke-width="2.2"/><path d="M12 18 C15 18 17 16.5 17.5 14.5 C15 14.5 13 16 12 18 Z" fill="#8fcf6d" stroke-width="1.2"/><path d="M5.5 7 C5.5 3 10 2 12 4 C14 2 18.5 3 18.5 7 C18.5 11.5 15.5 13.5 12 13.5 C8.5 13.5 5.5 11.5 5.5 7 Z" fill="#e94b5a"/><path d="M9 7 C9 5 12 4.6 13 6 C14.5 6 15 8 13.6 9 C12 10.5 9.6 9.5 9 7 Z M12 4 C11 5 10.6 6 11 7" fill="none" stroke-width="1.2"/>',
    heart2: '<path d="M12 20.5 C5.5 16 3 12 3 8.6 C3 5.6 5.4 3.8 8 3.8 C10 3.8 11.2 5 12 6.2 C12.8 5 14 3.8 16 3.8 C18.6 3.8 21 5.6 21 8.6 C21 12 18.5 16 12 20.5 Z" fill="#f7a8c0"/><path d="M7 7 q1.5 -1.4 3 -.6" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="9.6" cy="11" r=".8" fill="#3b2a20" stroke="none"/><circle cx="14.4" cy="11" r=".8" fill="#3b2a20" stroke="none"/><path d="M11.2 12.8 q.8 .9 1.6 0" fill="none" stroke-width="1"/>',
    cookie: '<circle cx="12" cy="12" r="9" fill="#e2a868"/><g fill="#6b4a32" stroke="none"><circle cx="8" cy="8" r="1.3"/><circle cx="15" cy="7" r="1.1"/><circle cx="16.5" cy="13" r="1.3"/><circle cx="7.5" cy="14.5" r="1.1"/><circle cx="12" cy="17.5" r="1.2"/></g><circle cx="10" cy="11" r=".8" fill="#3b2a20" stroke="none"/><circle cx="14" cy="11" r=".8" fill="#3b2a20" stroke="none"/><path d="M11.2 12.8 q.8 .9 1.6 0" fill="none" stroke-width="1"/>',
    milk: '<path d="M8 4 H16 V7 L18 10 V20 C18 21 17 21.5 16 21.5 H8 C7 21.5 6 21 6 20 V10 L8 7 Z" fill="#fff"/><path d="M6 13 H18 V17 H6 Z" fill="#9cc9ee" stroke="none"/><path d="M8 7 H16" /><circle cx="10.4" cy="11" r=".7" fill="#3b2a20" stroke="none"/><circle cx="13.6" cy="11" r=".7" fill="#3b2a20" stroke="none"/>',
    sprout2: '<path d="M12 21 V12" stroke="#5aa84a" stroke-width="2.2"/><path d="M12 13 C7 13 4 10 4.5 6 C9 6 12 8.5 12 13 Z M12 12 C12 7 15 4.5 19.5 4.5 C20 8.5 17 12 12 12 Z" fill="#a9dc8a"/><path d="M6 21 H18" stroke="#a8672e" stroke-width="2.4"/>',
    mushroom: '<path d="M3 12 C3 5 21 5 21 12 C21 13.5 3 13.5 3 12 Z" fill="#e94b5a"/><g fill="#fff" stroke="none"><circle cx="8" cy="8.6" r="1.6"/><circle cx="14" cy="7.4" r="1.4"/><circle cx="17.4" cy="10.4" r="1.1"/></g><path d="M8.5 13 H15.5 V18 C15.5 20 14 21 12 21 C10 21 8.5 20 8.5 18 Z" fill="#fff6e6"/><circle cx="10.8" cy="16" r=".7" fill="#3b2a20" stroke="none"/><circle cx="13.2" cy="16" r=".7" fill="#3b2a20" stroke="none"/>',
    berry: '<path d="M12 21 C6 18 4 13 5 9.5 C6 7 9 7 12 7.5 C15 7 18 7 19 9.5 C20 13 18 18 12 21 Z" fill="#ef5b5b"/><path d="M8 6.5 L12 8.5 L16 6.5 L13 5.5 L12 3 L11 5.5 Z" fill="#7bb661" stroke-width="1.3"/><g fill="#ffe7a0" stroke="none"><circle cx="9" cy="12" r=".7"/><circle cx="15" cy="12" r=".7"/><circle cx="12" cy="15" r=".7"/><circle cx="9.5" cy="16" r=".6"/><circle cx="14.5" cy="16" r=".6"/></g>',
    cloud: '<path d="M6 18 C3 18 2 15.5 3.2 13.6 C2.6 10.6 6 9 8 10.4 C9 7 14 6 15.8 9.6 C19 9 21.5 11.6 20.6 14.4 C22 16 21 18 18.6 18 Z" fill="#fff"/><circle cx="10" cy="13.6" r=".8" fill="#3b2a20" stroke="none"/><circle cx="14" cy="13.6" r=".8" fill="#3b2a20" stroke="none"/><ellipse cx="8" cy="15.4" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="16" cy="15.4" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/>',
    candy: '<path d="M7 12 L2.5 8.5 L3.5 15.5 Z M17 12 L21.5 8.5 L20.5 15.5 Z" fill="#b9d8ff"/><circle cx="12" cy="12" r="5.6" fill="#f7a8c0"/><path d="M8.5 9 Q12 12 9 15.5 M12 6.6 Q15 10 12 17.4 M15.5 8.6 Q13.5 12 15.6 15.4" fill="none" stroke="#fff" stroke-width="1.4"/>'
  };
  Object.keys(STK2).forEach(function (k) { ICON['s_' + k] = STK2[k]; });


  // ── 짧뚱한 몸통이 있는 동물 캐릭터 (아이콘 고르기용) ──
  function chibi(o) {
    var c = o.c, b = o.body || c, r = '', E = o.eye || '#3b2a20';
    if (o.tail) r += o.tail;
    // 몸통·팔·발
    r += '<ellipse cx="9.4" cy="22.7" rx="1.9" ry="1.1" fill="' + (o.foot || b) + '" stroke-width="1.1"/><ellipse cx="14.6" cy="22.7" rx="1.9" ry="1.1" fill="' + (o.foot || b) + '" stroke-width="1.1"/>';
    r += '<ellipse cx="12" cy="18.8" rx="5" ry="4.1" fill="' + b + '" stroke-width="1.3"/>';
    if (o.belly) r += '<ellipse cx="12" cy="19.4" rx="2.9" ry="2.6" fill="' + o.belly + '" stroke="none"/>';
    r += '<ellipse cx="7.4" cy="18.4" rx="1.2" ry="1.9" fill="' + (o.arm || b) + '" stroke-width="1.1" transform="rotate(25 7.4 18.4)"/><ellipse cx="16.6" cy="18.4" rx="1.2" ry="1.9" fill="' + (o.arm || b) + '" stroke-width="1.1" transform="rotate(-25 16.6 18.4)"/>';
    // 귀(머리 뒤)
    r += o.ears || '';
    r += '<circle cx="12" cy="9.4" r="' + (o.hr || 6.6) + '" fill="' + c + '" stroke-width="1.3"/>';
    r += o.head || '';
    if (!o.noface) {
      r += '<circle cx="9.5" cy="' + (o.ey || 9.6) + '" r=".85" fill="' + E + '" stroke="none"/><circle cx="14.5" cy="' + (o.ey || 9.6) + '" r=".85" fill="' + E + '" stroke="none"/>';
      r += o.mouth != null ? o.mouth : '<path d="M11.1 11.6 q.45 .7 .9 0 q.45 .7 .9 0" fill="none" stroke-width=".9"/>';
      r += '<ellipse cx="7.8" cy="11.4" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="16.2" cy="11.4" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/>';
    }
    return r;
  }
  var nose = function (cy, c) { return '<ellipse cx="12" cy="' + cy + '" rx=".9" ry=".65" fill="' + (c || '#3b2a20') + '" stroke="none"/>'; };
  var CHB = {
    cat: chibi({ c: '#f4b46a', belly: '#fff6e6', ears: '<path d="M6 6 L6.4 1.6 L9.8 4.2 Z M18 6 L17.6 1.6 L14.2 4.2 Z" fill="#f4b46a" stroke-width="1.2"/>', head: '<path d="M12 3 v1.8 M10.3 3.3 l.4 1.6 M13.7 3.3 l-.4 1.6" stroke="#c97a35" stroke-width=".9"/>', tail: '<path d="M16 21 C20 21 21 17 19.5 15" fill="none" stroke="#f4b46a" stroke-width="2.2"/><path d="M16 21 C20 21 21 17 19.5 15" fill="none" stroke-width=".7"/>' }),
    dog: chibi({ c: '#f1d3a8', body: '#f1d3a8', belly: '#fff6e6', ears: '<path d="M5.8 5 C3 6 3 11 5 12.4 C6.4 10 6.6 6.6 5.8 5 Z M18.2 5 C21 6 21 11 19 12.4 C17.6 10 17.4 6.6 18.2 5 Z" fill="#a0704a" stroke-width="1.2"/>', head: '<ellipse cx="12" cy="12" rx="2.6" ry="1.8" fill="#fff6e6" stroke-width=".8"/>' + nose(11.3), mouth: '', tail: '<path d="M16.6 19 q3 -1 3 -4" fill="none" stroke="#a0704a" stroke-width="1.8"/>' }),
    rabbit: chibi({ c: '#fff', belly: '#fde8ef', ears: '<ellipse cx="9.3" cy="2.6" rx="1.8" ry="3.8" fill="#fff" stroke-width="1.2"/><ellipse cx="14.7" cy="2.6" rx="1.8" ry="3.8" fill="#fff" stroke-width="1.2"/><ellipse cx="9.3" cy="2.8" rx=".7" ry="2.3" fill="#f7b6c8" stroke="none"/><ellipse cx="14.7" cy="2.8" rx=".7" ry="2.3" fill="#f7b6c8" stroke="none"/>', tail: '<circle cx="17" cy="20.6" r="1.6" fill="#fff" stroke-width="1"/>' }),
    bear: chibi({ c: '#b07a4f', belly: '#f1d3a8', ears: '<circle cx="6.6" cy="4.4" r="2.2" fill="#b07a4f" stroke-width="1.2"/><circle cx="17.4" cy="4.4" r="2.2" fill="#b07a4f" stroke-width="1.2"/>', head: '<ellipse cx="12" cy="11.8" rx="2.6" ry="1.9" fill="#f1d3a8" stroke-width=".8"/>' + nose(11.2), mouth: '' }),
    panda: chibi({ c: '#fff', body: '#3b3550', belly: '#fff', foot: '#3b3550', arm: '#3b3550', ears: '<circle cx="6.6" cy="4.4" r="2.2" fill="#3b3550" stroke-width="1.2"/><circle cx="17.4" cy="4.4" r="2.2" fill="#3b3550" stroke-width="1.2"/>', head: '<ellipse cx="9.4" cy="9.4" rx="1.7" ry="2.1" fill="#3b3550" stroke="none" transform="rotate(-20 9.4 9.4)"/><ellipse cx="14.6" cy="9.4" rx="1.7" ry="2.1" fill="#3b3550" stroke="none" transform="rotate(20 14.6 9.4)"/>' + nose(11.4), eye: '#fff' }),
    koala: chibi({ c: '#a9b4c2', belly: '#e9edf2', ears: '<circle cx="5.6" cy="6" r="3" fill="#a9b4c2" stroke-width="1.2"/><circle cx="18.4" cy="6" r="3" fill="#a9b4c2" stroke-width="1.2"/><circle cx="5.6" cy="6" r="1.6" fill="#f3d6de" stroke="none"/><circle cx="18.4" cy="6" r="1.6" fill="#f3d6de" stroke="none"/>', head: '<ellipse cx="12" cy="11" rx="1.6" ry="2" fill="#4a4f63" stroke="none"/>', mouth: '' }),
    tiger: chibi({ c: '#f6a03c', belly: '#fff6e6', ears: '<circle cx="6.8" cy="4.4" r="2" fill="#f6a03c" stroke-width="1.2"/><circle cx="17.2" cy="4.4" r="2" fill="#f6a03c" stroke-width="1.2"/>', head: '<path d="M12 3 v2 M10.2 3.4 l.5 1.6 M13.8 3.4 l-.5 1.6 M5.6 9 h1.6 M5.8 11 h1.4 M18.4 9 h-1.6 M18.2 11 h-1.4" stroke-width=".9"/><ellipse cx="12" cy="12" rx="2.5" ry="1.7" fill="#fff6e6" stroke-width=".8"/>' + nose(11.3), mouth: '', tail: '<path d="M16.4 20.6 C19.6 21 21 18 20 15.6" fill="none" stroke="#f6a03c" stroke-width="2"/>' }),
    lion: chibi({ c: '#f6c26b', belly: '#fff6e6', ears: '<circle cx="12" cy="9.4" r="9" fill="#c9823f" stroke-width="1.2"/><g fill="#c9823f" stroke-width="1.1"><circle cx="5" cy="5" r="2.4"/><circle cx="19" cy="5" r="2.4"/><circle cx="3.6" cy="11" r="2.2"/><circle cx="20.4" cy="11" r="2.2"/><circle cx="12" cy=".9" r="2.2"/></g>', head: '<ellipse cx="12" cy="12" rx="2.4" ry="1.7" fill="#fff6e6" stroke-width=".8"/>' + nose(11.3), mouth: '', tail: '<path d="M16.4 20.6 C19.6 21 21 18 20 16" fill="none" stroke="#f6c26b" stroke-width="1.8"/><circle cx="20" cy="15.4" r="1.3" fill="#c9823f" stroke-width=".9"/>' }),
    cow: chibi({ c: '#fff', belly: '#fff', ears: '<path d="M7 3.6 L6 1 L8.6 2.6 Z M17 3.6 L18 1 L15.4 2.6 Z" fill="#f3d58a" stroke-width="1"/><ellipse cx="4.6" cy="7" rx="2.4" ry="1.3" fill="#fff" stroke-width="1.1" transform="rotate(-25 4.6 7)"/><ellipse cx="19.4" cy="7" rx="2.4" ry="1.3" fill="#fff" stroke-width="1.1" transform="rotate(25 19.4 7)"/>', head: '<path d="M13.4 3.2 C16 3 17.6 5 17 6.6 C15.4 6.4 13.6 5.4 13.4 3.2 Z" fill="#4a4f63" stroke="none"/><ellipse cx="12" cy="12.4" rx="3.6" ry="2.1" fill="#f7b6c8" stroke-width=".9"/><circle cx="10.8" cy="12.4" r=".5" fill="#3b2a20" stroke="none"/><circle cx="13.2" cy="12.4" r=".5" fill="#3b2a20" stroke="none"/>', mouth: '' }),
    pig: chibi({ c: '#f7b6c8', ears: '<path d="M6.2 5.6 L5.4 2 L9 3.8 Z M17.8 5.6 L18.6 2 L15 3.8 Z" fill="#f7b6c8" stroke-width="1.1"/>', head: '<ellipse cx="12" cy="11.8" rx="2.2" ry="1.6" fill="#f49ab0" stroke-width=".9"/><circle cx="11.2" cy="11.8" r=".45" fill="#8a3b52" stroke="none"/><circle cx="12.8" cy="11.8" r=".45" fill="#8a3b52" stroke="none"/>', mouth: '', tail: '<path d="M17 19 q2 -1 1.4 -2.4 q-.8 -1 -1.6 .2" fill="none" stroke-width="1"/>' }),
    frog: chibi({ c: '#8fcf6d', belly: '#e3f4d6', hr: 6.6, ears: '<circle cx="8" cy="3.8" r="2.4" fill="#8fcf6d" stroke-width="1.2"/><circle cx="16" cy="3.8" r="2.4" fill="#8fcf6d" stroke-width="1.2"/><circle cx="8" cy="3.8" r=".9" fill="#3b2a20" stroke="none"/><circle cx="16" cy="3.8" r=".9" fill="#3b2a20" stroke="none"/>', noface: 1, head: '<path d="M8.6 10.6 q3.4 2.6 6.8 0" fill="none" stroke-width="1"/><ellipse cx="7.4" cy="10.6" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/><ellipse cx="16.6" cy="10.6" rx="1.2" ry=".7" fill="#f58fa8" opacity=".7" stroke="none"/>' }),
    monkey: chibi({ c: '#b07a4f', belly: '#f1d3a8', ears: '<circle cx="4.8" cy="9.4" r="2.2" fill="#f1d3a8" stroke-width="1.1"/><circle cx="19.2" cy="9.4" r="2.2" fill="#f1d3a8" stroke-width="1.1"/>', head: '<path d="M7 10.4 C7 6.6 9.8 6.6 12 8 C14.2 6.6 17 6.6 17 10.4 C17 13.6 15 15 12 15 C9 15 7 13.6 7 10.4 Z" fill="#f1d3a8" stroke-width=".9"/>', tail: '<path d="M16.6 20 C21 20 21 15 18.6 15.4" fill="none" stroke="#b07a4f" stroke-width="1.6"/>' }),
    penguin: chibi({ c: '#4a4f63', body: '#4a4f63', belly: '#fff', foot: '#f6a03c', head: '<path d="M7.4 10.6 C7.4 7 10 6.4 12 7.8 C14 6.4 16.6 7 16.6 10.6 C16.6 13.6 14.4 15 12 15 C9.6 15 7.4 13.6 7.4 10.6 Z" fill="#fff" stroke-width=".9"/><path d="M11.1 11.4 L12 12.6 L12.9 11.4 Z" fill="#f6a03c" stroke-width=".7"/>', mouth: '' }),
    chick: chibi({ c: '#ffd84d', foot: '#f6a03c', head: '<path d="M11.4 2.6 q.6 -1.8 1.8 -1" fill="none" stroke-width=".9"/><path d="M11.1 11.2 L12 12.4 L12.9 11.2 Z" fill="#f6a03c" stroke-width=".7"/>', mouth: '' }),
    fox: chibi({ c: '#f08c3c', belly: '#fff6e6', ears: '<path d="M5.4 6.4 L5 1.4 L9.4 3.6 Z M18.6 6.4 L19 1.4 L14.6 3.6 Z" fill="#f08c3c" stroke-width="1.2"/>', head: '<path d="M5.6 10 C7.6 10.4 10 12 12 15.8 C14 12 16.4 10.4 18.4 10 C18 13.8 15.4 16 12 16 C8.6 16 6 13.8 5.6 10 Z" fill="#fff6e6" stroke-width=".9"/>' + nose(14.4), mouth: '', tail: '<path d="M16 21.4 C21.6 22 22 15 19 13.6 C19 17 17.6 19 16 19.4 Z" fill="#f08c3c" stroke-width="1"/><path d="M19.2 13.8 C20.4 14.6 21 16 20.6 17.4 C19.8 16 19.4 15 19.2 13.8 Z" fill="#fff" stroke="none"/>' }),
    hamster: chibi({ c: '#f2c38d', belly: '#fff6e6', ears: '<circle cx="7" cy="4" r="1.8" fill="#f2c38d" stroke-width="1.1"/><circle cx="17" cy="4" r="1.8" fill="#f2c38d" stroke-width="1.1"/><circle cx="7" cy="4" r=".9" fill="#f7b6c8" stroke="none"/><circle cx="17" cy="4" r=".9" fill="#f7b6c8" stroke="none"/>', head: '<ellipse cx="7.6" cy="12" rx="2.4" ry="1.8" fill="#fff6e6" stroke="none"/><ellipse cx="16.4" cy="12" rx="2.4" ry="1.8" fill="#fff6e6" stroke="none"/><path d="M12 6 C10.6 6 10.2 8.4 12 9 C13.8 8.4 13.4 6 12 6 Z" fill="#fff6e6" stroke="none"/>' + nose(10.8, '#e8806a') }),
    mouse: chibi({ c: '#c9cdd6', belly: '#f1f3f5', ears: '<circle cx="5.4" cy="4.6" r="3.2" fill="#c9cdd6" stroke-width="1.2"/><circle cx="18.6" cy="4.6" r="3.2" fill="#c9cdd6" stroke-width="1.2"/><circle cx="5.4" cy="4.6" r="1.8" fill="#f7b6c8" stroke="none"/><circle cx="18.6" cy="4.6" r="1.8" fill="#f7b6c8" stroke="none"/>', head: nose(11, '#e8806a') + '<path d="M8 11.4 h-2.6 M8 12.2 l-2.4 .8 M16 11.4 h2.6 M16 12.2 l2.4 .8" stroke-width=".6"/>', tail: '<path d="M16.6 20.6 C21 21 21 17 19 17.4" fill="none" stroke-width="1"/>' }),
    sheep: chibi({ c: '#f1d3a8', body: '#fff', foot: '#5b4636', arm: '#fff', ears: '<g fill="#fff" stroke-width="1.1"><circle cx="7" cy="4.4" r="2.6"/><circle cx="12" cy="2.8" r="2.8"/><circle cx="17" cy="4.4" r="2.6"/><circle cx="5" cy="9" r="2.4"/><circle cx="19" cy="9" r="2.4"/></g>', hr: 5.4 }),
    unicorn: chibi({ c: '#fff', belly: '#fde8ef', ears: '<path d="M6.6 6 L6.4 2.2 L9.4 4.2 Z M17.4 6 L17.6 2.2 L14.6 4.2 Z" fill="#fff" stroke-width="1.1"/>', head: '<path d="M12 -.4 L10.6 4.4 H13.4 Z" fill="#ffe08a" stroke-width=".9"/><path d="M6 6.6 C4.4 8 4.6 11 6 12.4 M7.4 4.6 C6 4.6 5 6 5.4 7.4" fill="none" stroke="#f7a8b8" stroke-width="1.6"/><path d="M8.2 4 C9.6 3.2 10.6 3.6 11 4.4" fill="none" stroke="#b9d8ff" stroke-width="1.4"/>', tail: '<path d="M16.4 19.6 C20 20 21.6 17 20.4 14.6" fill="none" stroke="#f7a8b8" stroke-width="1.8"/><path d="M16.6 20.6 C20 21.6 22 19 21.6 17" fill="none" stroke="#b9d8ff" stroke-width="1.4"/>' }),
    hedgehog: chibi({ c: '#f1d3a8', belly: '#fff6e6', ears: '<path d="M3.6 12 L1.4 9 L4 8.6 L2.4 5.4 L5.4 5.8 L5 2.6 L8 3.8 L9 .8 L11.2 3 L12.6 .4 L14 3 L16.6 1 L16.8 4 L19.8 3.2 L19.2 6.2 L22.2 6.6 L20.4 9.2 L22.6 11.2 L20 12 Z" fill="#8a5a3b" stroke-width="1"/>', head: nose(11.6), mouth: '' })
  };
  Object.keys(CHB).forEach(function (k) { ICON['k_' + k] = CHB[k]; });


  var CHB2 = {
    squirrel: chibi({ c: '#c08458', belly: '#fff6e6', tail: '<path d="M15.6 21.6 C22 22 23.4 15 21 11.6 C19.4 9.6 16.4 10.6 17.6 13.2 C19 15.6 18 18.6 15.6 19 Z" fill="#c08458" stroke-width="1.1"/><path d="M19.6 12.6 C21 14 21.4 16.4 20.6 18" fill="none" stroke="#f1d3a8" stroke-width="1"/>', ears: '<path d="M6.4 5.4 L6.6 1.8 L9.4 4 Z M17.6 5.4 L17.4 1.8 L14.6 4 Z" fill="#c08458" stroke-width="1.1"/>', head: '<ellipse cx="12" cy="12" rx="2.2" ry="1.6" fill="#fff6e6" stroke="none"/>' + nose(11.3) }),
    otter: chibi({ c: '#9a6a4a', belly: '#f1d3a8', ears: '<circle cx="6.4" cy="6" r="1.5" fill="#9a6a4a" stroke-width="1.1"/><circle cx="17.6" cy="6" r="1.5" fill="#9a6a4a" stroke-width="1.1"/>', head: '<path d="M8.2 12 C8.2 9.6 10.4 9.8 12 10.6 C13.6 9.8 15.8 9.6 15.8 12 C15.8 14 14 15 12 15 C10 15 8.2 14 8.2 12 Z" fill="#f1d3a8" stroke-width=".8"/>' + nose(11.4) + '<path d="M8.6 12.4 h-2.4 M15.4 12.4 h2.4" stroke-width=".6"/>', mouth: '', tail: '<path d="M16.6 21 C20 21.6 21.6 19.6 21.4 17.6" fill="none" stroke="#9a6a4a" stroke-width="2"/>' }),
    sloth: chibi({ c: '#b8a48a', belly: '#d9cbb5', head: '<path d="M6.6 9.6 C6.6 6.4 9.6 5.6 12 6.6 C14.4 5.6 17.4 6.4 17.4 9.6 C17.4 12.8 15 14.4 12 14.4 C9 14.4 6.6 12.8 6.6 9.6 Z" fill="#f1e6d2" stroke-width=".8"/><ellipse cx="9.4" cy="9.8" rx="1.9" ry="1.2" fill="#8a6a4a" stroke="none" transform="rotate(-15 9.4 9.8)"/><ellipse cx="14.6" cy="9.8" rx="1.9" ry="1.2" fill="#8a6a4a" stroke="none" transform="rotate(15 14.6 9.8)"/>' + nose(11.6), eye: '#fff' }),
    raccoon: chibi({ c: '#9aa0aa', belly: '#e9edf2', ears: '<path d="M6 6 L6.4 1.8 L9.6 4.2 Z M18 6 L17.6 1.8 L14.4 4.2 Z" fill="#9aa0aa" stroke-width="1.1"/>', head: '<path d="M5.8 9.8 C7.6 8.4 10 8.6 12 9.8 C14 8.6 16.4 8.4 18.2 9.8 C17 11.6 14.4 11.6 12 10.8 C9.6 11.6 7 11.6 5.8 9.8 Z" fill="#4a4f63" stroke="none"/><ellipse cx="12" cy="12.4" rx="2.2" ry="1.5" fill="#fff" stroke-width=".7"/>' + nose(11.9), eye: '#fff', mouth: '', tail: '<path d="M16 21 C20.6 22 22.4 18 21.2 15" fill="none" stroke="#9aa0aa" stroke-width="2.6"/><path d="M19.4 20.6 l1.4 -1.6 M20.8 18 l1.2 -.8" stroke="#4a4f63" stroke-width="1.2"/>' }),
    owl: chibi({ c: '#b07a4f', belly: '#f1d3a8', ears: '<path d="M6.4 4.6 L6 1.4 L9 3.4 Z M17.6 4.6 L18 1.4 L15 3.4 Z" fill="#b07a4f" stroke-width="1.1"/>', head: '<circle cx="9.4" cy="9.6" r="2.4" fill="#fff" stroke-width=".9"/><circle cx="14.6" cy="9.6" r="2.4" fill="#fff" stroke-width=".9"/><path d="M11.2 11.4 L12 12.8 L12.8 11.4 Z" fill="#f6a03c" stroke-width=".7"/><path d="M10.6 18.6 q.6 .6 1.2 0 M12.2 20 q.6 .6 1.2 0 M10.6 21 q.6 .6 1.2 0" fill="none" stroke="#b07a4f" stroke-width=".7"/>', mouth: '' }),
    duck: chibi({ c: '#fff', foot: '#f6a03c', head: '<path d="M10 11.2 C10 10.4 14 10.4 14 11.2 C14 12.4 10 12.4 10 11.2 Z" fill="#f6a03c" stroke-width=".8"/><path d="M11.6 2.8 q1 -1.6 2.2 -.6" fill="none" stroke-width=".9"/>', mouth: '' }),
    polar: chibi({ c: '#fff', belly: '#f1f3f5', ears: '<circle cx="6.6" cy="4.4" r="2.1" fill="#fff" stroke-width="1.2"/><circle cx="17.4" cy="4.4" r="2.1" fill="#fff" stroke-width="1.2"/>', head: '<ellipse cx="12" cy="11.8" rx="2.6" ry="1.8" fill="#f1f3f5" stroke-width=".8"/>' + nose(11.2), mouth: '' }),
    horse: chibi({ c: '#c08458', belly: '#f1d3a8', ears: '<path d="M7 4.6 L6.8 1 L9.6 3.4 Z M17 4.6 L17.2 1 L14.4 3.4 Z" fill="#c08458" stroke-width="1.1"/>', head: '<path d="M9.4 3 C11 1.6 13.8 2 14.4 4 C13 4 11.2 4.6 10.4 6 C10 5 9.4 4.2 9.4 3 Z" fill="#6b4a32" stroke-width=".8"/><ellipse cx="12" cy="12.4" rx="3.2" ry="2" fill="#f1d3a8" stroke-width=".8"/><circle cx="11" cy="12.4" r=".45" fill="#3b2a20" stroke="none"/><circle cx="13" cy="12.4" r=".45" fill="#3b2a20" stroke="none"/>', mouth: '', tail: '<path d="M16.6 19 C20 19 21.2 21.4 20.4 23" fill="none" stroke="#6b4a32" stroke-width="1.8"/>' }),
    goat: chibi({ c: '#f1ede6', belly: '#fff', ears: '<path d="M7.6 3.8 C7 2 7.8 .6 9 .8 C8.6 1.8 8.8 2.8 9.4 3.6 Z M16.4 3.8 C17 2 16.2 .6 15 .8 C15.4 1.8 15.2 2.8 14.6 3.6 Z" fill="#cdb48a" stroke-width=".9"/><ellipse cx="4.6" cy="8" rx="2.4" ry="1.1" fill="#f1ede6" stroke-width="1" transform="rotate(-20 4.6 8)"/><ellipse cx="19.4" cy="8" rx="2.4" ry="1.1" fill="#f1ede6" stroke-width="1" transform="rotate(20 19.4 8)"/>', head: '<path d="M11 15.4 L12 17.6 L13 15.4 Z" fill="#f1ede6" stroke-width=".8"/>' + nose(12, '#c08458') }),
    elephant: chibi({ c: '#a9b4c2', belly: '#c9d1db', ears: '<ellipse cx="4.6" cy="9.6" rx="3.4" ry="4.4" fill="#a9b4c2" stroke-width="1.1"/><ellipse cx="19.4" cy="9.6" rx="3.4" ry="4.4" fill="#a9b4c2" stroke-width="1.1"/><ellipse cx="4.8" cy="9.8" rx="1.8" ry="2.8" fill="#f3d6de" stroke="none"/><ellipse cx="19.2" cy="9.8" rx="1.8" ry="2.8" fill="#f3d6de" stroke="none"/>', head: '<path d="M11 11 C11 13 10.6 15 11.6 15.8 C12.6 16.6 13.8 15.6 13 15 C12.6 14.4 13 12.6 13 11 Z" fill="#a9b4c2" stroke-width=".9"/>', mouth: '' }),
    giraffe: chibi({ c: '#f6c26b', belly: '#fff3d6', ears: '<path d="M9.4 3.4 V.8 M14.6 3.4 V.8" stroke-width="1.1"/><circle cx="9.4" cy=".6" r=".9" fill="#a8672e" stroke-width=".7"/><circle cx="14.6" cy=".6" r=".9" fill="#a8672e" stroke-width=".7"/><ellipse cx="5.4" cy="6.4" rx="1.8" ry=".9" fill="#f6c26b" stroke-width=".9" transform="rotate(-25 5.4 6.4)"/><ellipse cx="18.6" cy="6.4" rx="1.8" ry=".9" fill="#f6c26b" stroke-width=".9" transform="rotate(25 18.6 6.4)"/>', head: '<g fill="#c9823f" stroke="none"><circle cx="8" cy="6.2" r=".9"/><circle cx="16.2" cy="5.6" r="1"/><circle cx="7" cy="18" r=".8"/><circle cx="15.6" cy="17.6" r="1"/><circle cx="12.6" cy="21" r=".8"/></g><ellipse cx="12" cy="12.4" rx="2.6" ry="1.6" fill="#fff3d6" stroke-width=".8"/>', mouth: '' }),
    hippo: chibi({ c: '#c3b6e0', belly: '#e5ddf5', ears: '<circle cx="7.2" cy="3.8" r="1.4" fill="#c3b6e0" stroke-width="1"/><circle cx="16.8" cy="3.8" r="1.4" fill="#c3b6e0" stroke-width="1"/>', head: '<ellipse cx="12" cy="12.6" rx="4.4" ry="2.6" fill="#d9cff0" stroke-width=".9"/><circle cx="10.6" cy="12" r=".5" fill="#3b2a20" stroke="none"/><circle cx="13.4" cy="12" r=".5" fill="#3b2a20" stroke="none"/>', ey: 8.6, mouth: '' }),
    alpaca: chibi({ c: '#fff6e6', body: '#fff6e6', ears: '<ellipse cx="7" cy="3" rx="1.1" ry="2.6" fill="#fff6e6" stroke-width="1" transform="rotate(-15 7 3)"/><ellipse cx="17" cy="3" rx="1.1" ry="2.6" fill="#fff6e6" stroke-width="1" transform="rotate(15 17 3)"/>', head: '<g fill="#fff" stroke-width=".9"><circle cx="9.6" cy="3.4" r="2"/><circle cx="12" cy="2.6" r="2.2"/><circle cx="14.4" cy="3.4" r="2"/></g><ellipse cx="12" cy="12.2" rx="2.4" ry="1.7" fill="#f1d3a8" stroke-width=".8"/>' + nose(11.6) }),
    turtle: chibi({ c: '#a9dc8a', body: '#8fcf6d', foot: '#a9dc8a', arm: '#a9dc8a', head: '<path d="M8 18.6 L12 16.4 L16 18.6 M8.6 20.6 H15.4 M12 16.4 V22" fill="none" stroke="#5aa84a" stroke-width=".9"/>' }),
    dino: chibi({ c: '#8fcf6d', belly: '#fff3c0', ears: '<path d="M9 3.6 L10 1 L11.4 3 L12.6 .6 L13.8 3 L15.2 1.4 L15.2 4 Z" fill="#f6a03c" stroke-width=".9"/>', tail: '<path d="M16 20.6 C20 21 22.4 19 23 16.4 C21.4 18 19.4 18.4 16.6 18.2 Z" fill="#8fcf6d" stroke-width="1"/>' }),
    wolf: chibi({ c: '#9aa0aa', belly: '#f1f3f5', ears: '<path d="M5.6 6.2 L5.4 1.2 L9.6 3.8 Z M18.4 6.2 L18.6 1.2 L14.4 3.8 Z" fill="#9aa0aa" stroke-width="1.2"/>', head: '<path d="M7 10.4 C8.6 10.6 10.4 12 12 15.4 C13.6 12 15.4 10.6 17 10.4 C16.6 13.6 14.6 15.4 12 15.4 C9.4 15.4 7.4 13.6 7 10.4 Z" fill="#f1f3f5" stroke-width=".9"/>' + nose(14), mouth: '', tail: '<path d="M16 21.4 C21.4 22 22 15.6 19.4 14.4 C19.4 17.4 18 19 16 19.4 Z" fill="#9aa0aa" stroke-width="1"/>' })
  };
  Object.keys(CHB2).forEach(function (k) { ICON['k_' + k] = CHB2[k]; });


  // ── 전설 꾸미기: 캐릭터가 입는 옷 (몸통 위에 입힘) ──
  function cloth(fill, extra, sleeve) { return '<ellipse cx="2.6" cy="9" rx="2" ry="3" fill="' + (sleeve || fill) + '" transform="rotate(28 2.6 9)"/><ellipse cx="21.4" cy="9" rx="2" ry="3" fill="' + (sleeve || fill) + '" transform="rotate(-28 21.4 9)"/><path d="M3.4 9 C3.4 4 7 1.6 12 1.6 C17 1.6 20.6 4 20.6 9 C20.6 14.6 17 18 12 18 C7 18 3.4 14.6 3.4 9 Z" fill="' + fill + '"/>' + (extra || ''); }
  var OUTFIT = {
    apron: cloth('#fffaf1', '<path d="M7 5 H17 V15 C15.6 16.8 8.4 16.8 7 15 Z" fill="#fff" stroke-width="1.1"/><path d="M9.6 9.6 H14.4 V12.4 H9.6 Z" fill="#f7d38a" stroke-width=".9"/><path d="M7 5 L5 2.6 M17 5 L19 2.6" stroke-width="1"/><path d="M10.2 7 h3.6" stroke="#e8806a" stroke-width="1.2"/>', '#9cc9ee'),
    overalls: cloth('#fffaf1', '<path d="M6 8 H18 V14.6 C16 17.6 8 17.6 6 14.6 Z" fill="#7aa7d8" stroke-width="1.1"/><path d="M7.4 8 L7 2.6 M16.6 8 L17 2.6" stroke="#7aa7d8" stroke-width="2"/><circle cx="8" cy="9.4" r=".9" fill="#f9d25a" stroke-width=".6"/><circle cx="16" cy="9.4" r=".9" fill="#f9d25a" stroke-width=".6"/><path d="M10 11 H14 V13.4 H10 Z" fill="#9cc0e6" stroke-width=".8"/>', '#f2a0b4'),
    stripe: cloth('#fffaf1', '<g stroke="#5b8fd6" stroke-width="1.6"><path d="M4 6 H20 M3.6 9.4 H20.4 M4.2 12.8 H19.8 M6 16 H18"/></g><path d="M3.4 9 C3.4 4 7 1.6 12 1.6 C17 1.6 20.6 4 20.6 9 C20.6 14.6 17 18 12 18 C7 18 3.4 14.6 3.4 9 Z" fill="none"/>'),
    hoodie: cloth('#f7b6c8', '<path d="M8 2.4 C8 5 10 6.4 12 6.4 C14 6.4 16 5 16 2.4" fill="#f49ab0" stroke-width="1"/><path d="M10.6 6.4 V9.6 M13.4 6.4 V9.6" stroke-width=".9"/><path d="M8 12 H16 V14.6 C14.4 15.8 9.6 15.8 8 14.6 Z" fill="#f49ab0" stroke-width=".9"/>'),
    santa: cloth('#e94b5a', '<path d="M12 1.8 V18" stroke="#fff" stroke-width="2.6"/><path d="M12 1.8 V18" stroke-width=".6"/><path d="M3.6 11.6 H20.4 V13.6 H3.6 Z" fill="#3b3550" stroke="none"/><path d="M10.4 11.4 H13.6 V13.8 H10.4 Z" fill="#f9d25a" stroke-width=".8"/><path d="M4 15.4 C7 17.8 17 17.8 20 15.4" fill="none" stroke="#fff" stroke-width="2"/>', '#e94b5a'),
    dress: cloth('#ffe08a', '<g fill="#fff" stroke="none"><circle cx="7" cy="8" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="16.6" cy="7.6" r="1.1"/><circle cx="9" cy="15" r="1"/><circle cx="15.4" cy="14.6" r="1"/></g><path d="M8.6 2.4 L12 5.6 L15.4 2.4" fill="none" stroke-width="1"/><path d="M4 11 C8 12.6 16 12.6 20 11" fill="none" stroke="#e8a400" stroke-width="1.2"/>', '#ffe08a'),
    hanbok: cloth('#f7b6c8', '<path d="M12 2 L8.6 8.4 M12 2 L15.4 8.4" stroke-width="1"/><path d="M8.6 8.4 C10 9.6 14 9.6 15.4 8.4" fill="none" stroke-width="1"/><path d="M12 8.8 L10.6 13.6 M12 8.8 L13.8 13" stroke="#e94b5a" stroke-width="1.6"/><path d="M5 12.6 H19 C19 16 16 18 12 18 C8 18 5 16 5 12.6 Z" fill="#7aa7d8" stroke-width="1"/>', '#fff4f0'),
    scarf: cloth('#c9d8ee', '<path d="M5 3.6 C8 5.8 16 5.8 19 3.6 L19.4 6.6 C16 8.6 8 8.6 4.6 6.6 Z" fill="#e94b5a" stroke-width="1"/><path d="M15 6.8 L16.6 13.6 L19 12.8 L17.6 6.2 Z" fill="#e94b5a" stroke-width="1"/><path d="M6.6 4.8 v2 M9.4 5.6 v2 M12.6 5.8 v2 M15.6 5.4 v2" stroke="#fff" stroke-width=".9"/>', '#c9d8ee')
  };
  ICON.s_round = '<circle cx="6.8" cy="12" r="4.6" fill="rgba(220,236,250,.55)" stroke="#6b4a32" stroke-width="2.2"/><circle cx="17.2" cy="12" r="4.6" fill="rgba(220,236,250,.55)" stroke="#6b4a32" stroke-width="2.2"/><path d="M11.2 11.4 Q12 10.4 12.8 11.4" fill="none" stroke="#6b4a32" stroke-width="1.8"/><path d="M4.6 10.4 q1 -1.2 2.4 -1" fill="none" stroke="#fff" stroke-width="1"/><path d="M15 10.4 q1 -1.2 2.4 -1" fill="none" stroke="#fff" stroke-width="1"/>';
  ICON.s_icecream = '<path d="M7.4 11 L12 22 L16.6 11 Z" fill="#e2a868"/><path d="M9 13 l4 4 M11 12 l4 4 M15 13 l-5 5" stroke="#c98a45" stroke-width=".8"/><circle cx="12" cy="8" r="5.2" fill="#f7b6c8"/><path d="M7 9.6 C8 11.4 16 11.4 17 9.6 L16.8 11.4 C15 12.6 9 12.6 7.2 11.4 Z" fill="#fff6e6" stroke-width=".9"/><circle cx="12" cy="2.6" r="1.6" fill="#e94b5a" stroke-width=".8"/><circle cx="10.4" cy="7.6" r=".7" fill="#3b2a20" stroke="none"/><circle cx="13.6" cy="7.6" r=".7" fill="#3b2a20" stroke="none"/>';
  Object.keys(OUTFIT).forEach(function (k) { ICON['o_' + k] = OUTFIT[k]; });


  // ── 레전더리 펫: 캐릭터 옆에서 통통 뛰어다니는 아기 친구들 ──
  var PET = {
    kitten: chibi({ c: '#d6d9e0', belly: '#fff', ears: '<path d="M6 6 L6.4 1.6 L9.8 4.2 Z M18 6 L17.6 1.6 L14.2 4.2 Z" fill="#d6d9e0" stroke-width="1.2"/><path d="M6.8 5 L7 3 L8.6 4.2 Z M17.2 5 L17 3 L15.4 4.2 Z" fill="#f7b6c8" stroke="none"/>', head: '<path d="M14.6 3.6 C16 2.2 18 3 17.6 4.6 C17 5.6 15.4 5.2 14.6 3.6 Z M14.6 3.6 C14.6 1.6 12.8 1 12.4 2.4 C12.2 3.6 13.6 4 14.6 3.6 Z" fill="#f2788f" stroke-width=".8"/>' + nose(11.2, '#f2788f'), tail: '<path d="M16 21 C20 21 21 17 19.5 15" fill="none" stroke="#d6d9e0" stroke-width="2.2"/><path d="M16 21 C20 21 21 17 19.5 15" fill="none" stroke-width=".7"/>' }),
    chick: chibi({ c: '#ffd84d', foot: '#f6a03c', head: '<path d="M6.2 6 L8 3.6 L9.6 5.4 L12 3 L14.4 5.4 L16 3.6 L17.8 6 C16 3.2 8 3.2 6.2 6 Z" fill="#fffaf1" stroke-width=".9"/><path d="M11.1 11.2 L12 12.4 L12.9 11.2 Z" fill="#f6a03c" stroke-width=".7"/>', mouth: '' }),
    fairy: '<g transform="scale(.375)"><ellipse cx="14" cy="18" rx="11" ry="7" fill="#d7f0ff" opacity=".9" stroke-width="2" transform="rotate(-30 14 18)"/><ellipse cx="50" cy="18" rx="11" ry="7" fill="#d7f0ff" opacity=".9" stroke-width="2" transform="rotate(30 50 18)"/>' + CHAR.cro + '<path d="M32 9 L33.4 4 M32 4 l-2 -1.4 l2 -1.6 l2 1.6 Z" fill="#fff3a8" stroke-width="1.4"/></g>' + '<path d="M3 4 Q3 5.6 4.6 5.6 Q3 5.6 3 7.2 Q3 5.6 1.4 5.6 Q3 5.6 3 4 Z" fill="#fff3a8" stroke-width=".6"/><path d="M21 3 Q21 4.4 22.4 4.4 Q21 4.4 21 5.8 Q21 4.4 19.6 4.4 Q21 4.4 21 3 Z" fill="#ffd6f0" stroke-width=".6"/>',
    unicorn: CHB.unicorn + '<path d="M2.4 3 Q2.4 4.6 4 4.6 Q2.4 4.6 2.4 6.2 Q2.4 4.6 .8 4.6 Q2.4 4.6 2.4 3 Z" fill="#fff3a8" stroke-width=".6"/>',
    penguin: CHB.penguin + '<path d="M6.6 15.2 C9 16.6 15 16.6 17.4 15.2 L17.6 16.8 C15 18 9 18 6.4 16.8 Z" fill="#e94b5a" stroke-width=".9"/><path d="M14.6 16.6 L15.6 20.4 L17 20 L16.2 16.4 Z" fill="#e94b5a" stroke-width=".9"/>',
    dragon: chibi({ c: '#a9dc8a', belly: '#fff3c0', ears: '<path d="M2 12 C.4 8 2.6 5 5.4 6.4 L6 11 Z M22 12 C23.6 8 21.4 5 18.6 6.4 L18 11 Z" fill="#b5a2e8" stroke-width="1.1"/><path d="M8.6 3.6 L8 .8 L10.4 2.8 Z M15.4 3.6 L16 .8 L13.6 2.8 Z" fill="#fff3d6" stroke-width=".9"/>', head: nose(11.2, '#5aa84a'), tail: '<path d="M16 20.6 C20 21 22.4 19 23 16.4 C21.4 18 19.4 18.4 16.6 18.2 Z" fill="#a9dc8a" stroke-width="1"/>' })
  };
  Object.keys(PET).forEach(function (k) { ICON['p_' + k] = PET[k]; });

  var OVR = { '📖': 'book', '🎒': 'bag', '📅': 'cal', '⭐': 'star', '🌟': 'star', '📮': 'mail', '🛍': 'gift', '🎁': 'gift', '🎀': 'bow', '🏆': 'trophy', '🏅': 'medal', '🪙': 'coin', '🔑': 'key', '🚪': 'door', '🎵': 'note', '📊': 'chart', '👤': 'person', '🎄': 'pine', '❤': 'heart', '🥐': 'c:cro', '💢': 'anger', '🐱': 'cat', '🐈': 'cat', '🐶': 'dog', '🐕': 'dog', '🐰': 'rabbit', '🐇': 'rabbit', '🐻': 'bear', '🐧': 'penguin', '🦊': 'fox', '🐑': 'sheep', '🐥': 'chick', '🐤': 'chick', '🐣': 'hatch', '🐼': 'panda', '🐯': 'tiger', '🐸': 'frog', '🌷': 'tulip', '🌸': 'blossom', '🌿': 'herb', '🍀': 'herb', '🙂': 'smile', '😀': 'sun', '🌻': 's_sunflower', '🌹': 's_rose', '💗': 's_heart2', '🍪': 's_cookie', '🥛': 's_milk', '🌱': 's_sprout2', '🍄': 's_mushroom', '🍓': 's_berry', '☁': 's_cloud', '🍬': 's_candy', '🐾': 'p_kitten', '🪺': 'p_chick', '🧚': 'p_fairy', '🎠': 'p_unicorn', '🧊': 'p_penguin', '🐉': 'p_dragon', '🍦': 's_icecream', '🍩': 'c:donut', '🍮': 'c:pudding', '🧁': 'c:cup', '👓': 's_round', '🥼': 'o_apron', '👖': 'o_overalls', '👕': 'o_stripe', '🧥': 'o_hoodie', '🥻': 'o_santa', '👗': 'o_dress', '👘': 'o_hanbok', '🧣': 'o_scarf', '🧢': 's_cap', '👒': 's_straw', '🎩': 's_tophat', '🕶': 's_shades', '🦋': 's_butterfly', '🎓': 's_grad', '🎧': 's_phones', '❄': 's_snow', '🎅': 's_santa', '🔥': 's_fire', '🌈': 's_rainbow', '👑': 's_crown', '💎': 's_diamond', '☕': 's_coffee', '⛄': 's_snowman', '🔔': 's_bell', '🦌': 's_deer', '🌙': 's_moon', '🕊': 's_dove', '😇': 's_halo', '🦄': 's_unicorn', '🌌': 's_galaxy', '🍞': 'c:bread', '🎂': 'c:cream', '🍳': 'c:omu', '🧶': 'f:cat', '💐': 'f:wreath', '🥕': 'f:bunny', '⛅': 'f:rainbow', '🍯': 'f:bear', '🌠': 'f:galaxy' };
  Object.keys(PEOPLE).forEach(function (e) { OVR[norm(e)] = 'p:' + e; });
  (function (m) { Object.keys(m).forEach(function (e) { OVR[norm(e)] = 'k_' + m[e]; }); })({ '🐱': 'cat', '🐈': 'cat', '🐶': 'dog', '🐕': 'dog', '🐰': 'rabbit', '🐇': 'rabbit', '🐻': 'bear', '🐼': 'panda', '🐨': 'koala', '🐯': 'tiger', '🦁': 'lion', '🐮': 'cow', '🐷': 'pig', '🐸': 'frog', '🐵': 'monkey', '🐧': 'penguin', '🐥': 'chick', '🐤': 'chick', '🦊': 'fox', '🐹': 'hamster', '🐭': 'mouse', '🐑': 'sheep', '🦄': 'unicorn', '🦔': 'hedgehog', '🐿': 'squirrel', '🦦': 'otter', '🦥': 'sloth', '🦝': 'raccoon', '🦉': 'owl', '🦆': 'duck', '🐻‍❄': 'polar', '🐴': 'horse', '🐐': 'goat', '🐘': 'elephant', '🦒': 'giraffe', '🦛': 'hippo', '🦙': 'alpaca', '🐢': 'turtle', '🦖': 'dino', '🐺': 'wolf' });
  var urls = {}, imgs = {};
  function svgURL(s) { return 'data:image/svg+xml,' + encodeURIComponent(s); }
  function charURL(k) { var key = 'c:' + k; if (!urls[key]) urls[key] = svgURL(wrap(CHAR[k] || CHAR.cro)); return urls[key]; }
  function iconURL(n) { var key = 'i:' + n; if (!urls[key]) urls[key] = svgURL(wrap(ICON[n], (n.indexOf('k_') === 0 || n.indexOf('p_') === 0) ? '-1 -2 26 26.6' : n.indexOf('o_') === 0 ? '0 0 24 20' : '0 0 24 24').replace('stroke-width="2.4"', 'stroke-width="1.8"')); return urls[key]; }
  function img(u) { if (imgs[u]) return imgs[u]; var m = new Image(); m.src = u; return (imgs[u] = m); }
  function norm(e) { return String(e).replace(/️/g, ''); }
  function personURL(e) { var key = 'p:' + e; if (!urls[key]) urls[key] = svgURL(wrap(person(PEOPLE[e]))); return urls[key]; }
  function frameURL(k) { var key = 'f:' + k; if (!urls[key]) urls[key] = svgURL(FRAME[k]); return urls[key]; }
  function keyURL(n) { return n.indexOf('f:') === 0 ? frameURL(n.slice(2)) : n.indexOf('c:') === 0 ? charURL(n.slice(2)) : n.indexOf('p:') === 0 ? personURL(n.slice(2)) : iconURL(n); }
  function boss(open) { var key = 'b:' + (open ? 1 : 0); if (!urls[key]) urls[key] = svgURL(wrap(bossSVG(open), '0 0 100 100').replace('stroke-width="2.4"', 'stroke-width="3"')); return img(urls[key]); }
  function icon(e) { var n = OVR[norm(e)]; return n ? img(keyURL(n)) : null; }
  function char(k) { return img(charURL(k)); }
  function draw(ctx, m, x, y, size) {
    if (!m || !m.complete || !m.naturalWidth) return false;
    ctx.drawImage(m, x - size / 2, y - size / 2, size, size); return true;
  }
  Object.keys(CHAR).forEach(function (k) { char(k); });
  Object.keys(ICON).forEach(function (n) { img(iconURL(n)); });
  setTimeout(function () { Object.keys(PEOPLE).forEach(function (e) { img(personURL(e)); }); boss(0); boss(1); }, 0);

  // 숲 배경 그림 (대기실·제목·팝업 뒤)
  var pn = 0;
  function pine(x, y, s, c) { c = c || '#6f9650'; pn++; var d = (pn % 5) * .4, a = 1.6 + (pn % 3) * .6; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g><path d="M0 -60 L22 -28 H12 L30 0 H17 L38 30 H-38 L-17 0 H-30 L-12 -28 H-22 Z" fill="' + c + '" stroke="#4d6b3a" stroke-width="2.4" stroke-linejoin="round"/></g><rect x="-5" y="30" width="10" height="12" fill="#8a6a4a" stroke="#4d6b3a" stroke-width="2"/></g>'; }
  function tuft(x, y) { return '<path d="M' + x + ' ' + y + ' l3 -7 l2 7 l3 -9 l2 9 l3 -6 l1 6" fill="none" stroke="#6f9650" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'; }
  function flower(x, y, c) { return '<g transform="translate(' + x + ' ' + y + ')"><circle r="3.2" cx="-3" fill="' + c + '"/><circle r="3.2" cx="3" fill="' + c + '"/><circle r="3.2" cy="-3" fill="' + c + '"/><circle r="3.2" cy="3" fill="' + c + '"/><circle r="2.2" fill="#ffe27a"/></g>'; }
  var scene = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 860" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="400" height="860" fill="#5f8443"/>' +
    '<path d="M-20 120 C60 60 140 90 200 70 C270 50 330 80 420 60 V0 H-20 Z" fill="#4d6f37"/>' +
    pine(30, 70, .9, '#557a3e') + pine(110, 50, .7, '#557a3e') + pine(300, 55, .8, '#557a3e') + pine(370, 80, .9, '#557a3e') +
    '<ellipse cx="200" cy="420" rx="260" ry="250" fill="#7a9f54"/><ellipse cx="200" cy="420" rx="215" ry="205" fill="#88ad60"/><ellipse cx="200" cy="430" rx="120" ry="70" fill="#94b86b"/>' +
    tuft(80, 300) + tuft(310, 330) + tuft(120, 560) + tuft(290, 540) + tuft(60, 440) + tuft(330, 450) + tuft(210, 600) +
    flower(95, 360, '#fff4f0') + flower(305, 390, '#f7b6c8') + flower(140, 600, '#fff4f0') + flower(270, 590, '#f9d25a') + flower(335, 500, '#fff4f0') + flower(70, 520, '#f7b6c8') +
    '<g fill="#cfc2a6" stroke="#8a7a5e" stroke-width="2"><ellipse cx="170" cy="505" rx="10" ry="6"/><ellipse cx="192" cy="512" rx="8" ry="5"/><ellipse cx="236" cy="508" rx="11" ry="6"/></g>' +
    pine(40, 720, 1.2) + pine(130, 770, 1.4) + pine(270, 760, 1.3) + pine(360, 710, 1.1) + pine(200, 840, 1.5) + pine(20, 850, 1.1) + pine(380, 850, 1.2) +
    '</svg>';

  // 스케줄표 제목용 겨울숲 그림
  function wpine(x, y, s) { return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 -60 L22 -28 H12 L30 0 H17 L38 30 H-38 L-17 0 H-30 L-12 -28 H-22 Z" fill="#4f7a4a" stroke="#3b4f37" stroke-width="2.4" stroke-linejoin="round"/><path d="M0 -60 L9 -47 Q4 -43 0 -46 Q-4 -43 -9 -47 Z M-12 -28 L-22 -28 L-17 -21 Q-8 -17 0 -21 Q8 -17 17 -21 L22 -28 L12 -28 Q0 -24 -12 -28 Z M-17 0 L-30 0 L-24 8 Q-12 12 0 8 Q12 12 24 8 L30 0 L17 0 Q0 4 -17 0 Z" fill="#fff" stroke="#c9d6df" stroke-width="1.4" stroke-linejoin="round"/><rect x="-5" y="30" width="10" height="10" fill="#8a6a4a" stroke="#3b4f37" stroke-width="2"/></g>'; }
  var winterScene = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 210" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="ws" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe0ea"/><stop offset="1" stop-color="#eef4f3"/></linearGradient></defs>' +
    '<rect width="400" height="210" fill="url(#ws)"/>' +
    '<path d="M-10 150 C60 120 120 135 190 125 C260 115 330 130 410 118 V210 H-10 Z" fill="#e6eff3" stroke="#c9d6df" stroke-width="2"/>' +
    wpine(30, 120, .75) + wpine(78, 112, .6) + wpine(330, 108, .62) + wpine(374, 118, .8) +
    '<g transform="translate(300 118)"><path d="M-30 0 V-26 H30 V0 Z" fill="#d9944e" stroke="#5b4636" stroke-width="2.4"/><path d="M-36 -24 L0 -48 L36 -24 Z" fill="#a8672e" stroke="#5b4636" stroke-width="2.4" stroke-linejoin="round"/><path d="M-37 -24 L0 -49 L37 -24 Q30 -18 22 -23 Q10 -16 0 -22 Q-12 -16 -22 -23 Q-30 -18 -37 -24 Z" fill="#fff" stroke="#c9d6df" stroke-width="1.4"/><rect x="-22" y="-18" width="12" height="10" rx="2" fill="#ffd77a" stroke="#5b4636" stroke-width="2"/><rect x="8" y="-18" width="12" height="18" rx="2" fill="#a8672e" stroke="#5b4636" stroke-width="2"/><rect x="16" y="-56" width="8" height="14" fill="#b07a4f" stroke="#5b4636" stroke-width="2"/><g fill="#fff" opacity=".85"><circle cx="22" cy="-64" r="4"/><circle cx="27" cy="-73" r="5"/><circle cx="24" cy="-84" r="6"/></g></g>' +
    '<path d="M-10 178 C70 160 150 172 220 164 C290 156 350 168 410 160 V210 H-10 Z" fill="#ffffff" stroke="#c9d6df" stroke-width="2"/>' +
    wpine(120, 172, .85) + wpine(170, 182, .55) + wpine(250, 176, .7) +
    '<g fill="#fff">' + [[40,30],[90,60],[150,20],[210,50],[260,25],[340,45],[380,20],[120,95],[230,90],[60,100]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4"/>'; }).join('') + '</g>' +
    '</svg>';
  var sceneURL = svgURL(scene);
  var winterURL = svgURL(winterScene);
  function petal(x, y, r, c) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="3.2" ry="5.2" transform="rotate(' + r + ' ' + x + ' ' + y + ')" fill="' + c + '" stroke="#5b4636" stroke-width="1" opacity=".85"/>'; }
  function leaf(x, y, r) { return '<path d="M' + x + ' ' + y + ' q6 -6 12 0 q-6 6 -12 0 Z" transform="rotate(' + r + ' ' + x + ' ' + y + ')" fill="#b8d98a" stroke="#4f6b3a" stroke-width="1" opacity=".9"/>'; }
  var petals = svgURL('<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">' + petal(30, 40, 30, '#fbd3dc') + leaf(150, 20, -20) + petal(200, 120, -40, '#fff4f0') + leaf(60, 160, 40) + petal(120, 210, 70, '#fbd3dc') + petal(220, 220, 10, '#fff4f0') + '</svg>');

  // 게임 창 안 메뉴 이모지 → 같은 그림체 아이콘
  var RE = /(?:\p{Extended_Pictographic})(?:️|‍\p{Extended_Pictographic}️?)*/gu;
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CANVAS: 1, OPTION: 1, TITLE: 1 };
  function convert(root) {
    if (!root || !root.ownerDocument) return;
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), list = [], n;
    while ((n = tw.nextNode())) { RE.lastIndex = 0; var v = n.nodeValue, m, hit = false; while ((m = RE.exec(v))) if (OVR[norm(m[0])]) { hit = true; break; } if (hit) list.push(n); }
    list.forEach(function (t) {
      var p = t.parentNode; if (!p || SKIP[p.nodeName] || (p.closest && p.closest('svg,[data-nocz]'))) return;
      var s = t.nodeValue, f = document.createDocumentFragment(), last = 0, m; RE.lastIndex = 0;
      while ((m = RE.exec(s))) {
        var key = OVR[norm(m[0])]; if (!key) continue;
        if (m.index > last) f.appendChild(document.createTextNode(s.slice(last, m.index)));
        var im = document.createElement('img'); im.className = 'czi'; im.alt = m[0]; im.draggable = false; im.src = (WEAR[norm(m[0])] === 'hand' && p.closest && p.closest('.dcp,.shp,.skslot')) ? handURL(key) : keyURL(key); f.appendChild(im); last = m.index + m[0].length;
      }
      if (last < s.length) f.appendChild(document.createTextNode(s.slice(last)));
      p.replaceChild(f, t);
    });
    waveTitle(root);
  }
  function waveTitle(root) {
    if (!root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('.ttls:not([data-wv]),.ttlr:not([data-wv])'), function (el) {
      el.setAttribute('data-wv', '1'); var i = 0;
      Array.prototype.slice.call(el.childNodes).forEach(function (n) {
        if (n.nodeType !== 3) { if (n.nodeType === 1) { n.classList.add('czl'); n.style.setProperty('--i', i++); } return; }
        var f = document.createDocumentFragment();
        Array.from(n.nodeValue).forEach(function (ch) { if (ch === ' ') { f.appendChild(document.createTextNode(' ')); return; } var sp = document.createElement('span'); sp.className = 'czl'; sp.style.setProperty('--i', i++); sp.textContent = ch; f.appendChild(sp); });
        n.parentNode.replaceChild(f, n);
      });
    });
  }
  var obs = new MutationObserver(function (ms) {
    for (var i = 0; i < ms.length; i++) { var m = ms[i]; if (m.type === 'characterData') convert(m.target.parentNode); else if (m.type === 'attributes') applyMulti(m.target); else for (var j = 0; j < m.addedNodes.length; j++) { var a = m.addedNodes[j]; convert(a.nodeType === 3 ? a.parentNode : a); if (a.nodeType === 1) scanMulti(a); } }
  });
  var watched = null;
  function setVars(el) { el.style.setProperty('--cz-scene', 'url("' + sceneURL + '")'); el.style.setProperty('--cz-petal', 'url("' + petals + '")'); el.style.setProperty('--cz-cro', 'url("' + charURL('cro') + '")'); el.style.setProperty('--cz-winter', 'url("' + winterURL + '")'); Object.keys(FRAME).forEach(function (k) { el.style.setProperty('--fr-' + k, 'url("' + frameURL(k) + '")'); }); }
  setVars(document.documentElement);
  // 꾸미기를 캐릭터가 착용: 자리(머리·머리핀·눈·손·옆에 둥실)
  ICON.w_halo = '<ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="#f9d25a" stroke-width="3.4"/><ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke-width="1"/>';
  // 자리: 캐릭터 그림 안에서의 위치(가운데 x·y, 너비·높이, 기울기)
  var SLOT = { head: [.5, .12, .62, .62, -6], halo: [.5, .03, .58, .3, 0], pin: [.72, .14, .36, .36, 18], face: [.5, .436, .44, .44, 0], ears: [.5, .285, .87, .87, 0],
    hand: [.8, .72, .34, .34, -8], body: [.5, .785, .5, .41, 0], side: [1.0, .72, .4, .4, 0], float: [1.06, .0, .38, .38, 0] };
  function slotCSS(sl, r) { var a = SLOT[sl], W = a[2] * r, H = a[3] * r, X = (1 - r) / 2 + a[0] * r, Y = (1 - r) / 2 + a[1] * r; function pc(v) { return (v * 100).toFixed(1) + '%!important;'; }
    return 'left:' + pc(X - W / 2) + 'top:' + pc(Y - H / 2) + 'width:' + pc(W) + 'height:' + pc(H) + 'transform:rotate(' + a[4] + 'deg)!important;' + (sl === 'float' ? 'animation:czfloat 2.6s ease-in-out infinite!important;' : 'animation:none!important;'); }
  var WEAR = { '🧢': 'head', '👒': 'head', '🎩': 'head', '🎅': 'head', '👑': 'head', '🍄': 'head', '😇': 'halo', '🎀': 'pin', '🌸': 'pin', '🌻': 'pin', '🌹': 'pin', '🍀': 'pin', '🌱': 'pin', '🦋': 'pin', '🕶': 'face', '👓': 'face', '🎧': 'ears',
    '🍦': 'hand', '🍩': 'hand', '🍮': 'hand', '🧁': 'hand', '🍪': 'hand', '🥛': 'hand', '🍓': 'hand', '🍬': 'hand', '☕': 'hand', '🎂': 'hand', '🥐': 'hand', '🍞': 'hand', '🍳': 'hand', '🎁': 'hand', '🔔': 'hand', '💎': 'hand', '🏆': 'hand', '💗': 'hand',
    '🐾': 'pet', '🪺': 'pet', '🧚': 'pet', '🎠': 'pet', '🧊': 'pet', '🐉': 'pet', '🥼': 'body', '👖': 'body', '👕': 'body', '🧥': 'body', '🥻': 'body', '👗': 'body', '👘': 'body', '🧣': 'body', '⛄': 'side', '🎄': 'side', '🦌': 'side', '🦄': 'side', '🕊': 'float', '🌈': 'float', '☁': 'float', '🌙': 'float', '🌟': 'float', '⭐': 'float', '❄': 'float', '🔥': 'float', '🌌': 'float' };

  // 여러 꾸미기 동시 착용: data-sk 에 이모지가 여러 개면 한 장의 겹친 그림으로
  function slotOf(e) { var n = OVR[norm(e)]; if (n && n.indexOf('f:') === 0) return 'frame'; return WEAR[norm(e)] || 'float'; }
  var LAYER = { pet: -1, float: 0, pin: 1, head: 2, halo: 2, ears: 3, face: 4, hand: 5, side: 6, body: 7, frame: 8 };
  function applyMulti(el) {
    var v = el.getAttribute('data-sk') || '';
    if (el._czsk !== v) {
      var all = v.split(' ').filter(Boolean), pets = all.filter(function (e) { return slotOf(e) === 'pet'; }), rest = all.filter(function (e) { return slotOf(e) !== 'pet'; });
      if (pets.length) { var pn = OVR[norm(pets[0])]; el.setAttribute('data-pet', '1'); el.style.setProperty('--petbg', 'url("' + keyURL(pn) + '")'); }
      else if (el.hasAttribute('data-pet')) { el.removeAttribute('data-pet'); el.style.removeProperty('--petbg'); }
      if (pets.length) { var nv = rest.join(' '); el._czsk = nv; if (nv) el.setAttribute('data-sk', nv); else el.removeAttribute('data-sk'); v = nv; }
      else el._czsk = v;
    }
    var parts = v.split(' ').filter(Boolean);
    if (parts.some(function (e) { return slotOf(e) === 'frame'; })) el.setAttribute('data-fr', '1'); else el.removeAttribute('data-fr');
    if (parts.length < 2) { if (el.hasAttribute('data-skm')) { el.removeAttribute('data-skm'); el.style.removeProperty('--skbg'); } return; }
    var r = el.closest && el.closest('#crew') ? .85 : .84;
    parts.sort(function (a, b) { return LAYER[slotOf(a)] - LAYER[slotOf(b)]; });
    var bg = parts.map(function (e) {
      var n = OVR[norm(e)]; if (!n) return null; var sl = slotOf(e), L, T, W, H;
      if (norm(e) === '😇') n = 'w_halo';
      if (sl === 'frame') { L = -.42; T = -.42; W = 1.84; H = 1.84; }
      else { var a = SLOT[sl]; W = a[2] * r; H = a[3] * r; L = (1 - r) / 2 + a[0] * r - W / 2; T = (1 - r) / 2 + a[1] * r - H / 2; }
      var bw = W / 2, bh = H / 2, bx = (L + .5) / 2, by = (T + .5) / 2;
      var px = bw < 1 ? bx / (1 - bw) * 100 : 50, py = bh < 1 ? by / (1 - bh) * 100 : 50;
      return 'url("' + stickURL(e) + '") ' + px.toFixed(1) + '% ' + py.toFixed(1) + '% / ' + (bw * 100).toFixed(1) + '% ' + (bh * 100).toFixed(1) + '% no-repeat';
    }).filter(Boolean).join(',');
    el.setAttribute('data-skm', '1'); el.style.setProperty('--skbg', bg);
  }
  function scanMulti(root) { if (!root || !root.querySelectorAll) return; if (root.hasAttribute && (root.hasAttribute('data-sk') || root.hasAttribute('data-pet'))) applyMulti(root); Array.prototype.forEach.call(root.querySelectorAll('[data-sk],[data-skm],[data-pet]'), applyMulti); }

  // 손에 쥔 음식은 얼굴(눈·입·볼터치) 없이
  function faceless(svg) { return svg.replace(/<ellipse[^>]*fill="#3b2a20"[^>]*\/>/g, '').replace(/<circle[^>]*fill="#3b2a20"[^>]*\/>/g, '').replace(/<ellipse[^>]*fill="#f58fa8"[^>]*\/>/g, '').replace(/<circle[^>]*r="0?\.\d+" fill="#fff" stroke="none"\/>/g, '').replace(/<path d="M[^"]*q[^"]*" fill="none" stroke-width="[\d.]+"\/>/g, ''); }
  function handURL(n) { var key = 'h:' + n; if (urls[key]) return urls[key];
    if (n.indexOf('c:') === 0) urls[key] = svgURL(wrap(faceless(CHAR[n.slice(2)] || '')));
    else urls[key] = svgURL(wrap(faceless(ICON[n] || ''), '0 0 24 24').replace('stroke-width="2.4"', 'stroke-width="1.8"'));
    return urls[key]; }
  function stickURL(e) { var n = OVR[norm(e)]; if (!n) return ''; if (WEAR[norm(e)] === 'hand') return handURL(n); if (norm(e) === '😇') return keyURL('w_halo'); return keyURL(n); }
  function stickerCSS() {
    try {
      if (typeof SKG === 'undefined') return;
      var FOOD = '🎂🥐🍞☕🍳🍪🥛🍓🍬🍩🍮🧁🍦';
      for (var i = SKG.length - 1; i >= 0; i--) { var it = SKG[i], ee = norm(it.e), sl0 = WEAR[ee] || 'float'; if (!it.fr && !it.pet && (sl0 === 'float' || sl0 === 'side' || sl0 === 'hand') && FOOD.indexOf(ee) < 0) SKG.splice(i, 1); }
      SKG.forEach(function (k) { if (k.fr) { k.g = 3; return; } var sl = WEAR[norm(k.e)] || 'float'; if (sl === 'pet') { k.g = 5; return; }
        if (sl === 'body') { k.g = 2; } else if (sl === 'head' || sl === 'pin' || sl === 'face' || sl === 'ears' || sl === 'halo') { k.g = 1; k.p = Math.min(2400, Math.max(1000, k.p)); } else { k.g = 0; k.p = Math.min(800, k.p); } });
      var css = '@keyframes czfloat{0%,100%{translate:0 0}50%{translate:0 -3px}}[data-skm]::before{content:""!important;position:absolute!important;left:-50%!important;top:-50%!important;width:200%!important;height:200%!important;transform:none!important;animation:none!important;background:var(--skbg)!important;filter:drop-shadow(0 1px 1px rgba(58,40,28,.3))!important;z-index:6;pointer-events:none;font-size:0}';
      SKG.forEach(function (k) { var e = norm(k.e), n = OVR[e]; if (!n || n.indexOf('f:') === 0) return; var slot = WEAR[e] || 'float'; if (slot === 'pet') return; if (e === '😇') n = 'w_halo';
        var bg = 'content:""!important;position:absolute!important;font-size:inherit;background:url("' + stickURL(k.e) + '") center/contain no-repeat!important;filter:drop-shadow(0 1px 1px rgba(58,40,28,.3))!important;z-index:6;pointer-events:none;';
        css += '[data-sk="' + k.e + '"]::before{' + bg + slotCSS(slot, .84) + '}';
        css += '#crew .ico[data-sk="' + k.e + '"]::before{' + slotCSS(slot, .85) + '}'; });
      var st = document.createElement('style'); st.id = 'czstk'; st.textContent = css; document.head.appendChild(st);
    } catch (e) {}
  }
  function start() { stickerCSS(); convert(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['data-sk'] }); scanMulti(document.body); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);


  // 게임은 전체화면으로 (브라우저 주소창·이동 버튼 숨김)
  function fsOn() {
    var d = document.documentElement, f = d.requestFullscreen || d.webkitRequestFullscreen;
    var tip = function () {
      if (document.fullscreenElement || document.webkitFullscreenElement) return;
      try { if (sessionStorage.getItem('czfs')) return; sessionStorage.setItem('czfs', '1'); } catch (e) {}
      var gm = document.getElementById('gm'); if (!gm) return;
      var kakao = /KAKAOTALK/i.test(navigator.userAgent), t = document.createElement('div'); t.className = 'czfs';
      t.innerHTML = kakao ? '<span>카톡 안에서는 위아래 바가 남아요</span><button type="button" class="go">크롬으로 열기</button><button type="button" class="x">✕</button>' : '<span>홈 화면에 추가하면 꽉 찬 화면으로 즐길 수 있어요</span><button type="button" class="x">✕</button>';
      t.addEventListener('click', function (e) { e.stopPropagation(); if (e.target.classList.contains('go')) location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(location.href); t.remove(); });
      gm.appendChild(t); setTimeout(function () { if (t.parentNode) t.remove(); }, 9000);
    };
    if (window.matchMedia && matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches) return;
    if (!f) { setTimeout(tip, 600); return; }
    try { var r = f.call(d, { navigationUI: 'hide' }); if (r && r.catch) r.catch(function () { setTimeout(tip, 300); }); setTimeout(tip, 900); } catch (e) { setTimeout(tip, 600); }
  }
  var opening = false;
  function fsOff() { try { if (document.fullscreenElement) document.exitFullscreen(); else if (document.webkitFullscreenElement) document.webkitExitFullscreen(); } catch (e) {} }
  if (typeof window.openGame === 'function') { var _og = window.openGame; window.openGame = function () { fsOn(); opening = true; try { return _og.apply(this, arguments); } finally { opening = false; } }; }
  if (typeof window.closeGame === 'function') { var _cg = window.closeGame; window.closeGame = function () { if (!opening) fsOff(); return _cg.apply(this, arguments); }; }
  document.addEventListener('fullscreenchange', function () { if (!document.fullscreenElement && document.getElementById('gm')) { /* 사용자가 전체화면을 나가도 게임은 그대로 */ } });

  window.PX = { petImg: function (se) { try { var L = String(se || '').split(','); for (var i = 0; i < L.length; i++) { var k = SKG.find(function (x) { return x.k === L[i]; }); if (k && slotOf(k.e) === 'pet') return img(keyURL(OVR[norm(k.e)])); } } catch (e) {} return null; }, slotOf: slotOf, boss: boss, char: char, charURL: charURL, icon: icon, emoji: icon, draw: draw, convert: convert, FONT: 'Jua,sans-serif' };
})();
