// JavaScript Document

$(tempCalculator);

function tempCalculator(){
	runCalc();
}

function runCalc(){
	$("#calc").on("click", function(){
		let output = ($("#tInput").val() - 32) * (5/9);
		$("#results").text(`${output.toFixed(2)}`);
	})
}