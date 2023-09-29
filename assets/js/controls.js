const next = document.getElementById("next");
const prev = document.getElementById("prev");

let nextpage = document.querySelector(".TestimonialsComments");

next.onclick = function () {
  let TestimonialsActive = document.querySelector(".TestimonialsActive");
  var CurrentCommentIndex = getChildIndex(nextpage, TestimonialsActive);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove(
        "TestimonialsActive"
      );
     
    }

      if (CurrentCommentIndex < nextpage.childElementCount - 1) {
        nextpage.children[CurrentCommentIndex + 1].classList.add(
          "TestimonialsActive"
        );
        
      
      } else if (CurrentCommentIndex == nextpage.childElementCount - 1) {
        console.log("too many comments");
        nextpage.children[0].classList.add("TestimonialsActive");
        CurrentCommentIndex = 0;
      }
  
  }
  
};

prev.onclick = function () {
  let TestimonialsActive = document.querySelector(".TestimonialsActive");
  var CurrentCommentIndex = getChildIndex(nextpage, TestimonialsActive);

  if (
    CurrentCommentIndex >= 0 &&
    CurrentCommentIndex < nextpage.childElementCount
  ) {
    for (b = 0; b < nextpage.childElementCount; b++) {
      nextpage.children[CurrentCommentIndex].classList.remove(
        "TestimonialsActive"
      );
    }

    if (
      CurrentCommentIndex <= nextpage.childElementCount - 1 &&
      CurrentCommentIndex > 0
    ) {
      nextpage.children[CurrentCommentIndex - 1].classList.add(
        "TestimonialsActive"
      );
    } else if (CurrentCommentIndex <= 0) {
      nextpage.children[nextpage.childElementCount - 1].classList.add(
        "TestimonialsActive"
      );
    }
  }
 
};



function getChildIndex(parentElement, childElement) {
  var childIndex = Array.from(parentElement.children).indexOf(childElement);
  return childIndex;
}
