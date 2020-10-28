import React, {createRef} from 'react';
import styles from './BBQIslandsGrid.module.sass';
import DarkSlantTitle from '../../../inflatables/SlantTitle/DarkSlantTitle';
import BBQData from '../../../data/BBQData';
import BBQGridItem from '../../../inflatables/BBQGridItem/BBQGridItem';

const WARRANTY_BADGE = require('../../../static/images/bbqs/bull_warranty.png');

class BBQIslandsGrid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50);
	}

	scrollRef = createRef();

	render() {
		return (
			<div className={styles.bbqIslandsMain}>
				<div ref={this.scrollRef}/>
				<div className={styles.warranty}>
					<img src={WARRANTY_BADGE} alt=""/>
					<div className={styles.description}>Bull is so confident in its fabulous lineup of premium outdoor grills that Lifetime
						Warranties* come standard on all fire
						boxes, cooking grates and on all cast stainless steel burners. With 9 durable grill heads to choose from, Bull has the perfect
						grill just for you.
					</div>
					<div className={styles.disclaimer}>* Specific warranty details provided with each Bull product.</div>
				</div>
				<DarkSlantTitle title={"BBQs & Islands"}/>
				<div className={styles.bbqHolder}>
					{
						BBQData.map((bbq, index) => {
							return <BBQGridItem bbq={bbq} key={index} click={() => {
							}}/>
						})
					}
				</div>
			</div>
		);
	}

}

export default BBQIslandsGrid;