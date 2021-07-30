import {DonateForm} from './donate-form'
import {DonateList} from './donate-list'
import {calculateSumOfNumbers} from '../core/utils/index'

export default class App {
    #form
    #list

    constructor() {
        this.#form = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.#list = new DonateList(this.state.donates)
    }

    #mockDonates = [
        {amount: 4, date: new Date()},
        {amount: 20, date: new Date()},
        {amount: 3, date: new Date()},
        {amount: 1, date: new Date()},
    ];

    state = {
        donates: [],
        totalAmount: 0
    }

    run() {
        document.body.append(this.#form.render(), this.#list.render())
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount = calculateSumOfNumbers(this.state.donates, 'amount')
        this.#form.updateTotalAmount(this.state.totalAmount)
        this.#list.updateDonates(this.state.donates)
    }
}
