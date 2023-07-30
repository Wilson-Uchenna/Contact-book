const searchContactName = document.getElementById('searchContact');
const names = JSON.parse(localStorage.getItem('names'));
const itemID = document.getElementsByClassName('second-section-container');
const heading = document.getElementById('heading');
const sectionContainer = document.getElementById('first-section')

document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('targetElement');

    names.forEach(name => {
        const newElement = document.createElement('div');
        newElement.classList.add('second-section-container');
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
    targetElement.insertAdjacentElement('afterEnd', newElement);
                });


                function searchContact() {
                    const contactValue = searchContactName.value.toLowerCase().trim();
                    console.log(itemID.length)
                    for (let i = 0; i < itemID.length; i++) {
                        const name = itemID[i].querySelector('.second-section-item .section-section-item p');
                        let nameElement = name.textContent.toLowerCase().trim();
                        // console.l)
                        if (contactValue === '') {
                            itemID[i].style.display = 'block';
                            heading.style.display = 'block';
                            sectionContainer.style.display = 'flex';
                        }
                        else if(nameElement.includes(contactValue)) {
                            itemID[i].style.display = 'block';
                            
                        }
                        else {
                            itemID[i].style.display = 'none';
                        }
                }
                }
                searchContactName.addEventListener('input', searchContact)
 })