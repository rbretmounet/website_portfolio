
function modal_handle(modal,i){
  console.log(modal)
  // Get the modal
  var modal = document.getElementById(modal);
  console.log(modal)

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[i];
  console.log(span)
  // When the user clicks on the button, open the modal
  modal.style.display = "block";
  

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    console.log("here")
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
