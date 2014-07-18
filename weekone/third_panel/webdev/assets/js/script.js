console.log("todo list script.js loaded");

/*

[
	{
	
		title: "",
		description: "",
		date: ""

	},

	{
		title: "",
		description: "",
		date: ""
	}
		
]

*/


// SAVING COOKIES

function saveToCookie() {

	var toBeCookiefied = [];

	// console.log( $("#todoList li") );
	$("#todoList li").each(function() {

		var todoItemObject = {
			title: $(this).find(".title").text(),
			description: $(this).find(".description").text(),
			date: $(this).find(".date").text()
		}
			toBeCookiefied.push(todoItemObject);
	})

	// console.log(toBeCookiefied);

	var json = JSON.stringify(toBeCookiefied);
	// console.log(json);

	$.cookie("todoListData", json);
}



// ADD ITEMS FROM FORM TO LIST

function addToList() {
	var title = $("#title").val();
	var description = $("#description").val();
	var date = $("#date").val();
	$("#todoList").append('<li><input type="checkbox" class="done" /> <span class="title">'+title+'</span> '+'-'+' <span class="description">'+description+'</span> <span class="date">' + date + '</span><button class="delete">Remove</button></li>');
	$("#title").val('');
	$("#description").val('');
	$("#date").val('');
	saveToCookie();
}



// ADD ITEMS BY PRESSING ENTER KEYSTROKE

$(document).keypress(function(e) {
    if(e.which == 13) {
        addToList();
    }
});



// REMOVE ITEM FROM LIST

function removeFromList() {
	$(this).parent().remove();
	saveToCookie();
}


$(document).on("ready", function() {
	
	$("#add").on('click', addToList);
	$(document).on('click', '.delete', removeFromList);
	$(document).on('click', '.done', function() {
		$(this).parent().toggleClass("completedTask");
	})

	// REMOVE ITEM FROM LIST AND APPEND TO COMPLETED LIST

	$(document).on('click', '.done', function() {
		$(this).parent().appendTo("#completedList");
	})


	fetchedSavedItems();

	// $(".done").on('click', completedToList);

	// $(document).on('click', '.done', completedTask)
}); 



// ATTACH SAVED ITEMS

function fetchedSavedItems() {

	var fromCookie = $.cookie("todoListData");
	var fetchedItems = JSON.parse( fromCookie );

	console.log(fetchedItems);

	$(fetchedItems).each(function() {
		console.log(this)

	var title = this.title;
	var description = this.description;
	var date = this.date;
	$("#todoList").append('<li><input type="checkbox" class="done" /> <span class="title">'+title+'</span> '+'-'+' <span class="description">'+description+'</span> <span class="date">' + date + '</span><button class="delete">Remove</button></li>');
	})

}


// function completedTask() {
// 	if ( $(this).parent().css('textDecoration') == 'line-through' ) {
// 		$(this).parent().css('textDecoration', 'none');
// 	} else {
// 		$(this).parent().css('textDecoration', 'line-through');
// 		$(this).parent().css('opacity', '0.8');
// 	}
// }

// function completedToList() {
// 	$("#completedList").append(this).parent());
// }



// Store/Save
// convert data to JSON
// store it as cookie

// Retrieved
// Get data from cookie
// convert back to DOM element

