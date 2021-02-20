import selectOption from "./selectOption";

const state = {
    selectedOption: "color",
    r: 0,
    g: 0,
    b: 0
}

$(".option").click((e) => {
    state.selectedOption = selectOption(e)
});


$(".slider").slider({
    range: "min",
    min: 0,
    max: 256,
    value: 0,
    step: .1,
    slide: (e, ui)=>{
        state[e.target.getAttribute("id")] = ui.value;
        const {r,g,b, selectedOption} = state;
        $(".output-box").css(selectedOption, `rgb(${r},${g},${b})`)
    }
});



