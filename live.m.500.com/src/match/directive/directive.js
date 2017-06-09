const imgLoad = {
    defaultUrl: 'http://tccache.500.com/mobile/touch/images/bifen/face.png',
    bind: function (el, binding) {
        // console.log(scrollText.defaultUrl);
        // console.log(this);
        el.setAttribute('src', binding.value || imgLoad.defaultUrl);
        el.addEventListener('error', function () {
            el.setAttribute('src', imgLoad.defaultUrl);
        }, false);
    }
};
const basketload = {
    defaultImg: 'http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png',
    bind: function(el, binding){
        el.setAttribute('src', binding.value || basketload.defaultImg);
        el.addEventListener('error', function(){
            el.setAttribute('src', basketload.defaultImg);
        });
    }
};
exports['load'] = imgLoad;
exports['basket'] = basketload;
