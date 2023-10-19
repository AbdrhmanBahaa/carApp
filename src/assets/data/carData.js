// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";
// import "react-image-gallery/styles/css/image-gallery.css";


const carData = [
  {
    id: 1,
    numberOfSeats: "5",
    rating: 4,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Mode 2015",
    price: 5000,
    numberOfDoors: "4",
    miles:"12000km",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "2000CC",
    theCcarIsChecked:"yes",//السيارة مفحوصة
    carAccident:"yes",
    carCondition:"good excellent bad",
    TheCarIsSwissOrImported:"swiss",
    phoneNumber:"02001009839",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    numberOfSeats: "5",
    rating: 3,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 10000,
    numberOfDoors: "2",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "500hh",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    numberOfSeats: "5",
    rating: 3,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 25000,
    numberOfDoors: "3",
    drivetrain: "Drivetrain Type",
    engineCapacity:"engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    numberOfSeats: "5",
    rating: 5,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 12000,
    numberOfDoors: "6",
    drivetrain: "Drivetrain Type",
    engineCapacity:"engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    numberOfSeats: "5",
    rating: 1,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45000,
    numberOfDoors: "2",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    numberOfSeats: "5",
    rating: 3,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 8500,
    numberOfDoors: "4",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    numberOfSeats: "5",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 4000,
    numberOfDoors: "4",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    numberOfSeats: "5",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 1000,
    numberOfDoors: "4",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 9,
    numberOfSeats: "5",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 2300,
    numberOfDoors: "4",
    drivetrain: "Drivetrain Type",
    engineCapacity: "engineCapacity",
    enginePower: "enginePower",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam .",
  },

];



export default carData;
