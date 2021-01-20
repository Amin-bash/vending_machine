import twix from './../img/twix.jpg';
import coke from './../img/pngfind.com-pepsi-can-png-843265.png';
import jus from './../img/another-juice.png';
import Choco from './../img/cola.png';
import peanuts from './../img/power-drink.png';
import water from './../img/water.png';
import pents from './../img/fat-burner.png';
import Nesck from './../img/power-drink-2.png';

const data = [...Array(5).keys()].map(column => [
  { itemId: `${column}1`, itemName: 'Twix', itemPrice: 5, itemCount: 2, imgUrl: twix },
  { itemId: `${column}2`, itemName: 'Coke', itemPrice: 10, itemCount: 3, imgUrl: coke },
  { itemId: `${column}3`, itemName: 'Jus', itemPrice: 1.5, itemCount: 4, imgUrl: jus },
  { itemId: `${column}4`, itemName: 'Choco', itemPrice: 2.5, itemCount: 1, imgUrl: Choco },
  { itemId: `${column}5`, itemName: 'Peanuts', itemPrice: 7, itemCount: 1, imgUrl: peanuts },
  { itemId: `${column}6`, itemName: 'Water', itemPrice: 15, itemCount: 2, imgUrl: water },
  { itemId: `${column}7`, itemName: 'Peanuts', itemPrice: 3.5, itemCount: 3, imgUrl: pents },
  { itemId: `${column}8`, itemName: 'Chips', itemPrice: 1, itemCount: 4, imgUrl: Nesck }
]);

export default data;