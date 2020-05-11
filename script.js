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
    {x: 736, y: 554, img: "rc-012.jpg"},
    {x: 640, y: 562, img: "rc-013.jpg"},
    {x: 673, y: 573, img: "rc-014.jpg"},
    {x: 616, y: 573, img: "rc-015.jpg"},
    {x: 615, y: 533, img: "rc-016.jpg"},
    {x: 667, y: 523, img: "rc-017.jpg"},
    {x: 773, y: 572, img: "rc-018.jpg"},
    {x: 612, y: 635, img: "rc-019.jpg"},
    {x: 582, y: 602, img: "rc-021.jpg"},
    {x: 568, y: 558, img: "rc-022.jpg"},
    {x: 535, y: 575, img: "rc-023.jpg"},
    {x: 567, y: 540, img: "rc-024.jpg"},
    {x: 505, y: 567, img: "rc-026.jpg"},
    {x: 490, y: 658, img: "rc-029.jpg"},
    {x: 470, y: 688, img: "rc-030.jpg"},
    {x: 425, y: 690, img: "rc-031.jpg"},
    {x: 410, y: 660, img: "rc-032.jpg"},
    {x: 305, y: 678, img: "rc-033.jpg"},
    {x: 231, y: 689, img: "rc-035.jpg"},
    {x: 259, y: 826, img: "rc-036.jpg"},
    {x: 243, y: 804, img: "rc-037.jpg"},
    {x: 229, y: 785, img: "rc-038.jpg"},
    {x: 296, y: 777, img: "rc-039.jpg"},
    {x: 359, y: 811, img: "rc-040.jpg"},
    {x: 338, y: 794, img: "rc-041.jpg"},
    {x: 383, y: 785, img: "rc-042.jpg"},
    {x: 408, y: 819, img: "rc-043.jpg"},
    {x: 355, y: 831, img: "rc-044.jpg"},
    {x: 295, y: 747, img: "rc-046.jpg"},
    {x: 341, y: 766, img: "rc-047.jpg"},
    {x: 360, y: 764, img: "rc-048.jpg"},
    {x: 310, y: 727, img: "rc-049.jpg"},
    {x: 369, y: 746, img: "rc-052.jpg"},
    {x: 276, y: 724, img: "rc-053.jpg"},
    {x: 280, y: 689, img: "rc-057.jpg"},
    {x: 311, y: 644, img: "rc-058.jpg"},
    {x: 304, y: 616, img: "rc-059.jpg"},
    {x: 350, y: 545, img: "rc-060.jpg"},
    {x: 386, y: 500, img: "rc-061.jpg"},
    {x: 346, y: 271, img: "rc-062.jpg"},
    {x: 298, y: 272, img: "rc-063.jpg"},
    {x: 324, y: 325, img: "rc-064.jpg"},
    {x: 235, y: 329, img: "rc-065.jpg"},
    {x: 133, y: 315, img: "rc-066.jpg"},
    {x: 156, y: 342, img: "rc-067.jpg"},
    {x: 234, y: 370, img: "rc-068.jpg"},
    {x: 188, y: 382, img: "rc-069.jpg"},
    {x: 220, y: 354, img: "rc-071.jpg"},
    {x: 243, y: 456, img: "rc-072.jpg"},
    {x: 295, y: 496, img: "rc-073.jpg"},
    {x: 344, y: 432, img: "rc-074.jpg"},
    {x: 509, y: 326, img: "rc-075.jpg"},
    {x: 585, y: 370, img: "rc-076.jpg"},
    {x: 666, y: 397, img: "rc-077.jpg"},
    {x: 745, y: 400, img: "rc-079.jpg"},
    {x: 661, y: 312, img: "rc-080.jpg"},
    {x: 705, y: 300, img: "rc-082.jpg"},
    {x: 723, y: 286, img: "rc-083.jpg"},
    {x: 789, y: 321, img: "rc-084.jpg"},
    {x: 806, y: 346, img: "rc-085.jpg"},
    {x: 836, y: 344, img: "rc-086.jpg"},
    {x: 768, y: 296, img: "rc-087.jpg"},
    {x: 834, y: 299, img: "rc-088.jpg"},
    {x: 809, y: 320, img: "rc-089.jpg"},
    {x: 841, y: 284, img: "rc-091.jpg"},
    {x: 730, y: 250, img: "rc-092.jpg"},
    {x: 798, y: 264, img: "rc-093.jpg"},
    {x: 786, y: 231, img: "rc-094.jpg"},
    {x: 713, y: 224, img: "rc-095.jpg"},
    {x: 736, y: 174, img: "rc-096.jpg"},
    {x: 700, y: 177, img: "rc-097.jpg"},
    {x: 685, y: 214, img: "rc-099.jpg"},
    {x: 661, y: 176, img: "rc-100.jpg"},
    {x: 669, y: 221, img: "rc-101.jpg"},
    {x: 626, y: 186, img: "rc-102.jpg"},
    {x: 650, y: 246, img: "rc-103.jpg"},
    {x: 601, y: 285, img: "rc-104.jpg"},
    {x: 626, y: 316, img: "rc-105.jpg"},
    {x: 593, y: 319, img: "rc-106.jpg"},
    {x: 541, y: 347, img: "rc-107.jpg"},
    {x: 553, y: 289, img: "rc-108.jpg"},
    {x: 478, y: 299, img: "rc-109.jpg"},
    {x: 286, y: 649, img: "rc-113.jpg"},
    {x: 271, y: 604, img: "rc-114.jpg"},
    {x: 233, y: 721, img: "rc-115.jpg"},
    {x: 145, y: 682, img: "rc-116.jpg"},
    {x: 175, y: 719, img: "rc-117.jpg"},
    {x: 393, y: 750, img: "rc-120.jpg"},
    {x: 416, y: 779, img: "rc-122.jpg"},
    {x: 455, y: 809, img: "rc-124.jpg"},
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
