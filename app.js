//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek elárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn")
//const decrease = document.getElementById("decrease");
//onst reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

//Ciklussal végiglépkedek az eltárolt gombokon, amelyeken rajta van a .btn class
btns.forEach((btn)=>{
    
    //Az összes gomb közül, amelyek bejárok a ciklussal, azt kattintottam meg amelyik az aktuális ciklusfutáskor jön a sorba (első ciklusfutás -> 0. indexű gomb (decrease) stb...)
    btn.addEventListener("click", (e)=>{
        //Az éppen aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;
        
        //Ha az aktuálisan megkattintott gombok classai közül tartalmazza a "decrease" classt
        if(style.contains("decrease")){
            //Csöökentjük az alapértéket
            count--;
        }
        else if(style.contains("increase")){
            //Növeljük az alapértéket
            count++;
        }
        //Ha ezek közül egyik sem akkor marad a "reset"
        else{
            //Visszaállítjuk az alapértéket
            count = 0;
        }

        value.textContent = count;

        //Szinek hozzáadása a spanhez
        if(count > 0){
            value.style.color="green";
        }
        else if(count < 0){
            value.style.color="red";

        }
        else
         value.style.color="black";

    })


})






/*
//Egyszerű, lusta módszer

increase.addEventListener("click", ()=>{
    
    //Növelem az alapértékem 1-el
    count++;
    
    //Megnézem hogy az alapértékem nagyobb-e mint 0
    if(count > 0){
        
        //Ha nagyobb, hozzáadok egy zöld betűszínt
        value.style.color = "green";
    }
    
    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek 
    value.textContent = count;
})
decrease.addEventListener("click", ()=>{
    
    //Csökkentem az alapértékem 1-el
    count--;
    
    //Megnézem hogy az alapértékem nagyobb-e mint 0
    if(count < 0){
        
        //Ha nagyobb, hozzáadok egy piros betűszínt
        value.style.color = "red";
    }
    
    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek 
    value.textContent = count;
})

reset.addEventListener("click", ()=>{
    
    //Az alapértéket visszaállítjuk nulláral
    count = 0;
    
   //Visszaállítom az alap betűszínt
    value.style.color = "black";
    
    
    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spannek 
    value.textContent = count;
})
*/