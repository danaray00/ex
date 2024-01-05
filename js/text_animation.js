
  document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.scroll_text');
    const screen04 = document.querySelector('.screen_04');
    let typingStarted = false;
    let typingTimeout;
  
    function checkScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = screen04.offsetTop;
      const triggerHeight = screen04.clientHeight;
  
      if (scrollPosition >= triggerPosition) {
        // screen_04에 도착했을 때 글자 타이핑 시작
        if (!typingStarted) {
          typingStarted = true;
          typeText();
        }
      }
      else if(scrollPosition < triggerHeight){
        typingStarted = false;
        clearTimeout(typingTimeout);
        textElement.innerHTML = '';
      } 
      else {
        // screen_04에서 벗어났을 때 typingStarted를 초기화하고, 타이핑 중인 경우 중지
        typingStarted = false;
        clearTimeout(typingTimeout);
        textElement.innerHTML = '';
      }
    }
  
    function typeText() {
      const textToType = 'ABOUT'; // 원하는 텍스트로 변경
      let index = 0;
  
      function type() {
        if (index < textToType.length) {
          textElement.innerHTML += textToType[index];
          index++;
          typingTimeout = setTimeout(type, 100); // 100ms 간격으로 글자 추가
        }
      }
  
      type();
    }
  
    // 스크롤 이벤트에 이벤트 핸들러 등록
    window.addEventListener('scroll', checkScroll);
  });
  