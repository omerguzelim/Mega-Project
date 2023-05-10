
$(() => {
    // var text = "Tıklandı";
    // var text2 = "Zaten tıkladın.";
    // var degistiMi = 1;

    // $("button").click(() => {

    //  if(degistiMi == 1) {
    //     $("button").text(text);  
    //  }
    //  else if(degistiMi == 2) {
    //     $("button").text(text2);  
    //     $("button").attr('disabled','disabled');
    //  }
    //  degistiMi++;    
    // }) 
    
    let buttonCikti = 0;
    let inputCiktii = 0;

        $(".btn").click(() => {
    if(buttonCikti == 0) {
        $(".btn-1").show();
        buttonCikti ++;
    } else if(buttonCikti == 1) {
        $(".btn-2").show();
    }
    });


    $(".input-1").click(() => {
        if(inputCiktii == 0) {
            $(".input-2").show();
            inputCiktii ++;
        } else if(inputCiktii == 1) {
            $(".input-3").show();
        }
    })

    $(".cikar-1").click(() => {
        $(".cikar-2").show();
    })
     
    $(".cikar-2").click(() => {
        $(".cikar-3").show();
    })
});