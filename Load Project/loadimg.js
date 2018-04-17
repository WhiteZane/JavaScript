function intiliaze (){
				document.getElementById("Home").addEventListener("click", home);
				document.getElementById("Newest").addEventListener("click", newest);
				document.getElementById("Fav").addEventListener("click", fav);
				document.getElementById("Most").addEventListener("click", most);
				document.getElementById("Kids").addEventListener("click", kids);

			}
			newsearch = {};
			newsearch.view = function (search){
				var search = search;
				console.log(search);
				var element = document.getElementById("imgCol");
				element.innerHTML = "";
				getImages(search); 
			}

			function home (){
				var subTitle = document.getElementById("subTitle");
				subTitle.textContent = "Home";
				var element = document.getElementById("imgCol");
				element.innerHTML = "";
				getImages();
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

			function getImages (search){
			
				var jsonImage = $.getJSON("imgList.json", function( data ){
					
					images = data[search];

					if (images === undefined){
						var images = data['images'];
					}
					
					setImages(images);
				})
				.done(function(){
					console.log("second success");
				})
				.fail(function(){
					console.log("error");
				})
				.always(function(){
					console.log("complete");
				})
			};
			
			function setImages(images){
				//check the object
				console.log(images);
				
				//set the parent container as var
				var element = document.getElementById("imgCol");
				
				// loop object var
				
				 Object.keys(images).forEach(function(key)
				 	{
						console.log(key, JSON.stringify(images[key]));
				 			var count = 0;
				 			var picture = JSON.stringify(images[key]);
				 	 		console.log(picture);
				 	 		var noQuote = picture.replace(/\"/g, '');
				 	 		console.log(picture);
				 	 		//create figure
				 			this.frame = document.createElement("Figure");
							this.frame.setAttribute("id", "imgFigure");
							//create image place
				 			this.img = document.createElement("IMG")
				 			this.img.setAttribute("src", noQuote);
			    			this.img.setAttribute("width", "300");
			    			this.img.setAttribute("width", "200");
			     			this.img.setAttribute("alt", "Movie Images");
				 			//put picture into frame
				 			this.frame.appendChild(this.img);
				 			//put frame into div
				 			element.appendChild(this.frame);
					 	
				 	});
				
				

			};
			function start(){
				getImages();
				intiliaze();
				
			};