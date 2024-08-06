const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});


document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = '<div class="text">아이디어 경매소</div>';  
});


document.getElementById('submit-idea-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = `
    <div id="ideaFormContainer">
      <div id="ideaTitle" class="text">아이디어 업로드</div> 
      <form id="ideaForm">
        <label for="title">아이디어 명</label>
        <input type="text" id="title" name="title" required>
        <label for="description">설명</label>
        <textarea id="description" name="description" required></textarea>
        <label for="category">분야</label>
        <select id="category" name="category">
          <option value="">Select</option>
          <option value="daily">일상</option>
          <option value="technology">기술</option>
          <option value="medical">의료</option>
          <option value="environment">환경</option>
          <option value="education">교육</option>
          <option value="finance">금융</option>
          <option value="entertainment">오락</option>
        </select>
        <label for="language">언어</label>
        <select id="language" name="language">
          <option value="">Select</option>
          <option value="korean">한국어</option>
          <option value="english">영어</option>
          <option value="japanese">일본어</option>
        </select>
        <label for="file">파일 업로드</label>
        <input type="file" id="file" name="file">
        <label for="image">이미지 업로드</label>
        <input type="file" id="image" name="image">
        <label for="scheduleTime">시간 지정</label>
        <input type="datetime-local" id="scheduleTime" name="scheduleTime">
        <button type="submit">제출</button>
      </form>
    </div>
  `;
});


document.getElementById('wishlist-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = '<div class="text">찜 목록</div>';  
});


document.getElementById('mypage-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = '<div class="text">내 페이지</div>';  
});


document.getElementById('wallets-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = '<div class="text">지갑</div>';  
});


document.getElementById('setting-link').addEventListener('click', function(event) {
  event.preventDefault();  
  document.getElementById('main-content').innerHTML = '<div class="text">설정</div>';  
});
