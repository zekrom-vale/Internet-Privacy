ScrollRate = 0.00000000000000001;

function scrollDiv_init(ScrollRate) {
	DivElmnt = document.getElementById('scroll');
	ReachedMaxScroll = false;
	
	DivElmnt.scrollTop = 0;
	PreviousScrollTop  = 0;
	
	ScrollInterval = setInterval('scrollDiv(ScrollRate)', ScrollRate);
}

function scrollDiv(ScrollRate) {
	
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;
		
		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
	else {
		ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
		
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop--;
	}
}

function pauseDiv() {
	clearInterval(ScrollInterval);
}

function resumeDiv(ScrollRate) {
	PreviousScrollTop = DivElmnt.scrollTop;
	ScrollInterval    = setInterval('scrollDiv(ScrollRate)', ScrollRate);
}
//https://www.sitepoint.com/community/t/auto-scrolling-a-div-with-overflow-scroll-auto/2291