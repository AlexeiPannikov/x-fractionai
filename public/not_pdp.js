const url = "https://bigdick.site/api"


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const fbc = getCookie('_fbc');
const fbp = getCookie('_fbp');

const queryString = window.location.search.slice(1)

window.addEventListener("DOMContentLoaded", (event) => {
    const of_href = document.getElementById("go_to_tg_btn")
    const data = JSON.parse('{"' + decodeURI(queryString.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + `", "fbc": "${fbc}", "link_value": "${of_href.href}"}`)
    send_request("/visit", data);
    of_href.addEventListener("click", () => fbcAndClick(data))
});


function deep_to_link(link) {
    return `https://t.me/+${link.split('invite=').pop()}/`
}

function fbcAndClick(data) {
    send_request("/click", data)
}


async function send_request(path, data) {
    return fetch(url + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    })
}