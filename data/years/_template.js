// ─────────────────────────────────────────────────────────────
// 새해 데이터 템플릿
// 1. 이 파일을 복사해 파일명을 연도로 바꿉니다.   예) 2027.js
// 2. 해당하지 않는 항목은 통째로 지워도 됩니다.
// 3. 사이트가 1974년부터 (올해 + 1)년까지의 파일을 자동으로 찾으므로
//    다른 파일은 고칠 필요가 없습니다.
// ─────────────────────────────────────────────────────────────
KUG.addYear({
  year: 2027,

  // 회장단 — "이름 (학과학번)"
  officers: {
    gen: 54,
    president: ["홍길동 (경영26)"],
    vice: ["김철수 (기계26)"],
    treasurer: ["이영희 (통계26)"]
  },

  // 교우회장 (그해 선출된 경우만)
  // alumniPresident: { name: "홍길동" },

  // 연혁 (소개 페이지 타임라인, 특별한 일이 있던 해만)
  // history: ["창립 55주년 기념연주회"],

  // 공지사항 — category: 재학생 | 졸업생 | 그 외
  notices: [
    {
      id: "2027-welcome",              // 주소에 쓰이는 고유값 (notices.html#2027-welcome)
      category: "재학생",
      tag: "연주회",
      title: "제53회 신입생환영연주회 안내",
      date: "2027-01-20",
      body: [
        "일반 문단은 문자열로 씁니다.",
        { h: "소제목" },
        { list: ["목록 항목 1", "목록 항목 2"] }
      ]
      // attachment: { label: "파일명.pdf", url: "https://..." }
    }
  ],

  // 연주회 — type: 정기 | 신입 | 교우 | ETC
  // 포스터는 assets/posters/<id>.webp 로 넣습니다.
  concerts: [
    {
      id: "2027-w53",
      title: "53회 신입생환영연주회 (’27)",
      type: "신입",
      date: "2027-03-12",
      venue: "고려대 인촌기념관",
      conductor: "홍길동(52)",
      poster: "assets/posters/2027-w53.webp",
      video: null,                       // 유튜브 영상/재생목록 주소
      pamphlet: 0,
      program: [
        {
          performers: "홍길동(53), 김철수(53)",
          pieces: [
            { title: "Romance", composer: "Anonymous" },
            { title: "Suite", composer: "J.S. Bach", movements: ["Prelude", "Allemande"] }
          ]
        },
        {
          performers: "지휘 홍길동(52)",
          pieces: [{ title: "Libertango", composer: "Astor Piazzolla" }],
          roster: ["1st 홍길동 김철수", "2nd 이영희", "Cb. 박지성"]
        }
      ]
    }
  ]
});
