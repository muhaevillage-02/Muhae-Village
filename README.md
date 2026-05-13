# 무해한 마을 (Muhae Village)

20대를 위한 따뜻한 소셜 커뮤니티, **무해한 마을** 정적 웹사이트입니다.

## 사이트 구조

| 파일 | 설명 |
| --- | --- |
| `index.html` | 메인 화면 (= `muhea_town.html`) — 인터랙티브 마을 지도 |
| `muhea_town.html` | 원본 메인 페이지 |
| `community_center.html` | 이장님댁 (커뮤니티 센터) |
| `town_info.html` | 마을 소개 |
| `store.html` | 무해한 문방구 |
| `playground.html` | 무해한 방범대 |
| `project1.html` | 프로젝트 1 — 5분만에 주도권을 가져오는 대화법 |
| `project1-apps-script.gs` | Google Apps Script (폼/연동용) |

> `index.html` 은 GitHub Pages 진입점이 되도록 `muhea_town.html` 과 동일한 내용으로 복제되었습니다. 메인 화면을 수정할 때에는 두 파일을 함께 갱신하거나, 한쪽만 유지하고 다른 쪽을 심볼릭 링크/리디렉션으로 바꿔서 관리하세요.

## 로컬에서 보기

```bash
# 가장 간단한 방법 (Python 3)
python3 -m http.server 8000
# 또는 Node
npx serve .
```

브라우저에서 <http://localhost:8000> 을 열면 메인 페이지가 표시됩니다.

## GitHub Pages 배포

1. GitHub 에 새 저장소를 만든 뒤 이 폴더를 푸시하세요.
2. 저장소 **Settings → Pages** 로 이동.
3. **Source** 를 `Deploy from a branch` 로 두고, Branch 를 `main` / `/ (root)` 로 지정.
4. 잠시 후 `https://<username>.github.io/<repo>/` 에서 사이트가 열립니다.

`.nojekyll` 파일이 포함되어 있어 Jekyll 처리 없이 그대로 정적 파일이 서빙됩니다.

## 문의

- 이메일 | <muhaevillage@gmail.com>
- 인스타그램 | [@muhae_village](https://instagram.com/muhae_village)

© 2026 무해한 마을. All rights reserved.
