const nameVeh = [{
	'Name' : 'Bullet',
	'Id' : 0,
	'Price' : 80000,
	'Categories' : 'Car',
	'Subcat' : 'Sport',
	'Desk' : 'The Bulllet is a modern car that has a flexible design and its color combination makes it unique as a cool racing car',
	'StockSelled' : 30,
	'SrcImg' : 'Sf-Img/bullet.png'
},{
	'Name' : 'Faggio',
	'Id' : 1,
	'Price' : 4000,
	'Categories' : 'MotorCycle',
	'Subcat' : 'Antique',
	'Desk' : 'Faggio is an antique motorcycle that has been around for a long time, with its simple design making it attractive to antique vehicle owners',
	'StockSelled' : 10,
	'SrcImg' : 'Sf-Img/faggio.png'
},{
	'Name' : 'Huntley',
	'Id' : 2,
	'Price' : 2500,
	'Categories' : 'Car',
	'Subcat' : 'Reguler',
	'Desk' : 'The Huntley is a family car that is comfortable to use and with the ability to withstand a wide variety of climates',
	'StockSelled' : 18,
	'SrcImg' : 'Sf-Img/huntley.jpg'
},{
	'Name' : 'Infernus',
	'Id' : 3,
	'Price' : 150000,
	'Categories' : 'Car',
	'Subcat' : 'Sport',
	'Desk' : 'The Infernus is a premium class car that is suitable to be used as a famous car as well as a sports car, with a fairly modern design that makes this car go fast.',
	'StockSelled' : 12,
	'SrcImg' : 'Sf-Img/infernus.png'
},{
	'Name' : 'NRG-500',
	'Id' : 4,
	'Price' : 90000,
	'Categories' : 'MotorCycle',
	'Subcat' : 'Sport',
	'Desk' : 'The NRG-500 is a sports motorbike that can go very fast, has a high-class design and components that make this motorbike a motorbike that is in demand by wealthy collectors.',
	'StockSelled' : 21,
	'SrcImg' : 'Sf-Img/nrg500.jpg'
},{
	'Name' : 'RoadTrain',
	'Id' : 5,
	'Price' : 3000,
	'Categories' : 'Car',
	'Subcat' : 'Commercial',
	'Desk' : 'Roadtrain is a commercial type car that works for trucker workers who can carry various types of cargo for distribution',
	'StockSelled' : 8,
	'SrcImg' : 'Sf-Img/roadtrain.jpg'
},{
	'Name' : 'Slamvan',
	'Id' : 6,
	'Price' : 7000,
	'Categories' : 'Car',
	'Subcat' : 'Antique',
	'Desk' : 'The slamvan is a type of antique lowrider car that is difficult to drive because of its slippery tire components but has a design that is suitable for collection.',
	'StockSelled' : 6,
	'SrcImg' : 'Sf-Img/slamvan.png'
},{
	'Name' : 'Yosemite',
	'Id' : 7,
	'Price' : 3000,
	'Categories' : 'Car',
	'Subcat' : 'Reguler',
	'Desk' : 'Yosemite is a vehicle that is suitable for use in various situations ranging from carrying various kinds of goods to having a car body that is quite tough and strong.',
	'StockSelled' : 32,
	'SrcImg' : 'Sf-Img/yosemite.png'
},{
	'Name' : 'FreeWay',
	'Id' : 8,
	'Price' : 12000,
	'Categories' : 'MotorCycle',
	'Subcat' : 'Antique',
	'Desk' : 'Freeway is an antique motorcycle that has become popular from the past due to its relevant design and usage, which is favored by coordinators and vehicle modifiers.',
	'StockSelled' : 15,
	'SrcImg' : 'Sf-Img/freeway.png'
},{
	'Name' : 'Tropic',
	'Id' : 9,
	'Price' : 75000,
	'Categories' : 'Boat',
	'Subcat' : 'Modern',
	'Desk' : 'tropic is a type of small private luxury ship that is suitable for sailing the oceans to enjoy the ocean conditions with a modern impression that is still carried.',
	'StockSelled' : 4,
	'SrcImg' : 'Sf-Img/tropic.png'
},{
	'Name' : 'Sanchez',
	'Id' : 10,
	'Price' : 6000,
	'Categories' : 'MotorCycle',
	'Subcat' : 'OffRoad',
	'Desk' : 'Sanchez is an offroad type motorbike that can be used in various terrains, its high flexibility makes this motorbike suitable for working in extreme fields.',
	'StockSelled' : 17,
	'SrcImg' : 'Sf-Img/sanchez.png'
},{
	'Name' : 'Taxi',
	'Id' : 11,
	'Price' : 5500,
	'Categories' : 'Car',
	'Subcat' : 'Commercial',
	'Desk' : 'Taxi is a vehicle that must be owned by taxi drivers with designs and controls that have been arranged in such a way for taxi drivers.',
	'StockSelled' : 23,
	'SrcImg' : 'Sf-Img/taxi.png'
},{
	'Name' : 'Dighty',
	'Id' : 12,
	'Price' : 21000,
	'Categories' : 'Boat',
	'Subcat' : 'Reguler',
	'Desk' : 'Dighty is a type of inflatable boat that is used for short time sailing due to its flexible design and low price for use in various activities.',
	'StockSelled' : 22,
	'SrcImg' : 'Sf-Img/dighty.png'
},{
	'Name' : 'Mesa',
	'Id' : 13,
	'Price' : 8000,
	'Categories' : 'Car',
	'Subcat' : 'Reguler',
	'Desk' : 'The Mesa is a family car that is also useful as a pickup to carry various goods, as well as its ability to withstand steep terrain, making the Mesa a suitable family car for long vacations.',
	'StockSelled' : 31,
	'SrcImg' : 'Sf-Img/mesa.png'
}];

