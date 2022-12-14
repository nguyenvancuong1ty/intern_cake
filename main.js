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
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/banh.webp'
    },
    {
        id: 2,
        name: 'B??nh blue sky cupcakes',
        price: '190.000??',
        img: './img/banh1.webp'
    },
    {
        id: 3,
        name: 'B??nh red sugar flower cupcakes',
        price: '190.000??',
        img: './img/banh2.webp'
    },
    {
        id: 4,
        name: 'B??nh sangria cupcakes',
        price: '190.000??',
        img: './img/banh3.webp'
    },
    {
        id: 5,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/cake1.webp'
    },
    {
        id: 6,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/cake2.webp'
    },
    {
        id: 7,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/cake3.webp'
    },
    {
        id: 2,
        name: 'B??nh blue sky cupcakes',
        price: '190.000??',
        img: './img/banh1.webp'
    },
    {
        id: 3,
        name: 'B??nh red sugar flower cupcakes',
        price: '190.000??',
        img: './img/banh2.webp'
    },
    {
        id: 4,
        name: 'B??nh sangria cupcakes',
        price: '190.000??',
        img: './img/banh3.webp'
    },
    {
        id: 5,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/cake1.webp'
    },
    {
        id: 6,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
        img: './img/cake2.webp'
    },
    {
        id: 7,
        name: 'B??nh sweet love cupcakes',
        price: '190.000??',
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
                            <h1 class="cake__title--text">B??NH NG???T</h1>
                        </div>
                        <div class="cake__title--right">
                            <span class="cake__title--connect">Cupcakes</span>
                            <span class="cake__title--connect">B??nh c??n l???p</span>
                            <span class="cake__title--connect">B??nh cu???n</span>
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
                                <h1 class="title">Gi???i thi???u</h1>
                                <p class="depsction">C??ng ty ???????c th??nh l???p t??? n??m 1960 tr???i qua h??n 50 n??m ph???n ?????u v?? tr?????ng th??nh C??ng ty ???? kh??ng ng???ng l???n m???nh, t??ch l??y ???????c nhi???u kinh nghi???m trong s???n xu???t kinh doanh. V???i ?????i ng?? l??nh ?????o gi??u kinh nghi???m, chi???n l?????c kinh doanh t???t, ?????i ng?? k??? s?? ???????c ????o t???o chuy??n ng??nh c?? n??ng l???c v?? l???c l?????ng c??ng nh??n gi???i tay ngh??? C??ng ty  ???? ti???n b?????c v???ng ch???c v?? ph??t tri???n li??n t???c ????? gi??? v???ng uy t??n v?? ch???t l?????ng x???ng ????ng v???i ni???m tin y??u c???a ng?????i ti??u d??ng.
                                    C??ng ty ch??nh th???c ho???t ?????ng d?????i h??nh th???c C??ng ty c??? ph???n t??? ng??y 20/01/2004 theo Gi???y ch???ng nh???n ????ng k?? kinh doanh s??? 012348765 do S??? K??? ho???ch v?? ?????u t?? th??nh ph??? H?? N???i c???p v?? thay ?????i l???n th??? b???y ng??y 09/05/2018. C??c ho???t ?????ng s???n xu???t kinh doanh ch??nh bao g???m:
                                </p>
                                <ul>
                                    <li>S???n xu???t, kinh doanh b??nh k???o v?? ch??? bi???n th???c ph???m.</li>
                                    <li> Kinh doanh xu???t nh???p kh???u: nguy??n v???t li???u, m??y m??c thi???t b???, s???n ph???m chuy??n ng??nh, h??ng ho?? ti??u d??ng v?? c??c s???n ph???m h??ng ho?? kh??c. </li>
                                    <li>?????u t?? x??y d???ng, cho thu?? v??n ph??ng, nh?? ???, trung t??m th????ng m???i.</li>
                                    <li> Kinh doanh c??c ng??nh ngh??? kh??c kh??ng b??? c???m theo c??c quy ?????nh c???a ph??p lu???t.</li>
                                </ul>
                                <p class="depsction">S???n ph???m c???a ch??ng t??i li??n t???c ???????c ng?????i ti??u d??ng m???n m??? v?? b??nh ch???n l?? ???H??ng Vi???t nam ch???t l?????ng cao???.</p>
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
                    <h3 class="order__title--text">Ki???m tra ????n h??ng c???a b???n</h3>
                </div>
                <div class="order__body">
                    <div class="order__body--item">
                        <label for="" class="order__body--text">Ki???m tra b???ng</label>
                        <div class="order__body--input">
                            <input type="radio" class="order__input--item">
                            <span class="order__input--text">S??? ??i???n tho???i</span>
                            <input type="radio" class="order__input--item">
                            <span class="order__input--text">Email</span>
                        </div>
                    </div>
                    <div class="order__body--item">
                        <label for="" class="order__body--text">S??? ??i???n tho???i</label>
                        <input type="text" class="order__input--item nth" placeholder="0909 xxx xxx">
                    </div>
                </div>
                <div class="order__footer">
                    <button class="order__btn">Ki???m tra</button>
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
        <h1 class="shop__title">H??? th???ng c???a h??ng</h1>
        <div class="shop__content">
            <div class="find__shop">
                <h1 class="find__shop--title">T??m c???a h??ng</h1>
                <div class="find__shopinput">
                    <label for="">Ch???n t???nh th??nh</label>
                    <select name="" id="">
                        <option value="1">H??? Ch?? Minh</option>
                        <option value="2">H?? N???i</option>
                    </select>
                </div>
                <div class="find__shopinput">
                    <label for="">Ch???n c???a h??ng </label>
                    <select name="" id="">
                        <option value="1">Chi nh??nh G?? V???p, HCM</option>
                        <option value="1">Chi nh??nh Ph?? Thu???n, HCM</option>
                        <option value="1">Chi nh??nh qu???n 1, HCM</option>
                        <option value="1">Chi nh??nh qu???n 10, HCM</option>
                    </select>
                </div>
            </div>
            <h1 class="shop__address">
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                ??ia ch???
            </h1>
            <p class="shop__address--text">150 Nguy???n Duy Cung, ph?????ng 15, qu???n G?? V???p, HCM</p>
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

