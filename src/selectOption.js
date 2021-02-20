export default (e)=>{
    $(".option").removeClass("active");
    e.target.classList.add("active");
    
    return e.target.getAttribute("id");
}