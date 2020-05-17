$(document).ready(function(){
	$.ajax({
		url: 'https://randomuser.me/api/',
		data:{results: 100},
		dataType: 'json',
		success: function(data) {
		//     console.log(typeof(data));
		//     console.log(data);
			
			var result = data.results;
		//   console.log(result);
			$.each(result, function(index, user){ //result=[{},{},{},{},....]  user={}
			var name = user.name.title+' '+user.name.first+' '+user.name.last;
			var age = user.dob.age;
			var phone = user.phone;
			var email = user.email;
			
			
			var source = $('#table-template').html();
			var template = Handlebars.compile(source);
			var context = {index: index+1, name: name, age: age, phone: phone, email: email};
			var html = template(context);

			$('.table').find('tbody').append(html);
			}); 
		}
	});
});
