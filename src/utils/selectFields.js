export const selectFields = ({id, by, url, time, title, score, descendants, kids} = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
    descendants,
    kids
})

export const selectUserField = ({id, created, karma, submitted} = {}) => ({
    id,
    created,
    karma,
    submitted
}) 