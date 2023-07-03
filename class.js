const searchContactName = document.getElementById('searchContact');
const names = JSON.parse(localStorage.getItem('names'));
document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('targetElement');

    names.forEach(name => {
        const newElement = document.createElement('div');
    newElement.innerHTML = `<div class="second-section-item">
                                <div class="section-section-item">
                                    <div style="background-color: #fff4d8;" class="second-image-background">
                                        <img src="img/first-image.png">
                                    </div>
                                    <p>${name}</p>
                                </div>
                                <div class="second-section-section-item">
                                    <img src="img/whitestar.svg">
                                    <img src="img/whitecall.svg">
                                    <img src="img/whiteemail.svg">
                                </div>
                            </div>`;
    targetElement.insertAdjacentElement('afterbegin', newElement);
                })
 })

    function searchContact() {
        const contactValue = searchContactName.value;
        for (let i = 0; i <name.length;i++) {
        const filteredNames = names.filter((name) => name[i].includes(contactValue))
        }
    }