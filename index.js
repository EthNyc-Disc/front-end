let data = []

const inputNetwork = document.getElementById("network")
const inputNftAddress = document.getElementById("input-nft-address")
const inputNotificationMessage = document.getElementById("input-notification-message")
const sendBtn = document.getElementById("send-btn")
let ackSend = document.getElementById("ack-send")
const note = "Notified"

sendBtn.addEventListener("click", function() {
    data = []
    data.push(inputNetwork.value)
    data.push(inputNftAddress.value)
    data.push(inputNotificationMessage.value)
    console.log(data)
    ackSend.innerText = data

})