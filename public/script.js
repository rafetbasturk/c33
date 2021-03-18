const bar = document.querySelector("#bar")
const views = document.querySelector("#views")
const price = document.querySelector("#price").children[0]
const toggle = document.querySelector("#toggle")
const monthly = document.querySelector(".monthly")
const yearly = document.querySelector(".yearly")
const time = document.querySelector("#time")

const prices = [8, 12, 16, 24, 36]
const pageViews = ["10K", "50K", "100K", "500K", "1M"]

bar.oninput = function(array) {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'

    if (this.value == 1) {
        views.innerText = pageViews[0]
    }
    if (this.value == 2) {
        views.innerText = pageViews[1]
    }
    if (this.value == 3) {
        views.innerText = pageViews[2]
    }
    if (this.value == 4) {
        views.innerText = pageViews[3]
    }
    if (this.value == 5) {
        views.innerText = pageViews[4]
    }

    if (toggle.children[0].classList.contains("floatRight")) {
        time.innerText = "/ year"
        if (this.value == 1) {
            price.innerText = prices[0] * 3 / 4
        }
        if (this.value == 2) {
            price.innerText = prices[1] * 3 / 4
        }
        if (this.value == 3) {
            price.innerText = prices[2] * 3 / 4
        }
        if (this.value == 4) {
            price.innerText = prices[3] * 3 / 4
        }
        if (this.value == 5) {
            price.innerText = prices[4] * 3 / 4
        }
    } else {
        time.innerText = "/ month"
        if (this.value == 1) {
            price.innerText = prices[0]
        }
        if (this.value == 2) {
            price.innerText = prices[1]
        }
        if (this.value == 3) {
            price.innerText = prices[2]
        }
        if (this.value == 4) {
            price.innerText = prices[3]
        }
        if (this.value == 5) {
            price.innerText = prices[4]
        }
    }
}

toggle.addEventListener("click", () => {
    toggle.children[0].classList.toggle("floatRight")
    yearly.classList.toggle("cyan")
    monthly.classList.toggle("cyan")
    bar.oninput();
});