const memberList = [{
	'Name' : 'Reguler Class',
	'Profit' : ['Menerima Informasi dealer Lebih Cepat' , 'Menjadi Prioritas dalam kontrak' ,'Kesempatan menerima diskon yang besar', 'Menghapus pemotongan pajak akun'],
	'Cost' : 1000,
	'Time' : '1 Month',
	'Id' : 0
},{
	'Name' : 'Advanced Class',
	'Profit' : ['Menerima Informasi dealer Lebih Cepat' , 'Menjadi Prioritas dalam kontrak' ,'Kesempatan menerima diskon yang besar', 'Menghapus pemotongan pajak akun', 'Item dalam akun menerima kekebalan waktu'],
	'Cost' : 5000,
	'Time' : '6 Month',
	'Id' : 1
}];

const myHistory = [];

let acc = 'Guest Account';
let memberStatus = 'Not a Member';
let balance = 0;
let dealerList = '';
let bestSellerList = '';
let myHistoryList = '';

const myAcc = document.querySelector('.my-acc');
const bestSeller = document.querySelector('.best-seller');
const dealerInfo = document.querySelector('.dealer-info');
const memberInfo = document.querySelector('.member-info');
const balanceInfo = document.querySelector('.balance-info');
const modalProfile = document.querySelector('.modal-profile');
const myProfile = document.querySelector('.my-profile');
const convinceMember = document.querySelector('.convince-member');
const alertModalMember = document.querySelector('.alert-modal-member');
const navbar = document.querySelector('.navbar');

function RestartAll(){
	dealerInfo.innerHTML = dealerList;
	memberInfo.innerHTML = memberStatus;
	balanceInfo.innerHTML = `Balance : ${balance} $`;
	bestSeller.innerHTML = bestSellerList;
	myAcc.innerHTML = acc;
}

function createHistory(){
	function createHistoryList(x,y){
		myHistoryList += `<tr>
                  <th scope="row">${x.No}</th>
                  <td>${x.Date}</td>
                  <td>${x.Veh}</td>
                  <td>${x.Type}</td>
                  <td class="${y}">${x.Status}</td>
                </tr>`;
	}
	myHistoryList = '';
	myHistory.forEach(x => {
		if(x.Status === 'On Going'){
			createHistoryList(x,'text-success');
        }else if(x.Status === 'Canceled'){
        	createHistoryList(x, 'text-danger');
        }else {
        	createHistoryList(x, 'text-warning');
        }
	});
 }

navbar.addEventListener('click', x => {
	if(x.target.innerHTML === 'Features'){
		modalProfile.innerHTML = addFeatures();
	}else if(x.target.innerHTML === 'About Showroom'){
		modalProfile.innerHTML = addAbout();
	}

});

