import React from 'react';
import Disqus from 'disqus-react';

const Comment = ()=>{

    const disqusShortname = "when-will-mbozkaya-back"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "home page",
      title: "Title of Your Article"
    }
    return(
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    )
}

export default Comment;