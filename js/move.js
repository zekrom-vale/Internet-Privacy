var SR;
function scrollDiv_init(SR) {
	DivElmnt= document.getElementById('scroll');
	ReachedMaxScroll= false;
	DivElmnt.scrollTop= PST= 0;
	ScrI= setInterval('ScrD(SR)', SR);
}
function ScrD(SR) {
	
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop= PST;
		PST++;
		ReachedMaxScroll= DivElmnt.scrollTop>= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
	else {
		ReachedMaxScroll= (DivElmnt.scrollTop== 0)?false:true;
		DivElmnt.scrollTop= PST;
		PST--;
	}
}
function pauseDiv() {
	clearInterval(ScrI);
}
function resumeDiv(SR) {
	PST= DivElmnt.scrollTop;
	ScrI= setInterval('ScrD(SR)', SR);
}
//Modified from...
//https://www.sitepoint.com/community/t/auto-scrolling-a-div-with-overflow-scroll-auto/2291