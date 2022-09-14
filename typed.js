$('document').ready(function() {
    var typed = new Typed('.header__input--text', {
        strings: ['Nhập tên sản phẩm...','Bạn cần mua gì...','Ưu đãi chất lượng...'],
        backSpeed: 40,
        typeSpeed: 40,
        bindInputFocusEvents: true,
        loop: true,
        attr: 'placeholder'
    });
});