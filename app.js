const form = document.getElementById('form-submit')
const input = document.getElementById("input-Box")
const imageParent = document.getElementById('imageParent')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log("Form Submit input.value", input.value)
    // removeAllChildNodes(imageParent)
    // data fetch from backend


    fetch(`https://pixabay.com/api/?key=22001713-36c15d23a30ca4b2a2ff11d59&q=${input.value}`)
        .then(response => response.json())
        .then((json) => {
            console.log(json.hits)
            const tenPhotos = json.hits
            // const tenPhotos = json.slice(0, 10)
            // console.log(tenPhotos)

            // map 10 photos and show 10 photos

            tenPhotos.map((tp) => {
                const div1=document.createElement('div')
                const div2=document.createElement('div')
                div1.classList.add('card')
                div1.classList.add('col-3')
                div1.classList.add('p-1')
                div2.classList.add('card-body')
                const p = document.createElement('p')
                const image = document.createElement('img')
                image.classList.add('card-img-top')
                p.innerText = tp.tags
                p.classList.add('card-tittle')

                image.src = tp.largeImageURL
                // const myImage = new image(1100, 500)
                // image.width=tp.imageWidth(1500)
                // image.setAttribute=imageWidth(1500);
                // imageparent.insertBefore(image)
                div1.appendChild(image)
                div2.appendChild(p)
                div1.appendChild(div2)
                imageParent.appendChild(div1)
                // imageParent.appendChild(p)
            })


        })

})


// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }