import $ from "jquery"
import "../src/app2.css"

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const localKey = "app2-index"
const index = localStorage.getItem(localKey)

$tabBar.on("click", "li", (e)=>{
    const $li = $(e.currentTarget);
    const index = $li.index();
    localStorage.setItem(localKey, index)
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");

    $tabContent.children()
        .eq(index).addClass("active")
        .siblings().removeClass("active")
})

$tabBar.children().eq(index).trigger("click")