document.getElementById("profileForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Profile submitted successfully!");
});

function logout(){
    window.location.href = "index.html";
}
