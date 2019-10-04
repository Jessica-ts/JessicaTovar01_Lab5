function watchform()
{
	$("#SubmitButton").on("click", function(event) 
	{
		event.preventDefault();		
		let newInput = $("#inputItem").val();
		let newItems = '<p> <li class="shoppingItems">' + newInput + "</p> <button class='checkButton'>Check</button>" + "<button class='deleteButton'>Delete</button>" + '</li>';
		$("#listItems").append(newItems);
		$('#inputItem').val("");


    });


	$('#listItems').on('click', '.checkButton', function(event)
	{
		event.preventDefault();	
		$(this).parent().toggleClass("crossed");
	});


    $("#listItems").on("click", ".deleteButton", function(event)
	{
    	event.preventDefault();	
    	$(this).parent().remove();
	});
}

watchform();
