function construct() {
    let i = 0
    const links = document.getElementById("links")
    const socialMedias = [
        {
            name: "Instagram",
            image: "./assets/icons/instagram.png",
            link: "https://www.instagram.com/nykzxx/"
        },
        {
            name: "Youtube",
            image: "./assets/icons/youtube.png",
            link: "https://www.youtube.com/@nykzxkj"
        }
    ]    

    while (i < socialMedias.length) {
        const itemID = socialMedias[i].name.toLocaleLowerCase()

        const newContainer = document.createElement("div")
        newContainer.id = "container-" + itemID
        newContainer.className = "container"

        const newLink = document.createElement("a")
        newLink.href = socialMedias[i].link

        
        const newImage = document.createElement("img")
        newImage.src = socialMedias[i].image
        newLink.appendChild(newImage)

        const newText = document.createElement("h1")
        newText.textContent = socialMedias[i].name
        newLink.appendChild(newText)

        newLink.appendChild(newContainer)
        links.appendChild(newLink)
        console.log(
            "ID: " + i + 
            "\nitemID: " + itemID + 
            "\nImage: " + socialMedias[i].image + 
            "\nLink: " + socialMedias[i].link
                )

        i++
    }
}

document.body.onload = function() {
    construct();
}