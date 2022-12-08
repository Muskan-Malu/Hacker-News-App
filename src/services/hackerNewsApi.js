import axios from "axios";
import { selectFields, selectUserField  } from "../utils/selectFields";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json?print=pretty`;
export const topStoriesUrl = `${baseUrl}topstories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios
    .get(`${storyUrl + storyId}.json?print=pretty`)
    .then(({data}) => data && selectFields(data));

    return result;
}

export const getStoryIds = async (story) => {
    const result = await axios.get(story === "top" ? topStoriesUrl : newStoriesUrl).then(({data}) => data);

    return result;
}

export const getUser = async (id) => {
    const result = await axios.get(`${baseUrl}user/${id}.json?print=pretty`)
    .then(({data}) => data && selectUserField(data));

    return result;
}

export const getComment = async (commentId) => {
    const result = await axios
    .get(`${storyUrl + commentId}.json?print=pretty`)
    .then(({data}) => data)

    return result;
}