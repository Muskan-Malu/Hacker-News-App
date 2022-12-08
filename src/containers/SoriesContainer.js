import React, { useEffect, useState } from "react";
import { getStoryIds, newStoriesUrl } from "../services/hackerNewsApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  PageTitle,
  StoriesContainerWrapper,
  StoryHeader,
  NewsContainer,
} from "../styles/ContainerStyles";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState(Array.from({ length: 20 }));
  const param = useParams();

  const fetchData = () => {
    setTimeout(() => {
        if(storyIds.length >= 500) {
            setStoryIds(storyIds.concat(Array.from({ length: 20 })))
        }
    }, 500);
  }

  useEffect(() => {
    getStoryIds(param.story).then((data) => setStoryIds(data));
  }, []);
  console.log(storyIds.length, "length");

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <NewsContainer>
          <StoryHeader>
            <li>
              <a href="/top">Hacker News</a>
            </li>
            <li>
              <a href="/new">New Stories</a>
            </li>
          </StoryHeader>
          {/* <PageTitle>
                        <a href={newStoriesUrl}>Hacker News Stories</a>
                    </PageTitle> */}
          <InfiniteScroll
            dataLength={storyIds.length}
            next={fetchData}
            hasMore={storyIds.length !== 500}
            loader={<h4>Loading...</h4>}
            
          >
            {storyIds.map((storyId, index) => (
              <Story key={storyId} storyId={storyId} />
            ))}
          </InfiniteScroll>
        </NewsContainer>
      </StoriesContainerWrapper>
    </>
  );
};
