export default function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => console.log(position));
  } else {
    console.log("No geolocation");
  }
}
