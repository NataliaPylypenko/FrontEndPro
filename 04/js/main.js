let time = prompt('Enter the number of hours to convert them to seconds');
time = parseInt(time);

if (time) {
    let seconds = time * 60 * 60;
    alert(`There are ${seconds} seconds at ${time} hours`);
} else {
    alert('You must enter number of hours!!!');
}