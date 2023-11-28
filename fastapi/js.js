function button(){
    button_toyota = document.querySelector("#button_toyota")
    button_toyota.addEventListener("click",function (){
       let toyota = document.querySelectorAll(".data")
        for (t in toyota){
            if (toyota[t].id == "id1"){
                toyota[t].style = "display:block"
            }
            else {
                toyota[t].style = "display:none"
            }

        }


    })
    button_lexus = document.querySelector("#button_lexus")
    button_lexus.addEventListener("click",function (){
       let lexus = document.querySelectorAll(".data")
        for (l in lexus){
            if (lexus[l].id == "id2"){
                lexus[l].style = "display:block"
            }
            else {
                lexus[l].style = "display:none"
            }

        }
    })
    button_honda = document.querySelector("#button_honda")
    button_honda.addEventListener("click",function (){
       let honda = document.querySelectorAll(".data")
        for (h in honda){
            if (honda[h].id == "id3"){
                honda[h].style = "display:block"
            }
            else {
                honda[h].style = "display:none"
            }

        }
    })
}





fetch('http://127.0.0.1:8000',)


.then (car => car.json())
    .then(data =>{
        for(let i in data){
            let news = document.createElement("div")
            news.className = "data"
            news.id = "id" + data[i].idkateg
            news.style = ""
            let name = document.createElement("h3")
            name.innerHTML = data[i].head
            let img = document.createElement("img")
            img.src = data[i].picture
            let p = document.createElement("p")
            p.innerHTML = data[i].text
            news.appendChild(name)
            news.appendChild(img)
            news.appendChild(p)

            document.querySelector(".fastapi").appendChild(news)

            button()
        }

    })
