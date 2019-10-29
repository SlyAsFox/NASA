

const markers2 =(name) => {
const curr_date = new Date().toISOString().split('-').join('').split(':').join('').split('.').join('').slice(0, 9) + '000000Z';
// console.log(curr_date);
// const url = `https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/locations/${ name }/20191018T220000Z,${ curr_date }/geo/`;
//
// let request = new XMLHttpRequest();
// request.open("GET", url, false);
// request.send();
// const xml = request.responseXML;
// const result = xml.getElementsByTagName("Result")[0].getElementsByTagName("Data");
// const x = result[0].getElementsByTagName("Longitude");
// const y = result[0].getElementsByTagName("Latitude");
   let markers = [];
let index = Math.random() * 10;
for (let i = 0; i < 500; i++) {


    // console.log(x);
    markers.push({
        id: i,
        city: `${ name}`,
        color: "red",
        coordinates: [Math.sin(i / 10) * 20, (i /10 + index) * 10],
        value: 10
    });
} return(markers)};
export default markers2;
