import { AppState } from "../AppState.js";


class SnacksService {
    buySnack(snackName) {
        const selectedSnack = AppState.snacks.find(snack => snack.name == snackName && AppState.money >= snack.price)
        AppState.money -= selectedSnack.price
    }
    giveMoney() {
        AppState.money += .25
    }
}


export const snacksService = new SnacksService()