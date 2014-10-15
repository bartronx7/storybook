/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Page = require('../api/page/page.model.js');

Page.find({}).remove(function(){
	Page.create({
		pagenum: 1,
		name: 'Begin',
		content: 'It is 2pm on Wednesday. {{primary}} sits at the bar when {{secondary}} walks in carrying a ',
		links: [{
			text: 'sack of potatoes',
			pagenum: 2
		},{
			text: 'suitcase handcuffed to her wrist',
			pagenum: 3
		}]
	});
	Page.create({
		pagenum: 2,
		name: 'Potato time',
		content: 'sack of potatoes.  {{secondary}} throws the sack to the bartender and states, "That\'s for last night, keep the change" ',
		links: [{
			text: 'I don\'t even wanna know...',
			pagenum: 4
		}, {
			text: 'What the hell?!',
			pagenum: 4
		}]
	});
	Page.create({
		pagenum: 3,
		name: 'Spy vs Spy',
		content: 'suitcase handcuffed to her wrist. {{secondary}} quickly spin kicks {{primary}} in the jaw.  An epic karate battle takes place. ',
		links: [{
			text: 'Winded, they both take a moment to catch their breath and wonder why they were fighting in the first place. ',
			pagenum: 4
		},{
			text: '{{primary}} is able to subdue {{secondary}} with a judo hip toss.  Now what is in that case? ',
			pagenum: 5
		}]
	});
	Page.create({
		pagenum: 4,
		name: 'Happy Ending',
		content: '{{primary}} looks at {{secondary}} incredulously. {{secondary}} slaps {{primary}} on the back and laughs, "You wouldn\'t understand anways" and then walks out of the bar laughing heartily without paying the tab.',
		links: []
	});
	Page.create({
		pagenum: 5,
		name: 'Cliffhanger',
		content: 'Using the key in {{secondary}}\'s pocket, {{primary}} reveals the case to contain a large sack of potatoes...',
		links: []
	});
});