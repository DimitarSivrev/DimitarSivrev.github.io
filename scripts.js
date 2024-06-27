document.addEventListener("DOMContentLoaded", function() {
    const schedule = [
        { date: "2024-07-01", event: "Opening Ceremony" },
        { date: "2024-07-02", event: "Round 1 Matches" },
        { date: "2024-07-03", event: "Round 2 Matches" },
        { date: "2024-07-04", event: "Quarterfinals" },
        { date: "2024-07-05", event: "Semifinals" },
        { date: "2024-07-06", event: "Finals" },
        { date: "2024-07-07", event: "Closing Ceremony" },
    ];

    const participants = [
        "Alice Johnson",
        "Bob Smith",
        "Charlie Davis",
        "Diana Evans",
    ];

    const scheduleList = document.getElementById("schedule-list");
    schedule.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.date}: ${item.event}`;
        scheduleList.appendChild(li);
    });

    const participantsList = document.getElementById("participants-list");
    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = participant;
        participantsList.appendChild(li);
    });
});
