let data = []
const inputNftAddress = document.getElementById("input-nft-address")
const inputNotificationMessage = document.getElementById("input-notification-message")
const sendBtn = document.getElementById("send-btn")
let savedData = document.getElementById("saved-data")
const note = "Notified"

sendBtn.addEventListener("click", function() {
    data.push(inputNftAddress.value)
    savedData.innerText = note
})