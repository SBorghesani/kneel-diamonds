import { getSizes, setSize, getOrderBuilder } from "./database.js"
import { renderAllHTML } from "./main.js"

const sizes = getSizes()

// const sizesContainer = document.querySelectorAll(".choices__sizes")
// const renderSizesHTML = () => { --------------- This doesn't work
//     sizesContainer.innerHTML = DiamondSizes()
// }


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            // window.alert(`User chose size ${event.target.value}`)
            setSize(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
    )
    
    export const DiamondSizes = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (size.id === orderBuilder.sizeId) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" required checked/> ${size.carets}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="size" value="${size.id}" required /> ${size.carets}
            </li>`
        }    
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}

