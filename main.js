const calendarButton = document.querySelector("#generateCalendarBtn");
const calendar = document.querySelector(".calendar");

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = "url('" + path + "')";
};

const calendarDays = 20;
const createCalendar = () => {
    calendar.innerHTML = ""; // Clear previous doors
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");
        calendarDoor.classList.add("img");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendar.appendChild(calendarDoor);
        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = (i + 1);
        calendarDoor.appendChild(calendarDoorText);
        const imgNumber = i + 1;
        const imgPath = `${imgNumber}.jpg`;
        calendarDoorText.addEventListener("click", openDoor.bind(null, imgPath));
    }
};

calendarButton.addEventListener("click", createCalendar);
