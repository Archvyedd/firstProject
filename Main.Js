function ShowLink(){
    const x = document.getElementById("ContactDIV");
    const ColorContact = document.getElementById("ColorContact");
    /* Center the Contact DIV but not good for responsiveness
    const page = document.getElementById("wpageID");
    const pos = ColorContact.getBoundingClientRect();
    const div = x.getBoundingClientRect();
    const wpage = page.getBoundingClientRect();
    let ContactDIVHalf = (wpage.width*.15)/2;
    let ContactHeaderHalf = ((pos.right - pos.left)/2);*/
    if (x.style.display === "none") {
        x.style.display = "block";
        ColorContact.style.backgroundColor = '#575658';
        /*x.style.left = pos.left - (ContactDIVHalf - ContactHeaderHalf) + 'px';*/
      } else {
        x.style.display = "none";
        ColorContact.style.backgroundColor = '#343434';
      }
}