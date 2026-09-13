$('.countdown-timer').countdown({
    date: "2027-02-19T12:00:00Z",

    render: function(data) {
        $(".days .value").html(this.leadingZeros(data.days, 2));
        $(".hours .value").html(this.leadingZeros(data.hours, 2));
        $(".minutes .value").html(this.leadingZeros(data.min, 2));
        $(".seconds .value").html(this.leadingZeros(data.sec, 2));
    }
});
