import React, { useEffect, useState } from "react";
import { getComment } from "../services/hackerNewsApi";
import { Button } from "react-bootstrap";
import { CommentContainerWrapper, GlobalStyle, CommentContainer, CommentCard, CommentCardHeader } from "../styles/CommentStyles";
import { StoryHeader } from "../styles/ContainerStyles";

export const Comments = ({commentId}) => {
    const [viewSubComments, setViewSubComments] = useState(false);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComment(commentId).then(data => setComment(data))
    }, []);

    const subComments = () => {
        setViewSubComments(viewSubComments === false ? true : false);
        console.log(viewSubComments);
    }

    return (
        <>
        <GlobalStyle />
            <CommentContainerWrapper>
                <CommentCard>
                    <CommentCardHeader>
                        <div>By: {comment.by}</div>
                        <div>Posted: {comment.time}</div>
                    </CommentCardHeader>
                    <p>
                        Comment: {comment.text}
                        <p>
                        {comment.kids && 
                            <Button onClick={subComments}>See more..</Button>
                        }
                        </p>

                        <div>
                            {viewSubComments === true ? 
                                <p>
                                    {comment.kids.map(commentId =>
                                    <Comments key={commentId} commentId={commentId} />)}
                                </p> :
                                ""
                            }
                        </div>
                    </p>
                </CommentCard>
            </CommentContainerWrapper>
        </>
    );
}