import { getJewelryOptions, setJewelryOption } from "./database.js"

const jewelryOptions = getJewelryOptions()

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
        return `<li calss="jewelryOption">
            <input type="radio" name="jewelryOption" value="${jewelryOption.id}" /> ${jewelryOption.option}
        </li>`
    })

    html += listedItems.join("")
    html += "</ul>"

    return html
}