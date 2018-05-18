var React = require('react');
import {Caret, ParagraphText, SpanText, BlockMathWrapper, SittingHeader} from '../general_comps'
import AnimateHeight from 'react-animate-height';


export class SolutionContainer extends React.Component {
	render(){
		var solution = this.props.solution;
		return(
			<section id='solution-container'>
				<SittingHeader title='Solution'/>
				<div className='padded-container'>
					<Solution solution={solution} />
				</div>
			</section>
		)
	}
}

export class Solution extends React.Component {

	// iterate over the solution array to get initial states and pass it down as props

	constructor(props) {
		super(props);
		var solution = this.props.solution;
		var accordion_count = solution.length;
	}

	render() {
		var solution = this.props.solution;
		var accordions = solution.map((item, index) => {
			return( <SolutionAccordion accordion={item} key={index}/> )
		})

		return(
			<div>
				{accordions}
			</div>
		)
	}
}

export class SolutionAccordion extends React.Component {

	constructor(props){
		super(props);
		var sections = this.props.accordion.accordion_sections;
		sections = sections.map((item, index) => {
			return({open: false})
		});
		this.state = {open: false, sections: sections};
	}

	render() {
		var accordion = this.props.accordion;
		// var sections_ul = <ul className='accordion-list'></ul>
		var sections_ul;

			var sections = accordion.accordion_sections;
			sections = sections.map((item,index) => {
				return(<AccordionSection 
							section={item} 
							key={index}
							classes=''
							toggleSection={ () => { this.toggleSection(index) } }
							open={this.state.sections[index].open}
						/>)
			});

			sections_ul = <ul className='accordion-list'>
								 <AccordionSectionNav 
								 	hideAll={() => this.hideAll()}
								 	showAll={() => this.showAll()}
								 />
								 {sections}
							</ul>



		return(
			<div className='solution-accordion-container'>
				<AccordionHeader 
					title={accordion.accordion_title}
					handleClick={ this.handleClick.bind(this) }
					open={this.state.open}
				/>
				<AnimateHeight
					duration={500}
					height={this.state.open ? 'auto' : '0'}>
					{sections_ul}
				</AnimateHeight>
			</div>
		)
	}

	handleClick() {
		var new_state = !(this.state.open);
		this.setState({open: new_state})
	}

	toggleSection(i) {
		var new_state = !(this.state.sections[i].open);
		var sections = this.state.sections;
		sections[i].open = new_state;
		this.setState({sections: sections});

	}

	hideAll() {
		var sections = this.props.accordion.accordion_sections;
		sections = sections.map((item, index) => {
			return({open: false})
		});
		
		this.setState({sections: sections})
	}

	showAll() {
		var sections = this.props.accordion.accordion_sections;
		sections = sections.map((item, index) => {
			return({open: true})
		});
		
		this.setState({sections: sections})
	}
}

export class AccordionHeader extends React.Component {
	render() {
		var title = this.props.title;
		return(
			<div className='accordion-header' onClick={this.props.handleClick}>
				<Caret open={this.props.open}/>
				<h2 className='accordion-header-title'>
					<SpanText content={title} />
				</h2>
			</div>
		)
	}
}

export class AccordionSectionNav extends React.Component {
	render() {
		return(
			<li className='accordion-section accordion-nav'>
				<button onClick={this.props.showAll}>SHOW ALL</button>
				<button onClick={this.props.hideAll}>HIDE ALL</button>
			</li>
		)
	}
}

export class ParagraphList extends React.Component {
	render() {
		var paragraphs = this.props.paragraphs;
		paragraphs = paragraphs.map((item, index) => {
			return(
				<li key={index} >
					<ParagraphText content={item} />
				</li>
			)
		})

		return(
			<ul className='strategy-paragraph-list'>
				{paragraphs}
			</ul>
		)
	}
}

export class AccordionSection extends React.Component {

	render() {
		var section = this.props.section;
		var classes = this.props.classes + ' ' + 'accordion-section';
		var content = <AccordionSectionContent section={section} />;

		return(
				<li className={classes}>
					<AccordionSectionTitleRow 
						title={section.section_title}
						toggleSection={this.props.toggleSection}
						open={this.props.open}
					/>
					<AnimateHeight
						duration={500}
						height={this.props.open ? 'auto' : '0'}>
						{content}
					</AnimateHeight>
				</li>
		)
	}
}

export class AccordionSectionTitleRow extends React.Component {
	render() {
		var title = this.props.title;
		return(
			<div className='accordion-section-title-row' onClick={this.props.toggleSection}>
				<Caret open={this.props.open}/>
				<h3 className='accordion-section-title'>{title}</h3>
			</div>
		)
	}
}

export class AccordionSectionContent extends React.Component {
	render() {
		var section = this.props.section;
		switch(section.content_type){
			case 'text':
				return(
					<div className='content-below-header'>
						<ParagraphList paragraphs={section.content} />
					</div>
				)
			case '2-column-list':
				return(
					<div className='content-below-header'>
						<TwoColumnList content={section.content} />
					</div>
				)
		}
	}
}

export class TwoColumnList extends React.Component {
	render() {
		var content = this.props.content;
		var content = content.map((item, index) => {
			return(<TwoColumnListRow content={item} key={index} />)
		})
		return(
			<ul className='solution-steps'>
				{content}
			</ul>
		)
	}
}

export class TwoColumnListRow extends React.Component {
	render() {
		var content = this.props.content;
		return(
			<li>
				<ColumnLeft content={content.left_content} />
				<ColumnRight content={content.right_content} />
			</li>
		)
	}
}

export class ColumnLeft extends React.Component {
	render() {
		var content = this.props.content;
		var paragraphs = content.map((item,index) => {
			var ids = 'hijack-' + item.hijack_id;
			return(<ParagraphText content={item.text} ids={ids} key={index} />)
		})

		return(
			<div className='col-left'>
				{paragraphs}
			</div>
		)
	}
}

export class ColumnRight extends React.Component {
	render() {
		var content = this.props.content;
		switch(content.math_type) {
			case 'tex':
				var content = <BlockMathWrapper classes='' ids='' content={content.tex_string} />
				break;
			case 'img':
				var content = <img src={content.img_url} width={content.size} />
				break;
		}
		return(
			<div className='col-right'>
				{content}
			</div>
		)
	}
}
