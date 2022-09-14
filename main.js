const accountDOM = document.querySelector('.account');
const cancelDOM = document.querySelector('.cancel');
const overlayDOM = document.querySelector('.overlay');
const registerDOM = document.querySelector('.register');
const registerContentDOM = document.querySelector('.register__content');
function changeX(x) {
    x.classList.toggle('change');
    overlayDOM.classList.toggle('show');
}
accountDOM.addEventListener('click',function(e) {
    e.preventDefault();
    registerDOM.style.display = 'flex';
    registerDOM.classList.add('account__animation');
});



cancelDOM.addEventListener('click',function() {
    registerDOM.style.display = 'none';
    registerDOM.classList.remove('account__animation');
});

registerDOM.addEventListener('click',function() {
    this.style.display = 'none';
})

registerContentDOM.onclick = function(e) {
    e.stopPropagation();
}



function hiden() {
    overlayDOM.classList.toggle('show');
    document.querySelector('.opstion').classList.toggle('change');
}

const containerHead = document.querySelector('.container__head');
const bodyLeft = document.querySelector('.body__left-content');
const backDown = document.querySelector('.back__down');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 70){
        containerHead.classList.add('display');
        bodyLeft.classList.add('translater');
        backDown.classList.add('start__back--down');
    }
    else {
        containerHead.classList.remove('display');
        bodyLeft.classList.remove('translater');        
        backDown.classList.remove('start__back--down');
    }

}

backDown.onclick = function(){document.documentElement.scrollTop = 0}

const listImg = [
    './img/r1.webp',
    './img/r2.webp'
]


//slide show
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
  }); 
document.querySelector('.slick-prev').innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
document.querySelector('.slick-next').innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
// const getImg = document.getElementsByClassName('body__right--img');
// const next = document.querySelector('.body__right--next');
// const back = document.querySelector('.body__right--back');
// function show(n) {
//     console.log(2);
//     runImg(indexImg += n);
// }
// let indexImg = 1;
// function runImg(n) {
//     let i;
//     if(n < 1) {
//         indexImg = getImg.length;
//     }
//     if(n > getImg.length) {
//         indexImg = 1;
//     }
//     for (i = 0; i < getImg.length; i ++){
//         getImg[i].style.display = 'none';
//     }
//     getImg[indexImg -1].style.display = 'block'
// }
// //

// // Slide show auto 
// let indexAutoSile = 0;
// function autoSlideShow() {
//     let i;
//     if(indexAutoSile < 0) {
//         indexAutoSile = getImg.length;
//     }
//     if(indexAutoSile > getImg.length -1) {
//         indexAutoSile = 0;
//     }
//     for (i = 0; i < getImg.length; i ++){
//         getImg[i].style.display = 'none';
//     }
//     getImg[indexAutoSile].style.display = 'block'
//     indexAutoSile++;
// }
// setInterval(autoSlideShow,2000);
// 
// Clock
const hoursDOM = document.querySelector('.hours');
const minuteDOM = document.querySelector('.minute');
const secondDOM = document.querySelector('.second');
function handleClock() {
    let hours = 08, minute = 59, second = 59;
    function run() {
        second --;
        if(second < 0){
            second = 59;
            minute--;
            if(minute < 0) {
                minute = 59;
                hours --;
            }
        }
        hoursDOM.innerHTML = hours;
        minuteDOM.innerHTML = minute;
        secondDOM.innerHTML = second;
    }
    setInterval(run,1000);
}
// 

const listTagA = Array.from(document.getElementsByTagName('a'));
listTagA.forEach(function(index) {
    if(index.className !== 'home head__navbar--link') {
        index.addEventListener('click',function(e){
            e.preventDefault();
        })
    }
});

