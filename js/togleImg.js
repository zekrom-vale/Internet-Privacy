var el, v=2;
function togleImg(){
    switch(v){
        case 1:
            el='<img src="img/NSA_vac.jpg" title="http://www.politico.com/wuerker/2013/07/july-2013/001141-016798.html?ml=wu" onclick="togleImg()">';
            v=2;
            console.log('1->2');
            break;
        case 2:
            el='<img src="img/Para.jpg" onclick="togleImg()">';
            v=3;
            console.log('2->3');
            break;
        case 3:
            el='<img src="img/Tr.jpg" alt="President Donald Trump, accompanied by from left, Vice President Mike Pence, Environmental Protection Agency (EPA) Administrator Scott Pruitt, and Interior Secretary Ryan Zinke, speaks at EPA headquarters in Washington, Tuesday, March 28, 2017, prior to signing an Energy Independence Executive Order. Trump signed an executive order aimed at moving forward on his campaign pledge to unravel former President Barack Obama&amp;#39;s plan to curb global warming. (AP Photo/Pablo Martinez Monsivais)" title="http://www.washingtontimes.com/news/2017/mar/28/trump-bill-roll-back-internet-privacy-protections/" id="tp" onclick="togleImg()">';
            console.log('3->1');
            v=1;
            break;
        default:
            el='<p onclick="togleImg()">Error, Please Try Again</p>';
            v=1;
            console.log("v had an invalid number, 'v' set to 1");
            break;
    }
    document.getElementById("s1").innerHTML= el;
    console.log(el);
}