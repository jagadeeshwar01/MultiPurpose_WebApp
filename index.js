$(".Card").hover(function(){
    var k=$(this).attr("class");
    k=k.charAt(k.length-1);
    var a=".Card-"+k;
    var b=".CardBtn-"+k;
    var c=".fa-solid-"+k;
    var d=".invi-"+k;
    $(d).hover(function(){
        $(a).addClass("Cardhover");
        $(b).addClass("CardBtnhover")
        $(c).addClass("fa-solidHover")
        $(d).addClass("inviV")
    },function(){
        $(a).removeClass("Cardhover");
        $(b).removeClass("CardBtnhover")
        $(c).removeClass("fa-solidHover")
        $(d).removeClass("inviV")
        }
    );


    $(a).hover(function(){
        $(a).addClass("Cardhover");
        $(b).addClass("CardBtnhover")
        $(c).addClass("fa-solidHover")
        $(d).addClass("inviV")
    },function(){
        $(a).removeClass("Cardhover");
        $(b).removeClass("CardBtnhover")
        $(c).removeClass("fa-solidHover")
        $(d).removeClass("inviV")
        }
    );
});

$(".invi").hover(function(){
    var k=$(this).attr("class");
    k=k.charAt(k.length-1);
    var a=".Card-"+k;
    var b=".CardBtn-"+k;
    var c=".fa-solid-"+k;
    var d=".invi-"+k;
    $(d).hover(function(){
        $(a).addClass("Cardhover");
        $(b).addClass("CardBtnhover")
        $(c).addClass("fa-solidHover")
        $(d).addClass("inviV")
    },function(){
        $(a).removeClass("Cardhover");
        $(b).removeClass("CardBtnhover")
        $(c).removeClass("fa-solidHover")
        $(d).removeClass("inviV")
        }
    );


    $(a).hover(function(){
        $(a).addClass("Cardhover");
        $(b).addClass("CardBtnhover")
        $(c).addClass("fa-solidHover")
        $(d).addClass("inviV")
    },function(){
        $(a).removeClass("Cardhover");
        $(b).removeClass("CardBtnhover")
        $(c).removeClass("fa-solidHover")
        $(d).removeClass("inviV")
        }
    );
});

$(".Card").click(function(){
    var k=$(this).attr("class");
    k=k.charAt(0);
    if(k==0){
        window.location.href='cal/calculator.html';
    }
    else if(k==1){
        window.location.href='currency/currency.html';
    }
    else if(k==2){
        window.location.href='bmi/bmi.html';
    }
    else if(k==3){
        window.location.href='radix converter/index.html'
    }
    else if(k==4){
        window.location.href='temp-converter/index.html'
    }
    else if(k==5){
        window.location.href='Weather/index.html'
    }
});