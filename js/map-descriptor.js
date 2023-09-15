const part = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');

function showToolTip(evt) {


}

part.addEventListener('click', () => addDescription());
part2.addEventListener('click', () => addDescription());
part3.addEventListener('click', () => addDescription());

function addDescription() {
    //Я использую warning для того, чтобы напоминать любимым пользователям, ищущим туалет, о самом важном.
    //Для того, чтобы они не плошали в самый неподходящий момент, как это делал я
    toastr.warning('Не забывай какать перед походом в университет!', 'Напоминание', {timeout: 10000});
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "flex";
    tooltip.style.justifyContent = "center"
    tooltip.style.height = 100 + "px";
    tooltip.style.width = 100 + "px";
    tooltip.style.left = "50px";
    tooltip.style.top = "200px";
    tooltip.style.position = "absolute";
    /*tooltip.style.left = 5 + 'px';
    tooltip.style.top = 200 + 'px';*/
    let audio = new Audio('../sounds/dry-fart.mp3');
    audio.play();
}

part.addEventListener('mouseout', function () {
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
})
