let activeSection = 0
const divList = [...document.querySelectorAll('.questionContainer')]
const sectionList = [...document.querySelectorAll('.query')]

divList.forEach((divSelected, index) => {
  divSelected.addEventListener('click', function () {
    changeSection(index)
  })
})

function changeSection(index) {
  sectionList[activeSection].classList.remove('active')
  sectionList[index].classList.add('active')
  activeSection = index
}
