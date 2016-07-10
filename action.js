	var sw2neArray = [19,30,31,32,42,43,44,45,55,56,57,58,67,68,69,70,71,99,100,101,102,103,112,113,114,115,125,126,127,128,138,139,140,151],
	nw2seArray = [21,34,35,36,47,48,49,50,60,61,62,63,73,74,75,76,77,93,94,95,96,97,107,108,109,110,120,121,122,123,134,135,136,149],
	sw2seArray = [20,33,46,59,72],
	nw2neArray = [98,111,124,137,150],
	ne2seArray = [80,81,82,83,84],
	nw2swArray = [86,87,88,89,90],
	squareCount = 1,
	sw2ne = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab sw2ne_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.sw2ne_row_' + frank + idNum).append('<div class="black_sw2ne_' + corner[0] + ' sw2ne_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.sw2ne_row_' + frank + idNum).append('<div class="white_sw2ne_' + corner[0] + ' sw2ne_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	nw2se = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab nw2se_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.nw2se_row_' + frank + idNum).append('<div class="black_nw2se_' + corner[0] + ' nw2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.nw2se_row_' + frank + idNum).append('<div class="white_nw2se_' + corner[0] + ' nw2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	sw2se = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab sw2se_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.sw2se_row_' + frank + idNum).append('<div class="black_sw2se_' + corner[0] + ' sw2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.sw2se_row_' + frank + idNum).append('<div class="white_sw2se_' + corner[0] + ' sw2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	nw2ne = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab nw2ne_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.nw2ne_row_' + frank + idNum).append('<div class="black_nw2ne_' + corner[0] + ' nw2ne_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.nw2ne_row_' + frank + idNum).append('<div class="white_nw2ne_' + corner[0] + ' nw2ne_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	ne2se = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab ne2se_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.ne2se_row_' + frank + idNum).append('<div class="black_ne2se_' + corner[0] + ' ne2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.ne2se_row_' + frank + idNum).append('<div class="white_ne2se_' + corner[0] + ' ne2se_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	nw2sw = function(idNum){
		var corner = ['nw', 'north', 'ne', 'west', 'center', 'east', 'sw', 'south', 'se'];
		for(var frank = 1; frank<=3; frank++){
			$('#square' + idNum).append('<div class="innerTab nw2sw_row_' + frank + idNum + '"></div');
			for(var deek = 1; deek<=3; deek++){
				if(idNum%2===1){
					$('.nw2sw_row_' + frank + idNum).append('<div class="black_nw2sw_' + corner[0] + ' nw2sw_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}else{
					$('.nw2sw_row_' + frank + idNum).append('<div class="white_nw2sw_' + corner[0] + ' nw2sw_square_' + corner.splice(0, 1) + ' innerSquare"></div>');
				}
			}
		}
	},
	grid = function(){	
		for(var tut = 1; tut<=13; tut++){
			$('.container').append('<div id="row' + tut + '" class="rows"></div>');
			for(var yut = 1; yut<=13; yut++){
				$('#row' + tut).append('<div id="square' + squareCount + '" class="square"></div');
				if(squareCount%2===1){
					$('#square' + squareCount).css('background-color', '#000000');
					$('#square' + squareCount).css('color', '#E1ECF0');
				}else{
					$('#square' + squareCount).css('background-color', '#E1ECF0');
					$('#square' + squareCount).css('color', '#0000000');
				}
				squareCount++;
			}
		}
	},	
	makeIllusion = function(){
		for(var peach = 1; peach<=169; peach++){
			if(peach === sw2neArray[0]){
				sw2ne(sw2neArray.splice(0,1).toString());
			}else if(peach === nw2seArray[0]){
				nw2se(nw2seArray.splice(0,1).toString());
			}else if(peach === sw2seArray[0]){
				sw2se(sw2seArray.splice(0,1).toString());
			}else if(peach === nw2neArray[0]){
				nw2ne(nw2neArray.splice(0,1).toString());
			}else if(peach === ne2seArray[0]){
				ne2se(ne2seArray.splice(0,1).toString());
			}else{
				nw2sw(nw2swArray.splice(0,1).toString());
			}
		}
		//sw2ne
		$('.black_sw2ne_ne, .black_sw2ne_sw').append('<div class="little_white_square"></div>');
		$('.white_sw2ne_ne, .white_sw2ne_sw').append('<div class="little_black_square"></div>');
		//nw2se
		$('.black_nw2se_nw, .black_nw2se_se').append('<div class="little_white_square"></div>');
		$('.white_nw2se_nw, .white_nw2se_se').append('<div class="little_black_square"></div>');
		//sw2se
		$('.black_sw2se_sw, .black_sw2se_se').append('<div class="little_white_square"></div>');
		$('.white_sw2se_sw, .white_sw2se_se').append('<div class="little_black_square"></div>');
		//nw2ne
		$('.black_nw2ne_nw, .black_nw2ne_ne').append('<div class="little_white_square"></div>');
		$('.white_nw2ne_nw, .white_nw2ne_ne').append('<div class="little_black_square"></div>');
		//ne2se
		$('.black_ne2se_ne, .black_ne2se_se').append('<div class="little_white_square"></div>');
		$('.white_ne2se_ne, .white_ne2se_se').append('<div class="little_black_square"></div>');
		//nw2sw
		$('.black_nw2sw_nw, .black_nw2sw_sw').append('<div class="little_white_square"></div>');
		$('.white_nw2sw_nw, .white_nw2sw_sw').append('<div class="little_black_square"></div>');
	},	
	welcomePage = function(){
		$('.container').append('<div id="welcome"><div id="inner"></div></div>');
		$('#inner').append('<h1>Beleive-it-or-Not!</h1>');
		$('#inner').append('<p>All the lines will stay straight!</p>');
		$('#inner').append('<button id="check">Click Here To See!</button>');
	};	

	grid();

	$('#square85').text('Click Here');

	$('#square85').one('click', function(){
		makeIllusion();
	});
	// welcomePage();

	
	

	















