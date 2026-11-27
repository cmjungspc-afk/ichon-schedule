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

  var OVR = { '📖': 'book', '🎒': 'bag', '📅': 'cal', '⭐': 'star', '🌟': 'star', '📮': 'mail', '🛍': 'gift', '🎁': 'gift', '🎀': 'bow', '🏆': 'trophy', '🏅': 'medal', '🪙': 'coin', '🔑': 'key', '🚪': 'door', '🎵': 'note', '📊': 'chart', '👤': 'person', '🎄': 'pine', '❤': 'heart', '🥐': 'c:cro', '💢': 'anger' };
  Object.keys(PEOPLE).forEach(function (e) { OVR[norm(e)] = 'p:' + e; });
  var urls = {}, imgs = {};
  function svgURL(s) { return 'data:image/svg+xml,' + encodeURIComponent(s); }
  function charURL(k) { var key = 'c:' + k; if (!urls[key]) urls[key] = svgURL(wrap(CHAR[k] || CHAR.cro)); return urls[key]; }
  function iconURL(n) { var key = 'i:' + n; if (!urls[key]) urls[key] = svgURL(wrap(ICON[n], '0 0 24 24').replace('stroke-width="2.4"', 'stroke-width="1.8"')); return urls[key]; }
  function img(u) { if (imgs[u]) return imgs[u]; var m = new Image(); m.src = u; return (imgs[u] = m); }
  function norm(e) { return String(e).replace(/️/g, ''); }
  function personURL(e) { var key = 'p:' + e; if (!urls[key]) urls[key] = svgURL(wrap(person(PEOPLE[e]))); return urls[key]; }
  function keyURL(n) { return n.indexOf('c:') === 0 ? charURL(n.slice(2)) : n.indexOf('p:') === 0 ? personURL(n.slice(2)) : iconURL(n); }
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
  function pine(x, y, s, c) { c = c || '#6f9650'; pn++; var d = (pn % 5) * .4, a = 1.6 + (pn % 3) * .6; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g><animateTransform attributeName="transform" type="rotate" values="0 0 40;' + a + ' 0 40;0 0 40;' + (-a) + ' 0 40;0 0 40" dur="' + (4 + pn % 3) + 's" begin="' + d + 's" repeatCount="indefinite"/><path d="M0 -60 L22 -28 H12 L30 0 H17 L38 30 H-38 L-17 0 H-30 L-12 -28 H-22 Z" fill="' + c + '" stroke="#4d6b3a" stroke-width="2.4" stroke-linejoin="round"/></g><rect x="-5" y="30" width="10" height="12" fill="#8a6a4a" stroke="#4d6b3a" stroke-width="2"/></g>'; }
  function tuft(x, y) { return '<path d="M' + x + ' ' + y + ' l3 -7 l2 7 l3 -9 l2 9 l3 -6 l1 6" fill="none" stroke="#6f9650" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'; }
  function flower(x, y, c) { return '<g transform="translate(' + x + ' ' + y + ')"><animateTransform attributeName="transform" type="translate" values="' + x + ' ' + y + ';' + x + ' ' + (y - 2.5) + ';' + x + ' ' + y + '" dur="' + (2 + (x % 3) * .5) + 's" repeatCount="indefinite"/><circle r="3.2" cx="-3" fill="' + c + '"/><circle r="3.2" cx="3" fill="' + c + '"/><circle r="3.2" cy="-3" fill="' + c + '"/><circle r="3.2" cy="3" fill="' + c + '"/><circle r="2.2" fill="#ffe27a"/></g>'; }
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
  var sceneURL = svgURL(scene);
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
        var im = document.createElement('img'); im.className = 'czi'; im.alt = m[0]; im.draggable = false; im.src = keyURL(key); f.appendChild(im); last = m.index + m[0].length;
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
    for (var i = 0; i < ms.length; i++) { var m = ms[i]; if (m.type === 'characterData') convert(m.target.parentNode); else for (var j = 0; j < m.addedNodes.length; j++) { var a = m.addedNodes[j]; convert(a.nodeType === 3 ? a.parentNode : a); } }
  });
  var watched = null;
  new MutationObserver(function () {
    var gm = document.getElementById('gm');
    if (gm && gm !== watched) { watched = gm; gm.style.setProperty('--cz-scene', 'url("' + sceneURL + '")'); gm.style.setProperty('--cz-petal', 'url("' + petals + '")'); convert(gm); obs.disconnect(); obs.observe(gm, { childList: true, subtree: true, characterData: true }); }
  }).observe(document.body, { childList: true });

  window.PX = { boss: boss, char: char, charURL: charURL, icon: icon, emoji: icon, draw: draw, convert: convert, FONT: 'Jua,sans-serif' };
})();
