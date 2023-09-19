async function carregar_img(){
    const url = 'https://cataas.com/cat'

    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    if (response.status === 200) {
        const imageCat = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageCat);

        const image = document.createElement('img')
        image.src = imageObjectURL

        const container = document.getElementById('myDiv')
        container.append(image)
    }
    else {
        console.log("HTTP-ERROR:" + response.status)
    }

}
