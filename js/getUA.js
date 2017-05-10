function getUserAgent(spacer, ID) {
    var Z= navigator.userAgent, R,
    a='&',p='%',d='$',c= ',';
    //Use Z.split(*)
    if (!Z.includes(a)) {
        Z= Z.replace(c, a);
        R= a;
    } else {
        if (!Z.includes(p)) {
            Z= Z.replace(c, p);
            R= p;
        } else {
            if (!Z.includes(d)) {
                Z= Z.replace(c, d);
                R= d;
            } else {
                if (Z.includes(c)){
                    console.log("Cannot find Replacment");
                    return;
                }
                else{
                    R=null;
                }
    }}}
    Z= Z.split('('), i= 1;
    while (typeof Z[i]== 'string') {
        Z[i]= '(' + Z[i];
        i++;
    }
    //Z= Z.join('*')
    Z= Z.toString();
    Z= Z.split(')');
    i= 0;
    while (typeof Z[i]== 'string') {
        if (Z[i].includes('(')) {
            Z[i]+= ')';
        }
        i++;
    }
    console.log(Z);
    //Z= Z.join('*')
    Z= Z.toString();
    var Y= Z.split(c);
    var V= [];
    var l= 0, k= 0;
    while (typeof Y[l]== 'string') {
        if (Y[l].includes('(')) {
            V[k]= Y[l];
            Y[l]= "()";
            ++k;
        }
        ++l;
    }
    //Y= Y.join(*)
    Y= Y.toString();
    Y= Y.split(' ');
    Y= Y.toString();
    Y= Y.split(c);
    i=k= 0;
    while (typeof Y[i]== 'string') {
        if (Y[i].includes('()')) {
            Y[i]= V[k];
            k++;
        }
        i++;
    }
    console.log('Y');
    console.log(Y);
    //Has extra emptey strings
    //Y= Y.join('*')
    Y= Y.toString();
    while (Y.includes(',,')) {
        Y= Y.replace(',,', c);//Replace
    }
    console.log(Y);
    while (Y.includes(c)) {
        Y= Y.replace(c, spacer);
    }
    Y= Y.replace(R, c);
    console.log(Y);
    document.getElementById(ID).innerHTML= Y;
}

