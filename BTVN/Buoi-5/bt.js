slc = 6
while (slc > 0) {
    slc--;
    var a = prompt("Vui long nhap 1 so tu 0->55:");
    a = parseInt(a);
    if(a<0){
        a = NaN;
    }else if(a>55){
        a = NaN;
    }
    while(isNaN(a)){
        var a = prompa("Vui long nhap 1 so tu 0->55:");
        a = parseInt(a);
        if(a<0){
            a = NaN;
        }else if(a>55){
            a = NaN;
        }
    }
    var b = prompt("Vui long nhap 1 so tu 0->55:");
    b = parseInt(b);
    if(b<0){
        b = NaN;
    }else if(b>55){
        b = NaN;
    }
    while(isNaN(b)){
        var b = prompt("Vui long nhap 1 so tu 0->55:");
        b = parseInt(b);
        if(b<0){
            b = NaN;
        }else if(b>55){
            b = NaN;
        }
    }
    var c = prompt("Vui long nhap 1 so tu 0->55:");
    c = parseInt(c);
    if(c<0){
        c = NaN;
    }else if(c>55){
        c = NaN;
    }
    while(isNaN(c)){
        var c = prompt("Vui long nhap 1 so tu 0->55:");
        c = parseInt(c);
        if(c<0){
            c = NaN;
        }else if(c>55){
            c = NaN;
        }
    }
    var d = prompt("Vui long nhap 1 so tu 0->55:");
    d = parseInt(d);
    if(d<0){
        d = NaN;
    }else if(d>55){
        d = NaN;
    }
    while(isNaN(d)){
        var d = prompt("Vui long nhap 1 so tu 0->55:");
        d = parseInt(d);
        if(d<0){
            d = NaN;
        }else if(d>55){
            d = NaN;
        }
    }
    var e = prompt("Vui long nhap 1 so tu 0->55:");
    e = parseInt(e);
    if(e<0){
        e = NaN;
    }else if(e>55){
        e = NaN;
    }
    while(isNaN(e)){
        var e = prompt("Vui long nhap 1 so tu 0->55:");
        e = parseInt(e);
        if(e<0){
            e = NaN;
        }else if(e>55){
            e = NaN;
        }
    }
    var f = prompt("Vui long nhap 1 so tu 0->55:");
    f = parseInt(f);
    if(f<0){
        f = NaN;
    }else if(f>55){
        f = NaN;
    }
    while(isNaN(f)){
        var f = prompt("Vui long nhap 1 so tu 0->55:");
        f = parseInt(f);
        if(f<0){
            f = NaN;
        }else if(f>55){
            f = NaN;
        }
    }
    
    const lucky = [a, b, c, d, e ,f];

    var g = parseInt(Math.random()*56)+1;
    var h = parseInt(Math.random()*56)+1;
    var i = parseInt(Math.random()*56)+1;
    var j = parseInt(Math.random()*56)+1;
    var k = parseInt(Math.random()*56)+1;
    var l = parseInt(Math.random()*56)+1;
 
    const random = [g, h, i, j, k, l];

    let isEqual;

    if(lucky.length !== random.length) {
    isEqual = false;
    }
    else
    {
    for (let i = 0; i < lucky.length; i++) {
        if(lucky[i] !== random[i]) {
            isEqual = false;
            break;
        }
        isEqual = true;
    }
    }
}
console.log(isEqual);