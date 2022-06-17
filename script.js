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
}];

const memberList = [{
	'Name' : 'Reguler',
	'Profit' : ['Menerima Informasi dealer Lebih Cepat' , 'Menjadi Prioritas dalam kontrak' ,'Kesempatan menerima diskon yang besar', 'Menghapus pemotongan pajak akun'],
	'Cost' : 1000,
	'Time' : '1 Month',
	'Id' : 0
},{
	'Name' : 'Advanced',
	'Profit' : ['Menerima Informasi dealer Lebih Cepat' , 'Menjadi Prioritas dalam kontrak' ,'Kesempatan menerima diskon yang besar', 'Menghapus pemotongan pajak akun', 'Item dalam akun menerima kekebalan waktu'],
	'Cost' : 5000,
	'Time' : '6 Month',
	'Id' : 1
}];

let memberStatus = 'Active Member';
let balance = 0;
let dealerList = '';
let bestSellerList = '';

const bestSeller = document.querySelector('.best-seller');
const dealerInfo = document.querySelector('.dealer-info');
const memberInfo = document.querySelector('.member-info');
const balanceInfo = document.querySelector('.balance-info');
const modalProfile = document.querySelector('.modal-profile');
const myProfile = document.querySelector('.my-profile');

function RestartAll(){
	dealerInfo.innerHTML = dealerList;
	memberInfo.innerHTML = memberStatus;
	balanceInfo.innerHTML = `Balance : ${balance} $`;
	bestSeller.innerHTML = bestSellerList;
}

nameVeh.forEach(x => {
	if(x.StockSelled > 20){
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

filterButton.addEventListener('click', () => {
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
	return `<div class="card mb-3" style="max-width: 540px;">
               <div class="row g-0">
                 <div class="col-md-5">
                   <img src="${x.SrcImg}" class="img-fluid rounded m-2" alt="..." style="height: 100%; width: 300px;" >
                  </div>
                  <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">${x.Name}</h5>
                     <p class="card-text"><small class="text-muted">${x.Categories} >> ${x.Subcat}</small></p>
                     <p class="card-text">${x.Desk}</p>
                     <p class="card-text text-success">Price : ${x.Price}$</p>
                     <p class="card-text"><small class="text-danger">Sold Out : ${x.StockSelled}</small></p>
                   </div>
                 </div>
               </div>
             </div>`;
};

myProfile.addEventListener('click', x =>{
	if(x.target.innerHTML === 'Add Balance') {
		modalProfile.innerHTML = addBalanceModal(balance);
	}else if(x.target.innerHTML === 'Show History'){

	}else if(x.target.innerHTML === 'Join Member'){

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
	                <strong>Hey Mutsurini</strong> ${y}.
	              </div>`;
}

function addBalanceModal(balance){
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
	                <strong>Hey Mutsurini</strong> You must enter the your account number and enter amount of balance you want to deposite.
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

function addMember(x){
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
                <button type="button" class="btn btn-warning text-light fw-bold m-2 btn-member" data-bs-toggle="modal" data-bs-target="#joinMember">Join This Class</button>
              </div>
            </div>
            <div class="card text-center" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-warning">Advanced class</h5>
                <hr>
                <p class="text-center text-success my-0"><small>$1000 for 6 Month</small></p>
                <p class="text-center text-muted my-0"><small>Profit join</small></p>
                <ul class="list-group">
                  <li class="list-group-item">Menerima Informasi dealer Lebih Cepat</li>
                  <li class="list-group-item">Menjadi Prioritas dalam kontrak</li>
                  <li class="list-group-item">Kesempatan menerima diskon yang besar</li>
                  <li class="list-group-item">Menghapus pemotongan pajak akun</li>
                  <li class="list-group-item">Item dalam akun menerima kekebalan waktu</li>
                </ul>
                <button type="button" class="btn btn-warning text-light fw-bold m-2 btn-member" data-bs-toggle="modal" data-bs-target="#joinMember">Join This Class</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="alert-member">
                
            </div>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>`
}