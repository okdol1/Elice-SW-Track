// Scroll Up
function pageUp(e) {
    let target = document.getElementById(e)

    target.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}
pageUp("pageUpButton")

// Scroll Navigation

var aTags = document.querySelectorAll("header a");
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));

        window.scrollTo ({
            'behavior': 'smooth',
            'top': target.offsetTop
        })
        console.log(target.offsetTop)
    }
}

// Click Image Slider
document.querySelector(".right-arrow").onclick = function () {
    var currentSlide = document.querySelector("#lck .slide.active");
    
    // 다음 형제를 가져오는 코드
    var nextSlide = currentSlide.nextElementSibling;
    
    // 다음 형제가 없을경우(마지막슬라이드일 경우)
    // 첫번째 형제로 바꿔줌
    if (nextSlide === null) {
        nextSlide = currentSlide.parentElement.firstElementChild;
    }
        
        // 부드러운 애니메이션 효과
        currentSlide.animate({
        opacity: [1, 0] // 100% => 0%
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        // 애니메이션 끝난 다음에 어디에 위치해 있을지
        // both , forward => 끝부분에 남아있음
        // both , backward => 첫번째에 남아있음
        fill: "both" 
    });
    currentSlide.classList.remove("active");
    nextSlide.animate({
        opacity: [0, 1] // 0% => 100%
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    
    // nextSlide에 active 클래스 추가
    nextSlide.classList.add("active");
}



//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function() {
    var currentSlide = document.querySelector("#lck .slide.active")
    
    // 이전 슬라이드 얻기
    var previousSlide = currentSlide.previousElementSibling
    // 이전 슬라이드가 없을 경우 마지막슬라이드 가져오기
    if(previousSlide === null) {
        previousSlide = currentSlide.parentElement.lastElementChild
    }
    
    // 애니메이션 적용하기
    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    })
    // 애니메이션이 끝나면 안보이도록
    currentSlide.classList.remove("active")
    // 이전 슬라이드 보여주기
    previousSlide.animate({
    opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    })
    // active 클래스 추가해서 화면에 보여지게
    previousSlide.classList.add("active")
}