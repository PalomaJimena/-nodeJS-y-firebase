function saludar(){
    console.log("hola...."+nombre);


}


var saludo=("paco");




var saludo2=(nombre1,nombre2)=>{
    console.log("holaa" + nombre1 + "y" + nombre2);
}
saludo2("pancho","paco");

var saludo3=(nombre1,nombre2)=>{
    return "hola"+nombre1+"y"+nombre2;;
}
console.log(saludo3("hugo"));

var saludo4=(nombre1)=>"hola" + nombre1;
console.log(saludo4("bethoveen"));

var saludo5=function(){
    console.log("hola con funcion aminada")
}
saludo5();

var saludo6=()=>{
    console.log("estas en saludo6");
}

var saludo7=(nombre="anonimo", s)=>{
    console.log("hola  " +nombre);
    s();
}
saludo7("vivaldi",saludo6);