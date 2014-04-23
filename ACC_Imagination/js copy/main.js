	function createPageDot( mousedownFunction ) {
		var pageDot = document.createElement('li');
		pageDot.className = "page-dot";
		$(pageDot).mousedown( mousedownFunction );	
		return pageDot;
	}


	/* reusable general content scroller
	 * HOW TO USE: frames should have class 'content-frame' and navigation container 
	 * should have a ul class 'pagination' for paging dots
	 *
	 * id - id of container; 
	 * autoplayDelay - delay of carousel, -1 for no autoPlay
	 */
	function contentScroller(id, autoplayDelay) {
		var frames = $("#" + id + " .content-frame");
		var pageNav = $("#" + id + " .pagination");

		// autoplay settings
		var autoplay;
		var isPlaying = false;
		var currFrameNum = 0;
		
		if(autoplayDelay > 0) {
			isPlaying = true;
			autoplay = window.setInterval(showNextFrame, autoplayDelay);
		}
		
		//add page dots and event handlers to page dots
		frames.each( function (i, e) {			
			var pageDot = createPageDot( function() {
				switchFromCurrFrame( i );
				$(this).siblings().removeClass("pd-selected");
				$(this).addClass("pd-selected");
			});
			
			pageNav.append(pageDot);
		});
		
		//initial frame
		$(frames[currFrameNum]).fadeIn(300);
		$(pageNav.find('.page-dot')[currFrameNum]).trigger('mousedown');
		
		
		
		//FUNCTIONS//
		function switchFromCurrFrame( toFrameNum ) {
			if( currFrameNum != toFrameNum ) {	
				$(frames[currFrameNum]).fadeOut(200, function() {
					$(frames[toFrameNum]).fadeIn(200);
				});
			}
			
			if(isPlaying)
				resetTimer();
			
			currFrameNum = toFrameNum;
		}	

		function showNextFrame() {
			var nextFrameNum = currFrameNum + 1;
			if( nextFrameNum >= frames.length ) 
				nextFrameNum = 0;
			
			resetTimer();	

			$(pageNav.find('.page-dot')[nextFrameNum]).trigger('mousedown');
			
			currFrameNum = nextFrameNum;
			
		}
	
		function resetTimer() {
			clearInterval(autoplay);
			autoplay = setInterval(showNextFrame, autoplayDelay);
		}
	
	}


	///// SCROLLING & ANCHOR FUNCTIONS /////
	
	function addScrollLinks(container) {
		$( container + " a[href^='#']").addClass("scroll-link");				
		$(".scroll-link").click(function(e) {
			_scrollTo($(this).attr("href"));
			return false;
		});	
	}

	/* scrolls to ID */
	function _scrollTo(id){ //id with #
		//offset fixed nav
		var offset = 0;
		if ($('#nav-wrap'))
			offset = $('#nav-wrap').outerHeight();

		if( $(id).length != 0 ) { //if id exists
			$('html,body').animate({scrollTop: ($(id).offset().top - offset)},'slow');
		} else if ( id == "#") {  //handles '#' case
			$('html,body').animate({scrollTop: 0},'slow');			
		}
	}
	
	
	
	/*****/
	
		function createBlurbGrid( container, data, blurbGenFunction, rows, cols) {
				var numOfPages = Math.ceil( data.length / (rows*cols) ); //round up pages
				var page; 
				
				var blurbGrid = document.createElement('div');
				var pagination = document.createElement('div');
				blurbGrid.className = 'blurb-grid';
				pagination.className = 'pagination';
				
				$(container).append(blurbGrid);
				$(container).append(pagination);
				
				for( page = 0; page < numOfPages; page++ ) {
										
					var pageDot = createPageDot(
						function(data, blurbGenFunction, r, c) {
							return function () {
								var blurbs = blurbGenFunction(data);
								loadIntoGrid( $(blurbGrid), blurbs, r, c );	
								
								$(this).siblings().removeClass("pd-selected");
								$(this).addClass("pd-selected");
							}		
						}(data.splice(0, rows*cols), blurbGenFunction, rows, cols)
					);
				
					//load the first page
					if(page == 0)
						$(pageDot).mousedown();
				
					//only create pagination if more than one page
					if(numOfPages > 1 )
						$(pagination).append(pageDot);
				}

		}
		
		function loadIntoGrid( container, elementArray, rows, cols ) {
			var arrayLen = elementArray.length;
			//clear previous content
			container.hide();
			container.html("");

		 	var i = 0;		 
			while( rows-- ) {
				var row = document.createElement('div');
				row.className = "row clearfix";
					
				var j = 0;	
				while( i < arrayLen && j < cols ) {					
					row.appendChild( elementArray[i] );
					i++; j++;
				}
				container.append(row);

			}
			
			container.fadeIn(400);
		}	


		
		function createThumbnailGallery (dataArray) {
			var elementArray = [];
			var dataArrayLen = dataArray.length;
			
			var i = 0;
			while( i < dataArrayLen ) {
				var data = dataArray[i];
				var d = document.createElement('div');
				var d2 = document.createElement('div');
				var img = document.createElement('img');
				
				d.className = "gallery-img-wrap col col5";
				d2.className = "gallery-img";
				img.src = data.file;
				img.title = data.caption;
				
				d2.appendChild(img);
				d.appendChild(d2);
				
				var lb_img = img.cloneNode(true);
				lb_img.className = "gallery-lightbox";
				
				$(d).mousedown( function (content) {
					return function () {
						loadLightBox(document.getElementsByTagName("body")[0], content, true);
					};
				}(lb_img));
				
				
				elementArray.push(d);	
				i++;
			} //end while
			
			
			return elementArray;
			
		}
		
		
	/*** LIGHTBOX ***/
	
	
		function loadLightBox(container, content, fixed) {
			var lb_overlay = document.createElement('div');
			var lb_container = document.createElement('div');	
			
			lb_overlay.className = "lightbox-overlay";
			lb_container.className = "lightbox-container";
			
			if(fixed) {
				lb_container.className += " lightbox-container-fixed";
			}
			
			//generate close btn
			var closebtn = document.createElement('div');
			closebtn.className = "lightbox-closebtn";
			closebtn.innerHTML = "&#215;";
					
			lb_container.appendChild(closebtn);
			lb_container.appendChild(content);

			$(container).append(lb_overlay);
			$(container).append(lb_container);
			
			lb_container.style.marginLeft = -lb_container.offsetWidth/2 + "px";
			lb_container.style.marginTop = -lb_container.offsetHeight/2 + "px";
			
			$(lb_overlay).add(closebtn).mousedown( function () {
				$(container).find(".lightbox-container").remove();
				$(container).find(".lightbox-overlay").remove();
			});
			
		}	
	
	
	function repeat(str, n) {
  		return new Array( n + 1 ).join( str );
	}	
		
	/*** HELPER ***/
	
	
	
	/* returns today's date as an int */
	function getTodaysDate() {
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		if( month < 10 ) month = "0" + month;
		if( date  < 10 ) date  = "0" + date;
	
		var stringDate = year + "" + month + "" + date;
	
		return parseInt(stringDate);
	}
	
	
	if(!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(needle) {
			for(var i = 0; i < this.length; i++) {
				if(this[i] === needle) {
					return i;
				}
			}
			return -1;
		};
	}