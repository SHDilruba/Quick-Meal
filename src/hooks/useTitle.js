import { useEffect } from "react"

const useTitle = title => {
   useEffect(() => {
         document.title = `${title} - Quick Meal`;
   }, [title])
};

export default useTitle;