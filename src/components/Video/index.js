import React from 'react'

export default function Video() {
  constructor(props) {
    super(props);
    this.state = {
    };

  return (
    
    <div>
    <video className="video-container video-container-overlay" autoPlay="true" loop muted={ this.props.muted }>
        <source src={ this.props.introVideo } type="video/mp4" />
    </video>
</div>

    
  )
}
