
function useUserList() {
    return useRest(`http://localhost:8080/api/users`, {}, []);
}