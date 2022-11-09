const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Explore the world`;
    },[title])
}
export default useTitle;