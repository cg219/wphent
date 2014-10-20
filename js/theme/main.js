function Phent(){
	this.mapOptions = {
		center: {
          	lat: 40.6924765,
          	lng: -73.9908756
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoom: 14,
		minZoom: 14,
		styles: [
			{
				featureType: "all",
				stylers: [
					{ hue: '#400C08' },
					{ saturation: 50 },
					{ visibility: 'simplified' },
					{ gamma: .3 },
					{ weight: 0.5 }
				]
			},
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{ color: '#232323' },
					{ visibility: 'simplified' }
				]
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ color: '#232323' },
					{ saturation: -200 },
					{ visibility: 'simplified' },
					{ gamma: 1 }
				]
			},
			{
				featureType: "all",
				elementType: "labels",
				stylers: [
					{ color: '#EFEFEF' },
					{ visibility: 'simplified' },
					{ weight: 2 }
				]
			}
		]
    };
    this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);
}

Phent.prototype.init = function() {
	var self = this;

	window.addEventListener("resize", function(event){
		self.resizeProfileImageHeight();
	})

	self.resizeProfileImageHeight();
};

Phent.prototype.resizeProfileImageHeight = function() {
	var image = document.querySelector("#peter");
	image.style.height = image.offsetWidth + "px";
};

var api = new Phent();
api.init();