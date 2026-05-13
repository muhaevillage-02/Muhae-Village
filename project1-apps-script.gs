// ============================================================
//  무해한 마을 — 테스터 신청 Google Apps Script
//  시트: 1pzsRP3FNAoldDeRI96KSbbnRDdQpVsSqdmd7WxuHkEo
//  시트명: 리스트
// ============================================================
//
//  배포 방법:
//  1. https://script.google.com 접속
//  2. 새 프로젝트 생성 후 아래 코드 붙여넣기
//  3. 상단 메뉴 > 배포 > 새 배포
//  4. 유형: 웹 앱
//     실행 계정: 나 (Muhaevillage@gmail.com)
//     액세스 권한: 모든 사용자 (익명 포함)
//  5. 배포 > 웹 앱 URL 복사
//  6. project1-apply.html 의 APPS_SCRIPT_URL 변수에 붙여넣기
// ============================================================

var SPREADSHEET_ID = '1pzsRP3FNAoldDeRI96KSbbnRDdQpVsSqdmd7WxuHkEo';
var SHEET_NAME     = '리스트';

function doPost(e) {
  try {
    // CORS 허용을 위해 Content-Type: text/plain 으로 수신
    var raw  = e.postData.contents;
    var data = JSON.parse(raw);

    var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // 헤더가 없으면 첫 행에 자동 삽입
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '제출 일시', '이름', '연락처', '생년월일',
        '학교', '거주지', '고민 파트', '일주일 스케줄', '현재 고민'
      ]);
    }

    // 데이터 누적 저장
    sheet.appendRow([
      new Date(),
      data.name     || '',
      data.phone    || '',
      data.birth    || '',
      data.school   || '',
      data.location || '',
      data.worry    || '',
      data.schedule || '',
      data.concern  || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 테스트용 함수 (Apps Script 에디터에서 직접 실행해 시트 연결 확인)
function testConnection() {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  Logger.log('시트 연결 성공: ' + sheet.getName() + ' / 현재 행 수: ' + sheet.getLastRow());
}
