const openPopup = () => {
    window.open('popup.html', 'Popup', 'width=300px, height=300px');
}

document.getElementById("quickView").addEventListener("click", openPopup);