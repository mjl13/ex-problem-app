var problem = {

	problem_id: 0,

	set_id: 0,

	information: [
		{
			category: 'Authors',
			content: ['Huajian Gao']
		},
		{
			category: 'Course',
			content: 'ENGN 0310: Solid Mechanics'
		},
		{
			category: 'Published',
			content: 'November 18, 2017'
		},
		{
			category: 'Topics',
			content: ['Stress', 'Strain']
		}
	],

	declaration: [
		{
			tag: 'p',
			content: 'The slender rod below is subjected to an applied normal strain in the form of $$\\epsilon = 40*10^{-3}z$$, where $$z$$ is measured in meters.'
		},
		{
			tag: 'img',
			content: 'https://s3.amazonaws.com/engn-app/figure-0.png'
		},
		{
			tag: 'ol',
			content: [
				{
					tag: 'p',
					content: 'Determine the displacement of the end, $$B$$, of the rod due to the applied strain.'
				},
				{
					tag: 'p',
					content: 'Determine the average normal strain in the rod.'
				}
			]
		}
	],

	// each object in the solutions array is an accordion
	solution: [
		{
			accordion_title: 'Determine the displacement of the end, $$B$$, of the rod due to the applied strain.',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['The applied strain increases along the length of the rod so we cannot simply use the regular stress and strain relationship. We need to integrate the strain along the length of the rod.']
				},

				{
					section_title: 'Step 1',
					content_type: '2-column-list',
					content: [
						{ 
							left_content: [
								{
									text: 'Draw a diagram of the deformed bar for intuition.',
									hijack_id: 1
								},
								{
									text: 'The variable strain produces an unknown total displacement, shown by $$\\delta_{total}$$.',
									hijack_id: 2
								},
								{
									text: 'Our objective is to find $$\\delta_{total}$$.',
									hijack_id: 3
								}
							],
							right_content: {
								math_type: 'img',
								img_url: 'https://s3.amazonaws.com/engn-app/diagram-0.png',
								size: '220px'
							}
						}
					]
				},

				{
					section_title: 'Step 2',
					content_type: '2-column-list',
					content: [
						{
							left_content: [
								{
									text: 'For a constant strain the relationship between strain and displacement is given by...',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\epsilon = \\frac{\\delta}{L}'
							}
						},
						{
							left_content: [
								{
									text: 'Since the strain varies along the length of the bar we need to split the bar into small slices of length $$dz$$.',
									hijack_id: 4
								},
								{
									text: 'Generally, each slice has a local displacement, $$\\delta$$.',
									hijack_id: 5
								},
								{
									text: 'We can solve for the displacement of a single slice...',
									hijack_id: 6
								}
							],
							right_content: {
								math_type: 'img',
								img_url: 'https://s3.amazonaws.com/engn-app/diagram-1.png',
								size: '350px'
							}
						}
					]
				},

				{
					section_title: 'Step 3',
					content_type: '2-column-list',
					content: [
						{
							left_content: [
								{
									text: 'Sum the displacements of each slice to find the total displacement',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\delta_{total} = \\int^{B}_{A}{\\epsilon_{z}dz}'
							}
						},
						{
							left_content: [
								{
									text: 'The given strain and limits of integration are...',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\begin{aligned}\\epsilon_{z} &= 40*10^{-3}\\sqrt{z} \\\\ \\\\ A &= 0\\ \\text{m} \\\\ \\\\ B &= 0.200\\ \\text{m} \\\\ \\end{aligned}'
							}
						},
						{
							left_content: [
								{
									text: 'Substitute the parameters into the integration',
									hijack_id: 7
								},
								{
									text: 'Factor out the constants',
									hijack_id: 8
								},
								{
									text: 'Integrate the $$z$$ term',
									hijack_id: 9
								},
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\begin{aligned} \\delta_{total} &= \\int^{0.200}_{0}{40*10^{-3}\\sqrt{z}\\ dz} \\\\ \\\\ \\\\ &= 40*10^{-3}\\int^{0.200}_{0}{\\sqrt{z}\\ dz} \\\\ \\\\ \\\\ &= 40*10^{-3}\\left[z^{\\frac{3}{2}}\\right]^{0.200}_{0} \\\\ \\\\ \\\\ &= 40*10^{-3}*\\left(0.0894\\right) \\end{aligned}'
							}
						},
						{
							left_content: [
								{
									text: 'Final result',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\delta_{total} = 0.00358 \\ m'
							}
						}
					]
				}

			]
		},
		{
			accordion_title: 'Determine the average normal strain in the bar.',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['Use the displacement found in the previous question to calculate the average strain.']
				},

				{
					section_title: 'Step 1',
					content_type: '2-column-list',
					content: [
						{
							left_content: [
								{
									text: 'Definition of strain',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\epsilon = \\frac{\\delta}{L}'
							}
						},
						{
							left_content: [
								{
									text: 'Substitute the displacement from the previous equation and the given length of the rod',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\epsilon = \\frac{0.00386 \\ m}{0.200 \\ m}'
							}
						},
						{
							left_content: [
								{
									text: 'Final result',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\epsilon_{avg} = 0.0193'
							}
						}
					]
				}

			]
		}
	]

}

module.exports = problem;



fs = require('fs');
fs.writeFile('problem_0.json', JSON.stringify(problem), 'utf8');


