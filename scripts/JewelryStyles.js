import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"
import { renderAllHTML } from "./main.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            // window.alert(`User chose style ${event.target.value}`)
            setStyle(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
    )
    
    export const JewelryStyles = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        if (style.id === orderBuilder.styleId) {
            return `<li>
            <input type="radio" name="style" value="${style.id}" required checked/> ${style.style}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="style" value="${style.id}" required /> ${style.style}
            </li>`
        } 
    })
    
    
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    
    html += "</ul>"
    return html
}


// return `<li>
// <input type="radio" name="style" value="${style.id}" /> ${style.style}
// </li>`