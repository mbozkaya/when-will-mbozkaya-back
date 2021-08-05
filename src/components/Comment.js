import React from 'react';
import Disqus from 'disqus-react';

const Comment = ()=>{
  
    const disqusShortname = process.env.REACT_APP_SHORT_NAME;
    const disqusConfig = {
      url: "http://whenwillmbozkayaback.com",
      identifier: "When will mbozkaya back",
      title: "Leave a comment"
    }
    return(
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    )
}

export default Comment;