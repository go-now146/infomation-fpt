function Validator(options) {
    const formElement = document.querySelector(options.form)

    var selectorRules = {}

    if (!formElement) return

    function validate(inputElement, rule) {
        var messageElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage;

        var rules = selectorRules[rule.selector];

        for(var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break;
        }

        if (errorMessage) {
            messageElement.innerText = errorMessage
            inputElement.classList.add('invalid')
        }
        else {
            messageElement.innerText = ''
            inputElement.classList.remove('invalid')
        }

        return !errorMessage
    }

    formElement.onsubmit = (e) => {
        e.preventDefault()

        var isFormValid = true;

        options.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            var isValid = validate(inputElement, rule)
            
            if(!isValid) {
                isFormValid = false
            }
        })

        if(isFormValid) {
            if (typeof options.onSubmit === 'function') {

                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');

                var formValues = Array.from(enableInputs).reduce( (values, input) => {
                    values[input.name] = input.value
                    return values
                }, {})

                options.onSubmit(formValues)
            }
            else {
                formElement.submit()
            }
        }
    }

    options.rules.forEach( rule => {
        var inputElement = formElement.querySelector(rule.selector)

        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
        } else {
            selectorRules[rule.selector] = [rule.test]
        }

        if (!inputElement) return

        inputElement.onblur = () => {
            validate(inputElement, rule)
        }

        inputElement.oninput = () => {
            var messageElement = inputElement.parentElement.querySelector(options.errorSelector)
            messageElement.innerText = ''
            inputElement.classList.remove('invalid')
        }

    })

}

Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? "" : "this space could not be empty"
        }
    }
}

Validator.isUserName = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            const regex = /^[a-zA-Z0-9._@]+$/
            return regex.test(value) ? undefined : 'invalid username'
        }
    }
}

export default Validator;