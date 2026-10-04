# CLAUDE.md

고려대학교 고전기타부 홈페이지. 정적 사이트, 표준 라이브러리 파이썬 빌드.

## 구조

- `data/years/<년도>.js` — 데이터의 전부. `KUG.addYear({...})` 한 번 호출.
  `concerts` 배열은 **엄격한 JSON**이어야 한다 (build.py가 json.loads로 읽는다 —
  홑따옴표·후행쉼표·주석 금지). concerts 앞의 수기 블록(officers, notices, history)은 JS 리터럴.
- `build.py` — `data/years` + `assets/scans` → `concert/<슬러그>/index.html` + `sitemap.xml`.
  push하면 GitHub Actions(.github/workflows/pages.yml)가 같은 빌드를 돌려 배포한다.
- `assets/scans/<슬러그>/NN.jpg` + `thumb/NN.jpg`(480px) — 팜플렛 스캔. 01이 포스터 취급.
- `assets/posters/<연주회 id>.webp` — 목록 카드용 포스터.
- 목록·검색·회장단 화면은 클라이언트에서 연도 파일을 직접 읽는다 (js/site.js).

## 연주회 추가 (새해)

1. `data/years/<년도>.js` 생성(기존 해 복사가 빠름). concerts 항목 필수 키:
   `id`(8자 hex, 임의 고정값), `slug`("{년도}_{fall|spring|alumni|special}"),
   `title`, `type`("정기"|"신입"|"교우"|"ETC"), `date`(YYYY-MM-DD), `program`.
   선택: `venue`, `conductor`, `poster`, `video`, `pamphlet`, `playlist{id,title,tracks[{v,t,d}]}`,
   곡에 `videos[{url,length}]`, 합주에 `roster`.
2. 스캔을 `assets/scans/<슬러그>/01.jpg…`에, 썸네일(최대변 480px, JPEG q70)을 `thumb/`에.
3. `python3 build.py` 로 로컬 확인 후 push — Actions가 빌드·배포.

## 규칙

- **slug는 한 번 공개되면 불변** (주소가 바뀌면 링크가 죽는다).
- `concert/`와 `sitemap.xml`은 생성물 — 직접 수정 금지, 커밋도 안 한다(.gitignore).
- 사람 이름은 "이름(기수)" 문자열로만 존재한다. 인명 색인·연락처 류의 구조화 데이터를
  이 저장소에 추가하지 말 것.
- 도메인·SEO 상수는 build.py 상단 `SITE_URL`.
