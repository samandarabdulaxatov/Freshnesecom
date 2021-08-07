var elSiteFormSection = document.querySelector(".forms");
var elSiteFormToggle = elSiteFormSection.querySelector(".form-wrapper__toggler");

var elProductSection = document.querySelector(".card__list");
var elListView = document.querySelector(".link-list");
var elGridView = document.querySelector(".link-grid");

var elSectionForms = document.querySelector(".body");
var elOpenModal = document.querySelector(".button-karzinka");



if( elSiteFormToggle){
  elSiteFormToggle.addEventListener("click", function(){
    elSiteFormSection.classList.toggle("form-open");
  });
}



if(elGridView){
  elGridView.addEventListener("click", function(){
    elProductSection.classList.add("card__list-grid");
  });
}
if(elListView){
  elListView.addEventListener("click", function(){
    elProductSection.classList.remove("card__list-grid");
  });
}



if(elOpenModal){
  elOpenModal.addEventListener("click", function(){
    elSectionForms.classList.toggle("js-open-modal");
  });
}

