const photos = [
    {x: 265, y: 657, img: "rc-034.jpg"},
    {x: 460, y: 772, img: "rc-002.jpg"},
    {x: 636, y: 771, img: "rc-003.jpg"},
    {x: 493, y: 715, img: "rc-005.jpg"},
    {x: 716, y: 662, img: "rc-006.jpg"},
    {x: 839, y: 709, img: "rc-007.jpg"},
    {x: 879, y: 710, img: "rc-008.jpg"},
    {x: 853, y: 644, img: "rc-009.jpg"},
    {x: 880, y: 671, img: "rc-010.jpg"},
    //{x: 783, y: 645, img: "rc-11.jpg"},
    {x: 736, y: 554, img: "rc-012.jpg"},
    {x: 640, y: 562, img: "rc-013.jpg"},
    {x: 673, y: 573, img: "rc-014.jpg"},
    {x: 616, y: 573, img: "rc-015.jpg"},
    {x: 615, y: 533, img: "rc-016.jpg"},
    {x: 667, y: 523, img: "rc-017.jpg"},
    {x: 773, y: 572, img: "rc-018.jpg"},
    {x: 612, y: 635, img: "rc-019.jpg"},
    //{x: 780, y: 15, img: "rc-020.jpg"},
    {x: 582, y: 602, img: "rc-021.jpg"},
    {x: 568, y: 558, img: "rc-022.jpg"},
    {x: 535, y: 575, img: "rc-023.jpg"},
    {x: 567, y: 540, img: "rc-024.jpg"},
    //{x: 980, y: 15, img: "rc-025.jpg"},
    {x: 505, y: 567, img: "rc-026.jpg"},
    //{x: 60, y: 115, img: "rc-027.jpg"},
    //{x: 100, y: 115, img: "rc-028.jpg"},
    {x: 490, y: 658, img: "rc-029.jpg"},
    {x: 470, y: 688, img: "rc-030.jpg"},
    {x: 425, y: 690, img: "rc-031.jpg"},
    {x: 410, y: 660, img: "rc-032.jpg"},
    {x: 305, y: 678, img: "rc-033.jpg"},
    /*
    {x: 380, y: 115, img: "rc-035.jpg"},
    {x: 420, y: 115, img: "rc-036.jpg"},
    {x: 460, y: 115, img: "rc-037.jpg"},
    {x: 500, y: 115, img: "rc-038.jpg"},
    {x: 540, y: 115, img: "rc-039.jpg"},
    {x: 580, y: 115, img: "rc-040.jpg"},
    {x: 620, y: 115, img: "rc-041.jpg"},
    {x: 660, y: 115, img: "rc-042.jpg"},
    {x: 700, y: 115, img: "rc-043.jpg"},
    {x: 740, y: 115, img: "rc-044.jpg"},
    {x: 780, y: 115, img: "rc-045.jpg"},
    {x: 820, y: 115, img: "rc-046.jpg"},
    {x: 860, y: 115, img: "rc-047.jpg"},
    {x: 900, y: 115, img: "rc-048.jpg"},
    {x: 940, y: 115, img: "rc-049.jpg"},
    {x: 980, y: 115, img: "rc-050.jpg"},
    {x: 20, y: 215, img: "rc-051.jpg"},
    {x: 60, y: 215, img: "rc-052.jpg"},
    {x: 100, y: 215, img: "rc-053.jpg"},
    {x: 140, y: 215, img: "rc-054.jpg"},
    {x: 180, y: 215, img: "rc-055.jpg"},
    {x: 220, y: 215, img: "rc-056.jpg"},
    {x: 260, y: 215, img: "rc-057.jpg"},
    {x: 300, y: 215, img: "rc-058.jpg"},
    {x: 340, y: 215, img: "rc-059.jpg"},
    {x: 380, y: 215, img: "rc-060.jpg"},
    {x: 420, y: 215, img: "rc-061.jpg"},
    {x: 460, y: 215, img: "rc-062.jpg"},
    {x: 500, y: 215, img: "rc-063.jpg"},
    {x: 540, y: 215, img: "rc-064.jpg"},
    {x: 580, y: 215, img: "rc-065.jpg"},
    {x: 620, y: 215, img: "rc-066.jpg"},
    {x: 660, y: 215, img: "rc-067.jpg"},
    {x: 700, y: 215, img: "rc-068.jpg"},
    {x: 740, y: 215, img: "rc-069.jpg"},
    {x: 780, y: 215, img: "rc-070.jpg"},
    {x: 820, y: 215, img: "rc-071.jpg"},
    {x: 860, y: 215, img: "rc-072.jpg"},
    {x: 900, y: 215, img: "rc-073.jpg"},
    {x: 940, y: 215, img: "rc-074.jpg"},
    {x: 980, y: 215, img: "rc-075.jpg"},
    {x: 20, y: 315, img: "rc-076.jpg"},
    {x: 60, y: 315, img: "rc-077.jpg"},
    {x: 100, y: 315, img: "rc-078.jpg"},
    {x: 140, y: 315, img: "rc-079.jpg"},
    {x: 180, y: 315, img: "rc-080.jpg"},
    {x: 220, y: 315, img: "rc-081.jpg"},
    {x: 260, y: 315, img: "rc-082.jpg"},
    {x: 300, y: 315, img: "rc-083.jpg"},
    {x: 340, y: 315, img: "rc-084.jpg"},
    {x: 380, y: 315, img: "rc-085.jpg"},
    {x: 420, y: 315, img: "rc-086.jpg"},
    {x: 460, y: 315, img: "rc-087.jpg"},
    {x: 500, y: 315, img: "rc-088.jpg"},
    {x: 540, y: 315, img: "rc-089.jpg"},
    {x: 580, y: 315, img: "rc-090.jpg"},
    {x: 620, y: 315, img: "rc-091.jpg"},
    {x: 660, y: 315, img: "rc-092.jpg"},
    {x: 700, y: 315, img: "rc-093.jpg"},
    {x: 740, y: 315, img: "rc-094.jpg"},
    {x: 780, y: 315, img: "rc-095.jpg"},
    {x: 820, y: 315, img: "rc-096.jpg"},
    {x: 860, y: 315, img: "rc-097.jpg"},
    {x: 900, y: 315, img: "rc-098.jpg"},
    {x: 940, y: 315, img: "rc-099.jpg"},
    {x: 980, y: 315, img: "rc-100.jpg"},
    {x: 20, y: 415, img: "rc-101.jpg"},
    {x: 60, y: 415, img: "rc-102.jpg"},
    {x: 100, y: 415, img: "rc-103.jpg"},
    {x: 140, y: 415, img: "rc-104.jpg"},
    {x: 180, y: 415, img: "rc-105.jpg"},
    {x: 220, y: 415, img: "rc-106.jpg"},
    {x: 260, y: 415, img: "rc-107.jpg"},
    {x: 300, y: 415, img: "rc-108.jpg"},
    {x: 340, y: 415, img: "rc-109.jpg"},
    {x: 380, y: 415, img: "rc-110.jpg"},
    {x: 420, y: 415, img: "rc-111.jpg"},
    {x: 460, y: 415, img: "rc-112.jpg"},
    {x: 500, y: 415, img: "rc-113.jpg"},
    {x: 540, y: 415, img: "rc-114.jpg"},
    {x: 580, y: 415, img: "rc-115.jpg"},
    {x: 620, y: 415, img: "rc-116.jpg"},
    {x: 660, y: 415, img: "rc-117.jpg"},
    {x: 700, y: 415, img: "rc-118.jpg"},
    {x: 740, y: 415, img: "rc-119.jpg"},
    {x: 780, y: 415, img: "rc-120.jpg"},
    {x: 820, y: 415, img: "rc-121.jpg"},
    {x: 860, y: 415, img: "rc-122.jpg"},
    {x: 900, y: 415, img: "rc-123.jpg"},
    {x: 940, y: 415, img: "rc-124.jpg"},
    */
]

for (const photo of photos) {
    var point = document.createElement("div")
    point.classList.add("point")
    point.style.left = photo.x + "px"
    point.style.top = photo.y + "px"

    point.addEventListener("click", function (e) {
        document.getElementById("photo").style.backgroundImage =
            "url(photos/" + photo.img + ")"
        document.querySelectorAll(".point").forEach(function (e) {
            e.classList.remove("active")
        })
        this.classList.add("active")
    })

    document.getElementById("map").appendChild(point)
}

document.querySelector(".point").click()

document.addEventListener("mousedown", (e) => {
    const map = document.getElementById("map")
    const mapScale = 1.0 / (map.getBoundingClientRect().width / map.offsetWidth)

    document.getElementById("x").innerHTML = Math.round(e.pageX * mapScale)
    document.getElementById("y").innerHTML =
        1000 - Math.round((window.innerHeight - e.pageY) * mapScale)
})
