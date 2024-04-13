const targetDate = new Date('2024-12-31T23:59:59').getTime();

const interval= setInterval(() => { 
    const now= new Date().getTime();
    const distance= targetDate- now;
    const days= Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds= Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(distance <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML= 'Countdown Finished!';
    }
}, 1000);

