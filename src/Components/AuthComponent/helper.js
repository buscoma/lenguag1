export const getJwt = () => {
    return 'Bearer ' + localStorage.getItem('token');
};

export const getJwtRefresh = () => {
    return 'Bearer ' + localStorage.getItem('refresh');
};