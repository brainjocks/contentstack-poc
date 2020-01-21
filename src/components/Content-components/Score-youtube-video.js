import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const YoutubeVideo = props => {
  if (!props) {
    return null
  }
  return (
    <div
      className={classnames(
        'score-youtube-video embed-responsive-16by9',
        props.styleName
      )}
    >
      <iframe
        className="embed-responsive-item"
        type="text/html"
        title={props.title}
        src={`https://www.youtube.com/embed/${props.videoId}?enablejsapi=1&version=3&autoplay=${props.autoPlay}`}
      />
    </div>
  )
}

YoutubeVideo.proptype = {
  styleName: PropTypes.string,
  videoId: PropTypes.string,
  title: PropTypes.string,
  autoPlay: PropTypes.boolean,
}

export default YoutubeVideo
