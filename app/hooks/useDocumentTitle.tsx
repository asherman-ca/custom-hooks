import { useEffect } from "react";

const useDocumentTitle = (string) => {
  useEffect(() => {
    document.title = string;
  }, [string]);
};

export default useDocumentTitle;
