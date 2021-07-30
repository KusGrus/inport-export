import {SETTING} from '../core/constants/settings'
import * as utils from '../core/utils/index'

class DonateList {
    #donates
    #list

    constructor(donates) {
        this.#donates = donates;
    }

    render() {
        const container = document.createElement('div')
        container.classList.add('donates-container')
        container.append(
            this.#titleTemplate('Список донатов'),
            this.#listTemplate()
        )

        return container

    }

    #titleTemplate(text) {
        const h2 = document.createElement('h2')
        h2.classList.add('donates-container__title')
        h2.textContent = text

        return h2
    }

    #listTemplate() {
        const list = document.createElement('div')
        list.classList.add('donates-container__donate')
        this.#donates.forEach(donate => list.append(this.#listItemTemplate(donate)))
        this.#list = list;
        return list
    }

    #listItemTemplate(donate) {
        const item = document.createElement('div')
        item.classList.add('donate-item')
        item.textContent = utils.getFormattedTime(donate.date)
        const b = document.createElement('b')
        b.textContent = ` - ${donate.amount}${SETTING.currency}`
        item.append(b)

        return item
    }

    updateDonates(donates) {
        this.#list.innerHTML = ''
        donates.forEach(donate => this.#list.append(this.#listItemTemplate(donate)))
    }
}

export {
    DonateList
}
