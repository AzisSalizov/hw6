let $trafficRedBtn = document.querySelector("#red_btn");
let $trafficYellowBtn = document.querySelector("#yellow_btn");
let $trafficGreenBtn = document.querySelector("#green_btn");

function resetClassActive() {
    $trafficRedBtn.classList.remove("active");
    $trafficYellowBtn.classList.remove("active");
    $trafficGreenBtn.classList.remove("active");
    document.querySelector("#traffic-content").textContent = "";
}

$trafficRedBtn.addEventListener("mouseover", function () {
    resetClassActive()
    $trafficRedBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Stop"
    document.querySelector("#traffic-content").style.color = "red"
})

$trafficRedBtn.addEventListener("mouseout", function () {
    resetClassActive();
})

$trafficYellowBtn.addEventListener("mouseover", function () {
    resetClassActive()
    $trafficYellowBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Wait"
    document.querySelector("#traffic-content").style.color = "yellow"
})

$trafficYellowBtn.addEventListener("mouseout", function () {
    resetClassActive();
})


$trafficGreenBtn.addEventListener("mouseover", function () {
    resetClassActive()
    $trafficGreenBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Go"
    document.querySelector("#traffic-content").style.color = "green"
})


$trafficGreenBtn.addEventListener("mouseout", function () {
    resetClassActive();
})




