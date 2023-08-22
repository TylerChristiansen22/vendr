import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { SnacksController } from "./controllers/SnacksController.js";

export const router = [
  {
    path: '',
    controller: SnacksController,
    view: /*html*/`
    <section class="row justify-content-center">
      <div id="money" class="col-3">
      </div>
      <div class = "col-3"> <button onClick ="app.SnacksController.giveMoney()">+ .25</button>
      </div>
    </section>
    <section id="snackContent" class="row">
    </section>
    <section id="mySnacks" class="row">
    </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]