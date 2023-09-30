const part = document.getElementsByClassName('part1--clickable');
const part2 = document.getElementsByClassName('part2--clickable');
const part3 = document.getElementsByClassName('part3--clickable');

part[0].addEventListener('click', () => addDescription());
part2[0].addEventListener('click', () => addDescription());
part3[0].addEventListener('click', () => addDescription());

function addDescription() {
    //Я использую warning для того, чтобы напоминать любимым пользователям, ищущим туалет, о самом важном.
    //Для того, чтобы они не плошали в самый неподходящий момент, как это делал я
    toastr.warning('Не забывай какать перед походом в университет!', 'Напоминание', {timeout: 10000});
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[0].style.display = "flex";
    tooltip[0].style.justifyContent = "center"
    tooltip[0].style.height = 100 + "px";
    tooltip[0].style.width = 100 + "px";
    tooltip[0].style.left = "50px";
    tooltip[0].style.top = "200px";
    tooltip[0].style.position = "absolute";
    let audio = new Audio('../sounds/dry-fart.mp3');
    audio.play();
}

part[0].addEventListener('mouseout', function () {
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[0].style.display = "none";
})

part2[0].addEventListener('mouseout', function () {
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[0].style.display = "none";
})

part3[0].addEventListener('mouseout', function () {
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[0].style.display = "none";
})