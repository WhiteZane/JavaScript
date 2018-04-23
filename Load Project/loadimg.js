			//Call external JavaScript

			$(document).ready(function(){
				getImages();
				intiliaze();
			}); 

			//Start the event listeners
			function intiliaze (){
				document.getElementById("Home").addEventListener("click", home);
				document.getElementById("Newest").addEventListener("click", newest);
				document.getElementById("Fav").addEventListener("click", fav);
				document.getElementById("Most").addEventListener("click", most);
				document.getElementById("Kids").addEventListener("click", kids);
			}
			
			//New object
			newsearch = {};

			//Object that gets different array items for views 
			newsearch.view = function (search){
				var search = search;
				console.log(search);
				var element = document.getElementById("imgCol");
				element.innerHTML = "";
				var click = 1;
				getImages(search, click); 
			};

			//On click functions for Event listners
			function home (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Home";
				var element = document.getElementById("imgCol");
				element.innerHTML = "";
				//this wont work anymore
				//getImages();
				newsearch.view();
			}
			function newest (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Newest Movies";
				search = 'newest';
				newsearch.view(search);
			}
			function fav (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Favorite Movies";
				search = 'fav';
				 newsearch.view(search);
			}
			function most (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Most Watched Movies";
				search = 'most';
				 newsearch.view(search);
			}
			function kids (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Kids Movies";
				search = 'kids';
				 newsearch.view(search);
			}

			//Make the Jquery Ajax call to get images
				function getImages (search, click){
				
				var click = click;
				console.log(click);			
				var jsonImage = $.getJSON("imgList.json", function( data ){
					
					images = data[search];

					if (images === undefined){
						var images = data['images'];
					}
					if (click == 1){
						setClickImages(images);
					}
					if(click === undefined){
						setImages(images);
					}
					
				})
				.done(function(){
					console.log("second success");
				})
				.fail(function(){
					console.log("error");
				})
				.always(function(){
					console.log("complete");
				});
			};

			//Set the images from clicking on events
			function setClickImages(images){
				
				//check the object
				console.log(images);
				//set the parent container as var
				var element = document.getElementById("imgCol");
				
				for(var i = 0; i < images.length; i++){
				 		var picture = images[i];
				 	 		console.log(picture);
				 	 		var noQuote = picture.replace(/\"/g, '');
				 	 		console.log(picture);
				 		this.frame = document.createElement("Figure");
						this.frame.setAttribute("id", "imgFigure");
						
						//set the images
				 			this.img = document.createElement("IMG");
				 			this.img.setAttribute("src", noQuote);
			    			this.img.setAttribute("width", "300");
			    			this.img.setAttribute("width", "200");
			     			this.img.setAttribute("alt", "Movie Images");
				 			
				 			//put picture into frame
				 			this.frame.appendChild(this.img);
				 			
				 			//put frame into div
				 			element.appendChild(this.frame);
				 	}
			}

			// Set the Home pages images on first load to fill place holders and then loop through any extras
			function setImages(images){
				//check the object
				console.log(images);
				
				//set the parent container as var
				var element = document.getElementById("imgCol");
				
				//variables for the loop
				var image = [];

				//image frame
				var imgF;
				//id name for figures add the number to the end
				var id = "img";
				

				//fill the first 6 place holders
				 for(var i = 0; i < 6; i++)
				 {
				 	id += i;
				 	console.log(id);
					image[i] = images[i];
					imgF = document.getElementById(id);
					imgF.setAttribute("src", image[i]);
					imgF.setAttribute("width", "200");
			    		
					console.log(imgF);
				 }
				 console.log(images.length);
				 
				 
				 var count = images.length - 1;
				//if there are more than 6 movies create the rest of them
				 if (images.length > 5){
				 	 //Start the do while loop
				 	do{
				 	//Start setting the images
				 	for(var i = 6; i < images.length; i++){
				 		var picture = images[i];
				 	 		console.log(picture);
				 	 		var noQuote = picture.replace(/\"/g, '');
				 	 		console.log(picture);
				 		this.frame = document.createElement("Figure");
						this.frame.setAttribute("id", "imgFigure");
						
						//set the images
				 			this.img = document.createElement("IMG");
				 			this.img.setAttribute("src", noQuote);
			    			this.img.setAttribute("width", "300");
			    			this.img.setAttribute("width", "200");
			     			this.img.setAttribute("alt", "Movie Images");
				 			
				 			//put picture into frame
				 			this.frame.appendChild(this.img);
				 			
				 			//put frame into div
				 			element.appendChild(this.frame);
				 	}
				 		
				 	
				 	count++;

				 } while(count < images.length);
				 }
				 
		}