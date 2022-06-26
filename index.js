let data = []

const inputNetwork = document.getElementById("network")
const inputNftAddress = document.getElementById("input-nft-address")
const inputNotificationTitle = document.getElementById("input-notification-title")
const inputNotificationBody = document.getElementById("input-notification-body")
const sendBtn = document.getElementById("send-btn")
let ackSend = document.getElementById("ack-send")
const note = "Notified"

sendBtn.addEventListener("click", function() {
    data = []
    data.push(inputNetwork.value)
    data.push(inputNftAddress.value)
    data.push(inputNotificationTitle.value)
    data.push(inputNotificationBody.value)
    console.log(data)
    ackSend.innerText = data

})