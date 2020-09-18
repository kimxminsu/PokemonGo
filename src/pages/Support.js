import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
font-size: 13px;
color : white;
text-align: left;
padding: 0px 93px 0px;
`;

const StyledH2 = styled.h2`
font-size: 23px;
color : black;
text-align: center;
font-weight: 700;
`;

const StyledH3 = styled.h3`
font-size: 15px;
color : black;
text-align: center;
`;

const StyledH4 = styled.h4`
font-size: 20px;
color : black;
text-align: left;
`;

const StyledH5 = styled.h5`
font-size: 15px;
color: black;
text-align: left;
`;

export default function Support (){

    return(
        <div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            background: "#f9f9f9",
            margin: "0 auto",
            padding: "20px",
            width: "75%",
            marginbottom: "14px"
          }}>
              <input 
                placeholder="여기에서 검색해 주세요."
                dir="auto"
              ></input>
        </div>
        <br></br>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            background: "#f9f9f9",
            margin: "0 auto",
            padding: "20px",
            width: "75%",
            marginbottom: "14px"
          }}>
              <StyledH2>고객센터 문의 방법</StyledH2>
              <br></br>
              <StyledH3>Pokémon GO 앱을 통해 가장 빠르고 편리하게 고객센터에 연락하실 수 있습니다. 방법은 다음과 같습니다.</StyledH3>
              <StyledH3>1. 맵뷰에서 메인메뉴를 터치합니다.</StyledH3>
              <StyledH3>2. 우측 상단의 설정을 터치합니다.</StyledH3>
              <StyledH3>3. 아래로 스크롤하여 헬프 보기를 터치합니다.</StyledH3>
              <StyledH3>4. iOS 단말기의 경우 우측 상단의 문의하기를 터치합니다. Android 단말기의 경우 다음 아이콘을 터치합니다</StyledH3>
              <br></br>
              <StyledH3>다만, 문의하시려는 내용에 따라 다른 문의 방법을 선택해야 할 때도 있으며, 도움말을 통해 문제가 해결되는 경우도 있습니다. 자세한 내용은 아래를 참조하시기 바랍니다</StyledH3>
              <br></br>
              <br></br>
              <StyledH4>로그인 관련 문제</StyledH4>
              <StyledH5>로그인 관련 문제가 발생한 경우에는 다음 문제 해결 가이드를 참고하시기 바랍니다
                  <StyledH3><a href = "https://niantic.helpshift.com/a/pokemon-go/?p=web&s=account-and-sign-in&f=account-issues-help-with-sign-in" style ={{textDecoration:'none'}}>◆ 계정이나 로그인에 관한 문제 도움</a></StyledH3>
                  <StyledH3><a href = "https://niantic.helpshift.com/a/pokemon-go/?p=web&s=troubleshooting&f=troubleshooting-guide-ios" style ={{textDecoration:'none'}}>◆ 문제 해결 가이드(iOS)</a></StyledH3>
                  <StyledH3><a href = "https://niantic.helpshift.com/a/pokemon-go/?p=web&s=troubleshooting&f=troubleshooting-guide-android" style ={{textDecoration:'none'}}>◆ 문제 해결 가이드(Android)</a></StyledH3>
                  여전히 문제가 해결되지 않는다면 해당 양식을 작성하고 문제 유형에서 '로그인 관련 문제'를 선택하여 제출해 주시기 바랍니다.
              </StyledH5>
              <br></br>
              <br></br>
              <StyledH4>버그 신고</StyledH4>
              <StyledH5>기존 문제 페이지에 기재되어 있지 않은 버그를 신고하고자 하시는 경우 앱을 통해 문의해 주시기 바랍니다.</StyledH5>
              <br></br>
              <StyledH5>제출한 사항에 대해 개별적인 답변은 드릴 수 없지만, 보내 주신 정보는 담당 팀에 전달하여 가급적 빠른 시일 내에 문제를 해결할 수 있도록 노력하겠습니다. 앱 내 문의를 통해 수집되는 주요 정보(앱 버전 및 단말기 명칭 등)는 보다 상세한 조사에 도움이 됩니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>게임 내 구매 문제</StyledH4>
              <StyledH5>구매한 포켓코인 환불, 환불 정책 또는 최근 거래 내역에 대한 내용은 이용 중인 단말기에 따라 Apple 지원, Galaxy Store, Google Play 고객센터에 직접 문의하시기 바랍니다.</StyledH5>
              <br></br>
              <StyledH5>숍에서 포켓코인으로 구입한 아이템에 대해 궁금하신 점이 있으면 앱을 통해 문의해 주시기 바랍니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>포켓스톱 및 체육관에 대한 수정 또는 삭제 요청</StyledH4>
              <styledH5>새로운 포켓스톱 및 체육관을 신청할 수 있는 포켓스톱 후보 신청 기능은 현재 베타 버전입니다. 해당 기능을 이용할 수 있는 조건이 충족되면, 설정 메뉴에 옵션이 추가됩니다. 향후 포켓스톱 후보 신청 기능을 더 많은 지역과 트레이너 여러분들께 확대해 나갈 예정입니다.</styledH5>
              <br></br>
              <styledH5>게임 내 포켓스톱 및 체육관의 수정 또는 삭제를 희망하시는 경우에는 해당 장소에 대한 조사 요청을 제출해 주시기 바랍니다. 자세한 내용은 여기에서 확인하실 수 있습니다.</styledH5>
              <br></br>
              <br></br>
              <StyledH4>부적절한 게임 플레이 신고</StyledH4>
              <StyledH5>서비스 약관 또는 Niantic 플레이어 가이드라인의 위반 행위를 신고하려면 앱을 통해 연락해 주시기 바랍니다. 개인 정보 보호를 이유로 다른 플레이어의 계정에 취해진 조치에 대해서는 안내해 드릴 수 없는 점 양해 부탁드립니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>계정 정지에 대한 이의 제기</StyledH4>
              <StyledH5>Niantic은 모든 플레이어가 즐겁고 공정하게 게임을 플레이할 수 있는 환경을 제공하기 위해 노력하고 있습니다. 이러한 노력의 일환으로 저희는 3회 스트라이크 징계 방침을 통해 부정행위를 저지르거나 규칙을 위반하는 플레이어에게 그에 상응하는 적절한 조치를 취하고 있습니다. 자신이 받은 처벌이 부당하다고 생각되는 경우, 여기에서 계정 정지에 대한 이의 제기를 신청해 주시기 바랍니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>계정 삭제</StyledH4>
              <StyledH5>계정 삭제를 희망하시는 경우, <a href = "https://niantic.helpshift.com/a/pokemon-go/?p=web&contact=1" style ={{textDecoration:'none'}}>해당 양식</a>을 작성하고 문제 유형에서 '계정 삭제'를 선택하여 제출해 주시기 바랍니다. 계정 삭제가 완료된 후에는 취소가 불가능하니 주의하시기 바랍니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>계정 데이터 요청</StyledH4>
              <StyledH5>계정 데이터를 요청하려면 privacy@nianticlabs.com으로 문의해 주시기 바랍니다.</StyledH5>
              <br></br>
              <br></br>
              <StyledH4>공식 SNS 팔로우</StyledH4>
              <StyledH5>Facebook의 <a href = "https://www.facebook.com/NianticSupport/" style ={{textDecoration:'none'}}>나이언틱 헬프센터</a> 또는 Twitter의 <a href = "https://twitter.com/niantichelp" style ={{textDecoration:'none'}}></a>를 팔로우해서 게임의 변경 사항이나 업데이트 정보를 확인해 보시기 바랍니다.</StyledH5>
        </div>
        <StyledH1>2020 Niantic, Inc. 2020 Pokemon. 1995-2020 Nintendo/Creatures Inc./GAME FREAK inc.</StyledH1>
        </div>

    )

}