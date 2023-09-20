
function myFunction(x) {
    x.classList.toggle("change");
    if(document.getElementById("mySidebar").style.width == "250px"){
        closeNav();
    }
    else{
        openNav();
    }
  }
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
function LoadDocu(language){
    if(language == "Java"){
        const iframe = document.getElementById('webPageFrame');
        iframe.src = 'https://docs.oracle.com/en/java/javase/20/docs/api/index.html'; // Replace with your desired URL
        iframe.style.display = 'inline-block';
        closeNav();
    }
}