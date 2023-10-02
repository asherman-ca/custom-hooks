import { useEffect } from "react";

const useDocumentTitle = (string: string) => {
  useEffect(() => {
    document.title = string;
  }, [string]);
};

export default useDocumentTitle;
