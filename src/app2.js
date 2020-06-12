import $ from "jquery"
import "../src/app2.css"

const html = `
        <section id="app2">
            <ol class="tab-bar">
                <li>1</li>
                <li>2</li>
            </ol>
            <ul class="tab-content">
                <li>content1</li>
                <li>content2</li>
            </ul>
        </section>
`

const $element = $(html).appendTo($("body>#apps"))

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const localKey = "app2-index"
const index = localStorage.getItem(localKey) || 0;


$tabBar.on("click", "li", (e) => {
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