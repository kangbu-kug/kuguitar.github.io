# Replit에서 실행하기

이 프로젝트는 HTML/CSS/JavaScript로 만든 정적 사이트입니다. 별도의 의존성 설치나 데이터베이스가 필요하지 않습니다.

## 미리보기

Replit의 `Start application` 워크플로를 실행하면 사이트를 미리 볼 수 있습니다. 워크플로는 먼저 생성 페이지를 빌드한 다음 포트 5000에서 사이트를 제공합니다.

## 수동 실행

```bash
python3 build.py
python3 -m http.server 5000 --bind 0.0.0.0
```

`build.py`는 `data/years/`와 `assets/`를 사용해 연주회 상세 페이지와 `sitemap.xml`을 생성합니다. 생성된 파일은 다시 만들 수 있으므로 직접 수정하지 않습니다.
