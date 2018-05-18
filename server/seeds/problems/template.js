var problem = {

	problem_id: 1,

	set_id: 1,

	information: [
		{
			category: 'Authors',
			content: ['']
		},
		{
			category: 'Course',
			content: ''
		},
		{
			category: 'Published',
			content: ''
		},
		{
			category: 'Topics',
			content: ['']
		}
	],

	declaration: [
		{
			tag: 'p',
			content: ''
		},
		{
			tag: 'ol',
			content: [
				{
					tag: 'p',
					content: ''
				},
				{
					tag: 'p',
					content: ''
				}
			]
		}
	],

	// each object in the solutions array is an accordion
	solution: [
		{
			accordion_title: '',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['']
				},

				{
					section_title: 'Step 1',
					content_type: '2-column-list',
					content: [
						{ 
							left_content: [
								{
									text: '',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '',
							}
						}
					]
				},

			]
		},
		{
			accordion_title: '',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['']
				}


			]
		}
	]

}

module.exports = problem;

fs = require('fs');
fs.writeFile('problem_.json', JSON.stringify(problem), 'utf8');


