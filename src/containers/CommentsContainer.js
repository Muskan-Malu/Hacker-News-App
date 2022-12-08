import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../components/Comments";
import { getStory } from "../services/hackerNewsApi";

export const CommentsContainer = () => {
    const [commentIds, setCommentIds] = useState([]);
    const param = useParams();
    
    useEffect(() => {
        getStory(param.storyId).then(data => setCommentIds(data.kids));
    })

    return (
        <>
            {commentIds.map(commentId =>
                <Comments key={commentId} commentId={commentId} />)}
        </>
    )
}