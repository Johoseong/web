function mechanicalEngineering() {
    var snu_prof = ['이정훈', '최해천', '김민수', '박형민', '민경덕', '박종우', '김호영', '최민수', '전누리', '김윤영', '고상근', '조규진', '도형록', '신용대', '박용래', '김도년', '윤병동', '송한호', '이윤석', '황원태', '강연준', '고승환', '이동준', '차석원', '김찬중', '박희재'];
    var snu_lab = ['나노/마이크로 시스템 연구실', '난류, 유동제어 및 CFD/생체모방공학 실험실', '냉동시스템 및 컨트롤 연구실/연료전지시스템 연구실', '다상유동 및 유동가시화 실험실', '동력공학 연구실', '로봇 자동화 실험실', '마이크로유체 및 소프트물질 연구실', '멀티스케일 에너지 시스템 실험실', '멀티스케일 의기계공학 연구실', '멀티피직스시스템 설계 연구실', '메카트로닉스 실험실', '바이오로보틱스 실험실', '반응성 유동 실험실', '생체 시스템 공학 연구실', 
    '소프트 로봇 및 바이오닉스 연구실', '시뮬레이션주도 구조설계 연구실', '시스템 건전성 및 리스크 관리 연구실', '어드밴스드 에너지 시스템 연구실', '에너지 디바이스 및 나노공학 연구실', '에너지 및 환경유동 연구실', '음향 및 진동 연구실', '응용나노 및 열공학 연구실', '인터랙티브/네트워크 로보틱스 연구실', '재생 에너지 변환 실험실', '전산열설계 연구실', '정밀 측정 및 박막 공정 연구실'];
    var kaist_prof = ['박인규', '오일권', '김택수', '배충식', '이필승', '윤용진', '이봉재', '최세범', '김성진', '김정원', '김영진', '윤국진', '민범기', '유승화', '공경철', '이익진', '배중면', '김진환'];
    var kaist_lab = ['초미세 트랜스듀서 연구실', '액티브 재료 및 동적 시스템 연구실', '차세대 패키징 및 박막 연구실', '수송동력연구실', '전산역학 및 구조시스템 연구실', 'JDL (Just Do it Laboratory) 미래 설계 제조 연구실', '복사열전달 연구실', 
    '차량 제어 연구실', '응용열전달 연구실', '초규모 광 제어 및 계측 연구실', '초정밀 측정 및 가공 연구실', '시각 지능 연구실', '광 기전 소자 연구실', '멀티스케일 역학 및 재료 모델링 연구실', '로봇시스템제어 연구실', '최적 설계 연구실', 
    '신 에너지변환시스템 연구실', '모바일지능로봇연구실'];
    var postech_prof = ['조동우', '노준석', '이상준', '김동성', '임근배', '박성진', '박재성', '김준원'];
    var postech_lab = ['지능생산시스템 연구실', '나노스케일 포토닉스 및 통합생산 연구실', '미래유체 및 생체모방 연구실', '재료가공 및 통합 바이오시스템 연구실', '나노 & 바이오MEMS 연구실', '마이크로 제조 및 멀티스케일 시뮬레이션 연구실', '멀티스케일 바이오 기계공학 연구실', 'MEMS & 나노기술 연구실'];
    var knu_prof = ['최상헌', '박철우', '조대성', '박일석', '김영석', '노건우', '김철', '이학', '강보영', '노용래'];
    var knu_lab = ['기계학습 및 유체역학', '바이오유체, 실험열유체', '다상열유체', '응용열전달', '전산마이크로역학', '전산해석 및 최적설계', 'CAE/자동차구조해석, 기계최적설계', '필드로봇', '인공지능로봇', '음향진동학'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 기계공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 기계공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 기계공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 기계공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function brainEngineering() {
    var kaist_prof = ['예종철', '정기훈', '박제균', '정용', '이도헌', '조영호', '조광현', '최철희'];
    var kaist_lab = ['바이오영상신호처리지능 연구실', '바이오포토닉스 연구실', '나노바이오공학 연구실', '인지신경영상 연구실', '바이오정보시스템 연구실', '나노감응시스템 연구실', '시스템생물학 및 바이오영감공학 연구실', '세포신호및생체영상 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 바이오및뇌공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }

    document.body.appendChild(table);
}

function electronic() {
    var snu_prof = ['이병호', '심병효', '윤성로', '박병국', '홍용택', '이정우', '박세웅', '설승기', '한승용', '권성훈', '김성재', '이종호', '박남규', '하정익'];
    var snu_lab = ['광공학 및 양자전자 연구실', '정보시스템 연구실', '인공지능 연구실', '반도체 재료 및 소자 연구실', '차세대 유연성 소자 연구실', '통신 및 머신러닝 연구실', '네트워크 연구실', '전력전자 연구실', '초전도 응용 연구실', '생체광학 및 나노공학 연구실',
    '에너지환경융합 연구실', '바이오메디컬 영상 과학 연구실', '광자 시스템 연구실', '전기 에너지 변환 연구실'];
    var kaist_prof = ['최양규', '유승협', '최성율', '권인소', '최경철', '최준일', '전상훈', '이정용', '명현', '윤준보'];
    var kaist_lab = ['나노지향 바이오전자 연구실', '유기전자 및 유기디스플레이 연구실', '분자 및 나노소자 연구실', '로보틱스 및 컴퓨터비전 연구실', '차세대 디스플레이소자 및 나노융합 연구실', '지능형 통신 연구실',
    '안토니스 연구실', '차세대 에너지변환소자 연구실', '미래도시로봇 연구실', '3차원 마이크로-나노 구조체 연구실'];
    var postech_prof = ['김철홍', '박부견', '남광희', '김상우', '한수희', '정윤영', '권봉환'];
    var postech_lab = ['바이오광학 및 음향 연구실', '신호처리 및 제어 연구실', '제어 및 모터드라이브 연구실', '지능제어 시스템 연구실', '컴퓨팅&제어 연구실', '지능형반도체 및 웨어러블디바이스 연구실', '에너지 회로 연구실'];
    var knu_prof = ['문병인', '조정훈', '이정희', '정성아', '배진혁', '허성호', '최무한', '공성호', '김형표', '심재훈'];
    var knu_lab = ['시스템온칩 연구실', 'ACE 연구실', '질화물 반도체소자 연구실', '유비쿼터스 및 지능형통신 연구실', '차세대 나노전자소자 연구실', '제어 및 재생가능에너지 연구실', '포토닉스 메타소자 연구실', '마이크로 및 나노 트랜스듀서 연구실'
    , '센서응용시스템 연구실', '통신 회로 및 시스템 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 전기정보공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 전기및전자공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 전자전기공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 전자,전기공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function computerSience() {
    var snu_prof = ['김선', '강유', '권태경', '전화숙', '문봉기', '유승주', '김진수', '김종권'];
    var snu_lab = ['생물정보 및 생명정보 연구실', '데이터마이닝 연구실', '인터넷 융합 및 보안 연구실', '이동 컴퓨팅 및 통신 연구실', '데이터베이스시스템 연구실', '컴퓨팅메모리구조 연구실', '시스템소프트웨어 및 구조 연구실', '소셜정보망 연구실'];
    var kaist_prof = ['이재길', '백종문', '차미영', '한동수', '윤성의', '성민혁', '황성주'];
    var kaist_lab = ['데이터마이닝 연구실', '소프트웨어프로세스개선 및 신뢰성검증 연구실', '데이터 사이언스 연구실', '지능형서비스 통합 연구실', '대용량그래픽스 연구실', '3D AI 연구실', '기계학습 및 시각인식 연구실'];
    var postech_prof = ['강순주', '강인만', '김영모', '김정준'];
    var postech_lab = ['실시간시스템 연구실', '나노소자 및 시스템 연구실', '뉴미디어 연구실', 'IT융합 연구실'];
    var knu_prof = ['고석주', '김동균', '김재수', '임경식', '펑리메이', '한기준', '김재일', '백낙훈', '유관우', '정순기', '아난드폴', '김정홍', '김상욱', '정인욱', '박영철', '서영균', '탁병철'];
    var knu_lab = ['사물인터넷 표준 연구실', '이동인터넷 연구실', '컴퓨터통신연구실', '무선정보통신 연구실', '네트워크통신 및 컴퓨팅 연구실', '네트워크 연구실'
    , '영상처리및기계학습 연구실', '모바일그래픽스 연구실', '디지털미디어 연구실', '가상현실 연구실', '임베디드컴퓨팅 연구실', '멀티미디어 신호처리 연구실', '초연결미디어 연구실', '생물정보 연구실', '데이터베이스 시스템 연구실', '데이터공학 및 인텔리전스 연구실', '분산시스템 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 컴퓨터공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 전산학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 컴퓨터공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 컴퓨터학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function chemicalEngineering() {
    var snu_prof = ['강종헌', '김도희', '안경현', '이창하', '김병수', '박태현', '백승렬', '서상우', '윤제용'];
    var snu_lab = ['불균일촉매 설계 연구실', '에너지 및 환경 촉매 연구실', '미세 유변학 연구실', '고도산화환원 환경공학 연구실', '줄기세포 및 조직공학 연구실', '세포 및 미생물공학 연구실', '단백질 신소재 연구실', '시스템 및 합성생물학 연구실', '물환경에너지공학 연구실'];
    var kaist_prof = ['이상엽', '이진우', '김범준', '최민기', '임성갑', '김도현'];
    var kaist_lab = ['대사 및 물분자공학 연구실', '융합에너지나노소재 연구실', '고분자 나노전자 연구실', '에너지 녹색 촉매 연구실', '기능성 박막 연구실', '공정해석 연구실'];
    var postech_prof = ['김동표', '김영기', '김원배', '노용영', '이준구', '차형준'];
    var postech_lab = ['미세유체응용화학 연구실', '첨단연성물질 연구실', '촉매 및 에너지재료 연구실', '유기인쇄전자 연구실', '화학생물학 연구실', '분자생명공학 연구실'];
    var knu_prof = ['허남호', '최흥진', '이상연', '정인우', '신규철'];
    var knu_lab = ['구조화학 연구실', '초분자화학 연구실', '분자설계 연구실', '기능성나노소재 연구실', '에너지 시스템 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 화학생물공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 생명화학공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 화학공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 응용화학공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function biotechnology() {
    var kaist_prof = ['김동섭', '이관수', '이도헌', '박성홍', '이수현', '백세범', '정용'];
    var kaist_lab = ['단백질생물정보학 연구실', '시너지 바이오정보학 연구실', '바이오정보시스템 연구실', '자기공명영상 연구실', '기억인지 연구실', '시각신경시스템 연구실', '인지신경영상 연구실'];
    var postech_prof = ['박재성', '손기훈', '김성지', '손민주'];
    var postech_lab = ['나노입자 및 소포 연구실', '식물 면역학 연구실', '나노광학 및 나노의학 연구실', '나노정밀 역학생물학 연구실'];
    var knu_prof = ['조윤기', '민경익'];
    var knu_lab = ['지능형 생체재료 연구실', '미세유체 및 나노바이오 하이브리드 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 바이오및뇌공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 융합생명공학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 의생명융합공학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function biology() {
    var snu_prof = ['김빛내리', '홍성욱', '최희정', '임영운', '김형', '최명환', '김현아'];
    var snu_lab = ['RNA유전체학 연구실', '과학사 연구실', '구조생물학 연구실', '균분자생태계통학 연구실', '뇌인지회로연구실', '뉴로포토닉스 연구실', '막생물학 연구실'];
    var kaist_prof = ['김세윤', '김미영', '최광욱', '정인경', '조켱옥', '김성찬'];
    var kaist_lab = ['대사신호망 연구실', '암 후성유전학 연구실', '발달유전학 연구실', '유전체학 및 전산생물학 연구실', '세포 및 발달생물학 연구실', '게놈 및 펩티드공학 연구실'];
    var postech_prof = ['김민성', '김상욱', '이지오', '조윤제'];
    var postech_lab = ['분자인지구조생물학 연구실', '생물정보학 연구실', '항체구조생물학 연구실', '종양억제분자구조 연구실'];
    var knu_prof = ['손종경', '박재홍', '전창진', '김한순', '추연식'];
    var knu_lab = ['세포분화학 연구실', '식물계통학 연구실', '신경과학/해부학 연구실', '조류학/식물형태학 연구실', '식물생리생태학 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 생명과학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 생명과학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 생명과학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / (응용)생명과학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function physics() {
    var snu_prof = ['김기훈', '김도현', '노태원', '신용일', '김선기', '전헌수', '유재준'];
    var snu_lab = ['첨단복합물질상태 연구실', '양자집적회로 연구실', '강상관계 물질 연구실', '양자기체 실험 연구실', '고에너지물리 연구실', '초미세 광전자학 연구실', '응집물질이론 연구실'];
    var kaist_prof = ['안재욱', '조용훈', '최형순', '이상민', '한명준'];
    var kaist_lab = ['양자컴퓨터 연구실', '반도체 물리학 연구실', '초저온 양자유체 연구실', '광학레이저 물리학 연구실', '응축물질 이론 연구실'];
    var postech_prof = ['김범준', '염한웅', '이길호', '김윤호', '윤건수'];
    var postech_lab = ['고체분광학 연구실', '저차원전자구조 연구실', '양자나노소자 연구실', '양자정보 연구실', '고에너지 밀도 플라즈마 연구실'];
    var knu_prof = ['이형철'];
    var knu_lab = ['나노물성 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 물리천문학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 물리학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 물리학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 물리학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function mathematics() {
    var snu_prof = ['박태성', '강명주', '박병욱', '김용대', '이상열', '이재용'];
    var snu_lab = ['생물정보통계 연구실', '수치해석 연구실', '비모수추론 연구실', '지능형 자료분석 연구실', '시계열 예측분석 연구실', '베이지안통계학 연구실'];
    var kaist_prof = ['배명진', '박정환', '이창옥'];
    var kaist_lab = ['위상수학 연구실', '수리생물 연구실', '대수기하학 연구실'];
    var postech_prof = ['황형주'];
    var postech_lab = ['응용수학 및 데이터분석 연구실'];
    var knu_prof = ['배용주', '김은섭', '김성권', '박종육', '임정욱', '서애령'];
    var knu_lab = ['저차원다양체 연구실', '대수학 연구실', '비선형함수 연구실', '그래프이론 연구실', '가환대수학 연구실', '복소기하학 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 통계학과 및 수리과학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 수리과학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 수학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 수학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function earthScience() {
    var snu_prof = ['강헌중', '김광열', '김규범', '김영희', '남성현', '박성수', '심민섭', '우주선'];
    var snu_lab = ['해양신약 연구실', '통계기후학 연구실', '환경해양생지화학연구실', '지구물리 연구실', '해양환경관측 연구실', '수치모델 연구실', '지구미생물학연구실', '퇴적지질학 연구실'];
    var knu_prof = ['이정모', '김교원', '김영규', '이성주', '장윤득', '박은규', '유인창'];
    var knu_lab = ['지구물리학 연구실', '지질공학 연구실', '환경지질학 연구실', '고생물학 연구실', '암석광물학 연구실', '수리지질학 연구실', '퇴적암석학 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 지구환경과학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }

    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 지구시스템과학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}

function chemistry() {
    var snu_prof = ['박승범', '김성근', '김경택', '김지환', '김병문', '이동환', '정택동', '이성훈'];
    var snu_lab = ['화학생물학 연구실', '바이오나노스코피 연구실', '고분자 합성 실험실', '분자 플라스모닉스 연구실', '합성 및 의약화학 연구실', '반응성 화학시스템 연구실', '전기화학 연구실', '분자전자 및 나노구조체 연구실'];
    var kaist_prof = ['장석복', '이해신'];
    var kaist_lab = ['분자활성 촉매반응 연구실', '세포면역학 연구실'];
    var postech_prof = ['손창윤', '류순민', '심지훈'];
    var postech_lab = ['바이오 소재 연구실', '나노재료 분광학 연구실', '재료설계 이론 연구실'];
    var knu_prof = ['김성환', '백승민', '김창민', '윤민영', '이강호', '이규의', '이정규', '이홍인', '최철호'];
    var knu_lab = ['환경에너지질량분석 연구실', '나노에너지물질 연구실', '표면화학 연구실', '무기소재 연구실', '나노소재화학 연구실', '자연모사재료 연구실', '유기화학및기능성재료 연구실', '생무기화학 연구실', '이론화학 연구실'];

    var i;
    var table = document.createElement("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = "교수";
    td2.innerHTML = "연구실";
    td3.innerHTML = "학교 / 과";

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr)
    for(i = 0; i < snu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = snu_prof[i];
        td2.innerHTML = snu_lab[i];
        td3.innerHTML = "서울대학교 / 화학부";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < kaist_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = kaist_prof[i];
        td2.innerHTML = kaist_lab[i];
        td3.innerHTML = "카이스트 / 화학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < postech_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = postech_prof[i];
        td2.innerHTML = postech_lab[i];
        td3.innerHTML = "포스텍 / 화학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    for(i = 0; i < knu_prof.length; i++) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = knu_prof[i];
        td2.innerHTML = knu_lab[i];
        td3.innerHTML = "경북대학교 / 화학과";

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr)
    }
    document.body.appendChild(table);
}
