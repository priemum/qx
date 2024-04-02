const list = document.querySelector("#tblBuyReferrals > tbody");
const children = [...list.children].sort((a, b) => a.querySelector("td:nth-child(2) > center > div:nth-child(1)").textContent.replace("$", "") > b.querySelector("td:nth-child(2) > center > div:nth-child(1)").textContent.replace("$", ""));
list.replaceChildren(...children);

var els = document.querySelectorAll("#tblBuyReferrals > tbody > tr > td:nth-child(2) > center > div:nth-child(1)");
var arr = [];
els.forEach((n, i) => {
    if (els[i].innerText.replace("$", "") >= 0.1) {
        els[i].style.background = "red"
    }
})


