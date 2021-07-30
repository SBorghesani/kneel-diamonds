import { getJewelryOptions, setJewelryOption, getOrderBuilder, getMetals } from "./database.js"

const jewelryOptions = getJewelryOptions()
const orderBuilder = getOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelryOption") {
            setJewelryOption(parseInt(event.target.value))

        }
    }
)




export const JewelryOptions = () => {
    let html = "<ul class='jewelryOptions'>"

    const listedItems = jewelryOptions.map(jewelryOption => {
        if (jewelryOption.id === orderBuilder.jewelryOptionId) {
            return `<li>
            <input type="radio" name="jewelryOption" value="${jewelryOption.id}" checked/> ${jewelryOption.option}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="jewelryOption" value="${jewelryOption.id}"/> ${jewelryOption.option}
            </li>`
        } 
    })
    
    html += listedItems.join("")
    html += "</ul>"
    
    return html
}
// return `<li calss="jewelryOption">
//     <input type="radio" name="jewelryOption" value="${jewelryOption.id}" /> ${jewelryOption.option}
// </li>`