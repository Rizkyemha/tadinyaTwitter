/* eslint-disable no-dupe-keys */

import HeadThread from "./HeadThread"
import PropTypes from "prop-types"
import { BodyComment } from "./BodyThread"

function ThreadComment({comment}) {
    return (
        <div className="thread">
        <HeadThread user={comment} />
        <BodyComment title={comment.title} />
    </div>
    )
}

ThreadComment.propTypes = {
    comment: PropTypes.object,
    comment: {
        title: PropTypes.string.isRequired
    }
}

export default ThreadComment