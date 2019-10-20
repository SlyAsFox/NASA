let url = "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/spaseObservatories"

let request = new XMLHttpRequest();
request.open("GET", url, false);
request.send();
const data = request.responseXML.getElementsByTagName('Observatory');

const satelites = [];
for (let i = 0; i < data.length; i++){
    if (data[i].getElementsByTagName('EndTime')[0].textContent >= new Date().toISOString()){
        // console.log(data[i].getElementsByTagName('EndTime')[0].textContent, new Date().toISOString() );
        console.log(data[i].getElementsByTagName("Name")[0].textContent)
        satelites.push(data[i].getElementsByTagName('Id')[0].textContent)
    }
}
console.log(satelites);

const markers = [];
const curr_date = new Date().toISOString().split('-').join('').split(':').join('').split('.').join('').slice(0, 9) + '000000Z';
console.log(curr_date);
for (let i = 0; i < satelites.length; i++) {
    
    url = `https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2/locations/${ satelites[i] }/20191018T220000Z,${ curr_date }/geo/`;

    request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    const xml = request.responseXML;
    const result = xml.getElementsByTagName("Result")[0].getElementsByTagName("Data");
    const x = result[0].getElementsByTagName("Longitude");
    const y = result[0].getElementsByTagName("Latitude");
    console.log(x);
    markers.push({
        id: i,
        city: `${ satelites[i] }`,
        color: "red",
        coordinates: [+x[x.length - 1].textContent, +y[x.length - 1].textContent],
        value: 10
    });
}
export default markers;