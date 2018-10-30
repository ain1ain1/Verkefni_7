/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// Fasti sem segir til um hve marga spurningar á að spyrja áður en niðurstöður eru birtar
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
    alert('Markmiðið er að svara eins mörgum af ' + GAMES_TO_PLAY + ' dæmum rétt eins hratt og mögulegt er.');
    //do{
        play();
    //}
    //while(confirm('Spila annan leik?'))
}

function spilaaftur() {
    if (confirm('Spila annan leik?')){
        play();
    }
    else{

    }
}

//Um leið og smellt á OK takka á upphafsglugga þá fer tíminn af stað.
var timi1 = performance.now();
var hefjatima = parseFloat(timi1).toFixed(2); //Upphafstími hefur nú tvo aukastafi.
//Um leið og smellt er á OK takka á Spurningu 10 þá stöðvast tíminn.
var timi2 = performance.now();
var ljukatima = parseFloat(timi2).toFixed(2); //Lokatími hefur einnig tvo aukastafi.
//Reiknar heildartíma sem það tók að svara öllum spurningunum.
var timileiks = ljukatima - hefjatima; //Timi leiks er notaður í lok forritsins

function ask(){
    
    //Deilingarviðauki: Ef tákn = '/' þá [2,x] annars [1,x] þ.s. x jafngildir annaðhvort tölunni 10 eða tölunni 100.  
    var deilingarviðauki = 0;
    //Grunnstilling fjöldaslembitalna er 0.
    var fjoldiSlembitalna = 0;

    //Slembitákn er slembiheiltala frá einum upp í fjóra.
    var tákn = slembitákn();
    function slembitákn(){
        return (Math.floor((Math.random() * 4)+ 1))
    }

    //Jafn miklar líkur eru á því að fallið skili deilingu(1), margföldun(2), summu(3) og mínus(4):
    switch(tákn){
        case 1:
            return tákn = '/';
            break;        
        case 2:
            return tákn = '*';
            break;
        case 3:                     
            return tákn = '+';
            break;
        case 4:
            return tákn = '-';
    }

    //Fall sem býr til slembitölu fyrir Tölu1
    var tala1 = slembitala(fjoldiSlembitalna);
    function slembi1(fjoldiSlembitalna) {
        return (Math.floor(Math.random() * (fjoldiSlembitalna)+ 1) + deilingarviðauki);
    }

    /*  SÉRTILFELLI F. DEILINGU
    *   Ef tákn = '/' þá [2,x] annars [1,x] þ.s. x jafngildir annaðhvort tölunni 10 eða tölunni 100.
    */
    if(fjoldiSlembitalna = 9){
        return deilingarviðauki = 1;
    }
    else{
        return deilingarviðauki;
    }

    //Fall sem útbýr slembitölu fyrir Tölu2
    function slembi2(fjoldiSlembitalna) {
        return (Math.floor(Math.random() * (fjoldiSlembitalna)+ 1) + deilingarviðauki);
    }
 
    //Fall sem ákveður magn slembitalna. Slembitölur eru mismargar eftir táknum. (Þrjú tilfelli)
    function magnSlembitalna(deilingarviðauki, tákn, fjoldiSlembitalna, tala1){
        if(tákn === '/'){
            return (fjoldiSlembitalna = 9) && (tala2 = tala1*tala1); 
        }
    
        else if(tákn === '*'){
            return (fjoldiSlembitalna = 10) && (tala2 = slembi2(fjoldiSlembitalna));
        }
    
        else if((tákn === '*')||(tákn === '-')){
            return (fjoldiSlembitalna = 100) && (tala2 = slembi2(fjoldiSlembitalna));
        }
    }

    tala2 = magnSlembitalna(deilingarviðauki, tákn, fjoldiSlembitalna, tala1);

    var texti = prompt('Hvað er ' + tala2 + tákn + tala1 + '?');
    var notandilausn = parseInt(texti,10);
    if (texti === null){
        alert("Hætt í leik.")
        start();
    }
    else{
        var notandilausn = parseInt(texti, 10);
            
    }
    //Bý til gildi fyrir rétt svar: reiknivellausn.
    const reiknivellausn = (tala2 + takn + tala1)
    //Athuga svo hvort reiknivellausn sé rétt:
    if(notandilausn === reiknivellausn){
        return true;
    }
    else{
        return false;
    }
}

function play() {
    var rangt = 0;
    var rétt = 0;
    var spurning = 1;
    var lokid = false;

    while (spurning <= 10){
        ask();

        if(Boolean(ask()) === true){
            rétt = rétt + 1;
            spurning = spurning + 1; 
        }
        else if(Boolean(ask()) === false){
            rangt = rangt + 1;
            spurning = spurning + 1;
        }
        else if(Boolean(ask()) === null){
            break;
        }
    }

    //Ef notandi klárar 10 spurningar þá fær boolean gildið lokið gildið true.
    if(spurning === 11){
        return lokid = true;
        spurning = spurning - 10;
    }
    else{
        return lokid;
    }

    //Ef lokid jafngildir true þá skilar forritið niðurstöðu
    if(lokid === true){
        //Reiknar meðaltal réttra svara á hverri sekúndu.
        var svörásek = tími / rétt;
        alert('Þú svaraðir ' + rétt + ' af ' + GAMES_TO_PLAY + ' dæmum réttum á ' + timileiks + ' sekúndum. Meðalrétt svör á sekúndu eru ' + svörásek + '.');
        spilaaftur();
        spurning = 1;
        rétt = 0;
        rangt = 0;
    }
    //annars (ef lokid er false) þá hættir forritið leik og kallar á spilaaftur(); 
    else{
        spurning = 1;
        rétt = 0;
        rangt = 0;
        alert("Hætta í leik.");
        spilaaftur();
    }
}
// Byrjar leik
start();