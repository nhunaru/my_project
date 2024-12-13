function calculate() {
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const water = parseFloat(document.getElementById('water').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const timeframe = document.getElementById('timeframe').value;

    let transportCarbon = 0;
    let waterCarbon = water * 0.001; 
    let electricityCarbon = electricity * 0.5;

    switch (timeframe) {
        case 'day':
            transportCarbon = transport * 0.25;
            break;
        case 'week':
            transportCarbon = transport * 0.25 * 7;
            break;
        case 'month':
            transportCarbon = transport * 0.25 * 30;
            break;
    }

    const totalCarbon = transportCarbon + waterCarbon + electricityCarbon;

    document.getElementById('result').innerText = `${totalCarbon.toFixed(2)} kg CO2 (${timeframe})`;

    let commentText = '';
    if (totalCarbon < 5) {
        commentText = "Great job! Your carbon footprint is low. Keep up the sustainable practices.";
    } else if (totalCarbon >= 5 && totalCarbon < 15) {
        commentText = "You're doing okay, but there’s room for improvement to lower your carbon emissions.";
    } else {
        commentText = "Warning: Your carbon footprint is relatively high. Consider making changes to reduce emissions.";
    }

    document.getElementById('comment').innerText = commentText;
}
