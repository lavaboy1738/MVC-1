import $ from "jquery"

const $tabBar = $("#app2 .tab-bar");

$tabBar.on("click", "li", (e)=>{
    console.log(e.currentTarget);
})