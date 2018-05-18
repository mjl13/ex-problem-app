var React = require('react');
import {SiteHeader} from '../general_comps';
import {ParagraphText, SpanText, BlockMathWrapper} from '../general_comps'
import {ProblemDeclaration, QuestionImage, QuestionList} from '../problem-page/problem_comps';
import {InformationContent, InformationList, InformationInlineText} from '../problem-page/information_comps';
import {Link} from 'react-router-dom';

export class SetPage extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			set: {},
			problems: [],
			isProblemsLoading: true,
			isSetLoading: true
		}
	}

	componentDidMount(){
		var set_id = this.props.match.params.set_id;
		// hit this endpoint -- '/api/problemsets/:set_id/problems'
		var api_path = '/api/problemsets/'+set_id+'/problems';
		fetch(api_path)
		.then((problems) => {
			return problems.json()
		})
		.then((problems) => {
			this.setState({
				problems: problems,
				isProblemsLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})

		var problem_set_api_path = '/api/problemsets/'+set_id;
		fetch(problem_set_api_path)
		.then((set) => {
			return set.json()
		})
		.then((set) => {
			this.setState({
				set: set[0],
				isSetLoading: false
			})
		})
		.catch((error) => {
			console.log('parsing failed', error)
		})

	}

	render(){
		var set_id = this.props.match.params.set_id;
		
		if(!this.state.isProblemsLoading){
			var problems = this.state.problems;
			problems = problems.map((problem, index) => {
				var path = '/problems/'+problem.problem_id;
				return (
					<div className='padded-container set-page-problem'>
						<Link to={path}>
							<ProblemDeclaration declaration={problem.declaration}/>
						</Link>
					</div>
				)
			})
		}

		if(!this.state.isSetLoading){
			var set = this.state.set;
		}


		console.log(this.state.problems);

		if(!this.state.isProblemsLoading && !this.state.isSetLoading){
			return(
				<div>
					<SiteHeader/>
					<div className='main-content-wrapper-no-flex'>
						<div className='padded-container set-page-info'>
							<ul className='set-page-info-list'>
								<li>
									<div className='set-info-left'>Title:</div>
									<div className='set-info-right'>{set.title}</div>
								</li>
								<li>
									<div className='set-info-left'>Authors:</div>
									<div className='set-info-right'>{set.authors.join(', ')}</div>
								</li>
								<li>
									<div className='set-info-left'>Date:</div>
									<div className='set-info-right'>{set.date}</div>
								</li>
							</ul>
						</div>
						{problems}
					</div>
				</div>
			)
		}
		else {
			return(<SiteHeader/>)
		}
	}
}



























