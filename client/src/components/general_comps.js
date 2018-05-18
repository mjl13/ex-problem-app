var React = require('react');
import {InlineTex, Tex} from 'react-tex';
import katex from 'katex';
import {Link} from 'react-router-dom';


export class Caret extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		var classes = this.props.classes + ' ' + 'accordion-caret';
		if(this.props.open){
			classes = classes+ ' rotated';
		}

		return(
			<svg 
				className={classes}
				width="10px"
				height="15px"
				viewBox="0 0 10 15"
			>

			    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			        <g id="Expanded-2" transform="translate(-53.000000, -886.000000)" fill="#8E8B8B">
			            <path d="M62.713778,898.642707 L65.070028,898.642707 L57.820028,889.002651 L50.570028,898.642707 L52.926278,898.642707 L57.820028,892.135669 L62.713778,898.642707 Z" id="Combined-Shape" transform="translate(57.820028, 893.822679) rotate(90.000000) translate(-57.820028, -893.822679) ">
			            </path>
			        </g>
			    </g>
			</svg>
		)
	}
}

export class ParagraphText extends React.Component {
	render(){
		var content = this.props.content;
		var classes = this.props.classes + ' ' + 'inline-tex-wrapper';
		var ids = this.props.ids;
		return(
			<p className={classes} id={ids}>
				<InlineTex texContent={content}/>
			</p>
		)
	}
}

export class SpanText extends React.Component {
	render() {
		var content = this.props.content;
		var classes = this.props.classes + ' ' + 'inline-tex-wrapper';
		return(
			<span className={classes}>
				<InlineTex texContent={content} />
			</span>
		)
	}
}

export class BlockMathWrapper extends React.Component {
	render() {
		var content = this.props.content;
		var classes = this.props.classes + ' ' + 'block-math-wrapper'
		var ids = this.props.id;
		return(
			<div className={classes} id={ids} >
				<Tex texContent={content} />
			</div>
		)
	}
}

export class LineBarHeader extends React.Component {
	render(){
		return(
			<header className='line-bar-header'>
				<h2 className='line-bar-header-title'>
					{this.props.title}
				</h2>
			</header>
		)
	}
}

export class SittingHeader extends React.Component {
	render(){
		return(
			<header className='sitting-header'>
				<h2 className='sitting-header-title'>
					{this.props.title}
				</h2>
			</header>
		)
	}
}

export class SiteHeader extends React.Component {
	render(){
		return(
			<header className='site-header'>
				<h1 className='site-header-link' id='header-logo-link'><Link to='/'>B-Notes</Link></h1>
				<h2 className='site-header-link' id='header-home-link'><Link to='/'>Home</Link></h2>
				<h2 className='site-header-link' id='header-about-link'><Link to='/about'>About</Link></h2>
			</header>
		)
	}
}

export class MyTable extends React.Component {

	render() {
		
		// Expects to receive headers in the form...

		// var headers = [
		// 					{
		// 						text: 'Title',
		// 						className: 'courses-title-category-col'
		// 					},
		// 					{
		// 						text: 'Course Code',
		// 						className: 'courses-code-category-col'
		// 					},
		// 					{
		// 						text: 'Instructors',
		// 						className: 'courses-instructors-category-col'
		// 					},
		// 					{
		// 						text: 'School',
		// 						className: 'courses-title-category-col'
		// 					}
		// 				]

		var headers = this.props.headers;
		headers = headers.map((category) => {
			return(
				<li className={category.className} key={category.text}>{category.text}</li>
			)
		})

		// var rows = [
		// 				[
		// 					{
		// 						text: 'Solid Mechanics',
		// 						className: 'courses-title-category-col',
		// 						link: '/courses/0'
		// 					},
		// 					{
		// 						text: 'ENGN 0310',
		// 						className: 'courses-code-category-col',
		// 						link: null
		// 					},
		// 					{
		// 						text: 'Huajian Gao, Christian Franck',
		// 						className: 'courses-instructors-category-col',
		// 						link: null
		// 					},
		// 					{
		// 						text: 'Brown University',
		// 						className: 'courses-title-category-col',
		// 						link: null
		// 					}
		// 				]
		// 			]

		
		var rows = this.props.rows;

		rows = rows.map((row, index) => {
					var myrow = row;
					myrow = myrow.map((col, index) => {
						if(col.link){
							return(
								<li className={col.className} key={index}>
									<Link to={col.link}>
										{col.text}
									</Link>
								</li>
							)
						}
						else {
							return (<li className={col.className} key={index}>{col.text}</li>)
						}
					})
					return (<ul className='table-row' key={index}>{myrow}</ul>)
				})


		return(
			<div>
				<header className='line-bar-header'>
					<ul className='table-categories'>
						{headers}
					</ul>
				</header>
				<div>
					{rows}
				</div>
			</div>
		)
	}

}











































