export default function view_price(gia) {
    let arr = Array.from(String(gia), Number);
    arr.reverse()

    let viewPrice = []
    let dem = 0
    for (let i of arr) {
        dem++
        viewPrice.push(i)
        if (dem % 3 == 0) viewPrice.push('.')
    }
    if (arr.length % 3 == 0) viewPrice.pop()
    viewPrice.reverse()
    return viewPrice.join('')
}
