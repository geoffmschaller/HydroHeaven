import React from 'react';
import styles from './VideoPlayer.module.sass';

interface VideoPlayerProps {
    video: string,
    open: boolean,
    close: Function
}

class VideoPlayer extends React.Component<VideoPlayerProps, {}> {
    
    state = {
        offset: 0
    }

    componentDidMount(){
        this.setState({offset: window.scrollY});
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount(){
        document.body.style.overflow = 'auto';
    }


    render(){
        return(
            <div className={styles.videoPlayer} style={{top: `${this.state.offset}px`}}>
                <div className={styles.videoHolder}>
                    <div className={styles.close} onClick={() => this.props.close(false)}><i className="fas fa-times"/></div>
                    <video src={this.props.video} autoPlay loop controls/>
                </div>
            </div>
        );
    }

}

export default VideoPlayer;