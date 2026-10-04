# 고려대학교 고전기타부 홈페이지

정적 사이트입니다 (HTML/CSS/JS). 기존 Notion(Oopy) 사이트 www.kuguitar.com의 내용을 옮겨왔습니다.

연주회 상세 페이지는 연도별 데이터에서 생성합니다:

```bash
python3 build.py     # data/years/*.js + assets/ → concert/<슬러그>/ + sitemap.xml
```

- `concert/<슬러그>/` (예: `concert/2018_fall/`)가 연주회 상세의 정식 주소입니다.
  fall=정기, spring=신입생환영, alumni=교우, special=기타. 페이지마다 고유
  title·description·OG 태그·JSON-LD가 박혀 있어 검색·카톡 미리보기가 제대로 나옵니다.
- 옛 `concert.html?id=…` 링크는 새 주소로 자동 리다이렉트됩니다.
- main에 push하면 GitHub Actions가 같은 빌드를 돌려 GitHub Pages로 배포합니다.
  생성물(`concert/`, `sitemap.xml`)은 커밋하지 않습니다.
- 데이터 관리 규칙은 `CLAUDE.md` 참고.

## 미리보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

`index.html`을 파일로 바로 열어도 동작합니다.

## 구조

| 파일 | 내용 |
|---|---|
| `index.html` | 메인 (히어로, 소개, 활동, 최근 연주회, 공지) |
| `about.html` | 동아리 소개, 교우회 연혁, 역대 교우회장, 찾아오는 길 |
| `concerts.html` | 연주회 아카이브 (구분 필터, 공연자·곡명·작곡가 검색) |
| `concert.html?id=…` | 연주회 상세 (포스터, 영상, 프로그램, 합주 편성) |
| `people.html` | 현 회장단, 역대 회장단 |
| `notices.html` | 공지사항 |
| `rules.html` | 회칙 전문 |
| `data/years/<연도>.js` | 그해의 회장단, 연주회, 공지, 연혁, 교우회장 (1974.js ~ 2026.js) |
| `data/years/_template.js` | 새해 파일을 만들 때 복사할 템플릿 |
| `assets/posters/` | 연주회 포스터 (파일명 = 연주회 id) |
| `assets/photos/` | 로고, 커버, 활동 사진 |
| `css/style.css`, `js/site.js` | 공통 스타일, 헤더·푸터·다크모드 |

## 내용 수정하기

데이터는 연도별 파일(`data/years/2026.js` 등)에 들어 있습니다. HTML이나 JS는 고칠 필요가 없습니다.

**새해가 되면**
1. `data/years/_template.js`를 복사해 `data/years/2027.js`로 저장합니다.
2. 회장단, 공지, 연주회를 채우고 필요 없는 항목은 지웁니다.
3. 포스터는 `assets/posters/<연주회 id>.webp`로 넣습니다. 없으면 연도·제목 카드가 대신 보입니다.

사이트는 1974년부터 (올해 + 1)년까지의 파일을 자동으로 찾아 불러옵니다. 따로 등록할 목록이 없고,
다음 해 파일을 미리 만들어 둬도 바로 보입니다. 아직 없는 다음 해 파일은 브라우저 콘솔에 404로 한 줄 찍히는데, 정상입니다.

**그해 중간에 추가할 때**: 해당 연도 파일의 `concerts`나 `notices`에 항목을 추가합니다. 순서는 상관없습니다 (날짜순으로 자동 정렬).

## 배포

GitHub Pages, Netlify, Cloudflare Pages 등 정적 호스팅이면 어디든 폴더째 올리면 됩니다.
`www.kuguitar.com` 도메인을 새 호스팅으로 연결하면 기존 Oopy 사이트를 대체합니다.

## 참고

- 팜플렛·포스터 스캔이 `assets/scans/<슬러그>/`에 들어 있습니다. 연주회 상세 하단 갤러리는
  썸네일(480px)을 보여주고 클릭하면 원본을 엽니다.
