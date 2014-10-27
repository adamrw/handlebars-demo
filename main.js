$(document).on('ready', function() {
  
var templateSource = $('#demo-template').html();
console.log(templateSource);

//have handlebars compile this source intno a reuseable temp[late function]
var templateFunction = Handlebars.compile(templateSource);
console.log(templateFunction);

//define a context to be used in the generation step below
var data = {
	title: 'This is Adam\'s favorite shit',
	thing1: 'I like whiskey',
	thing2: 'I like cheese',
	thing3: 'I like whiskey on my cheese',
	library: 'Oh yeah, I like jQuery too',
	opacity: true,
	snacks: ['granolla bar', 'muffin', 'quinoa', 'gooey ganja balls']
};

//use the tempolate to generatenew HTML content
var outputHTML = templateFunction(data);
console.log(outputHTML);

//append the output to the page
$('#people').append(outputHTML);

//reuse the template function to render another person
var data2 = {
	title: 'Some Douchebag',
	thing1: 'He likes whiskey too',
	thing2: 'He likes cheese as well',
	thing3: "Guess what? He likes whiskey on his cheese too!",
	library: 'Oh yeah, he likes jquery too',
	schedule: {
		morning: 'do nothing',
		evening: 'continue doing nothing'
	}
};
var doucheOutput = templateFunction(data2);
$('#people').append(doucheOutput);



/*
you are planning a super cool halloween party.
several of your friends are coming and you want to tell them
what to bring
Chris
	-spoon
	-his sexy self
	-hat

Max
	-groundhogs
	-nude accapella
	-jelly
*/


var partyPeople = [
	{name: 'Chris',
	supplies: [
	'spoon', 'his sexy self', 'hat'
	]
	},
	{
		name: 'Max',
		supplies: [
			'groundhogs', 'nude accapella', 'jelly'
		]
	}
];

var personSource = $('#party-person').html();
var personTemplateFunction = Handlebars.compile(personSource);
var peopleHTML = partyPeople.map(function(person){
	return personTemplateFunction(person);
});
console.log(peopleHTML);
$('#party').append(peopleHTML);

// ]
	
// 	name: 'Chris',
// 	items: ['spoon', 'his sexy self', 'hat'],
// 	};
	
// var party2 =
// 	{
// 	name: 'Max',
// 	items: ['groundhogs', 'nude accapella', 'jelly']
// 	};


});