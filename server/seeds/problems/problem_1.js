var problem = {

	problem_id: 1,

	set_id: 1,

	information: [
		{
			category: 'Authors',
			content: ['Rashid Zia']
		},
		{
			category: 'Course',
			content: 'ENGN 0510: Solid Mechanics'
		},
		{
			category: 'Published',
			content: 'September 25, 2014'
		},
		{
			category: 'Topics',
			content: ['Divergence', 'Electric Field']
		}
	],

	declaration: [
		{
			tag: 'p',
			content: 'Suppose the electric field in some region is found to be $$\\bold{E} = kr^{3}\\bold{\\hat{r}}$$, in spherical coordinates ($$k$$ is some constant).'
		},
		{
			tag: 'ol',
			content: [
				{
					tag: 'p',
					content: 'Find the charge density, $$\\rho$$.'
				},
				{
					tag: 'p',
					content: 'Find the total charge contained in a sphere of radius $$R$$, centered at the origin. Do this two ways.'
				}
			]
		}
	],

	// each object in the solutions array is an accordion
	solution: [
		{
			accordion_title: 'Find the charge density, $$\\rho$$',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['Use Gauss\'s law – Gauss\'s law in differential form relates charge density, $$\\rho$$, to the electric field, $$\\bold{E}$$. We are given teh electric field so we can solve for the unknown charge density.']
				},

				{
					section_title: 'Step 1',
					content_type: '2-column-list',
					content: [
						{ 
							left_content: [
								{
									text: 'Definition of Gauss\'s Law in differential form',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\nabla \\cdot \\bold{E} = \\frac{\\rho}{\\epsilon_{0}}',
							}
						},
						{ 
							left_content: [
								{
									text: 'Given electric field',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\bold{E} = kr^{3}\\bold{\\hat{r}}',
							}
						},
						{ 
							left_content: [
								{
									text: 'Substitute the given electric field into Gauss\'s Law',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\nabla \\cdot \\left(kr^{3}\\bold{\\hat{r}}\\right) = \\frac{\\rho}{\\epsilon_{0}}',
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
									text: 'Compute the divergence of the electric field',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\nabla \\cdot \\left(kr^{3}\\bold{\\hat{r}}\\right) ='
							}
						},
						{
							left_content: [
								{
									text: 'In spherical coordinates, the divergence of a vector field, $$\\bold{A}$$, is given by...',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\nabla \\cdot \\bold{A} = {1 \\over r^2}{\\partial \\left( r^2 A_r \\right) \\over \\partial r} + {1 \\over r\\sin\\theta}{\\partial \\over \\partial \\theta} \\left(  A_\\theta\\sin\\theta \\right) + {1 \\over r\\sin\\theta}{\\partial A_\\varphi \\over \\partial \\varphi}'
							}
						},
						{
							left_content: [
								{
									text: 'Decompose the vector field into radial polar, and azimuthal components',
									hijack_id: null
								}
							], 
							right_content: {
								math_type: 'tex',
								tex_string: '\\begin{aligned}&E_r = kr^3\\\\ \\\\ &E_{\\theta} = 0 \\\\ \\\\ & E_{\\varphi} = 0\\\\ \\end{aligned}'
							}
						},
						{
							left_content: [
								{
									text: 'Substitute the components of the electric field into the divergence formula, and compute',
									hijack_id: null
								}
							], 
							right_content: {
								math_type: 'tex',
								tex_string: '\\begin{aligned}\\nabla \\cdot \\bold{E} &= {1 \\over r^2}{{\\partial \\over \\partial r}\\left(r^{2}\\cdot kr^{3}\\right)} + {1 \\over r\\sin\\theta}{\\partial \\over \\partial \\theta} \\left(  0 \\cdot \\sin\\theta \\right) + {1 \\over r\\sin\\theta}{{\\partial \\over \\partial \\varphi}\\left(0\\right)}  \\\\ \\\\ &= {1 \\over r^2}{{\\partial \\over \\partial r}\\left(kr^{5}\\right)}\\\\ \\\\ &= {1 \\over r^{2}}\\left(5kr^{4}\\right)\\\\ \\\\ \\nabla \\cdot \\bold{E} &= 5kr^{2} \\end{aligned}'
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
									text: 'Substitute the computed divergence back into Gauss\'s Law',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '5kr^{2}=\\frac{\\rho}{\\epsilon_0}'
							}
						},
						{
							left_content: [
								{
									text: 'Final form of the charge density',
									hijack_id: null
								}
							],
							right_content: {
								math_type: 'tex',
								tex_string: '\\rho = 5\\epsilon_{0}kr^{2}'
							}
						}
					]
				}

			]
		},
		{
			accordion_title: 'Find the total charge contained in a sphere of radius $$R$$, centered at the origin. Do this two ways.',
			accordion_sections: [

				{
					section_title: 'Strategy',
					content_type: 'text',
					content: ['We can integrate the charge density over the volume of the sphere. We may also use the integral form of Gauss\'s Law to find the same information']
				}


			]
		}
	]

}

module.exports = problem;



fs = require('fs');
fs.writeFile('problem_1.json', JSON.stringify(problem), 'utf8');


