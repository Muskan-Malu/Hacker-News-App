import React, { useEffect, useState } from "react";
import { getUser } from '../services/hackerNewsApi';
import { useParams } from "react-router-dom";
import { Story } from './Story';
import { GlobalStyle, PageTitle, StoriesContainerWrapper, StoryHeader, NewsContainer } from "../styles/ContainerStyles";


export const UserSubmission = () => {
    const[storyIds, setStoryIds] = useState([]);
    const param = useParams();

    useEffect(() => {
        getUser(param.userId).then(data => setStoryIds(data.submitted));
    }, [])

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper>
                <NewsContainer>
                    <StoryHeader>
                        <li><a href="/top">Hacker News</a></li>
                        <li><a href="/new">New Stories</a></li>
                    </StoryHeader>
                    {/* <PageTitle>
                        <a href={newStoriesUrl}>Hacker News Stories</a>
                    </PageTitle> */}
                    {storyIds.map(storyId => (
                        <Story key={storyId} storyId={storyId} />
                    ))}
                </NewsContainer>
            </StoriesContainerWrapper>
        </>
    );


};