convinceMember.addEventListener('click' , x => {
	if(x.target.innerHTML === 'Yes Sure'){
		let i = x.target.attributes.id.nodeValue;
		if(balance < memberList[i].Cost){
			alertModalMember.innerHTML = convinceModalAlert('Alert !!', 'Failed for join to this class because you not have enough money for join', 'text-danger');
		} else if(memberStatus === memberList[i].Name){
				alertModalMember.innerHTML = convinceModalAlert('Failed !!', 'You already join to this class', 'text-danger');
		} else if (memberStatus === 'Advanced Class' && memberList[i].Name === 'Reguler Class'){
				alertModalMember.innerHTML = convinceModalAlert('Failed !!', 'You already join to higher class then this class !!', 'text-danger');
		} else {
			alertModalMember.innerHTML = convinceModalAlert('Success !!', `Success for join to ${memberList[i].Name} , Thanks for Join to us `, 'text-success');
			balance -= memberList[i].Cost;
			memberStatus = memberList[i].Name;
			RestartAll();
		}
	} else if(x.target.innerHTML === 'Extended'){
		let i = x.target.attributes.id.nodeValue;
		if(balance < memberList[i].Cost){
			alertModalMember.innerHTML = convinceModalAlert('Alert !!', 'Failed for extended to this class because you not have enough money for join', 'text-danger');
		} else {
			alertModalMember.innerHTML = convinceModalAlert('Success !!', `Success for extended period of ${memberList[i].Name} , Thanks for extending `, 'text-success');
			balance -= memberList[i].Cost;
			memberStatus = memberList[i].Name;
			RestartAll();
		}
	}
});

