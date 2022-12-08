import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getStory, baseUrl } from '../services/hackerNewsApi'
import { StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";
import { User } from "./User";

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    
    var date = new Date(story.time * 1000);
    var formattedTime = date.toString().slice(0, 25);

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <StoryWrapper>
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
                <span>
                    <StoryMetaElement color="#000">Score:</StoryMetaElement> {story.score}
                </span>
                <span>
                    <StoryMetaElement color="#000">By:</StoryMetaElement>
                    <Link to={`/user/${story.by}.json`}>{story.by}</Link>
                </span>
                <span>
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement>{formattedTime}
                </span>
                <span>
                    <StoryMetaElement color="#000">Comments:</StoryMetaElement> 
                    {story.descendants !== 0 ? 
                        <Link to={`/userComments/${storyId}`}>{story.descendants}</Link> : 0
                    }
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;
}