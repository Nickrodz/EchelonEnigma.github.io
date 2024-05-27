addEventListener("DOMContentLoaded", function() {
    let catsweeper_button = document.getElementById("catsweeper")
    let catsweeper_frame = document.getElementById("catsweeperframe")
    catsweeper_button.addEventListener("click", function(){
        if (catsweeper_frame.style.display === "block") {
            catsweeper_frame.style.display = "none"
        }
        else {
            catsweeper_frame.style.display = "block"
        }
        
    })
})