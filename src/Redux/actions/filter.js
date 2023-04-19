const SET_FILTER = 'SET_FILTER';
const SET_QUERY = 'SET_QUERY';
const SET_SORT = 'SET_SORT';

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSearchQuery = value => ({
    type: SET_QUERY,
    payload: value,
});

export const setSort = sort => ({
    type: SET_SORT,
    payload: sort,
}); 