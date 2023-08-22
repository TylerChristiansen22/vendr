import { Snack } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  snacks = [
    new Snack({ name: 'Rockstar', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1670786132090-9c3bb730050c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja3N0YXIlMjBlbmVyZ3klMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Cookie', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Twix', price: 1, imgUrl: 'https://images.unsplash.com/photo-1529077246295-f6c7172c8165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHdpeHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Snickers', price: 1.25, imgUrl: 'https://images.unsplash.com/photo-1625035446600-9c5c6b1e4b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25pY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Heath', price: 1.75, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUx9BjO8eHDL5rHGUIclyVL0Egwn6lREOqx-7eAzTItdiypvoB0S1aJ-1pvFdMqxVeuc&usqp=CAU' }),
    new Snack({ name: 'Starburst', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0JTIwa2F0JTIwY2FuZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' })
  ]

  mySnacks = []

  money = 0



  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
