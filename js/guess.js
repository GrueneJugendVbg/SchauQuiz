function checkGuess() {
	if($("#austria-guess").val() && $("#lebanon-guess").val()){
		if($("#austria-guess").val() < 200000 && $("#austria-guess").val() > 50000){
			$("#austria-guess").addClass('correct').removeClass('wrong');
		}
		else {
			$("#austria-guess").addClass('wrong').removeClass('correct');
		}

		if($("#lebanon-guess").val() < 3000000 && $("#lebanon-guess").val() > 1000000){
			$("#lebanon-guess").addClass('correct').removeClass('wrong');
		}
		else {
			$("#lebanon-guess").addClass('wrong').removeClass('correct');
		}
	}
}

$("#austria-guess").blur(function(){
	checkGuess();
});

$("#lebanon-guess").blur(function(){
	checkGuess();
});