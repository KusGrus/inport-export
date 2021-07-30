import {SETTING as projectSetting} from '../core/constants/settings'

class DonateForm {
    #total
    #title
    #submitCallback
    #input

    constructor(total, submitCallback) {
        this.#total = total
        this.#submitCallback = submitCallback
    }

    render() {
        const form = document.createElement('form')
        form.append(
            this.#titleTemplate(this.#total),
            this.#inputTemplate(`Введите сумму в ${projectSetting.currency}`),
            this.#buttonTemplate('Задонатить')
        )

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const data = new FormData(form)
            this.#submitCallback({amount: data?.get('amount'), date: new Date()})
            this.#input.value = ''
        })

        return form

    }

    #titleTemplate(amount) {
        const h1 = document.createElement('h1')
        h1.id = 'total-amount'
        h1.textContent = `${amount}${projectSetting.currency}`
        this.#title = h1
        return h1
    }

    #inputTemplate(title, min = '0', max = '100') {
        const label = document.createElement('label')
        label.classList.add('donate-form__input-label')
        label.textContent = title
        const input = document.createElement('input')
        input.classList.add('donate-form__donate-input')
        input.setAttribute('name', 'amount')
        input.setAttribute('type', 'number')
        input.setAttribute('max', max)
        input.setAttribute('min', min)
        input.setAttribute('required', '')

        this.#input = input

        label.append(input)

        return label
    }

    #buttonTemplate(text) {
        const button = document.createElement('button')
        button.classList.add('donate-form__submit-button')
        button.setAttribute('type', 'submit')
        button.textContent = text

        return button
    }

    updateTotalAmount(newAmount) {
        this.#title.textContent = `${newAmount}${projectSetting.currency}`
    }

}

export {
    DonateForm
}
