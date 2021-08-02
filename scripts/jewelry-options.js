import { getJewelryOptions, setJewelryOption, getOrderBuilder } from "./database.js"
import { renderAllHTML } from "./main.js"

const jewelryOptions = getJewelryOptions()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelryOption") {
            setJewelryOption(parseInt(event.target.value))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
    )
    
    
    
    
    export const JewelryOptions = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul class='jewelryOptions'>"

    const listedItems = jewelryOptions.map(jewelryOption => {
        if (jewelryOption.id === orderBuilder.jewelryOptionId) {
            return `<li>
            <input type="radio" name="jewelryOption" value="${jewelryOption.id}" required checked/> ${jewelryOption.option}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="jewelryOption" value="${jewelryOption.id}" required /> ${jewelryOption.option}
            </li>`
        } 
    })
    
    html += listedItems.join("")
    html += "</ul>"
    
    return html
}
