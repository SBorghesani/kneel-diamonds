import { getOrders, getMetals, getStyles, getSizes, getJewelryOptions } from "./dataAccess.js"
import { database } from "./database.js"
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()
const jewelryOptions = getJewelryOptions()


const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        })
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        })
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        })
    const foundJewelryOption = jewelryOptions.find(
        (jewelryOption) => {
            return jewelryOption.id === order.jewelryOptionId
        })
        try {


        // if (foundMetal === undefined || foundStyle === undefined || foundSize === undefined || foundJewelryOption === undefined) {
        //     window.alert("oops!")
        // } else {
         const totalCost = (foundMetal.price + foundStyle.price + foundSize.price) * foundJewelryOption.modifier
         const costString = totalCost.toLocaleString("en-US", {
             style: "currency",
             currency: "USD"
            })
            return `<li>
            Order #${order.id} cost: ${costString} was placed on ${order.timestamp}
            </li>`
            } 
        // }
        catch(err) {
            // database.customOrders = []
            // database.orderBuilder.id -= 1
            // window.alert("You must make all selections.")
            // location.reload()
        }   
    }



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()


    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"
    return html
}

