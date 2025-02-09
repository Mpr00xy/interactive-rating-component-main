let num = document.querySelectorAll(".number-list span");
let value = document.querySelector(".value");
let btn = document.querySelector("button");
let pro = document.querySelector(".product");
let message = document.querySelector(".message");

for(let i = 0; i < num.length; i++){
    num[i].addEventListener("click",function(){
        for(let x = 0; x < num.length; x++){
            num[x].classList.remove('active');
            }
            num[i].classList.add('active');
            x = num[i].textContent;
            value.textContent = `You selected ${x} out of 5`;
            for(let y = 0; y < num.length; y++){
                if(num[y].classList.contains('active')){
                    num[y].style.color = "black";
                    num[y].style.backgroundColor = "white";
                }
                else{
                    num[y].style.backgroundColor = " rgb(39, 46, 55)";
                    num[y].style.color = "hsl(217, 12%, 63%)";
                }
                }

    })
}

btn.addEventListener("click",function(){
    if(x != 0){
    pro.style.display = "none";
    message.style.display = "block";
    }
})