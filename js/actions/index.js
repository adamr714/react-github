export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const addRepository = repository => ({
    type: ADD_REPOSITORY,
    repository: repository
});

export const RATE_REPOSITORY = 'RATE_REPOSITORY';
export const rateRepository = (repository, rating) => ({
    type: RATE_REPOSITORY,
    repository: repository,
    rating: rating
});

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => ({
    type: FETCH_DESCRIPTION_SUCCESS,
    repository,
    description
});

export const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (repository, error) => ({
    type: FETCH_DESCRIPTION_ERROR,
    repository,
    error
});

export const fetchDescription = repository => dispatch => {
    debugger;
    const url = `https://api.github.com/repos/${repository}`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        return dispatch(fetchDescriptionSuccess(repository, data.description))
    })
    .catch(error => {
        return dispatch(fetchDescriptionError(repository, error))
    });
};


