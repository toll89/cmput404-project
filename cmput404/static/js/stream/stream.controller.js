var app = angular.module("cmput404client")
app.controller("streamCtrl", ['$scope', '$http', 'Stream', function($scope, $http, Stream) {

	$scope.posts = [];

	Stream.getPosts().then(function(posts) {
		$scope.posts = posts;
		return;
	}, function(status) {
		// handle error statuses
	});

	$scope.addComment = function(post, comment_text) {
		post.comment = "";
		Stream.commentOnPost(post.id, comment_text).then(function(comment) {
			if (post.comments) {
				post.comments.push(comment);
			} else {
				post.comments = [comment];
			}
		}, function(response) {
			// handle error statuses
		});
	}



	// $.ajax({
	// 	url: "/service/author/posts",
	// 	type: "GET",
	// 	dataType: 'json',
	// 	complete: function(data) {
	// 		var news = document.getElementsByClassName("entry")[0];
	// 		var ret_text = JSON.parse(data.responseText);
	// 		var posts = ret_text["posts"];
	//
	// 		function buttonAction() {
	// 			console.log("Button ID: " + this.id);
	// 			console.log("Input Text: " + document.getElementById(this.id).value);
	//
	// 			var sendData = {}
	// 			var csrftoken = Cookies.get('csrftoken');
	// 			sendData['comment'] = document.getElementById(this.id).value;
	// 			sendData['contentType'] = "text/plain";
	//
	// 			$.ajax({
	// 				cache: false,
	// 				url: send_url,
	// 				type: "POST",
	// 				dataType: "json",
	// 				context: this,
	// 				data: JSON.stringify(sendData),
	// 				success: function(callback) {
	// 					//Where $(this) => context == FORM
	//
	// 					//$(this).html("Received HTTP 200. Post should now be in database.");
	// 					window.location.reload(false);
	//
	// 				},
	// 				error: function(xhr, thrownError) {
	// 					console.log(xhr.status);
	// 					console.log(thrownError)
	// 					$(this).html("Error!");
	// 				}
	// 			});
	//
	// 		}
	//
	// 		for (var i = 0; i < posts.length; ++i) {
	// 			var mainc = document.createElement("div")
	// 			mainc.className = "container";
	// 			mainc.style.backgroundColor = "#ecf0f1";
	// 			mainc.style.border = "thin solid grey";
	// 			news.appendChild(mainc)
	//
	// 			var id = posts[i].id;
	// 			var h2 = document.createElement("h2");
	// 			h2.innerHTML = posts[i].title;
	// 			mainc.appendChild(h2);
	// 			var h3 = document.createElement("h3");
	// 			h3.innerHTML = posts[i].description;
	// 			mainc.appendChild(h3);
	// 			var pcontent = document.createElement("p");
	// 			pcontent.innerHTML = posts[i].content;
	// 			mainc.appendChild(pcontent);
	//
	// 			console.log(posts[i].id);
	//
	// 			if (posts[i].count == 0) {
	// 				var p2 = document.createElement("p");
	// 				p2.fontSize = "xx-small";
	// 				p2.innerHTML = "There are no comments for this post"
	// 				mainc.appendChild(p2);
	// 			} else {
	//
	//
	// 				var comments = posts[i].comments;
	//
	// 				console.log(comments);
	//
	//
	// 				//console.log(comments.length);
	// 				for (var k = 0; k < comments.length; ++k) {
	// 					var p2 = document.createElement("p");
	// 					p2.innerHTML = "Comment: " + comments[k].comment;
	// 					mainc.appendChild(p2);
	// 				}
	//
	//
	// 			}
	//
	// 			var text = document.createElement("input");
	// 			text.type = "text";
	// 			text.style.width = "87%";
	// 			text.id = id;
	// 			mainc.appendChild(text);
	// 			var btn = document.createElement("BUTTON");
	// 			btn.className = "btn btn-default";
	// 			var t = document.createTextNode("Add a Comment");
	// 			btn.appendChild(t);
	// 			mainc.appendChild(btn);
	// 			btn.id = id;
	// 			btn.onclick = buttonAction;
	//
	//
	//
	// 		}
	// 	}
	// });

}]);