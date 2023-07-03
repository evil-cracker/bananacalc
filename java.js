

var name = "";
var type = "";
var tharr =0;
var weight=0;
var total_weight=0;
var total_thar=0;
var price=0;
var kon=0;
var after_kon_weight;
var weight_kon;
var total_price;
var matweight=[];
var matthar=[];







function pricepage(){
 
    kon = parseFloat(document.getElementById("kondai").value);
    price = parseFloat(document.getElementById("price").value);

    sessionStorage.setItem("kon", JSON.stringify(kon)); 
    sessionStorage.setItem("price", JSON.stringify(price));

}

function nextpage2(){
    
    tharr = parseFloat(document.getElementById("thar").value);
    weight = parseFloat(document.getElementById("adai").value);

    matweight.push(weight);
    matthar.push(tharr);

    document.getElementById("thar").value=tharr;
    document.getElementById("adai").value="";



    sessionStorage.setItem("matweight", JSON.stringify(matweight));
    sessionStorage.setItem("matthar", JSON.stringify(matthar));

}


function namepage(){
type = document.getElementById("type").value;
name = document.getElementById("nameindex").value;

sessionStorage.setItem("type", JSON.stringify(type));
sessionStorage.setItem("name", JSON.stringify(name));


}



