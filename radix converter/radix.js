$(".Btn").click(function(){
    //var inradix=$("#Input-Number")
    //var outradix=$("#Output-Number")
    var res;

    var number=$("#LbsIn").val();
    var inradix = $("#Input-Number option:selected").text();
    var outradix =$("#Output-Number option:selected").text();

    if(inradix=="Decimal"){
        var num=Number(number);
        if(outradix=="Binary"){            
            res=num.toString(2);
        }
        else if(outradix=="Octal"){
            res=num.toString(8);
        }else if(outradix=="Hexadecimal"){
            res=num.toString(16);
        }else{
            res=num;
        }
    }

    else if(inradix=="Binary"){
        dec=parseInt(number,2);
        if(outradix=="Decimal"){
            res=dec;
        }else if(outradix=="Binary"){
            res=number;
        }else if(outradix=="Octal"){
            res=dec.toString(8);
        }else if(outradix=="Hexadecimal"){
            res=dec.toString(16);
        }
    }

    else if(inradix=="Octal"){
        dec=parseInt(number,8);
        if(outradix=="Decimal"){
            res=dec;
        }else if(outradix=="Binary"){
            res=dec.toString(2);
        }else if(outradix=="Octal"){
            res=number;
        }else if(outradix=="Hexadecimal"){
            res=dec.toString(16);
        } 
    }
    else{
        dec=parseInt(number,16);
        if(outradix=="Decimal"){
            res=dec;
        }else if(outradix=="Binary"){
            res=dec.toString(2);
        }else if(outradix=="Octal"){
            res=dec.toString(8);
        }else if(outradix=="Hexadecimal"){
            res=number;
        }        
    }
    $("#res").val(res);

});