const flashsaleContentItem = document.querySelectorAll('.flashsale__content--item');
const flashsaleContentImg = document.querySelectorAll('.flashsale__content--img');

    Array.from(flashsaleContentImg).forEach(function(item,index) {
        item.onmouseover = function() {
            item.src = `./img/cake${index+4}.webp`;
            item.classList.add('sale__cake--animation');
            item.classList.remove('sale__cake--animation2');
        }
    });
    
    Array.from(flashsaleContentImg).forEach(function(item,index) {
        item.onmouseout = function() {
            item.src = `./img/cake${index}.webp`;
            item.classList.add('sale__cake--animation2');
            item.classList.remove('sale__cake--animation');
        }
    });

const listCake = [
    {
        id: 1,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/banh.webp'
    },
    {
        id: 2,
        name: 'Bánh blue sky cupcakes',
        price: '190.000đ',
        img: './img/banh1.webp'
    },
    {
        id: 3,
        name: 'Bánh red sugar flower cupcakes',
        price: '190.000đ',
        img: './img/banh2.webp'
    },
    {
        id: 4,
        name: 'Bánh sangria cupcakes',
        price: '190.000đ',
        img: './img/banh3.webp'
    },
    {
        id: 5,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake1.webp'
    },
    {
        id: 6,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake2.webp'
    },
    {
        id: 7,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake3.webp'
    },
    {
        id: 2,
        name: 'Bánh blue sky cupcakes',
        price: '190.000đ',
        img: './img/banh1.webp'
    },
    {
        id: 3,
        name: 'Bánh red sugar flower cupcakes',
        price: '190.000đ',
        img: './img/banh2.webp'
    },
    {
        id: 4,
        name: 'Bánh sangria cupcakes',
        price: '190.000đ',
        img: './img/banh3.webp'
    },
    {
        id: 5,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake1.webp'
    },
    {
        id: 6,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake2.webp'
    },
    {
        id: 7,
        name: 'Bánh sweet love cupcakes',
        price: '190.000đ',
        img: './img/cake3.webp'
    }
]

// render Cake
const bodyRightDOM = document.querySelector('.body__right');
function handleRenItem() {
    let htmls = listCake.map(function(item){
        return `<a class="cake__content--link" href="">
                    <div class="cake__content--item">
                        <img src="${item.img}" alt="" class="cake__content--img">
                        <p class="cake__content--name">${item.name}</p>
                        <p class="cake__content--price">${item.price}</p>
                        <i class="cake--search fa-solid fa-magnifying-glass"></i>
                        <div class="cake__content--icon">
                            <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>
                </a>`
    });
    let html = `<div class="body__right--cake">
                    <div class="cake__title">
                        <div class="cake__title--left">
                            <img src="./img/product2-icon.webp" alt="" class="cake__title--icon">
                            <h1 class="cake__title--text">BÁNH NGỌT</h1>
                        </div>
                        <div class="cake__title--right">
                            <span class="cake__title--connect">Cupcakes</span>
                            <span class="cake__title--connect">Bánh cán lớp</span>
                            <span class="cake__title--connect">Bánh cuộn</span>
                        </div>
                    </div>
                    <div class ="cake__content">
                        ${htmls.join('')}
                    </div>
                </div>`
    bodyRightDOM.innerHTML = html;
}
// end

