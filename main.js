let bannerUrl = [
    'http://pic1.win4000.com/wallpaper/2018-08-13/5b70fbdf5ff4d.jpg',
    'https://images4.alphacoders.com/588/588913.jpg',
    'http://img.yxbao.com/article/image/201801/24/645b739297.jpg'
]

createImgs()
initial()

let n = 1
setInterval(() => {
    leave()
    enter()
    n += 1
}, 2500)















/************************************/

function nInitial(n) {
    let size = bannerUrl.length
    if (n > size) {
        n = n % size
        if (n === 0) {
            n = size
        }
    }
    return n
}

function createImgs() {
    for (let i = 0; i < bannerUrl.length; i++) {
        $(banner).append('<img src=' + bannerUrl[i] + '>')
    }
}

function initial() {
    $('#banner img:nth-child(1)').addClass('center').siblings().addClass('start')
}

function makeMove($node, startClass, endClass) {
    return $node.removeClass(startClass).addClass(endClass)
}

function leave() {
    return makeMove($(`#banner img:nth-child(${nInitial(n)})`), 'center', 'move').one('transitionend ', (current) => {
        makeMove($(current.currentTarget), 'move', 'start')
    })
}

function enter() {
    return makeMove($(`#banner img:nth-child(${nInitial(n + 1)})`), 'start', 'center')
}