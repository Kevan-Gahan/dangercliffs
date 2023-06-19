var cover_height = document.getElementById(".logos-section-cover").style.height;
var bg_img_height = document.getElementById(".logos-bg-img-cover").style.height;
var symbols_height = document.getElementById(".symbols-container").style.height;

if(symbols_height>cover_height){
    document.getElementById(".logos-bg-img-cover").style.height=symbols_height;
    document.getElementById(".logos-section-cover").style.height=symbols_height;
}
else{
    document.getElementById(".symbols-container").style.height=cover_height;
}