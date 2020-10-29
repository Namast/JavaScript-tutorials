var YourBudget = prompt("Ваш бюджет $ в месяц?", "1000");
var NameShop = prompt("Название вашего магазина");

var mainList = {
	budget : "1",
	name : "Shop",
	shopGoods : ["Product1", "Product2", "Product3"],
	employers: {

	},
	open: true
}

mainList.shopGoods[0] = prompt("Какой 1-й тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой 2-й тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой 3-й тип товаров будем продавать?");

window.alert('Бюджет на 1 день составит: ' + YourBudget / 30 + ' $');