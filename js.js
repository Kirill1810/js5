



//1
const form = prompt ("що виберіть кава чяй і сік")
console.log(form)
switch (form) {
    case "кава":
    alert ("взбодрися")
    break
    case "чяй":
    alert ("тобі з цукром?")
    break
    case "сік":
    alert ("дуже солодко")
    break

    default:
    console.log("а шо тоді?");

}


//2
const mons = prompt ("ведіть день неділі")
console.log(mons)
switch (mons) {
    case "понеділок":
    alert ("1")
    break
    case "вівторок":
    alert ("2")
    break
    case "середа":
    alert ("3")
    break

    case "четвер":
        alert ("4")
        break
        case "пятниця":
        alert ("5")
        break
        case "субота":
        alert ("6")

        case "неділя":
            alert ("7")
            break
    default:
    console.log("а шо тоді?");

}

//3

const year = prompt ("ведіть місяц")
console.log(year)
switch (year) {
    case "грудень":
    case "січень":
    case "лютий":
        alert ("зима")
       break

    case "березень":
    case "квітень":
    case "травень":
    alert (весна)
    break

    case "червень":
    case "липень":
    case "серпень":
    alert (літо)
    break

    case "вереснь":
    case "жовтень":
    case "листопад":
    alert (осінь)
    break



}


//4
const year2 = prompt ("ведіть місяць покаже скільки в ньому днів")
console.log(year2)
switch (year2) {
    case "грудень":
        alert ("29")
       break
    case "січень":
        alert ("30")
       break
    case "лютий":
        alert ("31")
       break

    case "березень":
        alert ("30")
       break
    case "квітень":
        alert ("31")
       break
    case "травень":
    alert (33)
    break

    case "червень":
        alert ("22")
       break
    case "липень":
        alert ("31")
       break
    case "серпень":
    alert (31)
    break

    case "вереснь":
        alert ("20")
       break
    case "жовтень":
        alert ("30")
       break
    case "листопад":
    alert (31)
    break



}

//5

const form2 = prompt ("напишіть колір світлофора")
console.log(form2)
switch (form2) {
    case "червоний":
    alert ("стояти")
    break
    case "жовтий":
    alert ("чекати")
    break
    case "зелений":
    alert ("йти")
    break

    default:
    console.log("а шо тоді?");

}

