# CLAUDE.md

고려대학교 고전기타부 홈페이지 (kuguitar.com). 정적 사이트, 표준 라이브러리 파이썬 빌드.

## 구조

- 페이지는 디렉터리 URL: `/about/` `/concerts/` `/students/` `/alumni/` `/people/` `/notices/` `/rules/`
  = 각각 `X/index.html`. **이 페이지들은 `<head>`에 `<base href="../">`가 있어야 한다**
  (자원 경로가 전부 루트 기준 상대라서). 연주회 상세는 `<base href="../../">`.
  루트에는 `index.html`(메인)과 `concert.html`(옛 `?id=` 링크 → 슬러그 리다이렉트)만 있다.
- `data/years/<년도>.js` — 데이터의 전부. `KUG.addYear({...})` 한 번 호출.
  `concerts` 배열은 **엄격한 JSON**이어야 한다 (build.py가 json.loads로 읽는다 —
  홑따옴표·후행쉼표·주석 금지). concerts 앞의 수기 블록(officers, notices, history)은 JS 리터럴.
- `build.py` — `data/years` + `assets/scans` → `concert/<슬러그>/index.html` + `sitemap.xml`.
  main에 push하면 GitHub Actions(.github/workflows/pages.yml)가 같은 빌드를 돌려
  GitHub Pages로 배포한다 (Pages Source = GitHub Actions, 도메인은 CNAME 파일).
- `assets/scans/<슬러그>/NN.jpg` + `thumb/NN.jpg`(최대변 480px) — 팜플렛 스캔. 01이 포스터 취급.
- `assets/posters/<연주회 id>.webp` — 목록 카드용 포스터.
- 목록·검색·회장단 화면은 클라이언트에서 연도 파일을 직접 읽는다 (js/site.js).
- `data/extras.json` — 데이터 생성 단계의 입력. 사이트 빌드에는 쓰이지 않는다.

## js/site.js 에 있는 것

상단 메뉴(NAV 배열 — 헤더·푸터 공용), 다크모드, 연도 파일 로더,
팜플렛 라이트박스(`.scan-grid` 클릭 → 오버레이, ←/→/Esc),
곡별 영상(`details.pv` — 처음 펼칠 때만 iframe 주입),
재생목록 플레이어(`#playlist-toggle` 토글 → 전체 폭 영상 + 트랙리스트, 닫으면 재생 중지).
아카이브 그리드/리스트 전환은 `concerts/index.html` 인라인 스크립트.

메뉴의 재학생(`students/`)·교우회(`alumni/`)는 자리만 있는 빈 페이지 —
추후 stu.kuguitar.com / alum.kuguitar.com 이 생기면 NAV 의 href 만 그 주소로 바꾼다.

## 연주회 추가 (새해)

1. `data/years/<년도>.js` 생성(기존 해 복사가 빠름). concerts 항목 필수 키:
   `id`(8자 hex, 임의 고정값), `slug`("{년도}_{fall|spring|alumni|special}"),
   `title`, `type`("정기"|"신입"|"교우"|"ETC"), `date`(YYYY-MM-DD), `program`.
   선택: `venue`, `conductor`, `poster`, `video`, `pamphlet`, `playlist{id,title,tracks[{v,t,d}]}`,
   곡에 `videos[{url,length}]`, 합주에 `roster`.
2. 스캔을 `assets/scans/<슬러그>/01.jpg…`에, 썸네일(최대변 480px, JPEG q70)을 `thumb/`에.
3. `python3 build.py` 로 생성 후 로컬 확인(`python3 -m http.server`), push — Actions가 빌드·배포.

## 규칙

- **slug는 한 번 공개되면 불변** (주소가 바뀌면 링크가 죽는다).
- `concert/`와 `sitemap.xml`은 생성물 — 직접 수정 금지, 커밋도 안 한다(.gitignore).
- 사람 이름은 "이름(기수)" 문자열로만 존재한다. 인명 색인·연락처 류의 구조화 데이터를
  이 저장소에 추가하지 말 것.
- 도메인·SEO 상수는 build.py 상단 `SITE_URL`.
- 새 요소를 `hidden`으로 숨길 때, 그 요소에 `display`를 주는 CSS가 있으면
  `.클래스[hidden] { display: none; }`을 같이 둘 것 (lightbox·player가 이 패턴).
