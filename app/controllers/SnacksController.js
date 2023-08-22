import { AppState } from "../AppState.js"
import { Snack } from "../models/Snacks.js"
import { snacksService } from "../services/SnacksService.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
    constructor() {
        console.log('This is the snacks controller')
        this.drawMoney()
        this.drawSnacks()

        AppState.on('money', this.drawMoney)
    }

    giveMoney() {
        snacksService.giveMoney()
    }
    drawMoney() {
        setHTML('money', `<div id = "money" class= "bg-dark text-light">${AppState.money}</div>`)
    }
    drawSnacks() {
        const snacks = AppState.snacks
        let snackContent = ''
        snacks.forEach(snack => snackContent += snack.snackList)
        setHTML('snackContent', snackContent)
        console.log(snackContent)
    }
    buySnack(snackName) {
        snacksService.buySnack(snackName)
        let snackContent = ''
        const mySnacks = AppState.mySnacks
        mySnacks.push(snackName)
        setHTML('mySnacks', mySnacks)
        console.log(mySnacks)
    }
}