nameVeh.forEach(x => {
	if(x.StockSelled >= 30){
	bestSellerList += `<div class="card mb-3 mx-auto" style="width: 80%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${x.SrcImg}" class="img-fluid rounded-start" alt="..." style="height: 100%;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${x.Name}</h5>
              <p class="card-text">${x.Desk}</p>
              <div class="d-flex justify-content-between">
              <p class="card-text"><small class="text-muted">Total Sold : ${x.StockSelled}</small></p>
              <button type="button" class="btn fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${x.Id}">Show Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
     }
     RestartAll();
});


function callVehicle(x){
	dealerList = '';
	nameVeh.forEach(x => {
	dealerList += `<div class="card mx-auto my-2" style="width: 18rem;">
        <img src="${x.SrcImg}" class="card-img-top" alt="..." style="widt:200px; height:200px;">
        <div class="card-body">
          <h5 class="card-title">${x.Name}</h5>
          <p class="card-text">${x.Subcat}</p>
          <button type="button" class="btn btn-dark fw-bold sm-btn button-cars" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${x.Id}">Show Details</button>
        </div>
      </div>`

      RestartAll();
	});
}

callVehicle();

const labelDealer = document.querySelector('.label-dealer');
const carDetailModal = document.querySelector('.car-detail');
const filterValue = document.querySelector('.filter-value');
const filterButton = document.querySelector('.filter-button');

carDetailModal.addEventListener('click', x => {
	if(x.target.innerHTML === 'Purchase'){
		let i = x.target.attributes.id.nodeValue;
		if(balance < nameVeh[i].Price){
			alertModalMember.innerHTML = convinceModalAlert('Failed !!', 'Failed to purchase this car because your have not enough money for buy it !!', 'text-danger');
		} else {
			alertModalMember.innerHTML = convinceModalAlert('Success ~~', `Congrats you have bought this ${nameVeh[i].Name} ${nameVeh[i].Categories} for ${nameVeh[i].Price}$ you can also see the purchase history !!`, 'text-success');
			balance -= nameVeh[i].Price;
			const d = new Date();
			if(d.getMonth()+1 < 10){
				myHistory.push({
				'No' : myHistory.length + 1,
				'Date' : `${d.getDate()}/0${d.getMonth()+1}/${d.getFullYear()}`,
				'Veh' : nameVeh[i].Name,
				'Type' : nameVeh[i].Categories,
				'Status' : 'On Going'
			});
			} else {
				myHistory.push({
				'No' : myHistory.length + 1,
				'Date' : `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`,
				'Veh' : nameVeh[i].Name,
				'Type' : nameVeh[i].Categories,
				'Status' : 'On Going'
			});
			}
		}
		RestartAll();
	}
});

filterButton.addEventListener('click', (x) => {
	dealerList = '';
	nameVeh.forEach(x => {
		if(x.Categories === filterValue.value){
			labelDealer.innerHTML = `${filterValue.value}s`;
			dealerList += `<div class="card mx-auto my-2" style="width: 18rem;">
        <img src="${x.SrcImg}" class="card-img-top" alt="..." style="widt:200px; height:200px;">
        <div class="card-body">
          <h5 class="card-title">${x.Name}</h5>
          <p class="card-text">${x.Subcat}</p>
          <button type="button" class="btn btn-dark fw-bold sm-btn button-cars" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${x.Id}">Show Details</button>
        </div>
      </div>`;
			RestartAll();
		} else if (filterValue.value === 'All Vehicles'){
			labelDealer.innerHTML = 'All Vehicles';
			callVehicle();
		}
	});
	console.log(filterValue.value);
});

function carDetails(x){
	return `<div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Details Vehicle</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                  	<h5 class="text-center m-2 fw-bold">${x.Name}</h5>
                    <img src="${x.SrcImg}" class="img-fluid rounded m-2" alt="..." style="height: 80%; width: 90%;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text"><small class="text-muted">${x.Categories} >> ${x.Subcat}</small></p>
                      <p class="card-text">${x.Desk}.</p>
                      <p class="card-text text-success fw-bold">Price : ${x.Price} $</p>
                      <p class="card-text"><small class="text-danger">Sold Out : ${x.StockSelled}</small></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#alertMember" data-bs-dismiss="modal" id="${x.Id}">Purchase</button>
          </div>
        </div>
      </div>`;
}

myProfile.addEventListener('click', x =>{
	if(x.target.innerHTML === 'Add Balance') {
		modalProfile.innerHTML = addBalanceModal(balance,acc);
	}else if(x.target.innerHTML === 'Show History'){
		createHistory();
 		modalProfile.innerHTML = addHistory(myHistoryList);
	}else if(x.target.innerHTML === 'Join Member'){
		if(memberStatus === 'Reguler Class'){
			modalProfile.innerHTML = addMember('Extended', 'Join this Class');
		}else if(memberStatus === 'Advanced Class'){
			modalProfile.innerHTML = addMember('Join this Class', 'Extended');
		}else {
			modalProfile.innerHTML = addMember('Join this Class', 'Join this Class');
		}
	}
});

modalProfile.addEventListener('click', x => {
	if(x.target.innerHTML === 'Add Balance'){
		const amountBalance = document.querySelector('.amount-balance');
		const alertBalance = document.querySelector('.alert-balance');

		function resetAlert(){
			setTimeout(() => {alertBalance.innerHTML = '';
			amountBalance.value = '';},3000); 
		}
		
		if(amountBalance.value <= 0){
			alertBalance.innerHTML = alertModal('alert-danger','Please input the right number !!');
			resetAlert();
		} else {
			balance += parseInt(amountBalance.value);
			alertBalance.innerHTML = alertModal('alert-success',`Success for deposite ${amountBalance.value}$ to your account`);
			resetAlert();
			RestartAll();
		}
	} else if(x.target.innerHTML === 'Join this Class'){
		let i = x.target.attributes.id.nodeValue;
		convinceMember.innerHTML = convinceModal('Are you sure for join to this class ?', memberList[i].Name, `${memberList[i].Cost} $`, memberList[i].Id, 'Yes Sure');
	} else if(x.target.innerHTML === 'Extended'){
		let i = x.target.attributes.id.nodeValue;
		convinceMember.innerHTML = convinceModal('Are you sure for extended with this class ?', memberList[i].Name ,`${memberList[i].Cost} $`, memberList[i].Id, 'Extended');
	}
	RestartAll();
})

document.addEventListener('click', x => {
	if(x.target.innerHTML === 'Show Details'){
		let i = x.target.attributes.id.nodeValue;
		carDetailModal.innerHTML = carDetails(nameVeh[i]);
	}
});

function alertModal(x,y){
	return `<div class="alert ${x} alert-dismissible fade show my-3" role="alert">
	                <strong>Hey ${acc}</strong> ${y}.
	              </div>`;
}

function addBalanceModal(balance,acc){
	return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Balances</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p class="text-success">Your Balance : ${balance}$</p>
            <div class="input-group my-2">
              <input type="number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
              <span class="input-group-text">Account Number</span>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <span class="input-group-text">Amount</span>
              <input type="number" class="form-control amount-balance" aria-label="Dollar amount (with dot and two decimal places)">
              <div class="alert-balance">
	              <div class="alert alert-dark alert-dismissible fade show my-3" role="alert">
	                <strong>Hey ${acc}</strong> You must enter the your account number and enter amount of balance you want to deposite.
	              </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Add Balance</button>
          </div>
        </div>
      </div>`;
}

function addMember(x,y){
	return `<div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Member Class</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-wrap justify-content-evenly">
            <div class="card text-center my-2" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-warning">Reguler class</h5>
                <hr>
                <p class="text-center text-success my-0"><small>$1000 for 1 month</small></p>
                <p class="text-center text-muted my-0"><small>Profit join</small></p>
                <ul class="list-group">
                  <li class="list-group-item">Menerima Informasi dealer Lebih Cepat</li>
                  <li class="list-group-item">Menjadi Prioritas dalam kontrak</li>
                  <li class="list-group-item">Kesempatan menerima diskon</li>
                  <li class="list-group-item">Menghapus pemotongan pajak akun</li>
                </ul>
                <button type="button" class="btn btn-warning text-light fw-bold m-2 btn-member" data-bs-toggle="modal" data-bs-target="#joinMember" data-bs-dismiss="modal" id="0">${x}</button>
              </div>
            </div>
            <div class="card text-center" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-warning">Advanced class</h5>
                <hr>
                <p class="text-center text-success my-0"><small>$5000 for 6 Month</small></p>
                <p class="text-center text-muted my-0"><small>Profit join</small></p>
                <ul class="list-group">
                  <li class="list-group-item">Menerima Informasi dealer Lebih Cepat</li>
                  <li class="list-group-item">Menjadi Prioritas dalam kontrak</li>
                  <li class="list-group-item">Kesempatan menerima diskon yang besar</li>
                  <li class="list-group-item">Menghapus pemotongan pajak akun</li>
                  <li class="list-group-item">Item dalam akun menerima kekebalan waktu</li>
                </ul>
                <button type="button" class="btn btn-warning text-light fw-bold m-2 btn-member" data-bs-toggle="modal" data-bs-target="#joinMember" data-bs-dismiss="modal" id="1">${y}</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="alert-member">
                
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`;
}

function convinceModal(x,y,z,a,b){
	return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">${x}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-warning">
            ${y} for ${z}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" id="${a}" data-bs-target="#alertMember" data-bs-dismiss="modal">${b}</button>
          </div>
        </div>
      </div>`;
}

function convinceModalAlert(x,y,z){
	return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${x}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ${z}">
            ${y}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>`;
}

function addAbout(){
	return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">About ShowRoom</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-wrap justify-content-evenly">
            <p>This showroom is a place that also functions as a dealer to exhibit and sell property in the form of vehicles of various types with complete details it provides, and user accounts can make transactions safely and reliably on our showroom site.</p>
          </div>
          <div class="modal-footer">
            <div class="alert-member">
                
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`;
}

function addFeatures(){
		return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Features</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-wrap justify-content-evenly">
            <p>Ini adalah website project yang saya <strong>Fitrah Septian Dwi Sensi</strong> buat secara pribadi</p>
			<p class="fw-bold">Fitur yang saya sediakan dalam project ini adalah : </p>
			<ul class="list-group m-2">
			<li class="list-group-item list-group-item-action list-group-item-dark">Sebuah website berbentuk seperti sebuah marketplace atau dealership sederhana</li>
			<li class="list-group-item list-group-item-action list-group-item-dark">Fitur menambah saldo walau belum terkoneksi untuk meminta/mengkonfirmasi rekening bank</li>
			<li class="list-group-item list-group-item-action list-group-item-dark">Fitur filter item atau properti yang disediakan berdasarkan kategorinya</li>
			<li class="list-group-item list-group-item-action list-group-item-dark">Fitur untuk bergabung kedalam member dan keuntunggannya</li>
			<li class="list-group-item list-group-item-action list-group-item-dark">Fitur untuk melihat history pembelian, dll.</li>
			</ul>
			<p>Project ini saya buat menggunakan : HTML, Vanila JavaScript dan Framework CSS (Bootstrap 5)</p>
          </div>
          <div class="modal-footer">
            <div class="alert-member">
                
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`;
}

function addHistory(x){
	return `<div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">History</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-wrap justify-content-evenly">
            <p class="fs-6">Purchase History</p>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Vehicle</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                ${x}
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <div class="alert-member">
                
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`
}