import { getArticles } from "@/api/Article/article";
import RevistaPost from "@/widgets/Resvista/ResvistaPost";
import { useEffect, useState } from "react";

export default function RevistaCientifica(){
    const [articles, serArticles] = useState([]);

    useEffect(() => {
      getArticles().then((res) => {serArticles(res)}).catch((err) => alert(err));
    }, [])
    return(<div className="w-screen h-screen bg-gray-900">
        <div className="pt-20 px-20 flex flex-wrap items-center">
          {articles.map((revista) => 
            <RevistaPost revista={revista} />)}
          </div>
    </div>)
}