import { AppState } from "../AppState.js"

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get moneyTemplate() {
        return `<div class= "bg-dark text-light">${AppState.money}</div>`
    }

    get snackList() {
        return `<div class="col-4 my-5 text-center d-flex"><img onClick="app.SnacksController.buySnack('${this.name}')" class="imgSizing" src="${this.imgUrl}</">${this.name}, $${this.price}</div>`
    }
}
