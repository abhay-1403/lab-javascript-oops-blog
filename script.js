class Blog {
    constructor(title, detail) {
        this.title = title
        this.detail = detail

    }
    addTitle(innerdiv) {

        let titlecard = document.createElement("h1")
        titlecard.setAttribute("id", "blog-title")
        console.log(titlecard)
        innerdiv.appendChild(titlecard)
        titlecard.innerHTML = this.title
    }
    addDescription(innerdiv) {
        let desccard = document.createElement("p")
        desccard.setAttribute("id", "blog-description")
        innerdiv.appendChild(desccard)
        desccard.innerHTML = this.detail
    }
}


document.querySelector("#addBlog").addEventListener("click", function() {
    document.querySelector("#popupContact").style.display = "block"
    document.querySelector(".body-div2").style.display = "none"



})

document.querySelector("#post").addEventListener("click", function()

    {
        document.querySelector("#popupContact").style.display = "none"
        document.querySelector(".body-div2").style.display = "flex"

        let inputtitle = document.querySelector("#title")
        let inputdescription = document.querySelector("#detail")

        let object = new Blog(inputtitle.value, inputdescription.value)

      
        let divisontag = document.createElement("div")
        divisontag.setAttribute("class", "article-card")

        
        let image = document.createElement("img")
        let path = './assets/javascript.png'; 
        image.setAttribute("src", path)

        
        let innerdiv = document.createElement("div")
        innerdiv.setAttribute("class", "card-text")
        innerdiv.setAttribute("id", "card-text")
         
        divisontag.appendChild(image)
        divisontag.appendChild(innerdiv)
        document.querySelector(".body-div2").appendChild(divisontag)

        console.log(divisontag)

        
        object.addTitle(innerdiv)
        object.addDescription(innerdiv)

    }
)
