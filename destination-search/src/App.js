import logo from "./logo.svg";
import "./App.css";
import DestinationSearch from "./Components/DestinationSearch";

function App() {
  return (
    <div className="App">
      <DestinationSearch destinationList={destinationList} />{" "}
    </div>
  );
}

export default App;

const destinationList = [
  {
    id: 1,
    name: "Melaka Mosueque",
    imgUrl:
      "https://c8.alamy.com/comp/RPYBJ6/melaka-straits-mosque-masjid-selat-the-floating-mosque-melaka-malaysia-RPYBJ6.jpg",
  },
  {
    id: 2,
    name: "Shrubland",
    imgUrl:
      "https://www.worldatlas.com/r/w1200/upload/27/23/1e/shutterstock-593519258.jpg",
  },
  {
    id: 3,
    name: "NewYork",
    imgUrl:
      "https://tse2.mm.bing.net/th?id=OIP.CX6B20yA9U8yT6N86SPJoAHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Escarpment",
    imgUrl:
      "https://media.nationalgeographic.org/assets/photos/000/206/20654.jpg",
  },
  {
    id: 5,
    name: "Westminister Abbey",
    imgUrl:
      "https://1.bp.blogspot.com/-B7J6ExiDTJs/V11e7sr9jBI/AAAAAAACMZU/ZkUG6VfXT-MHirZoAuoiauFT8D5SjXK-ACLcB/s1600/1.jpg",
  },
  {
    id: 6,
    name: "South Downs National Park",
    imgUrl:
      "https://tse1.mm.bing.net/th?id=OIP.bEHF0W9vUW92BoBUBsVufAHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    name: "National Historic Site",
    imgUrl:
      "https://tse3.mm.bing.net/th?id=OIP.eWzrareW3Gi6Iy5Lm9L7YAHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 8,
    name: "Tower Bridge",
    imgUrl:
      "https://tse1.mm.bing.net/th?id=OIP.1JWOavkmBJXuo4jAKxBoswHaE8&pid=Api&rs=1&c=1&qlt=95&h=180",
  },
  {
    id: 9,
    name: "Arc Here",
    imgUrl:
      "https://s.yimg.com/fz/api/res/1.2/5RxQ_HaIIAU0PPDkLdHYdA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/76eebaa7-82f1-3ec3-9cf4-6e82d82f7772/t_500x300",
  },
];