//  render intro
function handleRenderIntro() {
    bodyRightDOM.innerHTML = `<div class="content">
                                <h1 class="title">Giới thiệu</h1>
                                <p class="depsction">Công ty được thành lập từ năm 1960 trải qua hơn 50 năm phấn đấu và trưởng thành Công ty đã không ngừng lớn mạnh, tích lũy được nhiều kinh nghiệm trong sản xuất kinh doanh. Với đội ngũ lãnh đạo giàu kinh nghiệm, chiến lược kinh doanh tốt, đội ngũ kỹ sư được đào tạo chuyên ngành có năng lực và lực lượng công nhân giỏi tay nghề Công ty  đã tiến bước vững chắc và phát triển liên tục để giữ vững uy tín và chất lượng xứng đáng với niềm tin yêu của người tiêu dùng.
                                    Công ty chính thức hoạt động dưới hình thức Công ty cổ phần từ ngày 20/01/2004 theo Giấy chứng nhận đăng ký kinh doanh số 012348765 do Sở Kế hoạch và đầu tư thành phố Hà Nội cấp và thay đổi lần thứ bảy ngày 09/05/2018. Các hoạt động sản xuất kinh doanh chính bao gồm:
                                </p>
                                <ul>
                                    <li>Sản xuất, kinh doanh bánh kẹo và chế biến thực phẩm.</li>
                                    <li> Kinh doanh xuất nhập khẩu: nguyên vật liệu, máy móc thiết bị, sản phẩm chuyên ngành, hàng hoá tiêu dùng và các sản phẩm hàng hoá khác. </li>
                                    <li>Đầu tư xây dựng, cho thuê văn phòng, nhà ở, trung tâm thương mại.</li>
                                    <li> Kinh doanh các ngành nghề khác không bị cấm theo các quy định của pháp luật.</li>
                                </ul>
                                <p class="depsction">Sản phẩm của chúng tôi liên tục được người tiêu dùng mến mộ và bình chọn là “Hàng Việt nam chất lượng cao”.</p>
                            </div>`
}
// end

function handleRenderOrder() {
    const orderDOM = document.querySelector('.order');
    orderDOM.addEventListener('click', function() {
        bodyRightDOM.innerHTML = `
        <div class="file__order">
            <div class="order__content">
                <div class="order__title">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h3 class="order__title--text">Kiểm tra đơn hàng của bạn</h3>
                </div>
                <div class="order__body">
                    <div class="order__body--item">
                        <label for="" class="order__body--text">Kiểm tra bằng</label>
                        <div class="order__body--input">
                            <input type="radio" class="order__input--item">
                            <span class="order__input--text">Số điện thoại</span>
                            <input type="radio" class="order__input--item">
                            <span class="order__input--text">Email</span>
                        </div>
                    </div>
                    <div class="order__body--item">
                        <label for="" class="order__body--text">Số điện thoại</label>
                        <input type="text" class="order__input--item nth" placeholder="0909 xxx xxx">
                    </div>
                </div>
                <div class="order__footer">
                    <button class="order__btn">Kiểm tra</button>
                </div>
            </div>
        </div>
        `;
    });
}


function handleRenderShop() {
    const shopDOM = document.querySelector('.shop');
    shopDOM.addEventListener('click', function() {
        bodyRightDOM.innerHTML = `
        <h1 class="shop__title">Hệ thống cửa hàng</h1>
        <div class="shop__content">
            <div class="find__shop">
                <h1 class="find__shop--title">Tìm cửa hàng</h1>
                <div class="find__shopinput">
                    <label for="">Chọn tỉnh thành</label>
                    <select name="" id="">
                        <option value="1">Hồ Chí Minh</option>
                        <option value="2">Hà Nội</option>
                    </select>
                </div>
                <div class="find__shopinput">
                    <label for="">Chọn cửa hàng </label>
                    <select name="" id="">
                        <option value="1">Chi nhánh Gò Vấp, HCM</option>
                        <option value="1">Chi nhánh Phú Thuận, HCM</option>
                        <option value="1">Chi nhánh quận 1, HCM</option>
                        <option value="1">Chi nhánh quận 10, HCM</option>
                    </select>
                </div>
            </div>
            <h1 class="shop__address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                Đia chỉ
            </h1>
            <p class="shop__address--text">150 Nguyễn Duy Cung, phường 15, quận Gò Vấp, HCM</p>
       </div>
        `;
    });
}

function render() {
    // handleRenImg(); 
    // handleNextImg();
    document.querySelector('.cake__content--submit').onclick = function() {
        document.documentElement.scrollTop = 0;
        handleRenItem();
    }

    document.getElementById('intro').addEventListener('click',function(e){
        e.preventDefault();
        handleRenderIntro();
    })

    handleClock();
    handleRenderOrder();
    handleRenderShop();
}

function start(){
    render();
}

start();

