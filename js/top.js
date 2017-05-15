//Note! almost always use "'" in Javascript if you use '"' in HTML and CSS
function topHead(pg){
var h= '<a href="', 
t= '"><button>', 
e= '</button></a>',
a2= 'index.html"',
l= '<br/><br/><alert style="color:red">Alert! I do not support any political action(s) mentioned, nor anything related to politics.</alert>';

var a= h+ a2+ t+ 'Home'+ e,
b= h+ 'how.html'+ t+ 'How they Get it'+ e,
c= h+ 'Ph1.html'+ t+ 'Politics'+ e,
d= h+ 'ref.html'+ t+ 'References'+ e,
s= '</a><button>Spacer</button>';
    switch(pg){
        case "index":
            a="";
            a2='#top"';
            l="";
            break;
        case "how":
            b="";
			l="";
            break;
        case "Ph1":
            c="";
            break;
        case "ref":
            d="";
            l="";
            break;
        case "other":
            break;
        default:
            console.log('pg Error: pg= "'+ pg+ '"');
            break;
    }
    document.getElementById("top").innerHTML= '<header class="nav"><print>Site Created by Shawn Graven<br/></print>'+ h+ a2+ '><img src="img/Banner.jpg" alt="Internet Pravacy Header" style="width:100vw; height:30vh; object-fit: cover"></a></header>'+ 
    '<nav class="nav">'+ 
    s+ a+ 
    h+ 'http://adf.ly/16713359/banner/firstpartysimulator.net/tracker" title="/! External Site /!" target="_blank"><button title="! External Site !">Detect'+ e+ 
	b+ c+ d+ 
    s+ '</nav>';
	a=b=c=d=a2=t=s=e= null;
    document.getElementById("bot").innerHTML= '<footer class="center"><p>Copyright &copy; zekrom_vale</p>'+ h+ 'https://www.patreon.com/zekrom_vale" title="Thank You!...">Support me on Patreon!</a>'+
    l+
'</footer>';
}