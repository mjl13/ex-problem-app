var React = require('react');
import {Link, NavLink} from 'react-router-dom';
import {MyTable, SittingHeader, SiteHeader} from '../general_comps';


export class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			courses: [],
			isLoading: true
		}
	}

	componentDidMount() {
		fetch('api/courses/')
		.then((courses) => {
			return courses.json()
		})
		.then((courses) => {
			this.setState({
				courses: courses,
				isLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})
	}

	render() {


		var headers = [
			{
				text: 'Title',
				className: 'courses-title-category-col'
			},
			{
				text: 'Course Code',
				className: 'courses-code-category-col'
			},
			{
				text: 'Instructors',
				className: 'courses-instructors-category-col'
			},
			{
				text: 'School',
				className: 'courses-title-category-col'
			}
		]

		var courses = this.state.courses;
		courses = courses.map((course, index) => {
			return (
				[
					{
						text: course.title,
						className: 'courses-title-category-col',
						link: '/courses/'+course.course_id+'/info'
					},
					{
						text: course.code, // need to update the schema
						className: 'courses-code-category-col',
						link: null
					},
					{
						text: course.instructors.join(', '),
						className: 'courses-instructors-category-col',
						link: null
					},
					{
						text: course.school,
						className: 'courses-school-category-col',
						link: null
					}
				]
			)
		})

		// var rows = [
		// 	[
		// 		{
		// 			text: 'Solid Mechanics',
		// 			className: 'courses-title-category-col',
		// 			link: '/courses/0'
		// 		},
		// 		{
		// 			text: 'ENGN 0310',
		// 			className: 'courses-code-category-col',
		// 			link: null
		// 		},
		// 		{
		// 			text: 'Huajian Gao, Christian Franck',
		// 			className: 'courses-instructors-category-col',
		// 			link: null
		// 		},
		// 		{
		// 			text: 'Brown University',
		// 			className: 'courses-school-category-col',
		// 			link: null
		// 		}
		// 	]
		// ]

		if(!this.state.isLoading){
			return(
				<div>
					<SiteHeader/>
					<div className='main-content-wrapper-no-flex'>
						<SittingHeader title='Courses' />
						<div className='padded-container' id='dynamic-box'>
							<MyTable headers={headers} rows={courses} />
						</div>
					</div>
				</div>
			)
		}
		else {
			return(<SiteHeader />)
		}
	}
}









